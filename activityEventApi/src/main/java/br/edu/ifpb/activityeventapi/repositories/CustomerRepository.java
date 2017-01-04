package br.edu.ifpb.activityeventapi.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import br.edu.ifpb.activityeventapi.model.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Long>{

}
