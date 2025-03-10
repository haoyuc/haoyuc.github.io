---
layout: post
title:  "Low-Res Leads the Way"
info: "Haoyu Chen"
tech : "Super Resolution"
type: arXiv
imgurl: ../assets/img/POSTA/assets/img/AAN.jpg
pdfurl: https://arxiv.org/pdf/2104.09497.pdf
codeurl: https://github.com/haoyuc/A2N
text: Among recent advances in SISR, attention mechanisms are crucial for high performance SR models. However, few works really discuss why attention works and how it works. In this work, we attempt to quantify and visualize the static attention mechanisms and show that not all attention modules are equally beneficial. We then propose attention in attention network (AN) for highly accurate image SR. This allows attention modules to specialize to beneficial examples without otherwise penalties and thus greatly improve the capacity of the attention network with little parameter overhead. 
---


  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;800&family=Inter:wght@300;400;600;800&display=swap" rel="stylesheet">
<style>
:root {
    --primary: #0A84FF;
    --background: #000000;
    --text: #F5F5F7;
    --secondary: #86868B;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Inter', sans-serif;
    background-color: var(--background);
    color: var(--text);
    line-height: 1.6;
    overflow-x: hidden;
}

.video-hero {
    position: relative;
    height: 100vh;
    width: 100%;
    overflow: hidden;
}

.video-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 1;
}

.video-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0);
    transition: background 1.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.video-overlay.dimmed {
    background: rgba(0, 0, 0, 0.5);
}

.hero-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, calc(-50% + 30px));
    text-align: center;
    width: 100%;
    max-width: 800px;
    opacity: 0;
    transition: all 1.5s cubic-bezier(0.16, 1, 0.3, 1);
    z-index: 2;
}

.hero-content.visible {
    opacity: 1;
    transform: translate(-50%, -50%);
}

.hero-content h1 {
    font-family: 'Montserrat', sans-serif;
    font-size: 7rem;
    font-weight: 800;
    margin-bottom: 2rem;
    background: linear-gradient(to right, #fff, #666);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    letter-spacing: -4px;
}

.hero-content p {
    font-size: 1.8rem;
    margin-bottom: 3rem;
    color: var(--secondary);
}

.features {
    padding: 0 2rem 12rem;
    position: relative;
}

.feature-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2.5rem;
    max-width: 1800px;
    margin: 0 auto;
    padding: 0 4rem;
}

.feature-card {
    background: rgba(255, 255, 255, 0.03);
    padding: 3rem;
    border-radius: 24px;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.08);
    opacity: 0;
    transform: perspective(1000px) rotateX(10deg) translateY(50px);
    transition: all 1.2s cubic-bezier(0.16, 1, 0.3, 1);
    will-change: transform, opacity;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
}

.feature-card.visible {
    opacity: 1;
    transform: perspective(1000px) rotateX(0) translateY(0);
}

.feature-card.exit {
    opacity: 0;
    transform: perspective(1000px) rotateX(-10deg) translateY(-50px);
    transition: all 1.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.feature-card h3 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1.2rem;
    background: linear-gradient(90deg, #fff, rgba(255,255,255,0.7));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.feature-card p {
    font-size: 1rem;
    line-height: 1.6;
    color: var(--secondary);
}

/* 响应式调整 */
@media (max-width: 1400px) {
    .feature-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;
    }
}

@media (max-width: 768px) {
    .feature-grid {
        grid-template-columns: 1fr;
        padding: 0 2rem;
    }
    
    .feature-card {
        padding: 2.5rem;
    }
    
    .feature-card h3 {
        font-size: 1.3rem;
    }
}

.method-section {
    padding: 0 2rem 12rem;
    position: relative;
}

.method-container {
    max-width: 1800px;
    margin: 0 auto;
    padding: 0 4rem;
}

.method-step {
    margin-bottom: 12rem;
    display: grid;
    grid-template-columns: 1.2fr 0.8fr;
    gap: 6rem;
    align-items: center;
    opacity: 0;
    transform: translateY(40px);
    transition: all 2s cubic-bezier(0.16, 1, 0.3, 1);
}

.method-step.visible {
    opacity: 1;
    transform: translateY(0);
}

