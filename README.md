### 获取aws_cft_ip
- aws_cft_ip.txt aws ipv4 IP列表
- aws_not_cn_ip.txt 剔除了 cn IP段

#### 测速地址
https://github.com/XIU2/CloudflareSpeedTest/discussions/304#discussioncomment-5161302


> 375M
20 Years of Hubble Science: Exoplanets
https://images-assets.nasa.gov/video/GSFC_20100722_Hubble_m10619_Exoplanets/GSFC_20100722_Hubble_m10619_Exoplanets~orig.mp4    
> 463M
NASA/SpaceX Crew-2 Launch ISOs - 4K
https://images-assets.nasa.gov/video/KSC-20210423-MH-AJW01-0001-SpaceX_Crew_2_Isolated_Launch_Views_Broll_String_4K-3273128/KSC-20210423-MH-AJW01-0001-SpaceX_Crew_2_Isolated_Launch_Views_Broll_String_4K-3273128~orig.mp4  
> 3.08G
First 8K Video from Space
https://images-assets.nasa.gov/video/First-8K-Video-from-Space/First-8K-Video-from-Space~orig.mp4


```bash
# -dd 参数不下载，只测试延迟
./CloudflareST -t 1 -url https://images-assets.nasa.gov/video/GSFC_20100722_Hubble_m10619_Exoplanets/GSFC_20100722_Hubble_m10619_Exoplanets~orig.mp4 -f aws_not_cn_ip.txt -dd
```
