    var student = {
                        'ID':'',
                        'name':'',
                        'surname':'',
                        'age':'',
                        "position":'At trainship',
                         'courses': [
                             {'courseID':'CS102',
                                 'grade':''
                             }
                         ],
                calcGPA : function() {
                    var gpa = 0;
                    for (var i=0; i<this.courses.length; i++) {
                        gpa += this.courses[i].grade;
                    }
                    gpa/=this.courses.length;
                    return gpa;
                }
                };

                var s1 = student;
                s1['ID'] = "200104005";
                s1['fName'] = "At run";
                for(var i=0; i<5; i++) {
                    s1['courses'][i] = {'courseID':'c'+i, 'grade':Math.random()*100+1};
                }
      var gpa = s1.calcGPA();



