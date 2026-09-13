const form=document.getElementById('request-form');
const dialog=document.getElementById('preview-dialog');
const message=document.getElementById('message');
form.addEventListener('submit',event=>{
 event.preventDefault();
 const data=new FormData(form);
 const area=data.get('area');
 message.textContent=`Olá, SLVY! Gostaria de conversar sobre uma reforma.\n\nAmbiente: ${data.get('tipo')}\nLocalização: ${String(data.get('bairro')).trim()}${area?'\nÁrea aproximada: '+area+' m²':''}\n\nO que preciso:\n${String(data.get('descricao')).trim()}\n\nComo podemos combinar os próximos passos?`;
 document.getElementById('copy-status').textContent='';
 dialog.showModal();
});
document.querySelector('.close').addEventListener('click',()=>dialog.close());
document.getElementById('copy').addEventListener('click',async()=>{
 try {await navigator.clipboard.writeText(message.textContent);document.getElementById('copy-status').textContent='Mensagem copiada. Nenhum envio foi realizado.';}
 catch {document.getElementById('copy-status').textContent='Selecione e copie o texto da mensagem acima.';}
});
dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
