function compareArrays(arr1, arr2) {
  if (arr1.length != arr2.length) {
        return false;
      }
      return arr1.every((element, index) => element === arr2[index]);
    }

function getUsersNamesInAgeRange(users, gender) {
  const userGender = users.filter(users => users.gender == gender)
  const ages = userGender.map((user) => user.age)
  if (ages.length == 0){
    return 0
  }
  
    const averageAge = ages.reduce((acc, age) => acc + age, 0) / ages.length
    return averageAge;  
}
