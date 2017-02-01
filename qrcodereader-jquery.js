 (function ($) {

   'use strict';
 var QRCodeReader=window.QRCodeReader;
 delete window.QRCodeReader;
 function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('qrcodereader')
      var options = typeof option == 'object' && option;
      

      if (!data && typeof option == 'string') return
      if (!data) {
		  $this.data('qrcodereader', (data = new QRCodeReader(this, options)))
		  $this.bind('qrcodereader.decode',function(){
			 data.decode(); 
		  });
	  }
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.qrcodeReader

  $.fn.qrcodeReader             = Plugin
  $.fn.qrcodeReader.Constructor = QRCodeReader


  // NO CONFLICT
  // ===================

  $.fn.qrcodeReader.noConflict = function () {
    $.fn.qrcodeReader = old
    return this
  }

}(jQuery)); 