.method-step.exit {
    opacity: 0;
    transform: translateY(-40px);
    transition: all 1.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.method-step.exit-up {
    opacity: 0;
    transform: translateY(-40px);
    transition: all 1.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.method-step:nth-child(even) {
    grid-template-columns: 0.8fr 1.2fr;
}

.method-content {
    flex: 1;
    padding: 4rem;
    background: rgba(255, 255, 255, 0.03);
    border-radius: 30px;
    backdrop-filter: blur(10px);
    transform: translateX(-100px);
    opacity: 0;
    transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
    will-change: transform, opacity;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
}

.method-step:nth-child(even) .method-content {
    transform: translateX(100px);
}

.method-step.visible .method-content {
    transform: translateX(0);
    opacity: 1;
}

.method-visual {
    flex: 1;
    height: 400px;
    margin: 0 4rem;
    background: linear-gradient(45deg, #0A84FF, #30D158);
    border-radius: 30px;
    transform: translateX(100px);
    opacity: 0;
    transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
    will-change: transform, opacity;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
}

.method-step:nth-child(even) .method-visual {
    transform: translateX(-100px);
}

.method-step.visible .method-visual {
    transform: translateX(0);
    opacity: 1;
}

.gallery {
    padding: 0 2rem 12rem;
    position: relative;
}

.gallery-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 4rem 4rem;
    row-gap: 6rem;
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 4rem;
    perspective: 2000px;
}

.gallery-item {
    position: relative;
    border-radius: 20px;
    overflow: hidden;
    cursor: pointer;
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
    background: rgba(255, 255, 255, 0.03);
    opacity: 0;
    transform: perspective(1000px) rotateX(10deg) translateY(100px);
    transition: all 1.2s cubic-bezier(0.23, 1, 0.32, 1);
    will-change: transform, opacity;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
}

.gallery-item::before {
    content: "";
    display: block;
    padding-top: 141.4%; /* 保持 1:1.414 的比例 */
}

.gallery-item img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.gallery-item.visible {
    opacity: 1;
    transform: perspective(1000px) rotateX(0) translateY(0);
}

.gallery-item:nth-child(3n + 1) { transition-delay: 0.2s; }
.gallery-item:nth-child(3n + 2) { transition-delay: 0.4s; }
.gallery-item:nth-child(3n + 3) { transition-delay: 0.6s; }

.gallery-item:hover img {
    transform: none;
}

.gallery-item::after {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(
        45deg,
        transparent 0%,
        rgba(255, 255, 255, 0.03) 30%,
        rgba(255, 255, 255, 0.08) 50%,
        rgba(255, 255, 255, 0.03) 70%,
        transparent 100%
    );
    transform: rotate(45deg);
    transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
    opacity: 0;
}

.gallery-item:hover::after {
    opacity: 1;
    transform: rotate(45deg) translateY(-50%);
}

.gallery-item.exit {
    opacity: 0;
    transform: perspective(1000px) rotateX(-10deg) translateY(-100px);
    transition: all 2s cubic-bezier(0.23, 1, 0.32, 1);
}

.gallery-item.exit:nth-child(3n + 1) { transition-delay: 0.2s; }
.gallery-item.exit:nth-child(3n + 2) { transition-delay: 0.4s; }
.gallery-item.exit:nth-child(3n + 3) { transition-delay: 0.6s; }

.gallery-item.exit-up {
    opacity: 0;
    transform: translateY(-40px);
    transition: all 1.5s cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}

.section-title-container {
    position: relative;
    margin: 8rem 0 6rem;
    padding: 0 4rem;
    overflow: hidden;
    opacity: 0;
    transform: translateY(30px);
    transition: all 2s cubic-bezier(0.16, 1, 0.3, 1);
    z-index: 10;
}

.section-title-container.visible {
    opacity: 1;
    transform: translateY(0);
}

.section-title {
    /* font-family: 'Montserrat', sans-serif; */
    font-size: 5vw;
    font-weight: 800;
    line-height: 1;
    letter-spacing: -0.03em;
    margin: 0;
    transform: translateX(-4vw);
    background: linear-gradient(to right, #fff, rgba(255, 255, 255, 0.3));
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: all 2s cubic-bezier(0.16, 1, 0.3, 1);
}

.section-title.visible {
    transform: translateX(0);
    opacity: 1;
}

.section-title.exit-up {
    opacity: 0;
    transform: translateY(-30px);
    transition: all 1.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.section-title-bg {
    font-family: 'Montserrat', sans-serif;
    position: absolute;
    top: -20%;
    right: 0;
    font-size: 14vw;
    font-weight: 800;
    opacity: 0;
    white-space: nowrap;
    user-select: none;
    color: #fff;
    transition: opacity 2s cubic-bezier(0.16, 1, 0.3, 1);
}

.section-title-container.visible .section-title-bg {
    opacity: 0.03;
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.poster-1 { background: linear-gradient(45deg, #FF3366, #FF6B6B); }
.poster-2 { background: linear-gradient(45deg, #4158D0, #C850C0); }
.poster-3 { background: linear-gradient(45deg, #0093E9, #80D0C7); }
.poster-4 { background: linear-gradient(45deg, #8EC5FC, #E0C3FC); }
.poster-5 { background: linear-gradient(45deg, #FFDEE9, #B5FFFC); }
.poster-6 { background: linear-gradient(45deg, #FFF6B7, #F6416C); }

@media (max-width: 1200px) {
    .section-title {
        font-size: 15vw;
    }
    
    .feature-grid,
    .method-step,
    .gallery-grid {
        grid-template-columns: 1fr;
        padding: 0 2rem;
    }
}

.section-decorator {
    position: absolute;
    width: 40vw;
    height: 40vw;
    background: radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%);
    border-radius: 50%;
    pointer-events: none;
    opacity: 0.5;
}

.section-decorator.left {
    left: -20vw;
    top: 20%;
}

.section-decorator.right {
    right: -20vw;
    bottom: 20%;
}

@media (max-width: 768px) {
    .section-title {
        font-size: 12vw;
    }
    
    .section-title-bg {
        font-size: 18vw;
    }
}

@media (max-width: 1400px) {
    .gallery-grid {
        grid-template-columns: repeat(3, 1fr);
        gap: 3rem;
        row-gap: 5rem;
    }
    
    .gallery-item {
        max-width: 350px;
    }
}

@media (max-width: 1024px) {
    .gallery-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;
        row-gap: 4rem;
    }
    
    .gallery-item {
        max-width: 300px;
    }
}

@media (max-width: 640px) {
    .gallery-grid {
        grid-template-columns: repeat(1, 1fr);
    }
    
    .gallery-item {
        max-width: 280px;
    }
}

/* Gallery 标题动画效果 */
.gallery .section-title-container {
    overflow: hidden;
}

.gallery .section-title {
    transform: translateX(-4vw);
    opacity: 0;
    transition: all 2s cubic-bezier(0.16, 1, 0.3, 1);
}

.gallery .section-title.visible {
    transform: translateX(0);
    opacity: 1;
}

/* 背景标题动画 */
.gallery .section-title-bg {
    opacity: 0;
    transition: opacity 2s cubic-bezier(0.16, 1, 0.3, 1);
}

.gallery .section-title-container.visible .section-title-bg {
    opacity: 0.03;
}

/* 添加悬浮动画效果 */
.gallery-item:hover {
    transform: translateY(-15px) scale(1.02);
    box-shadow: 
        0 20px 40px rgba(0, 0, 0, 0.3),
        0 0 30px rgba(10, 132, 255, 0.1);
    transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
}

/* 为不同 sections 添加独特的布局样式 */

/* Motivation Section - 左对齐标 */
.method-section.motivation .section-title-container {
    text-align: left;
    padding-left: 8vw;
}

.method-section.motivation .section-title-bg {
    left: 4vw;
    right: auto;
}

/* PosterArt Dataset Section - 居中紧凑布局 */
.features.dataset .feature-grid {
    max-width: 1200px;
    gap: 2rem;
}

.features.dataset .feature-card {
    text-align: center;
    padding: 4rem 2rem;
}

/* POSTA Pipeline Section - 交错布局 */
.method-section.pipeline .method-step {
    padding: 0 8vw;
}

.method-section.pipeline .method-step:nth-child(even) {
    margin-left: 4vw;
}

.method-section.pipeline .method-step:nth-child(odd) {
    margin-right: 4vw;
}

/* Artistic Text Generation - 大卡片布局 */
.features.text-gen .feature-grid {
    grid-template-columns: repeat(2, 1fr);
    max-width: 1600px;
}

.features.text-gen .feature-card {
    padding: 5rem 3rem;
    text-align: left;
}

/* Editability Section 样式更新 */
.method-section.editability {
    position: relative;
    padding: 12rem 0;
    background: linear-gradient(180deg, 
        rgba(0,0,0,0) 0%,
        rgba(10,132,255,0.05) 30%,
        rgba(10,132,255,0.02) 70%,
        rgba(0,0,0,0) 100%
    );
}

.edit-content-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;
    gap: 4rem;
    padding: 0 max(4rem, calc((100vw - 1400px) / 2));
    margin-bottom: 8rem;
    width: 100%;
}

.method-section.editability .method-step {
    flex: 0 1 calc(50% - 2rem);
    min-width: 0;
    display: flex;
    opacity: 0;
    transform: translateY(30px);
    transition: all 1.2s cubic-bezier(0.16, 1, 0.3, 1);
}

.method-section.editability .method-step.visible {
    opacity: 1;
    transform: translateY(0);
}

.method-section.editability .method-content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.08);
    padding: 3rem;
    border-radius: 24px;
}

.method-section.editability .method-content h3 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    background: linear-gradient(90deg, #fff, rgba(255,255,255,0.7));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.method-section.editability .method-content p {
    font-size: 1.2rem;
    line-height: 1.6;
    color: var(--secondary);
}

.edit-showcase {
    width: 100%;
    padding: 0 max(4rem, calc((100vw - 1800px) / 2));
    margin: 0 auto;
    perspective: 2000px;
    position: relative;
}

.edit-visual {
    position: relative;
    opacity: 0;
    transform: perspective(2000px) rotateX(5deg) translateY(100px);
    transition: all 2s cubic-bezier(0.16, 1, 0.3, 1);
    will-change: transform, opacity;
    background: rgba(255, 255, 255, 0.03);
}

.edit-visual.visible {
    opacity: 1;
    transform: perspective(2000px) rotateX(0) translateY(0);
}

.edit-visual img {
    width: 100%;
    height: auto;
    display: block;
    transform: scale(1.02);
    transition: transform 1.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.edit-visual::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
        180deg,
        transparent 0%,
        rgba(10, 132, 255, 0.03) 50%,
        transparent 100%
    );
    opacity: 0;
    transition: opacity 0.8s ease;
}

/* 悬停效果 */
.edit-visual:hover {
    transform: perspective(2000px) translateY(-20px) scale(1.02);
    box-shadow: 
        0 30px 60px rgba(0,0,0,0.3),
        0 0 30px rgba(10,132,255,0.1);
}

.edit-visual:hover::after {
    opacity: 1;
}

.edit-visual:hover img {
    transform: scale(1.04);
}

/* 响应式调整 */
@media (max-width: 1024px) {
    .edit-content-wrapper {
        flex-direction: column;
        gap: 2rem;
        padding: 0 2rem;
    }
    
    .edit-showcase {
        padding: 0 2rem;
    }
    
    .method-section.editability .method-content h3 {
        font-size: 1.8rem;
    }
    
    .method-section.editability .method-step {
        flex: 1 1 auto;
        width: 100%;
    }
}

/* Evaluation Section - 垂直堆叠布局 */
.features.evaluation .feature-grid {
    grid-template-columns: 1fr;
    max-width: 900px;
}

.features.evaluation .feature-card {
    display: flex;
    align-items: center;
    text-align: left;
    padding: 3rem 4rem;
}

.features.evaluation .feature-card h3 {
    min-width: 200px;
    margin-right: 3rem;
}

/* 响应式调整 */
@media (max-width: 1200px) {
    .features.text-gen .feature-grid,
    .method-section.editability .method-container {
        grid-template-columns: 1fr;
    }
    
    .method-section.editability .method-container {
        flex-direction: column;
    }
    
    .features.evaluation .feature-card {
        flex-direction: column;
        text-align: center;
    }
    
    .features.evaluation .feature-card h3 {
        margin: 0 0 1rem 0;
    }
}

/* Dataset Section 样 */
.dataset .method-step {
    margin-bottom: 8rem;
}

.dataset .method-content {
    padding: 4rem;
}

.dataset-stats {
    list-style: none;
    margin-top: 2rem;
}

.dataset-stats li {
    font-size: 1.2rem;
    color: var(--secondary);
    margin: 1rem 0;
    padding-left: 1.5rem;
    position: relative;
}

.dataset-stats li::before {
    content: "•";
    color: var(--primary);
    position: absolute;
    left: 0;
}

.dataset-visual img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
    transition: transform 0.3s ease;
}

.dataset-visual img:hover {
    transform: scale(1.02);
}

@media (max-width: 768px) {
    .dataset .method-step {
        grid-template-columns: 1fr;
        gap: 2rem;
    }
    
    .dataset-visual {
        height: 300px;
    }
}

/* PosterArt-Design 部分 */
.dataset-section {
    margin-bottom: 8rem;
}

.dataset-subtitle {
    font-size: 3rem;
    font-weight: 800;
    margin: 2rem 0;
    padding: 0 4rem;
    background: linear-gradient(to right, #fff, #666);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    letter-spacing: -0.03em;
    opacity: 0;
    transform: translateY(30px);
    transition: all 1.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.dataset-subtitle.visible {
    opacity: 1;
    transform: translateY(0);
}

.dataset-subtitle.exit {
    opacity: 0;
    transform: translateY(-30px);
}

.dataset-intro {
    padding: 0 4rem;
    margin-bottom: 3rem;
}

.dataset-description {
    font-size: 1.8rem;
    color: var(--secondary);
    line-height: 1.5;
    opacity: 0;
    transform: translateX(-30px);
    transition: all 1.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.dataset-description.visible {
    opacity: 1;
    transform: translateX(0);
}

.dataset-description.exit {
    opacity: 0;
    transform: translateX(30px);
}

.dataset-showcase {
    margin: 4rem auto;
    padding: 0 4rem;
    width: 75%;
    max-width: 1400px;
    perspective: 1000px;
}

.dataset-visual {
    opacity: 0;
    transform: perspective(1000px) rotateX(5deg) translateY(100px);
    transition: all 1.8s cubic-bezier(0.16, 1, 0.3, 1);
    will-change: transform, opacity;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
}

.dataset-visual.visible {
    opacity: 1;
    transform: perspective(1000px) rotateX(0) translateY(0);
}

.dataset-visual.exit {
    opacity: 0;
    transform: perspective(1000px) rotateX(-5deg) translateY(-100px);
}

.dataset-showcase .dataset-visual {
    border-radius: 30px;
    border: 1px solid rgba(255, 255, 255, 0.08);
}

.dataset-showcase img {
    display: block;
    width: 100%;
    transform: scale(1);
    transition: transform 1.8s cubic-bezier(0.23, 1, 0.32, 1);
}

.dataset-showcase img:hover {
    transform: scale(1.02);
}

.feature-grid {
    gap: 2rem;
}

.dataset-section .feature-card {
    background: rgba(255, 255, 255, 0.03);
    padding: 3rem 4rem;
    border-radius: 30px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(10px);
    opacity: 0;
    transform: translateY(50px);
    transition: all 1.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.dataset-section .feature-card.visible {
    opacity: 1;
    transform: translateY(0);
}

.dataset-section .feature-card.exit {
    opacity: 0;
    transform: translateY(-50px);
}

.dataset-section .feature-card:nth-child(1) { transition-delay: 0.1s; }
.dataset-section .feature-card:nth-child(2) { transition-delay: 0.2s; }
.dataset-section .feature-card:nth-child(3) { transition-delay: 0.3s; }

.dataset-stats {
    list-style: none;
    margin-top: 2rem;
}

.dataset-stats li {
    font-size: 1.2rem;
    color: var(--secondary);
    margin: 1rem 0;
    padding-left: 1.5rem;
    position: relative;
}

.dataset-stats li::before {
    content: "•";
    color: rgba(255, 255, 255, 0.5);
    position: absolute;
    left: 0;
}

@media (max-width: 768px) {
    .dataset-subtitle {
        font-size: 2.5rem;
        padding: 0 2rem;
    }
    
    .dataset-intro {
        padding: 0 2rem;
    }
    
    .dataset-description {
        font-size: 1.4rem;
    }
    
    .dataset-showcase {
        padding: 0 2rem;
    }
    
    .dataset-section .feature-card {
        padding: 2rem;
    }
}

/* PosterArt-Text 特定样式 */
.dataset-section:nth-child(2) .dataset-showcase {
    width: 75%;
    max-width: 1400px;
    margin: 4rem auto;
    padding: 0;
}

.dataset-section:nth-child(2) .dataset-visual {
    border-radius: 0;
    border: none;
}

@media (max-width: 768px) {
    .dataset-section:nth-child(2) .dataset-showcase {
        width: calc(100% - 4rem);
        padding: 0 2rem;
    }
}

/* Editability 部分添加大图展示区域 */
.edit-showcase {
    margin-top: 4rem;
    padding: 0 4rem;
}

.edit-visual {
    /* border-radius: 30px; */
    /* border: 1px solid rgba(255, 255, 255, 0.08); */
    /* overflow: hidden; */
}

.edit-visual img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.edit-content-wrapper {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

/* 添加调试用边框，确认容器位置（开发时可用） */
.edit-showcase {
    /* border: 1px solid red; */
}
.edit-visual {
    /* border: 1px solid blue; */
}

.method-section.editability .method-container {
    width: 100%;
    max-width: 1800px;
    margin: 0 auto;
}

.edit-content-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;
    gap: 4rem;
    padding: 0 max(4rem, calc((100vw - 1400px) / 2));
    margin-bottom: 8rem;
    width: 100%;
}

.method-section.editability .method-step {
    flex: 0 1 calc(50% - 2rem);
    min-width: 0;
    display: flex;
    opacity: 0;
    transform: translateY(30px);
    transition: all 1.2s cubic-bezier(0.16, 1, 0.3, 1);
}

.method-section.editability .method-content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.08);
    padding: 3rem;
    border-radius: 24px;
}

.method-section.editability .method-step:nth-child(even),
.method-section.editability .method-step:nth-child(odd) {
    margin: 0;
    transform: none;
}

@media (max-width: 1024px) {
    .edit-content-wrapper {
        flex-direction: column;
        gap: 2rem;
        padding: 0 2rem;
    }
    
    .method-section.editability .method-step {
        flex: 1 1 auto;
        width: 100%;
    }
}

.evaluation-showcase {
    width: 100%;
    max-width: 1800px;
    margin: 0 auto 6rem;
    padding: 0 4rem;
    display: flex;
    flex-direction: column;
    gap: 4rem;
    perspective: 1000px;
}

.evaluation-visual {
    opacity: 0;
    transform: perspective(1000px) rotateX(5deg) translateY(50px);
    transition: all 1.5s cubic-bezier(0.16, 1, 0.3, 1);
    will-change: transform, opacity;
    position: relative;
}

.evaluation-visual.visible {
    opacity: 1;
    transform: perspective(1000px) rotateX(0) translateY(0);
}

.evaluation-visual img {
    width: 100%;
    height: auto;
    display: block;
    transform: scale(1);
    transition: transform 1.2s cubic-bezier(0.23, 1, 0.32, 1);
}

.evaluation-visual.large {
    width: 90%;
    margin: 0 auto;
    transition-delay: 0.2s;
}

.evaluation-visual.medium {
    width: 75%;
    margin: 0 auto;
    transition-delay: 0.4s;
}

.evaluation-visual::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
        180deg,
        transparent 0%,
        rgba(10, 132, 255, 0.03) 50%,
        transparent 100%
    );
    opacity: 0;
    transition: opacity 0.8s ease;
}

/* 悬停效果 */
.evaluation-visual:hover {
    transform: perspective(1000px) translateY(-10px) scale(1.01);
}

.evaluation-visual:hover::after {
    opacity: 1;
}

.evaluation-visual:hover img {
    transform: scale(1.02);
}

/* 响应式调整 */
@media (max-width: 768px) {
    .evaluation-showcase {
        padding: 0 2rem;
    }
    
    .evaluation-visual.large {
        width: 100%;
    }
    
    .evaluation-visual.medium {
        width: 85%;
    }
}

/* 添加交错动画延迟 */
.feature-card:nth-child(1) { transition-delay: 0.1s; }
.feature-card:nth-child(2) { transition-delay: 0.2s; }
.feature-card:nth-child(3) { transition-delay: 0.3s; }
.feature-card:nth-child(4) { transition-delay: 0.4s; }

/* 退出动画的延迟 */
.feature-card.exit:nth-child(1) { transition-delay: 0.1s; }
.feature-card.exit:nth-child(2) { transition-delay: 0.2s; }
.feature-card.exit:nth-child(3) { transition-delay: 0.3s; }
.feature-card.exit:nth-child(4) { transition-delay: 0.4s; }

/* 悬停效果增强 */
.feature-card:hover {
    transform: perspective(1000px) translateY(-10px) scale(1.02);
    background: rgba(255, 255, 255, 0.05);
    box-shadow: 
        0 20px 40px rgba(0, 0, 0, 0.2),
        0 0 20px rgba(10, 132, 255, 0.1);
}

.poster-showcase {
    position: relative;
    width: 100%;
    height: 70vh;
    min-height: 600px;
    overflow: visible;
    background: linear-gradient(180deg, 
        rgba(0,0,0,0) 0%,
        rgba(10,132,255,0.03) 30%,
        rgba(10,132,255,0.01) 70%,
        rgba(0,0,0,0) 100%
    );
    margin: 2rem 0 4rem;
}

.poster-track {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    display: flex;
    will-change: transform;
    padding: 3rem 2rem;
}

.poster-group {
    display: flex;
    gap: 2rem;
    padding: 0 2rem;
    animation: scrollPosters 40s linear infinite;
}

.poster-group:hover {
    animation-play-state: paused;
}

.poster-item {
    flex: 0 0 auto;
    width: 450px;
    height: 637px;
    border-radius: 24px;
    overflow: hidden;
    position: relative;
    transform: perspective(1000px) rotateY(5deg) scale(0.95);
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
    opacity: 0.9;
    z-index: 1;
}

.poster-item::after {
    display: none;
}

.poster-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1);
    transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1);
}

/* 调整悬停效果 */
.poster-item:hover {
    transform: perspective(1000px) rotateY(0deg) scale(1.02);
    opacity: 1;
    z-index: 2;
    box-shadow: 
        0 25px 50px rgba(0,0,0,0.3),
        0 0 30px rgba(10,132,255,0.2);
}

.poster-item:hover img {
    transform: scale(1.02);
}

/* 移除两侧渐变遮罩 */
.poster-showcase::before,
.poster-showcase::after {
    display: none;
}

/* 调整动画关键帧 */
@keyframes scrollPosters {
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(calc(-100% - 2rem));
    }
}

/* 响应式调整 */
@media (max-width: 1024px) {
    .poster-showcase {
        height: 60vh;
        min-height: 500px;
        margin: 2rem 0 3rem;
    }

    .poster-item {
        width: 350px;
        height: 495px;
    }
}

@media (max-width: 768px) {
    .poster-showcase {
        height: 50vh;
        min-height: 400px;
        margin: 1.5rem 0 2.5rem;
    }

    .poster-item {
        width: 280px;
        height: 396px;
    }
}
</style>

<section class="video-hero">
<video class="video-bg" autoplay muted loop playsinline>
    <source src="./assets/img/POSTA/STG_shine.mp4" type="video/mp4">
</video>
<div class="video-overlay"></div>
<div class="hero-content">
    <h1>POSTA</h1>
    <p>Revolutionary AI-Powered Poster Generation</p>
</div>
</section>

<section class="poster-showcase">
<div class="poster-track">
    <div class="poster-group">
        <div class="poster-item"><img src="./assets/img/POSTA/poster/00000.jpg" alt="Poster 1" loading="lazy"></div>
        <div class="poster-item"><img src="./assets/img/POSTA/poster/00001.jpg" alt="Poster 2" loading="lazy"></div>
        <div class="poster-item"><img src="./assets/img/POSTA/poster/00002.jpg" alt="Poster 3" loading="lazy"></div>
        <div class="poster-item"><img src="./assets/img/POSTA/poster/00003.jpg" alt="Poster 4" loading="lazy"></div>
        <div class="poster-item"><img src="./assets/img/POSTA/poster/00004.jpg" alt="Poster 5" loading="lazy"></div>
        <div class="poster-item"><img src="./assets/img/POSTA/poster/00005.jpg" alt="Poster 6" loading="lazy"></div>
        <div class="poster-item"><img src="./assets/img/POSTA/poster/00006.jpg" alt="Poster 6" loading="lazy"></div>
        <div class="poster-item"><img src="./assets/img/POSTA/poster/00007.jpg" alt="Poster 6" loading="lazy"></div>
        <div class="poster-item"><img src="./assets/img/POSTA/poster/00008.jpg" alt="Poster 6" loading="lazy"></div>
        <div class="poster-item"><img src="./assets/img/POSTA/poster/00009.jpg" alt="Poster 6" loading="lazy"></div>
        <div class="poster-item"><img src="./assets/img/POSTA/poster/00010.jpg" alt="Poster 6" loading="lazy"></div>
        <div class="poster-item"><img src="./assets/img/POSTA/poster/00011.jpg" alt="Poster 6" loading="lazy"></div>
        <div class="poster-item"><img src="./assets/img/POSTA/poster/00012.jpg" alt="Poster 6" loading="lazy"></div>
        <div class="poster-item"><img src="./assets/img/POSTA/poster/00013.jpg" alt="Poster 6" loading="lazy"></div>
    </div>
    <!-- 复制一组用于无缝滚动 -->
    <div class="poster-group">
        <div class="poster-item"><img src="./assets/img/POSTA/poster/00000.jpg" alt="Poster 1" loading="lazy"></div>
        <div class="poster-item"><img src="./assets/img/POSTA/poster/00001.jpg" alt="Poster 2" loading="lazy"></div>
        <div class="poster-item"><img src="./assets/img/POSTA/poster/00002.jpg" alt="Poster 3" loading="lazy"></div>
        <div class="poster-item"><img src="./assets/img/POSTA/poster/00003.jpg" alt="Poster 4" loading="lazy"></div>
        <div class="poster-item"><img src="./assets/img/POSTA/poster/00004.jpg" alt="Poster 5" loading="lazy"></div>
        <div class="poster-item"><img src="./assets/img/POSTA/poster/00005.jpg" alt="Poster 6" loading="lazy"></div>
        <div class="poster-item"><img src="./assets/img/POSTA/poster/00006.jpg" alt="Poster 6" loading="lazy"></div>
        <div class="poster-item"><img src="./assets/img/POSTA/poster/00007.jpg" alt="Poster 6" loading="lazy"></div>
        <div class="poster-item"><img src="./assets/img/POSTA/poster/00008.jpg" alt="Poster 6" loading="lazy"></div>
        <div class="poster-item"><img src="./assets/img/POSTA/poster/00009.jpg" alt="Poster 6" loading="lazy"></div>            
        <div class="poster-item"><img src="./assets/img/POSTA/poster/00010.jpg" alt="Poster 6" loading="lazy"></div>
        <div class="poster-item"><img src="./assets/img/POSTA/poster/00011.jpg" alt="Poster 6" loading="lazy"></div>
        <div class="poster-item"><img src="./assets/img/POSTA/poster/00012.jpg" alt="Poster 6" loading="lazy"></div>
        <div class="poster-item"><img src="./assets/img/POSTA/poster/00013.jpg" alt="Poster 6" loading="lazy"></div>
    </div>
</div>
</section>

<section class="features">
<div class="section-title-container">
    <div class="section-title-bg">FEATURES</div>
    <h2 class="section-title">Key Features</h2>
</div>
<div class="section-decorator left"></div>
<div class="feature-grid">
    <div class="feature-card">
        <h3>Accurate Text Generation</h3>
        <p>Advanced AI algorithms ensure precise and contextually appropriate text generation with artistic typography</p>
    </div>
    <div class="feature-card">
        <h3>Control over Design Elements</h3>
        <p>Fine-grained control of layouts, typography, colors, and visual effects for professional-grade customization</p>
    </div>
    <div class="feature-card">
        <h3>High Aesthetic Quality</h3>
        <p>Premium visual output with balanced compositions and harmonious design elements that meet industry standards</p>
    </div>
    <div class="feature-card">
        <h3>Systematic Workflow</h3>
        <p>Streamlined end-to-end process from concept to final design, ensuring efficiency and consistency</p>
    </div>
</div>
</section>



<section class="method-section motivation">
<div class="section-title-container">
    <div class="section-title-bg">MOTIVATION</div>
    <h2 class="section-title">Motivation</h2>
</div>
<div class="section-decorator right"></div>
<div class="method-container">
    <div class="method-step">
        <div class="method-content">
            <h3>Design Challenges</h3>
            <p>Addressing the growing need for efficient and creative poster design solutions</p>
        </div>
        <div class="method-visual"></div>
    </div>
    <div class="method-step">
        <div class="method-content">
            <h3>AI Innovation</h3>
            <p>Leveraging artificial intelligence to revolutionize the poster creation process</p>
        </div>
        <div class="method-visual"></div>
    </div>
</div>
</section>

<section class="method-section dataset">
<div class="section-title-container">
    <div class="section-title-bg">DATASET</div>
    <h2 class="section-title">PosterArt Dataset</h2>
</div>
<div class="section-decorator left"></div>

<div class="method-container">
    <!-- PosterArt-Design -->
    <div class="dataset-section">
        <h3 class="dataset-subtitle">PosterArt-Design</h3>
        <div class="dataset-intro">
            <p class="dataset-description">
                Professional backgrounds with additional aesthetically pleasing layout and typography information crafted by professional designers
            </p>
        </div>
        
        <!-- 整体展示图 -->
        <div class="dataset-showcase">
            <div class="dataset-visual design-visual">
                <img src="./assets/img/POSTA/dataset/design.png" alt="PosterArt Design Examples">
            </div>
        </div>
        
        <div class="feature-grid">
            <div class="feature-card">
                <h3>Collection Scale</h3>
                <ul class="dataset-stats">
                    <li>3K+ Professional Posters</li>
                    <li>10+ Design Categories</li>
                </ul>
            </div>
            <div class="feature-card">
                <h3>Rich Attributes</h3>
                <ul class="dataset-stats">
                    <li>Coordinates</li>
                    <li>Font Type & Size</li>
                    <li>Color & Alignment</li>
                    <li>Rotation Angle</li>
                </ul>
            </div>
            <div class="feature-card">
                <h3>Editable Format</h3>
                <p>Preserved in editable formats (e.g., PSD) for maximum flexibility and control</p>
            </div>
        </div>
    </div>

    <!-- PosterArt-Text -->
    <div class="dataset-section">
        <h3 class="dataset-subtitle">PosterArt-Text</h3>
        <div class="dataset-intro">
            <p class="dataset-description">
                Segmentation and corresponding descriptions of texts with diverse artistic styles
            </p>
        </div>
        
        <!-- 整体展示图 -->
        <div class="dataset-showcase">
            <div class="dataset-visual">
                <img src="./assets/img/POSTA/dataset/text.png" alt="PosterArt Text Examples">
            </div>
        </div>
        
        <!-- 添加新的展示图 -->
        <div class="dataset-showcase" style="margin-top: 5rem;">
            <div class="dataset-visual">
                <img src="./assets/img/POSTA/dataset/text2.png" alt="Additional PosterArt Text Examples">
            </div>
        </div>
    </div>
</div>
</section>

<section class="method-section pipeline">
<div class="section-title-container">
    <div class="section-title-bg">PIPELINE</div>
    <h2 class="section-title">POSTA Pipeline</h2>
</div>
<div class="section-decorator right"></div>
<div class="method-container">
    <div class="method-step">
        <div class="method-content">
            <h3>Input Processing</h3>
            <p>Advanced content analysis and requirement interpretation</p>
        </div>
        <div class="method-visual"></div>
    </div>
    <div class="method-step">
        <div class="method-content">
            <h3>Design Generation</h3>
            <p>AI-powered layout and style synthesis</p>
        </div>
        <div class="method-visual"></div>
    </div>
    <div class="method-step">
        <div class="method-content">
            <h3>Refinement</h3>
            <p>Intelligent optimization and quality enhancement</p>
        </div>
        <div class="method-visual"></div>
    </div>
</div>
</section>

<section class="features text-gen">
<div class="section-title-container">
    <div class="section-title-bg">TEXT</div>
    <h2 class="section-title">Artistic Text Generation</h2>
</div>
<div class="section-decorator left"></div>
<div class="feature-grid">
    <div class="feature-card">
        <h3>Style Transfer</h3>
        <p>Dynamic text styling and artistic effects</p>
    </div>
    <div class="feature-card">
        <h3>Typography AI</h3>
        <p>Intelligent font selection and arrangement</p>
    </div>
    <div class="feature-card">
        <h3>Visual Harmony</h3>
        <p>Balanced integration with design elements</p>
    </div>
</div>
</section>

<section class="method-section editability">
<div class="section-title-container">
    <div class="section-title-bg">EDIT</div>
    <h2 class="section-title">Editability</h2>
</div>
<div class="section-decorator right"></div>
<div class="method-container">
    <!-- 文字内容区域 -->
    <div class="edit-content-wrapper">
        <div class="method-step">
            <div class="method-content">
                <h3>Comprehensive Control</h3>
                <p>Full control over design elements including fonts, layouts, backgrounds and styles. Generate multiple variations from a single prompt with unique typography and visual arrangements.</p>
            </div>
        </div>
        <div class="method-step">
            <div class="method-content">
                <h3>Professional Refinement</h3>
                <p>Make precise adjustments to layouts, fonts, and visual effects. Fine-tune every detail including colors, weights, and textures to achieve professional-quality designs.</p>
            </div>
        </div>
    </div>
    
    <!-- 宽图片展示区域 -->
    <div class="edit-showcase">
        <div class="edit-visual">
            <img src="./assets/img/POSTA/dataset/edit.png" alt="Editability Showcase" loading="lazy">
        </div>
    </div>
</div>
</section>

<section class="features evaluation">
<div class="section-title-container">
    <div class="section-title-bg">EVALUATE</div>
    <h2 class="section-title">Evaluation</h2>
</div>
<div class="section-decorator left"></div>

<!-- 添加图片展示区域 -->
<div class="evaluation-showcase">
    <div class="evaluation-visual large">
        <img src="./assets/img/POSTA/dataset/score.png" alt="Evaluation Showcase 1" loading="lazy">
    </div>
    <div class="evaluation-visual medium" style="margin-top: 5rem;">
        <img src="./assets/img/POSTA/dataset/score2.png" alt="Evaluation Showcase 2" loading="lazy">
    </div>
</div>


</section>

<section class="gallery">
<div class="section-title-container">
    <div class="section-title-bg">SHOWCASE</div>
    <h2 class="section-title">Generated Posters</h2>
</div>
<div class="section-decorator left"></div>
<div class="gallery-grid">
    <div class="gallery-item">
        <img src="./assets/img/POSTA/poster/00000.jpg" alt="Generated Poster 1" loading="lazy">
    </div>
    <div class="gallery-item">
        <img src="./assets/img/POSTA/poster/00001.jpg" alt="Generated Poster 2" loading="lazy">
    </div>
    <div class="gallery-item">
        <img src="./assets/img/POSTA/poster/00002.jpg" alt="Generated Poster 3" loading="lazy">
    </div>
    <div class="gallery-item">
        <img src="./assets/img/POSTA/poster/00003.jpg" alt="Generated Poster 4" loading="lazy">
    </div>
    <div class="gallery-item">
        <img src="./assets/img/POSTA/poster/00004.jpg" alt="Generated Poster 5" loading="lazy">
    </div>
    <div class="gallery-item">
        <img src="./assets/img/POSTA/poster/00005.jpg" alt="Generated Poster 6" loading="lazy">
    </div>
    <div class="gallery-item">
        <img src="./assets/img/POSTA/poster/00006.jpg" alt="Generated Poster 7" loading="lazy">
    </div>
    <div class="gallery-item">
        <img src="./assets/img/POSTA/poster/00007.jpg" alt="Generated Poster 8" loading="lazy">
    </div>
    <div class="gallery-item">
        <img src="./assets/img/POSTA/poster/00008.jpg" alt="Generated Poster 9" loading="lazy">
    </div>
    <div class="gallery-item">
        <img src="./assets/img/POSTA/poster/00009.jpg" alt="Generated Poster 10" loading="lazy">
    </div>
    <div class="gallery-item">
        <img src="./assets/img/POSTA/poster/00010.jpg" alt="Generated Poster 11" loading="lazy">
    </div>
    <div class="gallery-item">
        <img src="./assets/img/POSTA/poster/00011.jpg" alt="Generated Poster 12" loading="lazy">
    </div>
    <div class="gallery-item">
        <img src="./assets/img/POSTA/poster/00012.jpg" alt="Generated Poster 12" loading="lazy">
    </div>
    <div class="gallery-item">
        <img src="./assets/img/POSTA/poster/00013.jpg" alt="Generated Poster 12" loading="lazy">
    </div>
    <div class="gallery-item">
        <img src="./assets/img/POSTA/poster/00014.jpg" alt="Generated Poster 12" loading="lazy">
    </div>
    <div class="gallery-item">
        <img src="./assets/img/POSTA/poster/00015.jpg" alt="Generated Poster 12" loading="lazy">
    </div>
    <div class="gallery-item">
        <img src="./assets/img/POSTA/poster/00016.jpg" alt="Generated Poster 12" loading="lazy">
    </div>
    <div class="gallery-item">
        <img src="./assets/img/POSTA/poster/00017.jpg" alt="Generated Poster 12" loading="lazy">
    </div>
    <div class="gallery-item">
        <img src="./assets/img/POSTA/poster/00018.jpg" alt="Generated Poster 12" loading="lazy">
    </div>
    <div class="gallery-item">
        <img src="./assets/img/POSTA/poster/00019.jpg" alt="Generated Poster 12" loading="lazy">
    </div>
    <div class="gallery-item">
        <img src="./assets/img/POSTA/poster/00020.jpg" alt="Generated Poster 12" loading="lazy">
    </div>
    <div class="gallery-item">
        <img src="./assets/img/POSTA/poster/00021.jpg" alt="Generated Poster 12" loading="lazy">
    </div>
    <div class="gallery-item">
        <img src="./assets/img/POSTA/poster/00022.jpg" alt="Generated Poster 12" loading="lazy">
    </div>
    <div class="gallery-item">
        <img src="./assets/img/POSTA/poster/00023.jpg" alt="Generated Poster 12" loading="lazy">
    </div>
    <div class="gallery-item">
        <img src="./assets/img/POSTA/poster/00024.jpg" alt="Generated Poster 12" loading="lazy">
    </div>
    <div class="gallery-item">
        <img src="./assets/img/POSTA/poster/00025.jpg" alt="Generated Poster 12" loading="lazy">
    </div>
    <div class="gallery-item">
        <img src="./assets/img/POSTA/poster/00026.jpg" alt="Generated Poster 12" loading="lazy">
    </div>
    <div class="gallery-item">
        <img src="./assets/img/POSTA/poster/00027.jpg" alt="Generated Poster 12" loading="lazy">
    </div>
    <div class="gallery-item">
        <img src="./assets/img/POSTA/poster/00028.jpg" alt="Generated Poster 12" loading="lazy">
    </div>
    <div class="gallery-item">
        <img src="./assets/img/POSTA/poster/00029.jpg" alt="Generated Poster 12" loading="lazy">
    </div>
    <div class="gallery-item">
        <img src="./assets/img/POSTA/poster/00030.jpg" alt="Generated Poster 12" loading="lazy">
    </div>
    <div class="gallery-item">
        <img src="./assets/img/POSTA/poster/00031.jpg" alt="Generated Poster 12" loading="lazy">
    </div>
    <div class="gallery-item">
        <img src="./assets/img/POSTA/poster/00032.jpg" alt="Generated Poster 12" loading="lazy">
    </div>
    <div class="gallery-item">
        <img src="./assets/img/POSTA/poster/00033.jpg" alt="Generated Poster 12" loading="lazy">
    </div>
    <div class="gallery-item">
        <img src="./assets/img/POSTA/poster/00034.jpg" alt="Generated Poster 12" loading="lazy">
    </div>
    <div class="gallery-item">
        <img src="./assets/img/POSTA/poster/00035.jpg" alt="Generated Poster 12" loading="lazy">
    </div>
</div>
</section>

<script>
// 控制视频遮罩和文字显示
const videoOverlay = document.querySelector('.video-overlay');
const heroContent = document.querySelector('.hero-content');

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const triggerPoint = window.innerHeight * 0.15; // 滚动超过20%视窗高度时触发

    if (scrollPosition > triggerPoint) {
        videoOverlay.classList.add('dimmed');
        heroContent.classList.add('visible');
    } else {
        videoOverlay.classList.remove('dimmed');
        heroContent.classList.remove('visible');
    }
});

// 保持原有的 Intersection Observer 代码
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            const rect = entry.boundingClientRect;
            const isExitingTop = !entry.isIntersecting && rect.top < 0;
            const isExitingBottom = !entry.isIntersecting && rect.top > window.innerHeight;
            
            if (entry.isIntersecting) {
                // 元素进入视图
                entry.target.classList.add('visible');
                entry.target.classList.remove('exit-up');
                
                if (entry.target.classList.contains('section-title')) {
                    const container = entry.target.closest('.section-title-container');
                    container.classList.add('visible');
                    container.classList.remove('exit-up');
                }
            } else {
                // 元素离开视图
                entry.target.classList.remove('visible');
                
                if (isExitingTop) {
                    // 从顶部离开
                    entry.target.classList.add('exit-up');
                } else {
                    entry.target.classList.remove('exit-up');
                }
                
                if (entry.target.classList.contains('section-title')) {
                    const container = entry.target.closest('.section-title-container');
                    container.classList.remove('visible');
                    if (isExitingTop) {
                        container.classList.add('exit-up');
                    } else {
                        container.classList.remove('exit-up');
                    }
                }
            }
        });
    },
    { 
        threshold: 0,
        rootMargin: '-50px 0px'
    }
);

