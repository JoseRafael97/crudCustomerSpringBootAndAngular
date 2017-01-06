package br.edu.ifpb.activityeventapi.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import br.edu.ifpb.activityeventapi.model.Customer;
import br.edu.ifpb.activityeventapi.services.CustomerService;


@RestController
public class CustomerController {
	
	@Autowired
	private CustomerService service;
	
	private static final String BASE_URI = "/customer";
	
	@RequestMapping(method = RequestMethod.POST, value = BASE_URI, consumes=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Customer> saveCustomer(@RequestBody Customer customer) {		
		Customer c = service.saveCustomer(customer);
		return new ResponseEntity<Customer>(c, HttpStatus.OK);
	}
	
	@RequestMapping(method = RequestMethod.GET, value= BASE_URI+"/{id}")
	public ResponseEntity<Customer> findById(@PathVariable Long id){

		Customer customer = service.findById(id); 
		return new ResponseEntity<Customer>(customer, HttpStatus.OK);
	}
	
	
	@RequestMapping(method = RequestMethod.PUT, value= BASE_URI)
	public ResponseEntity<Customer> update(@RequestBody Customer customer) {
		Customer customerUp = service.editCustomer(customer);
		return new ResponseEntity<Customer>(customerUp, HttpStatus.OK);
	}
	
	@RequestMapping(method = RequestMethod.GET, value = BASE_URI)
	public ResponseEntity<List<Customer>> findAll() {
		List<Customer> customers = service.listAllCustomer();

		return new ResponseEntity<List<Customer>>(customers, HttpStatus.OK);
	}
	
	@RequestMapping(method = RequestMethod.DELETE, value= BASE_URI+"/{id}")
	public void removeCustomer(@PathVariable Long id){

		service.removeCustomer(id); 
	}
	

}
