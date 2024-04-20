const fs = require('fs');

// 获取 AWS CloudFront 的 IP 地址段列表
async function getCloudFrontIPRanges() {
  try {
    const response = await fetch(
      'https://ip-ranges.amazonaws.com/ip-ranges.json'
    );
    const res = await response.json();
    const ipRanges = res.prefixes
      .filter((entry) => entry.service === 'CLOUDFRONT')
      .filter((entry) => entry.ip_prefix)
      .map((entry) => entry.ip_prefix);
    return ipRanges;
  } catch (error) {
    console.log('error', error);
  }
}

async function checkIp(ipList) {
  try {
    const noCnIps = [];
    for (const ips of ipList) {
      firstIp = ips.split('/')[0];
      const response = await fetch(
        `https://ipinfo.io/${firstIp}/json`
      );
      const res = await response.json();
      if (res.country !== 'CN') {
        noCnIps.push(ips);
      }
    }
    return noCnIps;
  } catch (error) {
    console.log('error', error);
  }
}

async function main() {
  try {
    const cloudFrontIPRanges = await getCloudFrontIPRanges();
    fs.writeFileSync('aws_cft_ip.txt', cloudFrontIPRanges.join('\n'));
    console.log('aws ipv4 段已保存到文件 aws_cft_ip.txt');

    const ipRanges = await checkIp(cloudFrontIPRanges);
    fs.writeFileSync('aws_not_cn_ip.txt', ipRanges.join('\n'));
    console.log('no cn ipv4 段已保存到文件 aws_not_cn_ip.txt');
  } catch (error) {
    console.error('出现错误:', error);
  }
}

main();
