import { Component, OnInit } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';
//import {DataFetchService} from '../../dashboard/data-fetch.service';
import {AuthService} from '../../home/auth.service';
import { HttpClient } from '@angular/common/http';
import {MatExpansionModule} from '@angular/material/expansion';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  panelOpenState = false;
  individual:any;
  MbtData:any={
   "EXECUTIVE":{
      "TYPE":"ESTJ",
      "DESCRIPTION":"ESTJs often find themselves in occupations that require thorough analysis, practical planning and organizational skills, process control and responsibility. ESTJs make good mid- and high-rank managers and executives. They succeed as military and police workers, politicians, engineers and entrepreneurs. They are found in technology companies among those who deal with practical aspects of technology (e.g. implementation specialists)",
      "CAREER_OPTION":{
         "Management":[
            "Management",
            "Bussiness Management",
            " Management in Public Sector",
            "Stock Broker",
            "Accounting"
         ],
         "TECHNICAL":[
            "Engineering"
         ],
         "Legal&Law":[
            "Military Training",
            "Police",
            "Security service"
         ]
      }
   },
   "LOGISTICIAN":{
      "TYPE":"ISTJ",
      "DESCRIPTION":"Due to their natural strengths ISTJs often find themselves in occupations that involve controlling production processes effectively, orientation to details, clear-cut planning, occupations that require responsibility and being an efficient worker. They are found across a wide range of industries and verticals, in organizations of all sizes. ISTJs succeed as military and police workers, engineers, auditors, lawyers, surgeons. They are found in technology companies among those who deal with the practical aspects of technology (e.g. implementation specialists). ISTJs make good project managers, mid-rank managers, department heads.",
      "CAREER_OPTION":{
         "Management":[
            "Management",
            "Admininstrative Managemnt"
         ],
         "TECHNICAL":[
            "Software Engineering",
            "Technical Education"
         ]
      }
   },
   "COMMANDER":{
      "TYPE":"ENTJ",
      "DESCRIPTION":"ENTJs often find themselves in occupations that require good analytical and planning skills. ENTJs build successful careers in those areas that require considerable organizational skills and intellectual effort, in occupations that present a challenge and call for creativity. They are greatly represented in technological and management consulting companies among engineers and developers, and among high- and mid-rank managers. They are also able to realize their potential in start-ups where they often fulfill management positions or take responsibility for the whole project.",
      "CAREER_OPTION":{
         "Management":[
            "Business Management",
            "Management Education",
            "Military Education",
            "Politics"
         ],
         "SocialService":[
            "Counseling"
         ],
         "Technical/Science":[
            "Engineering Jobs",
            "Insdustrial Management",
            "Manufacturing Management",
            "Higher Studies",
            "Software engineering"
         ]
      }
   },
   "ARCHITECT":{
      "TYPE":"INTJ",
      "DESCRIPTION":"Generally, INTJs have successful careers in areas requiring intense intellectual effort, those that present intellectual challenges, and require a creative approach. Due to the characteristics mentioned above, successful INTJs are found in technological companies, particularly in research and development, and among corporate lawyers, high- and mid-rank managers in technology companies and financial institutions.",
      "CAREER_OPTION":{
         "Technical/Sience":[
            "Software Engineer",
            "Natural Science",
            "Teaching"
         ],
         "Management":[
            "Management",
            "Entrepreneurship"
         ]
      }
   },
   "ENTREPRENEUR":{
      "TYPE":"ESTP",
      "DESCRIPTION":"ESTPs often find themselves in occupations that require prompt and active responses. ESTPs succeed as salespeople, crime and fraud investigators, sailors, racecar drivers, athletes, actors, entrepreneurs, rescue operation staff, and occasionally politicians and special combat forces. Many ESTPs are found among implementation and maintenance specialists",
      "CAREER_OPTION":{
         "Management":[
            "Business Management",
            "Sales/Marketing Specialist",
            "Entrepreneurship",
            "Stock Broker"
         ],
         "CustomerService":[
            "Customer Service"
         ]
      }
   },
   "VIRTUOSO":{
      "TYPE":"ISTP",
      "DESCRIPTION":"Due to their natural strengths ISTPs often find themselves in occupations that involve direct participation in manufacturing, the production or maintenance process, in fields that require a good understanding of details. ISTPs succeed as technicians, mechanics, electricians, electrical, mechanical and other maintenance and repair specialists, trouble-shooters, handymen, drivers, programmers, athletes. They are good in rescue operations and in any occupation that is action-oriented and requires specialized skills as well as analytical thinking.",
      "CAREER_OPTION":{
         "TECHNICAL":[
            "Computer Hardware",
            "Engineering"
         ]
      }
   },
   "DEBATER":{
      "TYPE":"ENTP",
      "DESCRIPTION":"Generally, ENTPs build successful careers in areas requiring intense intellectual effort, a creative approach, and those that present an intellectual challenge. Because of the characteristics mentioned above, ENTPs are often found in research, development, and analytical departments. ENTPs often make very successful careers in academia thanks to their strong and versatile way of thinking along with their great erudition",
      "CAREER_OPTION":{
         "TECHNICAL":[
            "Education",
            "Engineering",
            "Natural Science",
            "Information Systems"
         ],
         "Management":[
            "Counselling",
            "Business Management",
            "Managemen tof Education"
         ]
      }
   },
   "LOGICIAN":{
      "TYPE":"INTP",
      "DESCRIPTION":"Generally, INTPs build successful careers in fields requiring quite intense intellectual effort and that call for a creative approach. INTPs are often found in research, development and analytical departments. INTPs often make very successful careers in academia thanks to their originality and their strong and versatile way of thinkin",
      "CAREER_OPTION":{
         "Technical/Science":[
            "Education",
            "Natural Science",
            "Software Engneering",
            "Engineering"
         ]
      }
   },
   "CONSUL":{
      "TYPE":"ESFJ",
      "DESCRIPTION":"ESFJs often find themselves in occupations that involve either a lot of direct interaction with other people (e.g. clients, other staff members) or involve responsibility for critical tasks (e.g. those that require complete attention or that may have serious consequences), or both. Very often ESFJs realize their potential in health care and various community care organizations. Other favored areas of occupation include social work, service-oriented professions as well as teaching (often at elementary schools).",
      "CAREER_OPTION":{
         "Management":[
            "Management",
            "Public Administration",
            "Hotel and Restaurant managemrnt",
            "Sales/Marketing Specialist",
            "Fashion Merchandising"
         ],
         "SocialServices":[
            "Education"
         ]
      }
   },
   "DEFENDER":{
      "TYPE":"ISFJ",
      "DESCRIPTION":"ISFJs often find themselves in occupations that either involve a lot of interactions with other people and/or require meticulousness and diligence. They work in organizations of various sizes and in industries, where, as a rule, they work with people. Very often ISFJs realize their potential in health care (nurses, patient care and medical services, as well as administrative jobs) and various community care organizations. Other favored areas of occupation include social work and service-oriented professions.",
      "CAREER_OPTION":{
         "SocialService":[
            "Social Work",
            "Religios Education",
            "Education",
            "Child Care Management"
         ],
         "HealthCare":[
            "Health Care Administration",
            "Medical Records Administration"
         ],
         "CustomerService":[
            "Customer Service Specialist",
            "Real Estate",
            "Secretary and executive assistant",
            "Paralegal"
         ],
         "Arts":[
            "Translator",
            "Software Engineering",
            "Graphics Design and Multimedia",
            "Interior Design",
            "Engineering"
         ]
      }
   },
   "PROTAGONIST":{
      "TYPE":"ENFJ",
      "DESCRIPTION":"ENFJs often find themselves in occupations that require good interpersonal skills to establish productive collaboration as well as to establish or maintain effective work processes. ENFJs are one of the most “universal” personality types and they build successful careers in a broad range of organizations and occupations. There are many ENFJs found in mid- and high-rank management roles. Sales, various social services, counseling, teaching, healthcare, community care as well as legal and paralegal services are just some of the examples of favorable occupations for ENFJs",
      "CAREER_OPTION":{
         "SocialService":[
            "Counselling",
            "Social Work",
            "Education"
         ],
         "Technical/Science":[
            "Technical Science",
            "Software Engineering"
         ],
         "Management":[
            "Management",
            "Fashion Merchandising",
            "Politics"
         ]
      }
   },
   "ADVOCATE":{
      "TYPE":"INFJ",
      "DESCRIPTION":"INFJs are effective in occupations involving substantial intellectual work, caring for other people, and those that require creativity. INFJs build successful careers in a broad range of organizations. Social and community care services, counseling, teachers of the humanities and social sciences, healthcare workers (both in administration and in medical services), various service-oriented professions along with work in religious services and social movements are just some of the examples of occupations favorable to INFJs. Quite often, they are found in mid-rank management positions. For some of them, occupations in sciences or academia are also favorable.",
      "CAREER_OPTION":{
         "SocialService":[
            "Social Work",
            "Education"
         ],
         "Arts":[
            "Graphics and Multimedia",
            "Arts"
         ]
      }
   },
   "ENTERTAINER":{
      "TYPE":"ESFP",
      "DESCRIPTION":"Any activities requiring good performing or entertaining skills are very suitable for ESFPs. Certain marketing roles that benefit from such skills can be a good fit. ESFPs also often find themselves in occupations that involve direct communication with customers and audiences where similar skills are useful. They may work in organizations of various sizes and industries. Social work or social counselling is also an area favorable to ESFPs. ESFPs often realize their artistic abilities in media and entertainment organizations.",
      "CAREER_OPTION":{
         "Arts":[
            "Acting and Performances",
            "Dressmaking and Design",
            "Advertising"
         ],
         "CustomerService":[
            "Public relations",
            "Sales/Marketing Specialist",
            "Fitness"
         ],
         "Management":[
            "Fashion Merchandising"
         ]
      }
   },
   "ADVENTURER":{
      "TYPE":"ISFP",
      "DESCRIPTION":"ISFPs often find themselves in occupations that involve communication with customers or occupations that require a good sense of aesthetics such as: customer support roles, store sales associate roles (where aggressive selling is not required). Child care is a favorable area for ISFPs. Working with data and spreadsheets is also suitable. ISFPs are able to realize their aesthetic abilities in art, design, and creative media companies.",
      "CAREER_OPTION":{
         "VisualArtsAndMedia":[
            "Graphics Design and Multimedia",
            "Interior Design",
            "Artist/Animator",
            "Fashion Designer"
         ],
         "SocialService":[
            "Religious Education",
            "Child Care Management"
         ],
         "CustomerService":[
            "Customer Service Specialist"
         ],
         "HealthCare":[
            "Medical Records Administration"
         ]
      }
   },
   "CAMPAIGNER":{
      "TYPE":"ENFP",
      "DESCRIPTION":"ENFPs are well-suited to occupations involving a lot of intellectual work focused on the humanities and social sciences, which also requires creativity. For example, they make good life coaches, social workers, psychologists, addiction rehab counsellors, and other mental and community care staff. They are also successful in teaching subjects related to the humanities and social sciences. Additionally, they succeed as journalists and in various occupations requiring good communication skills.",
      "CAREER_OPTION":{
         "SocialService":[
            "Journalist/Reporter",
            "Psychology",
            "Counselling",
            "Fitness",
            "Nutrition",
            "Recreation Specialist",
            "Social Work",
            "Education"
         ],
         "Arts":[
            "Musician",
            "Performing Arts",
            "Literature and Writing",
            "Film"
         ],
         "Management":[
            "Public relations",
            "Marketing",
            "Fashion Merchandising"
         ]
      }
   },
   "MEDIATOR":{
      "TYPE":"INFP",
      "DESCRIPTION":"Overall, INFPs are effective in occupations involving a lot of intellectual work that is focused on the humanities and social sciences, the spirit and soul, inspirational activities, and those that require creativity. Social workers, psychologists, life coaches, addiction rehab counselors, mental and community care staff, elementary education, teaching, and creative script writing are just some of the examples of suitable occupations for INFPs. They are also successful in academia thanks to their intellectual strength.",
      "CAREER_OPTION":{
         "SocialService":[
            "Counselling",
            "Education"
         ],
         "Arts":[
            "Humanities",
            "Graphics Design and Multimedia",
            "Musician",
            "Literature and Writing",
            "Archeology",
            "Anthropology"
         ]
      }
   }
};


