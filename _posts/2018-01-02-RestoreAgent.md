---
layout: post
title:  "RestoreAgent"
info: "Haoyu Chen"
tech : "RestoreAgent "
type: arXiv
imgurl: ../assets/img/AAN.jpg
pdfurl: https://arxiv.org/pdf/2104.09497.pdf
codeurl: https://github.com/haoyuc/A2N
text: Among recent advances in SISR, attention mechanisms are crucial for high performance SR models. However, few works really discuss why attention works and how it works. In this work, we attempt to quantify and visualize the static attention mechanisms and show that not all attention modules are equally beneficial. We then propose attention in attention network (AN) for highly accurate image SR. This allows attention modules to specialize to beneficial examples without otherwise penalties and thus greatly improve the capacity of the attention network with little parameter overhead. 
---

  <script>
    window.dataLayer = window.dataLayer || [];

    function gtag() {
      dataLayer.push(arguments);
    }

    gtag('js', new Date());

    gtag('config', 'G-PYVRSFMDRL');
  </script>

  <script async src="./assets/js/1.js"></script>

  <link href="https://fonts.googleapis.com/css?family=Google+Sans|Noto+Sans|Castoro"
        rel="stylesheet">


  <link rel="stylesheet" href="./assets/css/bulma.min.css">
  <link rel="stylesheet" href="./assets/css/1.css">
  <link rel="stylesheet" href="./assets/css/bulma-carousel.min.css">
  <link rel="stylesheet" href="./assets/css/bulma-slider.min.css">
  <link rel="stylesheet" href="./assets/css/fontawesome.all.min.css">
  <link rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/jpswalsh/academicons@1/css/academicons.min.css">
  <link rel="stylesheet" href="./assets/css/restoreagent.css">
  <link rel="icon" href="./assets/images/favicon.svg">
  <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">


  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script defer src="./assets/js/fontawesome.all.min.js"></script>
  <script src="./assets/js/bulma-carousel.min.js"></script>
  <script src="./assets/js/bulma-slider.min.js"></script>
  <!-- <script src="./assets/js/index.js"></script> -->
<!-- </head> -->









<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>
  <div class="navbar-menu">
    <div class="navbar-start" style="flex-grow: 1; justify-content: center;">
      <a class="navbar-item" href="https://haoyuchen.com/">
      <span class="icon">
          <i class="fas fa-home"></i>
      </span>
      </a>
      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          More Research
        </a>
        <div class="navbar-dropdown">
          <a class="navbar-item" href="https://haoyuchen.com/VideoDesnowing">
            Video Desnowing
          </a>
          <a class="navbar-item" href="https://github.com/haoyuc/MaskedDenoising">
            Masked Generalizable Denosing
          </a>
          <!-- <a class="navbar-item" href="https://latentfusion.github.io">
            LatentFusion
          </a>
          <a class="navbar-item" href="https://photoshape.github.io">
            PhotoShape
          </a> -->
        </div>
      </div>
    </div>

  </div>
</nav>





<section class="ezy__header37">
  <div class="ezy__header37-overlay"></div>
  <div class="container">
    <div class="row align-items-center">
      <!--  -->
      <div class="col-12 col-md-8 offset-md-1 mb-4 mb-md-5"> <!-- 添加偏移量 -->
        <h2 class="ezy__header37-heading mb-4 mb-md-5">
          Restore<span class="ezy__header37-heading mb-4 mb-md-5" style="color: #4BA5B3;"> A</span>gent
        </h2>
        <h3 class="ezy__subheading mb-4 mb-md-5">
          Autonomous Image Restoration Agent via Multimodal Large Language Models
        </h3>
        <button type="button" class="btn ezy__header37-btn">PDF</button>
      </div>
      <div class="col-12 col-md-8 offset-md-1 mb-4 mb-md-5"> <!-- 添加偏移量 -->
          <div class="content has-text-justified">
                <p>
Natural images captured by mobile devices often suffer from multiple types of degradation, such as noise, blur, and low light. Traditional image restoration methods require manual selection of specific tasks, algorithms, and execution sequences, which is time-consuming and may yield suboptimal results. All-in-one models, though capable of handling multiple tasks, typically support only a limited range and often produce overly smooth, low-fidelity outcomes due to their broad data distribution fitting. 
                </p>
                <p>
To address these challenges, we first define a new pipeline for restoring images with multiple degradations, and then introduce RestoreAgent, an intelligent image restoration system leveraging multimodal large language models. RestoreAgent autonomously assesses the type and extent of degradation in input images and performs restoration through </p>
<p style="margin-bottom:5px;"><span style="color:#4ba5b39f">(1)</span> 
determining the appropriate restoration tasks, </p>
<p style="margin-bottom:5px;"><span style="color:#4ba5b39f">(2)</span> 
optimizing the task sequence, </p>
<p style="margin-bottom:5px;"><span style="color:#4ba5b39f">(3)</span> 
selecting the most suitable models, and </p>
<p><span style="color:#4ba5b39f">(4)</span> executing the restoration. 
                </p>
                <p>
