import { Component, OnInit } from '@angular/core';
import { WordStorage } from 'src/app/model/word-storage';
import { StorageService } from 'src/app/service/storage.service';
import { WordService } from 'src/app/service/word.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-new-word',
  templateUrl: './new-word.component.html',
  styleUrls: ['./new-word.component.scss'],
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
  public isAddToListClicked: boolean = false;
  private randomNum!: number;
  private storageList: WordStorage[] = [];

  constructor(
    private wordService: WordService,
    private storageService: StorageService
  ) {}

  ngOnInit(): void {
    this.getWordData();
  }

  getRandomNumber() {
    return Math.floor(Math.random() * 20);
  }

  showNextWord() {
    this.getWordData();
  }

  addFavourite() {
    this.isAddToListClicked = !this.isAddToListClicked;

    // Nếu đã tồn tại localStorage Key
    if (localStorage.getItem(environment.storageKey)) {
      this.storageList = this.storageService.getData(environment.storageKey);

      const isAdded = this.storageList.some((item) => {
        return item.word === this.newWord;
      });
      // Trường hợp word đã có trong localStorage, button hiển thị "Remove"
      if (isAdded && !this.isAddToListClicked) {
        this.deleteItem();
        return;
      } else if (isAdded && this.isAddToListClicked) {
        //Trường hợp word đã có trong localStorage, button hiển thị "Add to my list"
        return;
      } else {
        // Trường hợp đã tổn tại localStorage, word chưa có trong localStorage
        this.addToStorageList();
      }
      this.storageService.setData(environment.storageKey, this.storageList);
    } else {
      // Nếu chưa tồn tại localStorage Key
      this.addToStorageList();
      this.storageService.setData(environment.storageKey, this.storageList);
    }
  }

  addToStorageList() {
    this.storageList.push({
      word: this.newWord,
      vn_meaning: this.wordVnDefinition,
      example: this.wordEnExample,
    });
  }

  deleteItem() {
    const index = this.storageList.findIndex((item) => {
      return item.word === this.newWord;
    });
    this.storageList.splice(index, 1);
    this.storageService.setData(environment.storageKey, this.storageList);
  }

  getWordData() {
    this.randomNum = this.getRandomNumber();

    this.wordService.getNewWord().subscribe((response) => {
      console.log(response.data);
      this.newWord = response.data[this.randomNum].word;
      this.wordType = response.data[this.randomNum].partOfSpeech;
      this.wordPhonetic = response.data[this.randomNum].phonetic;
      this.wordEnDefinition = response.data[this.randomNum].meaning.en_meaning;
      this.wordEnExample = response.data[this.randomNum].example.en_example;
      this.wordVnDefinition = response.data[this.randomNum].meaning.vn_meaning;
      this.wordVnExample = response.data[this.randomNum].example.vn_example;
      this.wordAudio = response.data[this.randomNum].audio;
      this.isAddToListClicked = response.data[this.randomNum].isAddedFavourite;
    });
  }
}
