package br.com.altice.sequence.service;

import javax.enterprise.context.ApplicationScoped;

import io.quarkus.cache.CacheResult;

@ApplicationScoped
public class AlticciService {
	
	private Long ZERO = 0L;
	private Long ONE = 1L;
	private Long TWO = 2L;
	
	public Long nextSequence(Long n) {		
		if(n > TWO) {
			return nextSequence(n - 3) + nextSequence(n - 2);
		}else {
			if(n <= ZERO) {
	            return ZERO;
	        }else {
	        	 return ONE;
	        }
		}
		
    }

	
}
