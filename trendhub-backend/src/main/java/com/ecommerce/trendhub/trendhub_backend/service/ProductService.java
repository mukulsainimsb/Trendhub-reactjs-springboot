package com.ecommerce.trendhub.trendhub_backend.service;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.StandardCopyOption;
import java.util.UUID;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public class ProductService {
	
public String uploadImage(String path,MultipartFile file) throws IOException {
		
		String name= file.getOriginalFilename();
		
		String randomId=UUID.randomUUID().toString();
		
		String filename=randomId.concat(name.substring(name.lastIndexOf(".")));
		
		File f=new File(path);
		if(!f.exists()) {
			f.mkdirs();
		}
		File targetFile = new File(f, filename);
		
		Files.copy(file.getInputStream(),targetFile.toPath(),StandardCopyOption.REPLACE_EXISTING);
      return filename;
	}
	
	
}
