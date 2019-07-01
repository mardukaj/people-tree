function lodashFindBy(array, propertyName, propertyValue) {
    return _.find(array, [propertyName, propertyValue]);
}
function lodashFilterBy(array, propertyName, propertyValue) {
    return _.filter(array, [propertyName, propertyValue]);
}
function lodashDelete(array, object) {
    return _.without(array, object);
}

function ToDoPersons(){
  this.persons = [];
}

ToDoPersons.prototype.addPerson= function(person){
  this.persons.push(person)
}
ToDoPersons.prototype.getAllPersons= function(){
  return this.persons
}
ToDoPersons.prototype.deletePerson = function(person){
 this.persons =  lodashDelete(this.persons, person);
}

ToDoPersons.prototype.getTopLayerParentIdForPerson = function(person){
  		var tempParentId = person.parent_id;

		var tempParentObj = {};
	
		while(tempParentId != null){

			tempParentObj = lodashFindBy(this.persons, 'id', tempParentId);

			if(tempParentObj){
				
				if(tempParentObj.parent_id != null){
					tempParentId = lodashFindBy(this.persons, 'id', tempParentObj.parent_id).parent_id;
					if(tempParentId == null){
						tempParentId = null;

						return (lodashFindBy(this.persons, 'id', tempParentObj.parent_id)).id;
					}
					
				}else{
					tempParentId = null;

					return tempParentObj.id;
				}
			}else{
				tempParentId = null;
			}
		}
}

ToDoPersons.prototype.getNumberOfAncestorsForPerson = function(person){
  		var tempParentId = person.parent_id;
		var ancestors = [];
		var tempParentObj = {};
	
		while(tempParentId != null){

			tempParentObj = lodashFindBy(this.persons, 'id', tempParentId);
			ancestors.push(tempParentObj);
			if(tempParentObj){
				if(tempParentObj.parent_id != null){
					tempParentId = lodashFindBy(this.persons, 'id', tempParentObj.parent_id).parent_id;
					if(tempParentId == null){
						tempParentId = null;
						ancestors.push(lodashFindBy(this.persons, 'id', tempParentObj.parent_id));
						return ancestors.length;
					}
				}else{
					tempParentId = null;
					return ancestors.length;
				}
			}else{
				tempParentId = null;
				return ancestors.length;
			}
		}
}

ToDoPersons.prototype.getTopLayerParents = function(){
	var ancestors = [];
	for(i=0; i<=this.persons.length-1;i++){
		var tmpPersonId = this.getTopLayerParentIdForPerson(this.persons[i]);

		if(tmpPersonId){
			ancestors.push("id: " + this.persons[i].id + " => {id: " + tmpPersonId + ", parent_id: " + lodashFindBy(this.persons, 'id', tmpPersonId).parent_id  + "}");
		}else{
			ancestors.push("id: " + this.persons[i].id + " => no parent");
		}		

	}
	
	return ancestors;
}

let persons, person, person2, person3, person4, person5;

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

	persons.addPerson(person);
	persons.addPerson(person2);
	persons.addPerson(person3);
	persons.addPerson(person4);
	persons.addPerson(person5);

	var tmpPersons = persons.getTopLayerParents();
	var stringResult = '';
	for (var i = 0; i <= tmpPersons.length - 1; i++) {
		stringResult = stringResult + "<br>" + tmpPersons[i];
	}
	document.getElementById("result").innerHTML = stringResult;