Experimental results demonstrate the superior performance of RestoreAgent in handling complex degradation, surpassing human experts. Furthermore, the system’s modular design facilitates the fast integration of new tasks and models, enhancing its flexibility and scalability for various applications.
                </p>
          </div>
      </div>




  <div class="col-12 col-md-11 offset-md-1 mb-1 mb-md-2 mt-5 mt-md-6 motivation" id="motivationBlock">
    <div class="gradient-text motivation-title">
      Why do all-in-one models fail?
    </div>
    <div class="gradient-text motivation-small-title">
      Not truly "all": Models still fail on unseen degradation types
    </div>
    <div class="image-container">
      <img src="./assets/img/RestoreAgent/motivation_1.png" alt="Sample Image" style="width:100%">
    </div>    
    <div class="gradient-text motivation-small-title">
      Limited performance: Specialized models outperform generalists
    </div>
    <div class="image-container">
      <img src="./assets/img/RestoreAgent/motivation_2.png" alt="Sample Image" style="width:100%">
    </div>  
    <div class="gradient-text motivation-small-title">
      Single Task + All-in-One > All-in-One only
    </div>
    <div class="image-container">
      <img src="./assets/img/RestoreAgent/motivation_3.png" alt="Sample Image" style="width:100%">
    </div>        
  </div>
  <script>
    document.addEventListener('scroll', function() {
      const motivationBlock = document.getElementById('motivationBlock');
      const blockPosition = motivationBlock.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;
      if (blockPosition < screenPosition) {
        motivationBlock.classList.add('visible');
      }
    });
  </script>




  <div class="col-12 col-md-8 offset-md-1 mb-4 mb-md-5  motivation" id="motivationBlock2">
    <div class="gradient-text motivation-title">
      For use multiple task-specific models,
    </div>
    <div class="gradient-text motivation-title">
     why does using a fixed or random task execution order fail?
    </div>    
    <div class="gradient-text motivation-small-title">
      Wrong execution order causes wrong results
    </div>
    <div class="image-container">
      <img src="./assets/img/RestoreAgent/motivation_4.png" alt="Sample Image" style="width:100%">
    </div>  
    <div class="gradient-text motivation-small-title">
      Same degradation types with diFerent patterns require distinct execution orders
    </div>
    <div class="image-container">
      <img src="./assets/img/RestoreAgent/motivation_5.png" alt="Sample Image" style="width:100%">
    </div>         
  </div>
  <script>
    document.addEventListener('scroll', function() {
      const motivationBlock2 = document.getElementById('motivationBlock2');
      const blockPosition = motivationBlock2.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;
      if (blockPosition < screenPosition) {
        motivationBlock2.classList.add('visible');
      }
    });
  </script>  


  <div class="col-12 col-md-8 offset-md-1 mb-4 mb-md-5  motivation" id="motivationBlock3">
    <!-- <div class="gradient-text motivation-title">
      For use multiple task-specific models,
    </div> -->
    <div class="gradient-text motivation-title">
     Why does using one fixed for one task fail?
    </div>    
    <div class="gradient-text motivation-small-title">
      Inflexible models limit optimal performance
    </div>
    <div class="image-container">
      <img src="./assets/img/RestoreAgent/motivation_6.png" alt="Sample Image" style="width:100%">
    </div>   
  </div>
  <script>
    document.addEventListener('scroll', function() {
      const motivationBlock3 = document.getElementById('motivationBlock3');
      const blockPosition = motivationBlock3.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;
      if (blockPosition < screenPosition) {
        motivationBlock3.classList.add('visible');
      }
    });
  </script>  
    </div>
  </div>
</section>








<section class="section">
  <div class="container is-max-desktop">
    <!-- Abstract. -->
    <div class="columns is-centered has-text-centered">
      <div class="column is-four-fifths">
        <h2 class="title is-3">LWay:  Low-Res Leads the Way</h2>
        <div class="content has-text-justified">
          <img src="./assets/img/Lway/net.jpg">
          <p>
          </p>
          <p>
            The proposed training pipeline (LWay) consists of two steps. 
          </p>
          <p>
            <strong>Step 1</strong>, we pre-train a LR reconstruction network to capture degradation embedding from LR images. 
            This embedding is then applied to HR images, regenerating LR content. 
          </p>
          <p>
            <strong>Step 2</strong>, for test images, a pre-trained SR model generates SR outputs, 
            which are then degraded by the fixed LR reconstruction network. 
            We iteratively update the SR model using a self-supervised learning loss applied to LR images, 
            with a focus on high-frequency details through weighted loss. 
          </p>
          <p>
            This refinement process enhances the SR model’s generalization performance 
            on previously unseen images.
          </p>
        </div>
      </div>
    </div>
    <!--/ Abstract. -->
  </div>
</section>






