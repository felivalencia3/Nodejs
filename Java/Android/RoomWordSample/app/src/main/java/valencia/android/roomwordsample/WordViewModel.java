package valencia.android.roomwordsample;

import android.app.Application;
import android.arch.lifecycle.AndroidViewModel;
import android.arch.lifecycle.LiveData;

import java.util.List;

public class WordViewModel extends AndroidViewModel {
    private WordRepository wordRepository;
    private LiveData<List<Word>> mAllWords;
    public WordViewModel(Application application) {
        super(application);
        wordRepository = new WordRepository(application);
        mAllWords = wordRepository.getAllWords();
    }
    LiveData<List<Word>> getAllWords() { return mAllWords; }
    public void insert(Word word) {wordRepository.insert(word);}
}