// 更新观察元素列表，移除 hero-content（因为我们现在用滚动来控制它）
document.querySelectorAll('.section-title, .section-title-container, .feature-card, .method-step, .gallery-item').forEach(element => {
    observer.observe(element);
});

// 在 script 标签内添加以下代码
const datasetObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            const rect = entry.boundingClientRect;
            const isExitingTop = !entry.isIntersecting && rect.top < 0;
            
            if (entry.isIntersecting) {
                // 元素进入视图
                entry.target.classList.add('visible');
                entry.target.classList.remove('exit');
            } else {
                // 元素离开视图
                entry.target.classList.remove('visible');
                if (isExitingTop) {
                    entry.target.classList.add('exit');
                }
            }
        });
    },
    { 
        threshold: 0.1,
        rootMargin: '-50px 0px'
    }
);

// 观察所有需要动画的元素
document.querySelectorAll('.dataset-subtitle, .dataset-description, .dataset-visual, .dataset-section .feature-card').forEach(element => {
    datasetObserver.observe(element);
});

// 添加鼠标悬停效果
document.querySelectorAll('.dataset-visual').forEach(visual => {
    visual.addEventListener('mouseenter', () => {
        visual.style.transform = 'perspective(1000px) rotateX(2deg) scale(1.02)';
        visual.style.transition = 'all 0.8s cubic-bezier(0.23, 1, 0.32, 1)';
    });
    
    visual.addEventListener('mouseleave', () => {
        visual.style.transform = 'perspective(1000px) rotateX(0) scale(1)';
    });
});

