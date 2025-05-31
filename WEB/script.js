<script>
  // 关闭弹窗函数
  function closeCardLightbox() {
    document.getElementById('cardLightbox').style.display = 'none';
  }

  // 遍历所有卡片，添加点击事件
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
      const title = card.querySelector('h3')?.innerText || "";
      const fullText = card.querySelector('p')?.innerText || "";
      const linkHTML = card.querySelector('.btn-group')?.outerHTML || "";
      const imgSrc = card.getAttribute("data-img");

      // 更新弹窗内容
      document.getElementById('cardContent').innerHTML = `
        <h3 style="color:#2C3E50;margin-top:0;">${title}</h3>
        <p style="margin:1rem 0;">${fullText}</p>
        ${linkHTML}
      `;
      document.getElementById("lightboxImg").src = imgSrc;
      document.getElementById('cardLightbox').style.display = 'flex';
    });
  });

  // 避免点击弹窗内部关闭
  document.querySelector('.lightbox-content').addEventListener('click', function(event) {
    event.stopPropagation();
  });
</script>
