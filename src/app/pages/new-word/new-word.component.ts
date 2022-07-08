import { Component, OnInit } from '@angular/core';
import { WordService } from 'src/app/service/word.service';

@Component({
  selector: 'app-new-word',
  templateUrl: './new-word.component.html',
  styleUrls: ['./new-word.component.scss']
})
export class NewWordComponent implements OnInit {

  public newWord!: string;
  public wordType!: string;
  public wordEnDefinition!: string;
  public wordEnExample!: string;
  public wordVnDefinition!: string;
  public wordVnExample!: string;
  public wordPhonetic!: string;
  public wordAudio!: string;
  private randomNum!: number

  constructor(private wordService: WordService) { }

  ngOnInit(): void {
    this.randomNum = this.getRandomNumber()

    this.wordService.getNewWord().subscribe((response) => {
      console.log(response.data);
      this.newWord = response.data[this.randomNum].word;
      this.wordType = response.data[this.randomNum].partOfSpeech;
      this.wordPhonetic = response.data[this.randomNum].phonetic
      this.wordEnDefinition = response.data[this.randomNum].meaning.en_meaning;
      this.wordEnExample = response.data[this.randomNum].example.en_example;
      this.wordVnDefinition = response.data[this.randomNum].meaning.vn_meaning;
      this.wordVnExample = response.data[this.randomNum].example.vn_example;
      this.wordAudio = response.data[this.randomNum].audio
    })
  }

  getRandomNumber() {
    return Math.floor(Math.random() * 20);
  }

  showNextWord() {
    this.getWordData()
  }

  addFavourite() {
    
  }

  getWordData() {
    this.randomNum = this.getRandomNumber()

    this.wordService.getNewWord().subscribe((response) => {
      console.log(response.data);
      this.newWord = response.data[this.randomNum].word;
      this.wordType = response.data[this.randomNum].partOfSpeech;
      this.wordPhonetic = response.data[this.randomNum].phonetic
      this.wordEnDefinition = response.data[this.randomNum].meaning.en_meaning;
      this.wordEnExample = response.data[this.randomNum].example.en_example;
      this.wordVnDefinition = response.data[this.randomNum].meaning.vn_meaning;
      this.wordVnExample = response.data[this.randomNum].example.vn_example;
      this.wordAudio = response.data[this.randomNum].audio
    })
  }



}