// 在现有的 script 标签添加
const editabilityObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // 为内容添加交错动画
                if (entry.target.classList.contains('method-step')) {
                    const delay = entry.target.dataset.delay || '0';
                    entry.target.style.transitionDelay = `${delay}s`;
                }
            } else {
                entry.target.classList.remove('visible');
                entry.target.style.transitionDelay = '0s';
            }
        });
    },
    {
        threshold: 0.1,
        rootMargin: '-50px 0px'
    }
);

// 观察 Editability section 的元素
document.querySelectorAll('.method-section.editability .method-step, .edit-visual').forEach((el, index) => {
    el.dataset.delay = (index * 0.2).toString();
    editabilityObserver.observe(el);
});

// 为 evaluation 图片添加观察器
const evaluationObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    },
    {
        threshold: 0.1,
        rootMargin: '-50px 0px'
    }
);

// 观察 evaluation 图片
document.querySelectorAll('.evaluation-visual').forEach(visual => {
    evaluationObserver.observe(visual);
});

// 在现有的 script 标签中添加或更新
const featureObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            const rect = entry.boundingClientRect;
            const isExitingTop = !entry.isIntersecting && rect.top < 0;
            
            if (entry.isIntersecting) {
                // 元素进入视图
                entry.target.classList.add('visible');
                entry.target.classList.remove('exit');
                
                // 保持原有的延迟
                const delay = entry.target.dataset.delay || '0';
                entry.target.style.transitionDelay = `${delay}s`;
            } else {
                // 元素离开视图
                entry.target.classList.remove('visible');
                
                if (isExitingTop) {
                    // 从顶部离开时添加退出动画
                    entry.target.classList.add('exit');
                } else {
                    entry.target.classList.remove('exit');
                }
                
                // 重置延迟
                setTimeout(() => {
                    entry.target.style.transitionDelay = '0s';
                }, 1500);
            }
        });
    },
    {
        threshold: 0.1,
        rootMargin: '-50px 0px'
    }
);

