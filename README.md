# qrcodereader-jquery
QRCode Reader plugin for jquery
<pre>
$('#mycanvas').qrcodeReader({
autostop:true,
outputCanvas:canvas,//usefull if it use a video
onSuccess:function(r){
console.log(r)
},
onError:function(e){
console.log(e)
}
});

$('#mycanvas').trigger('qrcodereader.decode');//decode current image
$('#mycanvas').trigger('qrcodereader.start-scan');
$('#mycanvas').trigger('qrcodereader.stop-scan');
</pre>
It works with canvas or image.
