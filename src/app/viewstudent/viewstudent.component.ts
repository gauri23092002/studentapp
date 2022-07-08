import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewstudent',
  templateUrl: './viewstudent.component.html',
  styleUrls: ['./viewstudent.component.css']
})
export class ViewstudentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
data=[{"name":"Rahul","age":21,"photo":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiZ0pyA4fML_-8Ya620CSSjy5oEaEAVRzx_w&usqp=CAU"},
{"name":"gauri","age":20,"photo":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGGhUup5MhB09_I9DWoCbCtLyC1PvuvaRWyw&usqp=CAU"},
{"name":"Theertha","age":12,"photo":"https://media.istockphoto.com/photos/cute-baby-girl-outdoors-picture-id498769811?s=612x612"},
{"name":"niboo","age":2,"photo":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn2okhrfDUlOUm1YLf5VHaul6FIMNfupoYvQ&usqp=CAU"},
{"name":"kiran","age":40,"photo":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBAudFY0SvYbnd9p_cY24l6XdyyHrdEaZR1Q&usqp=CAU"},
{"name":"varun","age":99,"photo":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4RhPpT09blCp_snS4d8Ms04g7_sPonHwDnQ&usqp=CAU"}
]

}