// 观察所有 feature cards
document.querySelectorAll('.feature-card').forEach((card, index) => {
    card.dataset.delay = (index * 0.1).toString();
    featureObserver.observe(card);
});

// 在现有的 script 标签中添加
document.addEventListener('DOMContentLoaded', () => {
    const posterTrack = document.querySelector('.poster-track');
    let isMouseDown = false;
    let startX;
    let scrollLeft;

    posterTrack.addEventListener('mousedown', (e) => {
        isMouseDown = true;
        posterTrack.style.cursor = 'grabbing';
        startX = e.pageX - posterTrack.offsetLeft;
        scrollLeft = posterTrack.scrollLeft;
        
        // 暂停动画
        posterTrack.style.animation = 'none';
    });

    posterTrack.addEventListener('mouseleave', () => {
        isMouseDown = false;
        posterTrack.style.cursor = 'grab';
        
        // 恢复动画
        posterTrack.style.animation = '';
    });

    posterTrack.addEventListener('mouseup', () => {
        isMouseDown = false;
        posterTrack.style.cursor = 'grab';
        
        // 恢复动画
        posterTrack.style.animation = '';
    });

    posterTrack.addEventListener('mousemove', (e) => {
        if (!isMouseDown) return;
        e.preventDefault();
        const x = e.pageX - posterTrack.offsetLeft;
        const walk = (x - startX) * 2;
        posterTrack.scrollLeft = scrollLeft - walk;
    });
});

// 添加视差滚动效果
window.addEventListener('scroll', () => {
    const posterShowcase = document.querySelector('.poster-showcase');
    const scrolled = window.pageYOffset;
    const rate = scrolled * 0.2;
    
    posterShowcase.style.transform = `translateY(${rate}px)`;
});
</script>