anaRe;analy;
  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{ticks:{
        fontColor:'white'
    }}], yAxes: [{     ticks: {
          max : 100,
          min : 0,
          fontColor: 'white'

        }}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end'

      }
    },
    legend: {
  display: true,
  labels: {
    fontColor: 'white' // legend color (can be hexadecimal too)
  },
}

};
  public barChartLabels: Label[] = ['sub1', 'sub2', 'sub3', 'sub4', 'sub5', 'sub6'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55], label: 'Marks' }
  ];

    public lineChartOptions: ChartOptions = {
      responsive: true,
      // We use these empty structures as placeholders for dynamic theming.
      scales: { xAxes: [{ticks:{
          fontColor:'white'
      }}], yAxes: [{     ticks: {
            max : 10,
            min : 0,
            fontColor: 'white'

          }}] },
      plugins: {
        datalabels: {
          anchor: 'end',
          align: 'end'

        }
      },
      legend: {
    display: true,
    labels: {
      fontColor: 'white' // legend color (can be hexadecimal too)
    },
  }

};

    public lineChartLabels: Label[] = ['s1', 's2', 's3', 's4', 's5', 's6', 's7','s8'];
    public lineChartType: ChartType = 'line';
    public lineChartLegend = true;
    public lineChartPlugins = [pluginDataLabels];

    public lineChartData: ChartDataSets[] = [
      { data: [6.5, 5.9, 8.0, 8.1, 5.6, 5.5, 4.0,7.8], label: 'GPA' }
    ];
    colors = [

    { // 2nd Year.
     backgroundColor: 'rgba(30, 169, 224, 0.8)',
     borderColor: 'rgba(225,10,24,0.2)',
       pointBackgroundColor: 'rgba(225,10,24,0.2)',
       pointBorderColor: '#fff',
       pointHoverBackgroundColor: '#fff',
       pointHoverBorderColor: 'rgba(225,10,24,0.2)',

    }
  ]


  public barChartLabels2: Label[] = ['s1', 's2', 's3', 's4', 's5', 's6', 's7','s8'];
  public barChartData2: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40,78], label: 'percentage' }
  ];

  userData:JSON;
  careeropt:any;
  studentGPA:any;
  constructor(private authservice:AuthService,private httpClient:HttpClient) {
    this.userData=this.authservice.getUserData();
    this.individual=this.MbtData[this.userData['ptype']];
    this.careeropt=Object.keys(this.individual['CAREER_OPTION']);
    this.httpClient.get('http://127.0.0.1:5002/analysis/'+this.userData['regno']).subscribe(data => {
      this.anaRe = data as JSON;
      this.analy=this.anaRe['analy'];
      this.authservice.updateAnaly(this.analy);
});

  }

  ngOnInit() {
    this.authservice.GpaofStudent.subscribe(message=>{
      this.studentGPA=message;
      this.lineChartLabels=Object.keys(this.studentGPA);
      this.lineChartLabels.pop();
      var dataArray=Object.values(this.studentGPA);
      dataArray=dataArray.map(Number);
      dataArray.pop();
      this.lineChartData=[
        {data:dataArray,label:'GPA'}
      ];

    });
    this.authservice.fetchGrades(this.userData['regno']);




  }
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
      console.log(event, active);
    }

    public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
      console.log(event, active);
    }

    dataFetch(){
      this.userData=this.authservice.getUserData();
      console.log(this.userData);
    }

}
