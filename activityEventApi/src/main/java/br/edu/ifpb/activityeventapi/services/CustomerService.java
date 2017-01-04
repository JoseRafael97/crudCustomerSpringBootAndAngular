package br.edu.ifpb.activityeventapi.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.edu.ifpb.activityeventapi.model.Customer;
import br.edu.ifpb.activityeventapi.repositories.CustomerRepository;

/**
 * 
 * @author rafaelfeitosa
 *
 */
@Service
public class CustomerService {
	
	@Autowired
	private CustomerRepository customerRepository;
	
	
	public Customer saveCustomer(Customer customer){
		customerRepository.save(customer);
		
		return customer;
	}
	
	public Customer findById(Long id){
		return customerRepository.findOne(id);
	}
	

	public List<Customer> listAllCustomer(){
		return customerRepository.findAll();
	}
	
	
	public Customer editCustomer(Customer customer){
		customerRepository.save(customer);
		
		return customer;
	}
	
	public void removeCustomer(Long id){
		customerRepository.delete(id);
		
	}
	
	

}
