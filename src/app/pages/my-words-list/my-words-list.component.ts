import { Component, OnInit } from '@angular/core';
import { WordStorage } from 'src/app/model/word-storage';
import { StorageService } from 'src/app/service/storage.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-my-words-list',
  templateUrl: './my-words-list.component.html',
  styleUrls: ['./my-words-list.component.scss']
})
export class MyWordsListComponent implements OnInit {

  public page = 1;
  public pageSize = 4;
  public collectionSize!: any;

  public wordsList!: WordStorage[];
  public isHavingDataStorage: boolean = false;

  private localStorageData = this.storageService.getData(environment.storageKey);

  constructor(private storageService: StorageService) { }

  ngOnInit(): void {
    this.checkLocalStorageData();
    this.getWordsData();
  }

  checkLocalStorageData(): void {
    if(this.localStorageData <= 0 || !this.localStorageData) {
      this.isHavingDataStorage = false;
    } else  {
      this.isHavingDataStorage = true
    }
  }

  getWordsData(): void {
    // 1. map để thêm id
    // 2. slice array -> tạo 1 array mới copy từ array gốc với index bắt đầu và index kết thúc
    // page = 1, pageSize = 4 -> slice từ 0,4
    // page = 2, pageSize = 4 -> slice từ 5,8
    this.collectionSize = this.localStorageData?.length;
    this.wordsList = this.localStorageData
      ?.map((word: WordStorage, i: number) => ({id: i + 1, ...word}))
      ?.slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

  handleDelete(word: WordStorage) {
    // get word index
    const index = this.wordsList.findIndex((item) => {
      return item.word === word.word;
    });

    // delete from table - word no longer in table
    this.wordsList.splice(index, 1);

    // delete from localStorage - word no longer in localStorage
    this.localStorageData.splice(index, 1);
    this.storageService.setData(environment.storageKey, this.localStorageData);

    // Call to update table data
    this.getWordsData();

    // Show 'No words added yet' when delete all words
    this.checkLocalStorageData();
  }
}
