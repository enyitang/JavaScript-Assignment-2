
//variable Declaration
const Jamb2024Students = [
    {
      "firstName": "Joseph",
      "lastName": "Enyitang",
      "email": "enyitang56@gmail.com",
      "score": 85,
      "Stud_regNumber": "STU_01",
      "state": "CCr",
      "city": "Los Angeles",
      "gender": "Male"
    },
    {
      "firstName": "Mary",
      "lastName": "Smith",
      "email": "marysmith@gmail.com",
      "score": 92,
      "Stud_regnumber": "STU_02",
      "state": "New York",
      "city": "New York City",
      "gender": "Female"
    },
    {
      "firstName": "Michael",
      "lastName": "Johnson",
      "email": "michaeljohnson@gmail.com.com",
      "score": 78,
      "Stu_regNumber": "STU_03",
      "state": "Texas",
      "city": "Houston",
      "gender": "Male"
    },
    {
      "firstName": "Emily",
      "lastName": "Monday",
      "email": "emilybrown@gmail.com",
      "score": 88,
      "Stu_regNumber": "STU_04",
      "state": "Florida",
      "city": "Miami",
      "gender": "Female"
    },
    {
      "firstName": "William",
      "lastName": "Martinez",
      "email": "williammartinez@gmail.com",
      "score": 79,
      "Stu_regNumber": "STU_05",
      "state": "California",
      "city": "San Francisco",
      "gender": "Male"
    },
    {
      "firstName": "Emma",
      "lastName": "Taylor",
      "email": "emmataylor@gmail.com",
      "score": 95,
      "Stu_regNumber": "STU_06",
      "state": "Illinois",
      "city": "Chicago",
      "gender": "Female"
    },
    {
      "firstName": "Alexander",
      "lastName": "Anderson",
      "email": "alexanderanderson@gmail.com",
      "score": 82,
      "Stu_regNumber": "STU_07",
      "state": "Texas",
      "city": "Dallas",
      "gender": "Male"
    },
    {
      "firstName": "Olivia",
      "lastName": "Wilson",
      "email": "oliviawilson@gmail.com",
      "score": 90,
      "Stu_regNumber": "STU_08",
      "state": "Florida",
      "city": "Orlando",
      "gender": "Female"
    },
    {
      "firstName": "Daniel",
      "lastName": "Thomas",
      "email": "danielthomas@gmail.com",
      "score": 85,
      "Stu_regNumber": "STU_09",
      "state": "California",
      "city": "San Diego",
      "gender": "Male"
    },
    {
      "firstName": "Sophia",
      "lastName": "Garcia",
      "email": "sophiagarcia@gmail.com",
      "score": 91,
      "Stu_regNumber": "STU_10",
      "state": "New York",
      "city": "Buffalo",
      "gender": "Female"
    },
    {
      "firstName": "Matthew",
      "lastName": "Rodriguez",
      "email": "matthewrodriguez@gmail.com",
      "score": 84,
      "Stu_regNumber": "STU_11",
      "state": "Texas",
      "city": "Austin",
      "gender": "Male"
    },
    {
      "firstName": "Ava",
      "lastName": "Hernandez",
      "email": "avahernandez@gmail.com",
      "score": 93,
      "Stu_regNumber": "STU_12",
      "state": "Florida",
      "city": "Tampa",
      "gender": "Female"
    },
    {
      "firstName": "Ethan",
      "lastName": "Lopez",
      "email": "ethanlopez@gmail.com",
      "score": 87,
      "Stu_regNumber": "STU_13",
      "state": "California",
      "city": "Sacramento",
      "gender": "Male"
    },
    {
      "firstName": "Mia",
      "lastName": "Perez",
      "email": "miaperez@example.com",
      "score": 89,
      "Stu_regNumber": "STU_14",
      "state": "New York",
      "city": "Rochester",
      "gender": "Female"
    },
    {
      "firstName": "James",
      "lastName": "Gonzalez",
      "email": "jamesgonzalez@gmail.com",
      "score": 81,
      "Stu_regNumber": "STU_15",
      "state": "Texas",
      "city": "San Antonio",
      "gender": "Male"
    }
  ]

  //Assignment 1: To return all students who are from California.
  
  const Studentsfromcalifonia = Jamb2024Students.filter((each)=>{
    return each.state == "California"
  })

  console.log(Studentsfromcalifonia)



  //Assignment 2: To return all female students.

  const female_Students = Jamb2024Students.filter((each)=>{
    return each.gender == "Female"
  })

  console.log(female_Students)



  //Assignment 3:  To return the firstName and score for each student.

  const Stu_firstNamesAndScore = Jamb2024Students.map((each)=>{
    return `${each.firstName} ${each.score}`
  })

  console.log(Stu_firstNamesAndScore)


 // Assignment 4: Calculate the average score of all students.

    const totalStudents = Jamb2024Students.length;
    const totalScores = Jamb2024Students.reduce((sum, student) => sum + student.score, 0);
    const averageScore = totalScores / totalStudents;
 
    console.log(averageScore);


    //After running my code the result was 86.6 as the avariage score.