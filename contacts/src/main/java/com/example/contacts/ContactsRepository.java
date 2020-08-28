package com.example.contacts;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface ContactsRepository extends CrudRepository <Contact,Long>{

    
}
