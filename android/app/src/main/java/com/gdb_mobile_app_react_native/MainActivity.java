package com.gdb_mobile_app_react_native;

import android.content.Intent;
import com.facebook.react.ReactActivity;

public class MainActivity extends ReactActivity {

  public void onActivityResult(int requestCode, int resultCode, Intent data) {
    super.onActivityResult(resultCode, resultCode, data);
    MainApplication.getCallbackManager().onActivityResult(resultCode, resultCode, data);
  }

  /**
   * Returns the name of the main component registered from JavaScript. This is
   * used to schedule rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "gdb_mobile_app_react_native";
  }

}
