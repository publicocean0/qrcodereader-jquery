# qrcodereader-jquery
QRCode Reader plugin for jquery
<pre>
$('#mycanvas').qrcodeReader({
onSuccess:function(r){
console.log(r)
},
onError:function(e){
console.log(e)
}
});

$('#mycanvas').trigger('qrcodereader.decode');
</pre>
It works with canvas or image.
