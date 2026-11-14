/* Bienvenida, presentación y guía RA — sin librerías adicionales */
(function(){
  const ready=()=> {
    const welcome=document.getElementById('mm-welcome');
    const start=document.getElementById('mm-start');
    const present=document.getElementById('mm-present');
    const help=document.getElementById('mm-ar-help');
    const arOpen=document.getElementById('open-ar');
    const arFrame=document.getElementById('ar-frame');
    const arPanel=document.getElementById('ar-panel');
    const close=document.getElementById('close-ar');
    start.addEventListener('click',()=>{welcome.hidden=true;});
    present.addEventListener('click',()=>{
      const active=document.body.classList.toggle('mm-presenting');
      present.textContent=active?'▣ Salir del modo exposición':'▣ Modo exposición';
      present.setAttribute('aria-pressed',String(active));
    });
    // Intercepta el acceso existente antes de que cargue el iframe y la cámara.
    arOpen.addEventListener('click',e=>{e.stopImmediatePropagation();help.hidden=false;},{capture:true});
    document.getElementById('mm-ar-cancel').addEventListener('click',()=>help.hidden=true);
    document.getElementById('mm-ar-launch').addEventListener('click',()=>{
      help.hidden=true;
      arFrame.src='./ar.html?v=neon2';
      arPanel.hidden=false;
    });
    close.addEventListener('click',()=>{arFrame.removeAttribute('src');});
    document.addEventListener('keydown',e=>{
      if(e.key==='Escape'){help.hidden=true;if(document.body.classList.contains('mm-presenting'))present.click();}
    });
  };
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',ready);else ready();
})();
