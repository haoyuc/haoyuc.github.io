---
layout: about 
---

<br/>




<!--# Bio

I received a Bachelor degree in Computer Science and Engineering at The Chinese University of Hong Kong, Shenzhen (CUHKSZ) in 2021.    
I am a Ph.D. student at the Hong Kong University of Science and Technology (Guangzhou) advised by [Prof. Lei Zhu](https://sites.google.com/site/indexlzhu/home).   
Mainly intrest in computer vision, especially in **Low-level Vision**.

[Google Scholar](https://scholar.google.com/citations?&user=KWbcBucAAAAJ) &nbsp;&nbsp;&nbsp;
[GitHub](https://github.com/haoyuc) &nbsp;&nbsp;&nbsp;
[Email](mailto:hchen794@connect.hkust-gz.edu.cn)

-->



<style>
  a:hover {
    text-decoration: underline;
  }
 main,
 footer,
 .nav-container {
   display: block;
   margin: 0 auto;
   max-width: 800px;
   width: 80%;
 }  
</style>


<style>
  @keyframes blink {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
      transform: scale(1.1);
    }
    100% {
      opacity: 1;
    }
  }

  a:hover {
    animation: blink 1s forwards;
    /* color: red; */
    /* text-shadow: 0 0 4px yellow; */
  }
</style>


<div style="display: flex; padding-top:20px; padding-bottom:5px; flex-wrap: wrap;">


  <!-- Left Column -->
  <div style="flex: 1.35; width: 25%; padding: 0px; box-sizing: border-box; min-width:150px; padding-bottom:30px;" class="left-column">
    <img src="../assets/img/IMG_6589.JPG" alt="Left Image" style="max-width: 100%; height: auto; margin-bottom: 30px; box-shadow:1px 1px 5px 0px rgba(0,0,0,0.5);">
    <!-- <p style="text-align:left;"> -->
      <!-- <h1 style="margin-top:2px!important;">
        <name>Haoyu Chen</name>
      </h1>
    <p style="color: rgb(0, 102, 153); margin-top: 0px;">PhD student @ HKUST(GZ)</p> -->


  <div class="media">
    <a name="fsaf" class="pull-left"  style="padding-right:10px;">
      <img class="media-object" src="../assets/img/email.svg" width="20px" height="20px" style="margin-bottom:10px;">
    </a>
    <div class="media-body">
      <p class="media-heading"  style="color: rgb(118, 130, 150); font-size: 0.9em;">
        <strong style="color: rgb(90, 100, 120);">
          <a href="mailto:hchen794@connect.hkust-gz.edu.cn" style="color: rgb(90, 100, 120);" onmouseover="this.style.color='#006699';this.style.transition='color 0.3s ease'" onmouseout="this.style.color='#5A6478';">E-mail</a>
      </strong>
        <!-- @hchen794 -->
        <!-- @connect.hkust-gz.edu.cn -->
      </p>
    </div>
  </div>

  <div class="media">
    <a name="fsaf" class="pull-left" style="padding-right:10px;">
      <img class="media-object" src="../assets/img/google_scholar.png" width="20px" height="20px" style="margin-bottom:10px;" />
    </a>
    <div class="media-body">
      <p class="media-heading" style="color: rgb(118, 130, 150); font-size: 0.9em;">
        <strong style="color: rgb(90, 100, 120);">
          <a href="https://scholar.google.com/citations?user=KWbcBucAAAAJ" style="color: rgb(90, 100, 120);" onmouseover="this.style.color='#006699';this.style.transition='color 0.3s ease'" onmouseout="this.style.color='#5A6478';">Scholar</a>
      </strong>
        <!-- @Haoyu Chen -->
        <!-- @connect.hkust-gz.edu.cn -->
      </p>
    </div>
  </div>

  <div class="media">
    <a name="fsaf" class="pull-left"  style="padding-right:10px;">
      <img class="media-object" src="../assets/img/github.svg" width="20px" height="20px" style="margin-bottom:10px;">
    </a>
    <div class="media-body">
      <p class="media-heading"  style="color: rgb(118, 130, 150); font-size: 0.9em;">
        <strong style="color: rgb(90, 100, 120);">
          Github
      </strong>
        <a href="https://github.com/haoyuc" style="color: rgb(90, 100, 120);" onmouseover="this.style.color='#006699';this.style.transition='color 0.3s ease'" onmouseout="this.style.color='#5A6478';">@haoyuc</a>
      </p>
    </div>
  </div>

  <div class="media">
  <a name="fsaf" class="pull-left"  style="padding-right:10px;">
    <img class="media-object" src="../assets/img/wechat.svg" width="20px" height="20px">
  </a>
  <div class="media-body">
    <p class="media-heading"  style="color: rgb(118, 130, 150); font-size: 0.9em;">
      <strong style="color: rgb(90, 100, 120);">
        Wechat
    </strong>
    <span onmouseover="showText('Feel free to contact me.')" onmouseout="hideText()">@haoyuc98</span>
    </p>
  </div>
</div>

  <!-- <style>
    /* 添加样式以使 tooltip 更美观 */
    span.tooltip {
      position: relative;
      cursor: pointer;
    }

    span.tooltip::after {
      content: attr(data-tooltip);
      position: absolute;
      background-color: #fff;
      color: #000;
      padding: 5px;
      border-radius: 5px;
      bottom: 125%;
      left: 50%;
      transform: translateX(-50%);
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.3s ease, visibility 0.3s ease;
    }

    span.tooltip:hover::after {
      opacity: 1;
      visibility: visible;
      writing-mode: horizontal-tb;

    }
  </style>


  <p>悬停在 <span class="tooltip" data-tooltip="Feel free to content me.">这里</span> 显示新的文字。</p> -->


<!-- <span onmouseover="showText('Feel free to content me.')" onmouseout="hideText()">悬停在这里</span> -->

<div id="tooltip" style="display: none; position: absolute; background-color: #fff; border: 1px solid #ccc; padding: 5px; box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2); border-radius: 8px; transition: opacity 0.s;"></div>

<script>
  function showText(text) {
    var tooltip = document.getElementById('tooltip');
    tooltip.innerHTML = text;
    tooltip.style.display = 'block';
  }

  function hideText() {
    var tooltip = document.getElementById('tooltip');
    tooltip.style.display = 'none';
  }
</script>


  </div>


  <!-- Right Column -->
  <div style="flex: 3; width: 70%; padding: 20px; box-sizing: border-box; margin-left: auto; padding-left:50px; padding-top:0px;" class="right-column">
    <h1 style="margin-top:2px!important;">
        <name>Haoyu Chen</name>
    </h1>
    <p style="color: #0070c9; margin-top: 0px;">PhD student @ HKUST(GZ)</p>
    <p style="margin-bottom: 25px;"></p>
    <p style="margin: 0;">I received a Bachelor degree in Computer Science and Engineering at The Chinese University of Hong Kong, Shenzhen (CUHKSZ) in 2021. </p>
    <p>
        I am a Ph.D. student at the Hong Kong University of Science and Technology (Guangzhou) advised by <a href="https://sites.google.com/site/indexlzhu/home?authuser=0">Prof. Lei Zhu</a> and <a href="https://scholar.google.com/citations?user=XhyKVFMAAAAJ&hl=en">Prof. Ping Tan</a>.  
    </p>
    <p>
        Mainly intrest in computer vision, especially in Low-level Vision, Image Processing, Multi-Modal Models and Generative Models. 
    </p>
        <p style="margin-bottom:0px;">
        <!-- <a href="mailto:hchen794@connect.hkust-gz.edu.cn"> Email </a> &nbsp;/&nbsp; -->
        <!-- <a href="https://scholar.google.com/citations?&user=KWbcBucAAAAJ"> Google Scholar </a> &nbsp;/&nbsp; -->
        <!-- <a href="https://github.com/haoyuc"> GitHub </a>  -->
  </p>  
  </div>



</div>






<hr style="border-top: 1px solid #e3e3e3; margin-top: -5px ">

# News

<!-- - **2023-07**: Three papers to appear in ACM MM 2023.
- **2023-07**: One first author paper to appear in ICCV 2023.
- **2023-04**: One paper to appear in ICML 2023.
- **2023-02**: One first author paper to appear in CVPR 2023.  
- **2022-09**: I am now a Ph.D. student at HKUSTGZ. -->


<ul>
  <li><strong style="color: rgb(90, 100, 120);">2025-02</strong>: Two papers to appear in CVPR 2025.</li>
  <li><strong style="color: rgb(90, 100, 120);">2024-09</strong>: Two papers to appear in NeurIPS 2024.</li>
  <li><strong style="color: rgb(90, 100, 120);">2024-07</strong>: One paper to appear in ECCV 2024.</li>
  <li><strong style="color: rgb(90, 100, 120);">2024-02</strong>: Two papers to appear in CVPR 2024.</li>
  <li><strong style="color: rgb(90, 100, 120);">2023-07</strong>: Three papers to appear in ACM MM 2023.</li>
  <li><strong style="color: rgb(90, 100, 120);">2023-07</strong>: One first author paper to appear in ICCV 2023.</li>
  <li><strong style="color: rgb(90, 100, 120);">2023-04</strong>: One paper to appear in ICML 2023.</li>
  <li><strong style="color: rgb(90, 100, 120);">2023-02</strong>: One first author paper to appear in CVPR 2023.</li>
  <li><strong style="color: rgb(90, 100, 120);">2022-09</strong>: I am now a Ph.D. student at HKUSTGZ.</li>
</ul>


# Education

<p>
</p>
<div class="media">
	<a name="fsaf" class="pull-left">
		<img class="media-object" src="../assets/img/hkust.png" width="50px" height="48px">
	</a>
	<div class="media-body">
		<p class="media-heading">
			<strong  style="font-size: 15px;">
				 The Hong Kong University of Science and Technology (Guangzhou)
		 </strong><br>
     <span   style="font-size: 14px;">
			Ph.D. student, 2022 ~ present.
     </span>
		</p>
	</div>
</div>



<div class="media">
	<a name="fsaf" class="pull-left">
		<img class="media-object" src="../assets/img/cuhksz.png" width="50px" height="48px">
	</a>
	<div class="media-body">
		<p class="media-heading">
			<strong style="font-size: 15px;">
				 The Chinese University of Hong Kong, Shenzhen
		 </strong><br>
     <span   style="font-size: 14px;">
			B.Eng., Major in Computer Science and Engineering, Sep 2017 - Jul 2021.
     </span>
		</p>
	</div>
</div>






# Publications

<p style="padding-top: 5px;"> </p>

<span style="font-weight:600;font-size:17px;"> 
&nbsp;&nbsp;  Generative Models and AIGC
</span>


<table style="width:100%;border:0px;border-spacing:0px;border-collapse:separate;margin-right:auto;margin-left:auto;"><tbody>




<!-- =================================================================================== -->
  <tr>
    <td style="margin:5px;padding:5px;width:30%;max-width:30%" align="center" class="image-wrapper">
      <img style="margin:5px;padding-right:20px;width:100%;max-width:100%;" src="../assets/img/POSTA.jpg" alt="">
    </td>
    <td width="75%" valign="center" class="text-wrapper"> 
      <div style="color: rgb(118, 130, 150); font-size: 0.9em; line-height: 1.3;">CVPR, 2025</div>
      <div  class="paper-title">
        POSTA: A Go-to Framework for Customized Artistic Poster Generation
      </div>
      <div class="author">
      <span class="author-me">Haoyu Chen*</span>, Xiaojie Xu*, Wenbo Li, Jingjing Ren, Tian Ye, Songhua Liu, Ying-Cong Chen, Lei Zhu, Xinchao Wang
      </div>
      <!-- <em>ACM Multimedia <strong>(ACM MM)</strong></em>, 2023 -->
     <!-- <br> -->
      <a href="https://haoyuchen.com/POSTA">[Website]</a> 
      <a href="https://arxiv.org/abs/2503.14908">[arxiv]</a> 
      <!-- <a href="https://github.com/catcathh/UltraPixel">[Code]</a> -->
      <!-- <a href="https://paperswithcode.com/dataset/pipal-perceptual-iqa-dataset">[Benchmark]</a>  -->
      <!-- <a href="https://www.jasongt.com/research-full">[CVPR 2022 NTIRE Challenge]</a>  -->
      <!-- <a href="https://www.youtube.com/watch?v=315Umwgpa6s">[Youtube]</a>  -->
      <!-- <a href="https://www.bilibili.com/video/BV1cr4y1P7s4">[Bilibili]</a>  -->
      <br>
      <!-- <p> 
          We propose a novel machine learning problem – the SRP problem as reconstructing high-quality data from unsatisfactory sensor data in industrial systems. 
      </p> -->
    </td>
</tr>
<!-- =================================================================================== -->








<!-- =================================================================================== -->
  <tr>
    <td style="margin:5px;padding:5px;width:30%;max-width:30%" align="center" class="image-wrapper">
      <img style="margin:5px;padding-right:20px;width:100%;max-width:100%;" src="../assets/img/UltraPixel.jpg" alt="">
    </td>
    <td width="75%" valign="center" class="text-wrapper"> 
      <div style="color: rgb(118, 130, 150); font-size: 0.9em; line-height: 1.3;">NeurIPS, 2024</div>
      <div  class="paper-title">
        UltraPixel: Advancing Ultra-High-Resolution Image Synthesis to New Peaks
      </div>
      <div class="author">
      Jingjing Ren*, Wenbo Li*, <span class="author-me">Haoyu Chen</span>, Renjing Pei, Bin Shao, Yong Guo, Long Peng, Lei Zhu
      </div>
      <!-- <em>ACM Multimedia <strong>(ACM MM)</strong></em>, 2023 -->
     <!-- <br> -->
      <a href="https://jingjingrenabc.github.io/ultrapixel/">[Website]</a> 
      <a href="https://arxiv.org/abs/2407.02158">[arxiv]</a> 
      <a href="https://github.com/catcathh/UltraPixel">[Code]</a>
      <a href="https://huggingface.co/spaces/roubaofeipi/UltraPixel-demo">[Demo]</a> 
      <!-- <a href="https://www.jasongt.com/research-full">[CVPR 2022 NTIRE Challenge]</a>  -->
      <!-- <a href="https://www.youtube.com/watch?v=315Umwgpa6s">[Youtube]</a>  -->
      <!-- <a href="https://www.bilibili.com/video/BV1cr4y1P7s4">[Bilibili]</a>  -->
      <br>
      <!-- <p> 
          We propose a novel machine learning problem – the SRP problem as reconstructing high-quality data from unsatisfactory sensor data in industrial systems. 
      </p> -->
    </td>
</tr>
<!-- =================================================================================== -->



<!-- =================================================================================== -->
  <tr>
    <td style="margin:5px;padding:5px;width:30%;max-width:30%" align="center" class="image-wrapper">
      <img style="margin:5px;padding-right:20px;width:100%;max-width:100%;" src="../assets/img/face1.jpg" alt="">
    </td>
    <td width="75%" valign="center" class="text-wrapper"> 
      <div style="color: rgb(118, 130, 150); font-size: 0.9em; line-height: 1.3;">arXiv, 2023</div>
      <div  class="paper-title">
        Towards Flexible, Scalable, and Adaptive Multi-Modal Conditioned Face Synthesis
      </div>
      <div class="author">
      Jingjing Ren, Cheng Xu, <span class="author-me">Haoyu Chen</span>, Xinran Qin, Chongyi Li, Lei Zhu
      </div>
      <div  style="font-size: 12px;!important">
      <!-- <em>ACM Multimedia <strong>(ACM MM)</strong></em>, 2023 -->
      <a href="https://jingjingrenabc.github.io/multimodal-face-synthesis/">[Website]</a> 
      <a href="https://arxiv.org/abs/2312.16274">[arxiv]</a> 
      <!-- <a href="">[Code]</a> -->
      <!-- <a href="https://paperswithcode.com/dataset/pipal-perceptual-iqa-dataset">[Benchmark]</a>  -->
      <!-- <a href="https://www.jasongt.com/research-full">[CVPR 2022 NTIRE Challenge]</a>  -->
      <!-- <a href="https://www.youtube.com/watch?v=315Umwgpa6s">[Youtube]</a>  -->
      <!-- <a href="https://www.bilibili.com/video/BV1cr4y1P7s4">[Bilibili]</a>  -->
      </div>
      <!-- <br> -->
      <!-- <p> 
          We propose a novel machine learning problem – the SRP problem as reconstructing high-quality data from unsatisfactory sensor data in industrial systems. 
      </p> -->
    </td>
</tr>
<!-- =================================================================================== -->




    </tbody>
</table>
<hr style="border-top: 1px solid #f0f0f0; margin-top: 25px; margin-bottom:25px;">








<span style="font-weight:600;font-size:17px;"> 
&nbsp;&nbsp;  Multi-Modal Models and Agents
</span>


<table style="width:100%;border:0px;border-spacing:0px;border-collapse:separate;margin-right:auto;margin-left:auto;"><tbody>





<!-- =================================================================================== -->
  <tr>
    <td style="margin:5px;padding:5px;width:30%;max-width:30%" align="center" class="image-wrapper">
      <img style="margin:5px;padding-right:20px;width:100%;max-width:100%;" src="../assets/img/restoreagent.jpg" alt="">
    </td>
    <td width="75%" valign="center" class="text-wrapper"> 
      <div style="color: rgb(118, 130, 150); font-size: 0.9em; line-height: 1.3;">NeurIPS, 2024</div>
      <div  class="paper-title">
        RestoreAgent: Autonomous Image Restoration Agent via Multimodal Large Language Models
      </div>
      <div class="author">
      <span class="author-me">Haoyu Chen</span>, Wenbo Li, Jinjin Gu, Jingjing Ren, Sixiang Chen, Tian Ye, Renjing Pei, Kaiwen Zhou, Fenglong Song, Lei Zhu
      </div>
      <!-- <em>ACM Multimedia <strong>(ACM MM)</strong></em>, 2023 -->
     <!-- <br> -->
      <a href="https://haoyuchen.com/RestoreAgent">[Website]</a> 
      <a href="https://arxiv.org/abs/2407.18035">[arxiv]</a> 
      <!-- <a href="https://github.com/catcathh/UltraPixel">[Code]</a> -->
      <!-- <a href="https://paperswithcode.com/dataset/pipal-perceptual-iqa-dataset">[Benchmark]</a>  -->
      <!-- <a href="https://www.jasongt.com/research-full">[CVPR 2022 NTIRE Challenge]</a>  -->
      <!-- <a href="https://www.youtube.com/watch?v=315Umwgpa6s">[Youtube]</a>  -->
      <!-- <a href="https://www.bilibili.com/video/BV1cr4y1P7s4">[Bilibili]</a>  -->
      <br>
      <!-- <p> 
          We propose a novel machine learning problem – the SRP problem as reconstructing high-quality data from unsatisfactory sensor data in industrial systems. 
      </p> -->
    </td>
</tr>
<!-- =================================================================================== -->






<!-- =================================================================================== -->
  <tr>
    <td style="margin:5px;padding:5px;width:30%;max-width:30%" align="center" class="image-wrapper">
      <img style="margin:5px;padding-right:20px;width:100%;max-width:100%;" src="../assets/img/JarvisIR.jpg" alt="">
    </td>
    <td width="75%" valign="center" class="text-wrapper"> 
      <div style="color: rgb(118, 130, 150); font-size: 0.9em; line-height: 1.3;">CVPR, 2025</div>
      <div  class="paper-title">
        JarvisIR: Elevating Autonomous Driving Perception with Intelligent Image Restoration
      </div>
      <div class="author">
      Yunlong Lin*, Zixu Lin*, <span class="author-me">Haoyu Chen*</span>, Panwang Pan*,  Chenxin Li, Sixiang Chen, Kairun Wen, Yeying Jin, Wenbo Li, Xinghao Ding
      </div>
      <!-- <em>ACM Multimedia <strong>(ACM MM)</strong></em>, 2023 -->
     <!-- <br> -->
      <!-- <a href="https://haoyuchen.com/RestoreAgent">[Website]</a>  -->
      <!-- <a href="https://arxiv.org/abs/2407.18035">[arxiv]</a>  -->
      <!-- <a href="https://github.com/catcathh/UltraPixel">[Code]</a> -->
      <!-- <a href="https://paperswithcode.com/dataset/pipal-perceptual-iqa-dataset">[Benchmark]</a>  -->
      <!-- <a href="https://www.jasongt.com/research-full">[CVPR 2022 NTIRE Challenge]</a>  -->
      <!-- <a href="https://www.youtube.com/watch?v=315Umwgpa6s">[Youtube]</a>  -->
      <!-- <a href="https://www.bilibili.com/video/BV1cr4y1P7s4">[Bilibili]</a>  -->
      <br>
      <!-- <p> 
          We propose a novel machine learning problem – the SRP problem as reconstructing high-quality data from unsatisfactory sensor data in industrial systems. 
      </p> -->
    </td>
</tr>
<!-- =================================================================================== -->






    </tbody>
</table>
<hr style="border-top: 1px solid #f0f0f0; margin-top: 25px; margin-bottom:25px;">






<span style="font-weight:600;font-size:17px;"> 
&nbsp;&nbsp; Generalizable Image Restoration
</span>

<table style="width:100%;border:0px;border-spacing:0px;border-collapse:separate;margin-right:auto;margin-left:auto;"><tbody>



<!-- =================================================================================== -->
  <tr>
    <td style="margin:5px;padding:5px;width:30%;max-width:30%" align="center" class="image-wrapper">
      <img style="margin:5px;padding-right:20px;width:100%;max-width:100%;" src="../assets/img/cvpr24.jpg" alt="">
    </td>
    <td width="75%" valign="center" class="text-wrapper"> 
      <div style="color: rgb(118, 130, 150); font-size: 0.9em; line-height: 1.3;">CVPR, 2024</div>
      <div  class="paper-title">
        Low-Res Leads the Way: Improving Generalization for Super-Resolution by Self-Supervised Learning
      </div>
      <div class="author">
      <span class="author-me">Haoyu Chen</span>, Wenbo Li, Jinjin Gu, Jingjing Ren, Haoze Sun, Xueyi Zou, Youliang Yan, Zhensong Zhang, Lei Zhu
      </div>
      <!-- <em>ACM Multimedia <strong>(ACM MM)</strong></em>, 2023 -->
     <!-- <br> -->
      <a href="https://haoyuchen.com/LWay">[Website]</a> 
      <a href="https://arxiv.org/abs/2403.02601">[arxiv]</a> 
      <!-- <a href="">[Code]</a> -->
      <!-- <a href="https://paperswithcode.com/dataset/pipal-perceptual-iqa-dataset">[Benchmark]</a>  -->
      <!-- <a href="https://www.jasongt.com/research-full">[CVPR 2022 NTIRE Challenge]</a>  -->
      <!-- <a href="https://www.youtube.com/watch?v=315Umwgpa6s">[Youtube]</a>  -->
      <!-- <a href="https://www.bilibili.com/video/BV1cr4y1P7s4">[Bilibili]</a>  -->
      <br>
      <!-- <p> 
          We propose a novel machine learning problem – the SRP problem as reconstructing high-quality data from unsatisfactory sensor data in industrial systems. 
      </p> -->
    </td>
</tr>
<!-- =================================================================================== -->





  <!-- =================================================================================== -->
  <tr>
    <td style="margin:5px;padding:5px;width:30%;max-width:30%" align="center" class="image-wrapper">
      <img style="margin:5px;padding-right:20px;width:100%;max-width:100%;" src="../assets/img/mask.jpg" alt="dise">
    </td>
    <td width="75%" valign="center" class="text-wrapper"> 
      <div style="color: rgb(118, 130, 150); font-size: 0.9em; line-height: 1.3;">CVPR, 2023</div>
      <div  class="paper-title">
        Masked Image Training for Generalizable Deep Image Denoising
      </div>
      <div class="author">
      <span class="author-me">Haoyu Chen*</span>, Jinjin Gu*, Yihao Liu, Salma Abdel Magid, Chao Dong, Qiong Wang, Hanspeter Pfister, Lei Zhu
      </div>
      <!-- <em>IEEE Conference on Computer Vision and Pattern Recognition <strong>(CVPR)</strong></em>, 2023 -->
      <!-- <br> -->
      <!-- <a href="https://www.jasongt.com/projectpages/pipal.html">[Website]</a>  -->
      <a href="https://arxiv.org/abs/2303.13132">[arxiv]</a> 
      <a href="https://github.com/haoyuc/MaskedDenoising">[Code]</a>
      <!-- <a href="https://paperswithcode.com/dataset/pipal-perceptual-iqa-dataset">[Benchmark]</a>  -->
      <!-- <a href="https://www.jasongt.com/research-full">[CVPR 2022 NTIRE Challenge]</a>  -->
      <!-- <a href="https://www.youtube.com/watch?v=315Umwgpa6s">[Youtube]</a>  -->
      <!-- <a href="https://www.bilibili.com/video/BV1cr4y1P7s4">[Bilibili]</a>  -->
  <br>
      <!-- <p> 
          We propose a novel machine learning problem – the SRP problem as reconstructing high-quality data from unsatisfactory sensor data in industrial systems. 
      </p> -->
    </td>
</tr>
<!-- =================================================================================== -->



<!-- =================================================================================== -->
  <tr>
    <td style="margin:5px;padding:5px;width:30%;max-width:30%" align="center" class="image-wrapper">
      <img style="margin:5px;padding-right:20px;width:100%;max-width:100%;" src="../assets/img/coser.png" alt="">
    </td>
    <td width="75%" valign="center" class="text-wrapper"> 
      <div style="color: rgb(118, 130, 150); font-size: 0.9em; line-height: 1.3;">CVPR, 2024</div>
      <div  class="paper-title">
        CoSeR: Bridging Image and Language for Cognitive Super-Resolution
      </div>
      <div class="author">
      Haoze Sun, Wenbo Li, Jianzhuang Liu, <span class="author-me">Haoyu Chen</span>, Renjing Pei, Xueyi Zou, Youliang Yan, Yujiu Yang
      </div>
      <!-- <em>ACM Multimedia <strong>(ACM MM)</strong></em>, 2023 -->
     <!-- <br> -->
      <a href="https://coser-main.github.io/">[Website]</a> 
      <a href="https://arxiv.org/abs/2311.16512">[arxiv]</a> 
      <a href="https://github.com/TianheWu/CoSeR">[Code]</a>
      <!-- <a href="https://paperswithcode.com/dataset/pipal-perceptual-iqa-dataset">[Benchmark]</a>  -->
      <!-- <a href="https://www.jasongt.com/research-full">[CVPR 2022 NTIRE Challenge]</a>  -->
      <!-- <a href="https://www.youtube.com/watch?v=315Umwgpa6s">[Youtube]</a>  -->
      <!-- <a href="https://www.bilibili.com/video/BV1cr4y1P7s4">[Bilibili]</a>  -->
      <br>
      <!-- <p> 
          We propose a novel machine learning problem – the SRP problem as reconstructing high-quality data from unsatisfactory sensor data in industrial systems. 
      </p> -->
    </td>
</tr>
<!-- =================================================================================== -->




  <!-- =================================================================================== -->
  <tr>
    <td style="margin:5px;padding:5px;width:30%;max-width:30%" align="center" class="image-wrapper">
      <img style="margin:5px;padding-right:20px;width:100%;max-width:100%;" src="../assets/img/icml23.jpg" alt="">
    </td>
    <td width="75%" valign="center" class="text-wrapper"> 
      <div style="color: rgb(118, 130, 150); font-size: 0.9em; line-height: 1.3;">ICML, 2023</div>
      <div  class="paper-title">
        Crafting Training Degradation Distribution for the Accuracy-Generalization Trade-off in Real-World Super-Resolution
      </div>
      <div class="author">
      Ruofan Zhang, Jinjin Gu, <span class="author-me">Haoyu Chen</span>, Chao Dong, Yulun Zhang, Wenming Yang
      </div>
      <!-- <em>International Conference on Machine Learning <strong>(ICML)</strong></em>, 2023 -->
      <!-- <br> -->
      <!-- <a href="https://www.jasongt.com/projectpages/pipal.html">[Website]</a>  -->
      <a href="https://arxiv.org/abs/2305.18107">[arxiv]</a> 
      <a href="">[Code]</a>
      <!-- <a href="https://paperswithcode.com/dataset/pipal-perceptual-iqa-dataset">[Benchmark]</a>  -->
      <!-- <a href="https://www.jasongt.com/research-full">[CVPR 2022 NTIRE Challenge]</a>  -->
      <!-- <a href="https://www.youtube.com/watch?v=315Umwgpa6s">[Youtube]</a>  -->
      <!-- <a href="https://www.bilibili.com/video/BV1cr4y1P7s4">[Bilibili]</a>  -->
  <br>
      <!-- <p> 
          We propose a novel machine learning problem – the SRP problem as reconstructing high-quality data from unsatisfactory sensor data in industrial systems. 
      </p> -->
    </td>
</tr>
<!-- =================================================================================== -->




  




  <!-- =================================================================================== -->
  <tr>
    <td style="padding:5px;width:30%;max-width:30%" align="center" class="image-wrapper">
      <img style="margin:5px;padding-right:20px;width:100%;max-width:100%;" src="../assets/img/AAN.jpg" alt="dise">
    </td>
    <td width="75%" valign="center"  class="text-wrapper">
      <div style="color: rgb(118, 130, 150); font-size: 0.9em; line-height: 1.3;">arXiv, 2021</div>
      <div  class="paper-title">
        Attention in Attention Network for Image Super-Resolution
      </div>
      <div class="author">
      <span class="author-me">Haoyu Chen</span>, Jinjin Gu, Zhi Zhang
      </div>
      <!-- <em>arXiv</em>, 2021 -->
      <!-- <br> -->
      <!-- <a href="https://www.jasongt.com/projectpages/pipal.html">[Website]</a>  -->
      <a href="https://arxiv.org/abs/2104.09497">[arxiv]</a> 
      <a href="https://github.com/haoyuc/A2N">[Code]</a>
      <!-- <a href="https://paperswithcode.com/dataset/pipal-perceptual-iqa-dataset">[Benchmark]</a>  -->
      <!-- <a href="https://www.jasongt.com/research-full">[CVPR 2022 NTIRE Challenge]</a>  -->
      <!-- <a href="https://www.youtube.com/watch?v=315Umwgpa6s">[Youtube]</a>  -->
      <!-- <a href="https://www.bilibili.com/video/BV1cr4y1P7s4">[Bilibili]</a>  -->
  <br>
      <!-- <p> 
          We propose a novel machine learning problem – the SRP problem as reconstructing high-quality data from unsatisfactory sensor data in industrial systems. 
      </p> -->
    </td>
</tr>
<!-- =================================================================================== -->



  <!-- =================================================================================== -->
  <tr>
      <td style="margin:5px;padding:5px;width:30%;max-width:30%" align="center" class="image-wrapper">
        <img style="margin:5px;padding-right:20px;width:100%;max-width:100%;" src="../assets/img/PIPAL.jpg" alt="dise">
      </td>
      <td width="75%" valign="center" class="text-wrapper">
        <div style="color: rgb(118, 130, 150); font-size: 0.9em; line-height: 1.3;">ECCV, 2020</div>
        <div  class="paper-title">
          PIPAL: a Large-Scale Image Quality Assessment Dataset for Perceptual Image Restoration
        </div>
      <div class="author">
        Jinjin Gu, Haoming Cai, <span class="author-me">Haoyu Chen</span>, Xiaoxin Ye, Jimmy S.Ren, Chao Dong
      </div>
        <!-- <em>European Conference on Computer Vision  <strong>(ECCV)</strong></em>, 2020 -->
        <!-- <br> -->
        <a href="https://www.jasongt.com/projectpages/pipal.html">[Website]</a> 
        <a href="https://arxiv.org/abs/2007.12142">[arxiv]</a> 
        <a href="https://github.com/HaomingCai/PIPAL-Codebase">[Code]</a>
        <a href="https://paperswithcode.com/dataset/pipal-perceptual-iqa-dataset">[Benchmark]</a> 
        <a href="https://www.jasongt.com/research-full">[CVPR 2022 NTIRE Challenge]</a> 
        <a href="https://www.youtube.com/watch?v=315Umwgpa6s">[Youtube]</a> 
        <a href="https://www.bilibili.com/video/BV1cr4y1P7s4">[Bilibili]</a> 
    <br>
        <!-- <p> 
            We propose a novel machine learning problem – the SRP problem as reconstructing high-quality data from unsatisfactory sensor data in industrial systems. 
        </p> -->
      </td>
  </tr>
  <!-- =================================================================================== -->



    
    </tbody>
</table>
<hr style="border-top: 1px solid #f0f0f0; margin-top: 25px; margin-bottom:25px;">
<span style="font-weight:600;font-size:17px;"> 
&nbsp;&nbsp;  Adverse Weather Restoration
</span>
<table style="width:100%;border:0px;border-spacing:0px;border-collapse:separate;margin-right:auto;margin-left:auto;"><tbody>




  <!-- =================================================================================== -->
  <tr>
    <td style="margin:5px;padding:5px;width:30%;max-width:30%" align="center" class="image-wrapper">
      <img style="margin:5px;padding-right:20px;width:100%;max-width:100%;" src="../assets/img/desnow.gif" alt="">
    </td>
    <td width="75%" valign="center" class="text-wrapper"> 
      <div style="color: rgb(118, 130, 150); font-size: 0.9em; line-height: 1.3;">ICCV, 2023</div>
      <div  class="paper-title">
        Snow Removal in Video: A New Dataset and A Novel Method
      </div>
      <div class="author">
      <span class="author-me">Haoyu Chen</span>, Jingjing Ren, Jinjin Gu, Hongtao Wu, Xuequan Lu, Haoming Cai, Lei Zhu
      </div>
      <!-- <em>International Conference on Computer Vision <strong>(ICCV)</strong></em>, 2023 -->
      <!-- <br> -->
      <!-- <a href="https://www.jasongt.com/projectpages/pipal.html">[Website]</a>  -->
      <a href="https://openaccess.thecvf.com/content/ICCV2023/html/Chen_Snow_Removal_in_Video_A_New_Dataset_and_A_Novel_ICCV_2023_paper.html">[arxiv]</a> 
      <a href="https://github.com/haoyuc/VideoDesnowing">[Code]</a>
      <a href="https://haoyuchen.com/VideoDesnowing">[Dataset]</a>
      <!-- <a href="https://paperswithcode.com/dataset/pipal-perceptual-iqa-dataset">[Benchmark]</a>  -->
      <!-- <a href="https://www.jasongt.com/research-full">[CVPR 2022 NTIRE Challenge]</a>  -->
      <!-- <a href="https://www.youtube.com/watch?v=315Umwgpa6s">[Youtube]</a>  -->
      <!-- <a href="https://www.bilibili.com/video/BV1cr4y1P7s4">[Bilibili]</a>  -->
  <br>
      <!-- <p> 
          We propose a novel machine learning problem – the SRP problem as reconstructing high-quality data from unsatisfactory sensor data in industrial systems. 
      </p> -->
    </td>
</tr>
<!-- =================================================================================== -->




  <!-- =================================================================================== -->
  <tr>
    <td style="margin:5px;padding:5px;width:30%;max-width:30%" align="center" class="image-wrapper">
      <img style="margin:5px;padding-right:20px;width:100%;max-width:100%;" src="../assets/img/ijcv.jpg" alt="">
    </td>
    <td width="75%" valign="center" class="text-wrapper"> 
      <div style="color: rgb(118, 130, 150); font-size: 0.9em; line-height: 1.3;">IJCV, 2024</div>
      <div  class="paper-title">
        Triplane-Smoothed Video Dehazing with CLIP-Enhanced Generalization
      </div>
      <div class="author">
      Jingjing Ren, <span class="author-me">Haoyu Chen</span>, Tian Ye, Hongtao Wu, Lei Zhu
      </div>
      <!-- <em>International Conference on Computer Vision <strong>(ICCV)</strong></em>, 2023 -->
      <!-- <br> -->
      <!-- <a href="https://www.jasongt.com/projectpages/pipal.html">[Website]</a>  -->
      <a href="https://link.springer.com/article/10.1007/s11263-024-02161-0">[paper]</a> 
      <!-- <a href="https://github.com/haoyuc/VideoDesnowing">[Code]</a> -->
      <!-- <a href="https://haoyuchen.com/VideoDesnowing">[Dataset]</a> -->
      <!-- <a href="https://paperswithcode.com/dataset/pipal-perceptual-iqa-dataset">[Benchmark]</a>  -->
      <!-- <a href="https://www.jasongt.com/research-full">[CVPR 2022 NTIRE Challenge]</a>  -->
      <!-- <a href="https://www.youtube.com/watch?v=315Umwgpa6s">[Youtube]</a>  -->
      <!-- <a href="https://www.bilibili.com/video/BV1cr4y1P7s4">[Bilibili]</a>  -->
  <br>
      <!-- <p> 
          We propose a novel machine learning problem – the SRP problem as reconstructing high-quality data from unsatisfactory sensor data in industrial systems. 
      </p> -->
    </td>
</tr>
<!-- =================================================================================== -->






<!-- =================================================================================== -->
  <tr>
    <td style="margin:5px;padding:5px;width:30%;max-width:30%" align="center" class="image-wrapper">
      <img style="margin:5px;padding-right:20px;width:100%;max-width:100%;" src="../assets/img/eccv24.jpg" alt="">
    </td>
    <td width="75%" valign="center" class="text-wrapper"> 
      <div style="color: rgb(118, 130, 150); font-size: 0.9em; line-height: 1.3;">ECCV, 2024</div>
      <div  class="paper-title">
        Semi-Supervised Video Desnowing Network via Temporal Decoupling Experts and Distribution-Driven Contrastive Regularization
      </div>
      <div class="author">
      Hongtao Wu, Yijun Yang, Angelica Aviles-Rivero, Jingjing Ren, Sixiang Chen, <span class="author-me">Haoyu Chen</span>, Lei Zhu
      </div>
      <!-- <em>ACM Multimedia <strong>(ACM MM)</strong></em>, 2023 -->
     <!-- <br> -->
      <!-- <a href="https://haoyuchen.com/LWay">[Website]</a>  -->
      <!-- <a href="https://arxiv.org/abs/2403.02601">[arxiv]</a>  -->
      <!-- <a href="">[Code]</a> -->
      <!-- <a href="https://paperswithcode.com/dataset/pipal-perceptual-iqa-dataset">[Benchmark]</a>  -->
      <!-- <a href="https://www.jasongt.com/research-full">[CVPR 2022 NTIRE Challenge]</a>  -->
      <!-- <a href="https://www.youtube.com/watch?v=315Umwgpa6s">[Youtube]</a>  -->
      <!-- <a href="https://www.bilibili.com/video/BV1cr4y1P7s4">[Bilibili]</a>  -->
      <br>
      <!-- <p> 
          We propose a novel machine learning problem – the SRP problem as reconstructing high-quality data from unsatisfactory sensor data in industrial systems. 
      </p> -->
    </td>
</tr>
<!-- =================================================================================== -->




  <!-- =================================================================================== -->
  <tr>
    <td style="margin:5px;padding:5px;width:30%;max-width:30%" align="center" class="image-wrapper">
      <img style="margin:5px;padding-right:20px;width:100%;max-width:100%;" src="../assets/img/mm1.jpg" alt="">
    </td>
    <td width="75%" valign="center" class="text-wrapper"> 
      <div style="color: rgb(118, 130, 150); font-size: 0.9em; line-height: 1.3;">ACM MM, 2023</div>
      <div  class="paper-title">
        Mask-Guided Progressive Network for Joint Raindrop and Rain Streak Removal in Videos
      </div>
      <div class="author">
      Hongtao Wu, Yijun Yang, <span class="author-me">Haoyu Chen</span>, Jingjing Ren, Lei Zhu
      </div>
      <!-- <em>ACM Multimedia <strong>(ACM MM)</strong></em>, 2023 -->
     <!-- <br> -->
      <!-- <a href="https://www.jasongt.com/projectpages/pipal.html">[Website]</a>  -->
      <a href="https://dl.acm.org/doi/pdf/10.1145/3581783.3612001">[paper]</a> 
      <!-- <a href="">[Code]</a> -->
      <!-- <a href="https://paperswithcode.com/dataset/pipal-perceptual-iqa-dataset">[Benchmark]</a>  -->
      <!-- <a href="https://www.jasongt.com/research-full">[CVPR 2022 NTIRE Challenge]</a>  -->
      <!-- <a href="https://www.youtube.com/watch?v=315Umwgpa6s">[Youtube]</a>  -->
      <!-- <a href="https://www.bilibili.com/video/BV1cr4y1P7s4">[Bilibili]</a>  -->
      <br>
      <!-- <p> 
          We propose a novel machine learning problem – the SRP problem as reconstructing high-quality data from unsatisfactory sensor data in industrial systems. 
      </p> -->
    </td>
</tr>
<!-- =================================================================================== -->

    

  <!-- =================================================================================== -->
  <tr>
    <td style="margin:5px;padding:5px;width:30%;max-width:30%" align="center" class="image-wrapper">
      <img style="margin:5px;padding-right:20px;width:100%;max-width:100%;" src="../assets/img/mm2.jpg" alt="">
    </td>
    <td width="75%" valign="center" class="text-wrapper"> 
      <div style="color: rgb(118, 130, 150); font-size: 0.9em; line-height: 1.3;">ACM MM, 2023</div>
      <div  class="paper-title">
        Uncertainty-Driven Dynamic Degradation Perceiving and Background Modeling for Efficient Single Image Desnowing
      </div>
      <div class="author">
      Sixiang Chen*, Tian Ye*, Chenghao Xue, <span class="author-me">Haoyu Chen</span>, Yun Liu, Erkang Chen, Lei Zhu
      </div>
      <!-- <em>ACM Multimedia <strong>(ACM MM)</strong></em>, 2023 -->
      <!-- <br> -->
      <!-- <a href="https://www.jasongt.com/projectpages/pipal.html">[Website]</a>  -->
      <a href="https://dl.acm.org/pdf/10.1145/3581783.3612003">[paper]</a> 
      <!-- <a href="">[Code]</a> -->
      <!-- <a href="https://paperswithcode.com/dataset/pipal-perceptual-iqa-dataset">[Benchmark]</a>  -->
      <!-- <a href="https://www.jasongt.com/research-full">[CVPR 2022 NTIRE Challenge]</a>  -->
      <!-- <a href="https://www.youtube.com/watch?v=315Umwgpa6s">[Youtube]</a>  -->
      <!-- <a href="https://www.bilibili.com/video/BV1cr4y1P7s4">[Bilibili]</a>  -->
  <br>
      <!-- <p> 
          We propose a novel machine learning problem – the SRP problem as reconstructing high-quality data from unsatisfactory sensor data in industrial systems. 
      </p> -->
    </td>
</tr>
<!-- =================================================================================== -->





  <!-- =================================================================================== -->
  <tr>
    <td style="margin:5px;padding:5px;width:30%;max-width:30%" align="center" class="image-wrapper">
      <img style="margin:5px;padding-right:20px;width:100%;max-width:100%;" src="../assets/img/mm3.jpg" alt="">
    </td>
    <td width="75%" valign="center" class="text-wrapper"> 
      <div style="color: rgb(118, 130, 150); font-size: 0.9em; line-height: 1.3;">ACM MM, 2023</div>
      <div  class="paper-title">
        Cross-scale Prototype Learning Transformer for Image Snow Removal
      </div>
      <div class="author">
      Sixiang Chen*, Tian Ye*, Yun Liu, Jinbin Bai, <span class="author-me">Haoyu Chen</span>, Yunlong Lin, Jun Shi, Erkang Chen
      </div>
      <!-- <em>ACM Multimedia <strong>(ACM MM)</strong></em>, 2023 -->
    <!-- <br> -->
      <!-- <a href="https://www.jasongt.com/projectpages/pipal.html">[Website]</a>  -->
      <a href="https://dl.acm.org/doi/pdf/10.1145/3581783.3611893">[paper]</a> 
      <!-- <a href="">[Code]</a> -->
      <!-- <a href="https://paperswithcode.com/dataset/pipal-perceptual-iqa-dataset">[Benchmark]</a>  -->
      <!-- <a href="https://www.jasongt.com/research-full">[CVPR 2022 NTIRE Challenge]</a>  -->
      <!-- <a href="https://www.youtube.com/watch?v=315Umwgpa6s">[Youtube]</a>  -->
      <!-- <a href="https://www.bilibili.com/video/BV1cr4y1P7s4">[Bilibili]</a>  -->
  <br>
      <!-- <p> 
          We propose a novel machine learning problem – the SRP problem as reconstructing high-quality data from unsatisfactory sensor data in industrial systems. 
      </p> -->
    </td>
</tr>
<!-- =================================================================================== -->




    
    </tbody>
</table>
<hr style="border-top: 1px solid #f0f0f0; margin-top: 25px;margin-bottom:25px; ">
<span style="font-weight:600;font-size:17px;"> 
&nbsp;&nbsp;  Other
</span>
<table style="width:100%;border:0px;border-spacing:0px;border-collapse:separate;margin-right:auto;margin-left:auto;"><tbody>




  <!-- =================================================================================== -->
  <tr>
        <td style="margin:5px;padding:5px;width:30%;max-width:30%" align="center" class="image-wrapper">
          <img style="margin:5px;padding-right:20px;width:100%;max-width:100%;" src="../assets/img/SRP.jpg" alt="dise">
        </td>
        <td width="75%" valign="center"  class="text-wrapper">
        <div style="color: rgb(118, 130, 150); font-size: 0.9em; line-height: 1.3;">arXiv, 2018</div>
        <div  class="paper-title">
        Super-resolution perception for industrial sensor data
      </div>
      <div class="author">
        Jinjin Gu, <span class="author-me">Haoyu Chen</span>, Guolong Liu, Gaoqi Liang, Xinlei Wang, Junhua Zhao             
      </div>
        <!-- <em>arXiv</em>, 2018 -->
        <!-- <br> -->
        <!-- <a href="https://sstzal.github.io/DFRF/">[Website]</a>  -->
        <a href="https://arxiv.org/abs/1809.06687">[arxiv]</a> 
        <!-- <a href="https://www.youtube.com/watch?v=F6fkVNk9bBw&amp;ab_channel=Shens">[Video]</a>  -->
        <!-- <a href="https://github.com/sstzal/DFRF">[Code]</a> -->
        <br>
        <!-- <p> 
          We propose a novel machine learning problem – the SRP problem as reconstructing high-quality data from unsatisfactory sensor data in industrial systems. 
        </p> -->
      </td>
  </tr>
    <!-- =================================================================================== -->


    </tbody>
</table>


<p style="padding:6px;"> </p>



<!-- <br> -->

# Experience 


<!-- **Xiaobing.AI**.   
	Research Intern.  Mentor: [Dr. Baoyuan, Wang](https://scholar.google.com.hk/citations?user=OWa5rOEAAAAJ), ( 2021.6 ~ 2022.2 )



**AWS Shanghai AI Lab**.   
	Software Develop Engineer Intern. Mentor: [Zhi Zhang](https://scholar.google.com.hk/citations?user=nZr0oXQAAAAJ), ( 2020.5 ~ 2020.11 )   


**The Chinese University of Hong Kong. [GAP Lab](https://mypage.cuhk.edu.cn/academics/hanxiaoguang/index.html)**.   
	Research Assistant.  Advisor: [Dr. Xiaoguang, Han](https://mypage.cuhk.edu.cn/academics/hanxiaoguang/index.html), ( 2019.6 ~ 2021 )   


**Institute of Automation Chinese Academy of Sciences**.           
	Research Assistant. Advisor: [Dr. Bo Xu](http://people.ucas.edu.cn/~xubo_casia), ( 2018.8 ~ 2018.9 )        -->


<p style="margin-bottom: 20px;"></p>

<div class="media">
	<a name="fsaf" class="pull-left">
		<img class="media-object" src="../assets/img/xiaobing.png" width="50px" height="48px">
	</a>
	<div class="media-body">
		<p class="media-heading">
			<strong>
				 Xiaobing.AI
		 </strong><br>
     <span   style="font-size: 14px;">
			2021.6 ~ 2022.2. Research Intern.  <a href="https://scholar.google.com.hk/citations?user=OWa5rOEAAAAJ" target="_blank">Mentor: Dr. Baoyuan, Wang</a> 
     </span>
		</p>
	</div>
</div>



<div class="media">
	<a name="fsaf" class="pull-left">
		<img class="media-object" src="../assets/img/aws.png" width="50px" height="48px">
	</a>
	<div class="media-body">
		<p class="media-heading">
			<strong>
				 Amazon Web Services Shanghai AI Lab
		 </strong><br>
     <span   style="font-size: 14px;">
			2020.5 ~ 2020.11. Software Develop Engineer Intern. <a href="https://scholar.google.com.hk/citations?user=nZr0oXQAAAAJ" target="_blank">Mentor: Zhi Zhang</a>  
     </span>
		</p>
	</div>
</div>


<!-- <div class="media">
	<a name="fsaf" class="pull-left">
		<img class="media-object" src="../assets/img/casia.png" width="50px" height="48px">
	</a>
	<div class="media-body">
		<p class="media-heading">
			<strong>
				 Institute of Automation Chinese Academy of Sciences
		 </strong><br>
			2018.8 ~ 2018.9.  Research Assistant. <a href="http://people.ucas.edu.cn/~xubo_casia">Advisor: Dr. Bo Xu</a>       
		</p>
	</div>
</div>
 -->




# Academic Service & Awards

**Competition Awards**   
<p style="margin-bottom: 2px;"></p>

<div class="small-text">
IEEE ICDM 2018 global AI challenge on meteorology, <span class="s1">1st place</span>.  <br> 
ECCV 2020 Workshop, AIM 2020 Challenge on Video Extreme Super-Resolution, <span class="s1">4th place</span>.
</div>

<p class="whiteline"></p>

**Program Committee / Reviewer**  
<p style="margin-bottom: 2px;"></p>

<div class="small-text">
IEEE Conference on Computer Vision and Pattern Recognition <span class="s1">(CVPR)</span>, 2024   <br>
European Conference on Computer Vision <span class="s1">(ECCV)</span>, 2024     <br>
The International Conference on Learning Representations <span class="s1">(ICLR)</span>, 2025.   <br>
ACM Multimedia <span class="s1">(ACM MM)</span>, 2023, 2024      <br>
ACM SIGKDD Conference on Knowledge Discovery and Data Mining <span class="s1">(KDD)</span>, 2023     <br>
SIAM International Conference on Data Mining <span class="s1">(SDM)</span>, 2024      <br>
Winter Conference on Applications of Computer Vision <span class="s1">(WACV)</span>, 2023, 2024    <br>
ACM SIGGRAPH VRCAI, 2022     <br>
IEEE Transactions on Circuits and Systems for Video Technology     <br>
IEEE Transactions on Mobile Computing  <br>
The Computer Vison     <br>
</div>



# Hobbies & Interests
<p style="margin-bottom: 5px;"></p>



<div class="media">
	<a name="fsaf" class="pull-left">
		<img class="media-object" src="../assets/img/outdoor2.png" width="22px" height="22px">
	</a>
	<div class="media-body">
		<p class="media-heading">
			<strong  style="color: rgb(90, 100, 120);">
				 Outdoor
		 </strong><br>
		</p>
	</div>
</div>


<div class="media">
	<a name="fsaf" class="pull-left">
		<img class="media-object" src="../assets/img/travel1.png" width="22px" height="22px">
	</a>
	<div class="media-body">
		<p class="media-heading">
			<strong  style="color: rgb(90, 100, 120);">
				 Travelling
		 </strong><br>
		</p>
	</div>
</div>


<div class="media">
	<a name="fsaf" class="pull-left">
		<img class="media-object" src="../assets/img/tennis.png" width="22px" height="22px">
	</a>
	<div class="media-body">
		<p class="media-heading">
			<strong  style="color: rgb(90, 100, 120);">
				 Tennis
		 </strong><br>
		</p>
	</div>
</div>


<div class="media">
	<a name="fsaf" class="pull-left">
		<img class="media-object" src="../assets/img/music.svg" width="22px" height="22px">
	</a>
	<div class="media-body">
		<p class="media-heading">
			<strong  style="color: rgb(90, 100, 120);">
				 Music
		 </strong><br>
		</p>
	</div>
</div>






<!--# Publications

Please refer to my [Publication](https://haoyuchen.com/portfolio/) or [Google Scholar](https://scholar.google.com/citations?&user=KWbcBucAAAAJ).

-->