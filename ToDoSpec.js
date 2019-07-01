describe('Top Layer Parent App', ()=>{
  let persons, person, person2, person3, person4, person5;
  beforeEach(function(){
	 persons = new ToDoPersons();
	
	 person = {
		 id: 1, parent_id: 2
	 }
	 person2 = {
		 id: 2, parent_id: 3
	 }
	 person3 = {
		 id: 3, parent_id: null
	 }
	 person4 = {
		 id: 4, parent_id: null
	 }
	 person5 = {
		 id: 5, parent_id: 4
	 }
	 
  })

	describe('Testing the functionality, adding new person to people list', ()=>{
	  it('should add an item', ()=>{

		persons.addPerson(person);
		expect(persons.getAllPersons().length).toBe(1);
	  })
	})

	describe('Testing the functionality, removing person from people list', ()=>{
	 it('should delete an item', ()=>{

		 persons.addPerson(person)
		 persons.addPerson(person2)
		persons.deletePerson(person)
		expect(persons.getAllPersons().length).toBe(1);
	  })
	}) 

	describe('Testing the functionality, return top layer parent id for given person', ()=>{
	  it('should return top parent id', function(){

		 persons.addPerson(person)
		 persons.addPerson(person2)
		 persons.addPerson(person3)
		 persons.addPerson(person4)
		 persons.addPerson(person5)
	   
		expect(persons.getTopLayerParentIdForPerson(person)).toBe(3);
	  })
	})
	  
	describe('Testing the functionality, return all ancestors for given person', ()=>{
	  it('should return number of total ancestors', function(){

		 persons.addPerson(person)
		 persons.addPerson(person2)
		 persons.addPerson(person3)
		 persons.addPerson(person4)
		 persons.addPerson(person5)
		 
		expect(persons.getNumberOfAncestorsForPerson(person)).toBe(2);
	  })
	}) 
	
	describe('Testing the functionality, return all top layer parents for each person', ()=>{
	  it('should return top parent for all persons', function(){

		 persons.addPerson(person)
		 persons.addPerson(person2)
		 persons.addPerson(person3)
		 persons.addPerson(person4)
		 persons.addPerson(person5)
		 
		expect(persons.getTopLayerParents()[0]).toBe('id: 1 => {id: 3, parent_id: null}');
		expect(persons.getTopLayerParents()[1]).toBe('id: 2 => {id: 3, parent_id: null}');
		expect(persons.getTopLayerParents()[2]).toBe('id: 3 => no parent');
		expect(persons.getTopLayerParents()[3]).toBe('id: 4 => no parent');
		expect(persons.getTopLayerParents()[4]).toBe('id: 5 => {id: 4, parent_id: null}');
	  })
	}) 

})



