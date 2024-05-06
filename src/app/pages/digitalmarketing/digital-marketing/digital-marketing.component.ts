import { Component, ElementRef, OnInit } from '@angular/core';
import AOS from 'aos';
import { ApiService } from 'src/app/shared/api/api.service';

@Component({
  selector: 'app-digital-marketing',
  templateUrl: './digital-marketing.component.html',
  styleUrls: ['./digital-marketing.component.css']
})
export class DigitalMarketingComponent implements OnInit {

  isDarkTheme!: boolean;

  constructor(private elementRef: ElementRef, private api: ApiService) { }

  brandLogo = [
    {
      img: '../../../assets/carousel/one.svg'
    },
    {
      img: '../../../assets/carousel/two.svg'
    },
    {
      img: '../../../assets/carousel/three.svg'
    },
    {
      img: '../../../assets/carousel/4.png.svg'
    },
    {
      img: '../../../assets/carousel/one.svg'
    },
    {
      img: '../../../assets/carousel/5.png.svg'
    },
    {
      img: '../../../assets/carousel/6.png.svg'
    },
  ]

  our_stories = [
    {
      name: "Goldmiths Corpo Engagement rates.",
      num: "+30%",
    },
    {
      name: "Goldmiths Corpo Engagement rates.",
      num: "+30%",
    },
    {
      name: "Goldmiths Corpo Engagement rates.",
      num: "+30%",
    },
  ]

  tableData = [

    {
      img: "../../../assets/dm/table-img.svg",
      heading: "Search Engine",
      tail: "Optimization",
      desc: "Health and care consulting refers to the practice of providing expert advice and guidance.",
      link: "seoServices"
    },
    {
      img: "../../../assets/dm/paid-search.svg",
      heading: "Paid Search",
      tail: "Marketing",
      desc: "Paid search marketing involves placing targeted ads on search engine results pages to increase visibility and drive traffic to websites.",
      link: "payPerClick"
    },
    {
      img: "../../../assets/dm/conversion-rate.svg",
      heading: "Conversion Rate",
      tail: "Optimization",
      desc: "Conversion rate optimization (CRO) improves the percentage of website visitors who take a desired action, ultimately increasing the effectiveness of a website.",
      link: "socialMedia"
    },
    {
      img: "../../../assets/dm/social-media.svg",
      heading: "Social Media",
      tail: "Marketing",
      desc: "Social media marketing involves leveraging social platforms to connect with audiences, build brand awareness, and drive engagement and sales.",
      list: ["Social Media Design", "Custom ad strategy", "Advanced demographic targeting", "Social Media Management", "Unique ads campaigns"],
      link: "socialMedia"
    },
    {
      img: "../../../assets/dm/email.svg",
      heading: "Email marketing",
      tail: "Solutions",
      desc: "Providing financial advice, including cost reduction strategies, financial planning, and risk management.",
      link: "socialMedia"
    },
    {
      img: "../../../assets/dm/ppc.svg",
      heading: "Pay-Per-Click (PPC)",
      tail: "Advertising",
      desc: "Pay-per-click (PPC) advertising enables businesses to display ads on search engines and other platforms, paying only when users click on their ads.",
      link: "payPerClick"
    },
  ]

  ngOnInit(): void {
    this.isDarkTheme = this.api.isDarkTheme();
    AOS.init({
      duration: 2000,
    })
    this.themechange()
  }

  themechange() {
    this.api.themeChanged.subscribe((isDarkTheme: boolean) => {
      this.isDarkTheme = isDarkTheme;
    });
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  scrollToForm() {
    const footer = this.elementRef.nativeElement.querySelector('#form');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  }
  scrollToProcess() {
    const footer = this.elementRef.nativeElement.querySelector('#our-process');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  }
}
