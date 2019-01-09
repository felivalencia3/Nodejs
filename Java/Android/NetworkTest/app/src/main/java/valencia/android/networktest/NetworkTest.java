package valencia.android.networktest;

import android.app.Application;
import android.content.Context;

public class NetworkTest extends Application {
    private static Context context;

    public void onCreate() {
        super.onCreate();
        NetworkTest.context = getApplicationContext();
    }

    public static Context getContext() {
        return NetworkTest.context;
    }
}
