import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent {
  faqs = [
    {
      question: 'What is Bharat Spice World?',
      answer: 'Bharat Spice World is a premium exporter of high-quality Indian spices to global markets.'
    },
    {
      question: 'Where is your company based?',
      answer: 'We are based in India and operate across various international export zones.'
    },
    {
      question: 'Do you offer private labeling?',
      answer: 'Yes, we provide private labeling services for bulk export clients.'
    },
    {
      question: 'How do I place a bulk order?',
      answer: 'You can contact us through our website or email, and our export team will assist you.'
    },
    {
      question: 'Do your spices have certifications?',
      answer: 'Yes, our spices comply with FSSAI, APEDA, and international quality standards.'
    }
    // Add more Q&A as needed
  ];
}
