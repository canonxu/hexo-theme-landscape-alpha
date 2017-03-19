var fs = require('fs');

hexo.extend.filter.register('before_post_render', function(data){
	
	// add seperate line
	
	// add copyright
	if(data.copyright !== false) {
		data.content += '\n___\n';
		// add permalink 
		var permalink = '<center>' + '本文永久链接：' + data.permalink + '</center>';
		data.content += permalink;

		try {
			var file_content = fs.readFileSync('source/copyright.md');
			if(file_content && data.content.length > 50) 
			{
				data.content += file_content;
			}
		} catch (err) {
			if (err.code !== 'ENOENT') throw err;
			
			// No process for ENOENT error
		}

	}	

	return data;
});