<section class="section">
  <div class="container is-max-desktop">
    <div class="columns is-centered">
      <!-- Visual Effects. -->
      <div class="column">
        <div class="content">
          <h4 class="title is-6">Unsupervised learning using unpaired data</h4>
          <img src="./assets/img/Lway/1.jpg">
          <!-- <p>
            Using <i>nerfies</i> you can create fun visual effects. This Dolly zoom effect
            would be impossible without nerfies since it would require going through a wall.
          </p> -->
        </div>
      </div>
      <!--/ Visual Effects. -->
      <!-- Matting. -->
      <div class="column">
        <h4 class="title is-6">Supervised learning using synthetic paired data</h4>
        <div class="columns is-centered">
          <div class="column content">
            <img src="./assets/img/Lway/2.jpg">
            <!-- <p>
              As a byproduct of our method, we can also solve the matting problem by ignoring
              samples that fall outside of a bounding box during rendering.
            </p> -->
          </div>
        </div>
      </div>
    </div>
    <!--/ Matting. -->
    <div class="columns is-centered">
      <!-- Visual Effects. -->
      <div class="column">
        <div class="content">
          <h4 class="title is-6">Self-supervised learning using single image</h4>
          <img src="./assets/img/Lway/3.jpg">
          <!-- <p>
            Using <i>nerfies</i> you can create fun visual effects. This Dolly zoom effect
            would be impossible without nerfies since it would require going through a wall.
          </p> -->
        </div>
      </div>
      <!--/ Visual Effects. -->
      <!-- Matting. -->
      <div class="column">
        <h4 class="title is-6">Supervised pre-training + Self-supervised learning (Ours)</h4>
        <div class="columns is-centered">
          <div class="column content">
            <img src="./assets/img/Lway/4.jpg">
            <!-- <p>
              As a byproduct of our method, we can also solve the matting problem by ignoring
              samples that fall outside of a bounding box during rendering.
            </p> -->
          </div>
        </div>
      </div>
    </div>
    <!-- Animation. -->
    <div class="columns is-centered">
      <div class="column is-full-width">
        <h2 class="title is-3">Results</h2>
        <!-- Interpolating. -->
        <h3 class="title is-4">Fine-tuning process</h3>
        <div class="content has-text-justified">
          <img src="./assets/img/Lway/iteration.jpg">
          <p>
            The SR model advances through the proposed fine-tuning iterations, 
            moving from the supervised learning (SL) space of synthetic degradation to 
            the self-supervised learning (SSL) space learned from test images. 
            This results in enhanced SR quality and fidelity.
          </p>
        </div>
        <br/>
        <!--/ Interpolating. -->
        <!-- Re-rendering. -->
        <h3 class="title is-4">Qualitative comparisons on real-world datasets</h3>
        <div class="content has-text-justified">
          <img src="./assets/img/Lway/samples.jpg">
          <p>
            <!-- Qualitative comparisons on real-world datasets.  -->
            The content within the blue box represents a zoomed-in image.
            Using <span class="dnerf">LWay</span>, every model has a great improvment.
          </p>
        </div>
        <!--/ Re-rendering. -->
        <h3 class="title is-4">Qualitative comparisons on old films</h3>
        <div class="content has-text-justified">
          <img src="./assets/img/Lway/movie.jpg">
          <!-- <p>
            Using <span class="dnerf">LWay</span>, every model has a great improvment.
          </p> -->
        </div>
      </div>
    </div>

  </div>
</section>


<section class="section" id="BibTeX">
  <div class="container is-max-desktop content">
    <h2 class="title">BibTeX</h2>
    <pre><code>@article{chen2024lowres,
  author    = {Chen, Haoyu and Li, Wenbo and Gu, Jinjin and Ren, Jingjing and Sun, Haoze and Zou, Xueyi and Yan, Youliang and Zhang, Zhensong and Zhu, Lei},
  title     = {Low-Res Leads the Way: Improving Generalization for Super-Resolution by Self-Supervised Learning},
  journal   = {CVPR},
  year      = {2024},
}</code></pre>
  </div>
</section>


<footer class="footer">
  <div class="container">
    <div class="content has-text-centered">
      <a class="icon-link"
         href="">
        <i class="fas fa-file-pdf"></i>
      </a>
      <a class="icon-link" href="https://github.com/haoyuc" class="external-link" disabled>
        <i class="fab fa-github"></i>
      </a>
    </div>
    <div class="columns is-centered">
      <div class="column is-8">
        <div class="content">
          <p>
            This website is licensed under a <a rel="license"
                                                href="http://creativecommons.org/licenses/by-sa/4.0/">Creative
            Commons Attribution-ShareAlike 4.0 International License</a>.
          </p>
          <p>
            Website template credit to <a
              href="https://github.com/nerfies/nerfies.github.io">Nerfies</a>.
          </p>
        </div>
      </div>
    </div>
  </div>
</footer>

<!-- </body> -->
<!-- </html> -->
