var qList=[
  {
    "index": 42663,
    "votes": 86,
    "tags": [
      "java",
      "android"
    ],
    "timestamp": 1398729314,
    "question": "Unfortunately MyApp has stopped. How can I solve this?",
    "answers": 1,
    "content": "<p>I am developing an application  and everytime I run it  I get the message:</p>\\n\\n<blockquote>\\n  <p>Unfortunately  MyApp has stopped.</p>\\n</blockquote>\\n\\n<p>What can I do to solve this?</p>\\n\\n<hr/>\\n\\n<p><em>About this question - obviously inspired by <a href=\\http://stackoverflow.com/questions/3988788/what-is-a-stack-trace-and-how-can-i-use-it-to-debug-my-application-errors\\\">What is a stack trace  and how can I use it to debug my application errors?</a>  there are lots of questions stating that their application has crashed  without any further detail. This question aims to instruct novice Android programmers on how to try and fix their problems themselves  or ask the right questions.</em></p>\\n\"",
    "reco2": "Java Generics Compilation Error - Do not understand the error",
    "reco3": "application Crashed in running to phone android",
    "reco1": "How to use docxj4 in Android project"
  },
  {
    "index": 102670,
    "votes": 15,
    "tags": [
      "java",
      "android"
    ],
    "timestamp": 1392221646,
    "question": "Total arena pages for JIT - what does it mean?",
    "answers": 1,
    "content": "<p>I am getting logcat output as follows:</p>\\n\\n<pre><code>02-12 20:06:18.515  11470-11470/? D/dalvikvm? GC_EXTERNAL_ALLOC freed 3K  48% free 3188K/6023K  external 7949K/8580K  paused 29ms\\n02-12 20:06:18.804  11470-11470/? D/dalvikvm? GC_EXTERNAL_ALLOC freed &lt;1K  48% free 3189K/6023K  external 13255K/13400K  paused 28ms\\n02-12 20:06:19.406  11470-11470/? D/dalvikvm? GC_EXTERNAL_ALLOC freed &lt;1K  48% free 3189K/6023K  external 14706K/16754K  paused 56ms\\n02-12 20:06:19.914  11470-11475/? I/dalvikvm? Total arena pages for JIT: 11\\n</code></pre>\\n\\n<p>What does \\Total arena pages for JIT\\\" really mean?</p>\\n\"",
    "reco2": "Variable doesn&#39;t change for another class",
    "reco3": "I am trying to build a sample App from a Third Party SDK. I am getting a class not found exception and I am not able to figure out why?",
    "reco1": "LoadArenas returning a wierd String"
  },
  {
    "index": 4941,
    "votes": 11,
    "tags": [
      "java",
      "android"
    ],
    "timestamp": 1404153188,
    "question": "sound not playing in android &gt; icecream sandwich",
    "answers": 4,
    "content": "<p>I was using following code to play sound. Everything worked fine before ICS. But on ICS and higher versions no sound is heard. There is no error  but no sound can be heard.</p>\\n\\n<p>EDIT: Note  the following code is triggered by a broadcase receiver. BroadCast receiver invokes a async task. In the post process method of asycn task the following method is called.</p>\\n\\n<p>What could the error possibly be?</p>\\n\\n<pre><code>public static void playSound(final Context context  final int volume \\n            Uri uri  final int stream  int maxTime  int tickTime) {\\n        //stopPlaying();\\n        /*\\n        if (stream &lt; 0 || stream &gt; 100) {\\n            throw new IllegalArgumentException(\\n                    \\volume must be between 0 and 100 .Current volume \\\"\\n                            + volume);\\n        }*/\\n\\n        final AudioManager mAudioManager = (AudioManager) context\\n                .getSystemService(Context.AUDIO_SERVICE);\\n\\n        int deviceLocalVolume = getDeviceVolume(volume \\n                mAudioManager.getStreamMaxVolume(stream));\\n\\n        Log.d(TAG \\n                \\\"device max volume = \\\"\\n                        + mAudioManager.getStreamMaxVolume(stream)\\n                        + \\\" for streamType \\\" + stream);\\n        Log.d(TAG  \\\"playing sound \\\" + uri.toString()\\n                + \\\" with device local volume \\\" + deviceLocalVolume);\\n\\n        final int oldVolume = mAudioManager.getStreamVolume(stream);\\n\\n        // set the volume to what we want it to be. In this case it's max volume\\n        // for the alarm stream.\\n        Log.d(Constants.APP_TAG  \\\"setting device local volume to \\\" + deviceLocalVolume);\\n        mAudioManager.setStreamVolume(stream  deviceLocalVolume \\n                AudioManager.FLAG_REMOVE_SOUND_AND_VIBRATE);\\n\\n         final MediaPlayer mediaPlayer = new MediaPlayer();\\n         golbalMMediaPlayer = mediaPlayer;\\n\\n        try {\\n             final OnPreparedListener OnPreparedListener = new OnPreparedListener() {\\n\\n                @Override\\n                public void onPrepared(final MediaPlayer mp) {\\n                    Log.d(TAG  \\\"onMediaPlayercompletion listener\\\");\\n                    mp.start();\\n                    countDownTimer.start();\\n                }\\n            };\\n\\n            mediaPlayer.setDataSource(context.getApplicationContext()  uri);\\n            mediaPlayer.setAudioStreamType(stream);\\n            mediaPlayer.setLooping(false);\\n            mediaPlayer.setOnPreparedListener(OnPreparedListener);\\n            mediaPlayer.setOnCompletionListener(new OnCompletionListener() {\\n\\n                @Override\\n                public void onCompletion(MediaPlayer mp) {\\n                    Log.d(Constants.APP_TAG  \\\"Entered onCompletion listener of mediaplayer\\\");\\n                    mAudioManager.setStreamVolume(stream  oldVolume \\n                            AudioManager.FLAG_REMOVE_SOUND_AND_VIBRATE);\\n                    try{\\n                    if(mediaPlayer != null &amp;&amp; mediaPlayer.isPlaying()){\\n                        mediaPlayer.release();\\n                    }\\n                    }catch(Exception ex){\\n                        Log.e(Constants.APP_TAG  \\\"error on oncompletion listener\\\"  ex);\\n                    }\\n                }\\n\\n            });\\n\\n             CountDownTimer timer = new CountDownTimer(maxTime*1000  tickTime*1000) {\\n\\n                @Override\\n                public void onTick(long millisUntilFinished) {\\n                    Log.d(TAG  \\\"tick while playing sound \\\");\\n                }\\n\\n                @Override\\n                public void onFinish() {\\n                    Log.d(TAG  \\\"timer finished\\\");\\n                    stopPlaying();\\n                }\\n            };\\n\\n            countDownTimer = timer;\\n\\n            mediaPlayer.prepareAsync();\\n\\n        } catch (Exception e) {\\n            Log.e(TAG  \\\"problem while playing sound\\\"  e);\\n        } finally {\\n\\n        }\\n    }\\n</code></pre>\\n\\n<p>LOGS:</p>\\n\\n<pre><code>:07-01 00:00:00.030: D/beephourly(9500): device max volume = 7 for streamType 5\\n07-01 00:00:00.030: D/beephourly(9500): playing sound content://media/internal/audio/media/166 with device local volume 7\\n07-01 00:00:00.030: D/beephourly(9500): setting device local volume to 7\\n07-01 00:00:00.080: D/beephourly(9500): vibrating with pattern = [J@428bae20\\n07-01 00:00:00.090: D/beephourly(9500): will show normal notification\\n07-01 00:00:00.100: D/beephourly(9500): notification is enabled\\n07-01 00:00:00.100: D/usersettings(9500): hr = 0\\n07-01 00:00:00.110: D/beephourly(9500): onMediaPlayercompletion listener\\n07-01 00:00:00.451: D/beephourly(9500): tick while playing sound \\n07-01 00:00:20.460: D/beephourly(9500): timer finished\\n07-01 00:00:20.460: D/beephourly(9500): got request to stop playing\\n07-01 00:00:20.460: D/beephourly(9500): cancelling countdowntimer\\n07-01 00:00:20.460: D/beephourly(9500): releasing mediaplayer now\\n</code></pre>\\n\"",
    "reco2": "Java Detecing when sound stops",
    "reco3": "Having trouble getting sound to work",
    "reco1": "Java Sound plays once and then doesn&#39;t play again"
  },
  {
    "index": 54086,
    "votes": 10,
    "tags": [
      "java",
      "android"
    ],
    "timestamp": 1397412487,
    "question": "Differences between IntelliJ IDEA 13 and Android Studio",
    "answers": 2,
    "content": "<p>For a long time Android Studio provided better ide integration compared to IntelliJ IDEA.</p>\\n\\n<p>To my knowledge version 13 of the IntelliJ IDE does include all the features that previous versions were lacking.</p>\\n\\n<p>My question is: Are there still any exclusive features of Android Studio so that it makes sense to have a separate installation besides IntelliJ IDEA?</p>\\n",
    "reco2": "See which methods of one class are used in another in IDEA",
    "reco3": "IntelliJ IDEA 14 where can I get Android Designer?",
    "reco1": "Is Intellij Idea IDE stable for Android Development?"
  },
  {
    "index": 214580,
    "votes": 10,
    "tags": [
      "java",
      "android"
    ],
    "timestamp": 1404844042,
    "question": "Using 1.7 requires compiling with Android 4.4 (KitKat); currently using API 14",
    "answers": 2,
    "content": "<p>So i recently switched the target of my android project to 4.0. Now i have practically errors on every line and the error \\Using 1.7 requires compiling with Android 4.4 (KitKat); currently using API 14\\\" on the console. So my question is  how do i change this to work with api 14 and compile? thanks. </p>\\n\"",
    "reco2": "Android map application is not working",
    "reco3": "Android target API - Can&#39;t create project with activity",
    "reco1": "Make home icon clickable on the action bar  under api level 14"
  },
  {
    "index": 134378,
    "votes": 9,
    "tags": [
      "java",
      "android"
    ],
    "timestamp": 1416215533,
    "question": "Click on the top half of a button - doesn&#39;t work?",
    "answers": 2,
    "content": "<p>I have 4 Relative layouts :  ( <em>as you can see in the animation</em>)</p>\\n\\n<ul>\\n<li>The green RelativeView</li>\\n<li>The \\<em>type something &amp; icons</em>\\\"  RelativeView</li>\\n<li>The gray speperator RelativeView</li>\\n<li>The bottom Textview</li>\\n</ul>\\n\\n<p>Each RelativeView is \\\"below\\\" it's previous relative view.</p>\\n\\n<p><img src=\\\"http://i.stack.imgur.com/tG4A6.gif\\\" alt=\\\"enter image description here\\\"></p>\\n\\n<p>By design   when the 2 inner views are closed   the button should be <strong>half</strong> top above the green   and <strong>half</strong> bottom above the text ( just like the animation  shows)</p>\\n\\n<p>Ok   So I added a button which is found inside the \\\"bottom textview\\\"</p>\\n\\n<p>But in order for the bottom to be only half bottom above the view   I added it a negative Margin : </p>\\n\\n<p>So <a href=\\\"http://i.stack.imgur.com/zADnv.jpg\\\" rel=\\\"nofollow\\\">here it is</a> <strong>without</strong> the negative margin : </p>\\n\\n<p><img src=\\\"http://i.stack.imgur.com/zADnv.jpg\\\" alt=\\\"enter image description here\\\"></p>\\n\\n<p>And <a href=\\\"http://i.stack.imgur.com/a7DdQ.jpg\\\" rel=\\\"nofollow\\\">here it is</a> with the negative margin ( the desired result)</p>\\n\\n<p><img src=\\\"http://i.stack.imgur.com/a7DdQ.jpg\\\" alt=\\\"enter image description here\\\"></p>\\n\\n<p>So when I clicked the button I simply hide/show ( + animation with <code>android:animateLayoutChanges=\\\"true\\\"</code>) the inner  2  middle views</p>\\n\\n<p><em>So where is the problem ?</em></p>\\n\\n<p><strong>Question</strong></p>\\n\\n<p>I don't know why but only the bottom half of the button is clickable ! I guess it is because that half is inside  its container view  while the top half is not in its view...( maybe i'm wrong)</p>\\n\\n<p>But if I remove the negative margin and the button is fully in its container - then the button is 100% fully clickeable ( both top half and bottom half)</p>\\n\\n<p>As you can see in the animation (last frames) - when i click the top half - nothing happens....</p>\\n\\n<p>How can I fix that ?</p>\\n\\n<p>Maybe i've taken a <strong>wrong initial approach</strong> ? </p>\\n\\n<p>nb : <a href=\\\"http://i.stack.imgur.com/hqwQ8.jpg\\\" rel=\\\"nofollow\\\">some more visualization of structure</a> : </p>\\n\\n<p><img src=\\\"http://i.stack.imgur.com/hqwQ8.jpg\\\" alt=\\\"enter image description here\\\"></p>\\n\"",
    "reco2": "How can I make my view height half the size?",
    "reco3": "why is only half of my button clickable?",
    "reco1": "Change margins when keyboard popup"
  },
  {
    "index": 208159,
    "votes": 9,
    "tags": [
      "java",
      "android"
    ],
    "timestamp": 1405810864,
    "question": "Decode remote control codes through audio input",
    "answers": 1,
    "content": "<p>I am currently writing an Android app that functions as an internet radio. Part of the functionality of the app is that it is controllable via infrared remote. The infrared remote codes come in as analogue audio through the microphone port. If I record some of the signals and look at them in Audacity  it's very easy for me to see what each code is. For example  the following is 0111111010011001011111101000001 or 0x3F4CBF41. \\n<img src=\\http://i.stack.imgur.com/JetDf.png\\\" alt=\\\"enter image description here\\\">\\nMy question is how can I programmatically detect these signals when they come in and convert them to integer code numbers. I have looked into some packaged solutions like LIRC  but they're written in C and would be difficult to integrate. It also seems to me like native would be over kill to do such simple analysis. I also looked into libraries like musicg  but I couldn't find any easy way to convert the codes in real time. </p>\\n\"",
    "reco2": "Is there anything like django signals written in java Android?",
    "reco3": "How to read IR Keypad value from Infrared receiver using java in pc duino 2 (ubuntu os)",
    "reco1": "List of Apple Remote infrared codes for MacBook Pro"
  },
  {
    "index": 48662,
    "votes": 8,
    "tags": [
      "java",
      "android"
    ],
    "timestamp": 1398111729,
    "question": "AlarmManager effect on battery for an Alarm clock app",
    "answers": 1,
    "content": "<p>I want to built a <strong>alarm clock</strong> app for android<br>\\nI'm using an AlarmManager that starts a service every 1 seconds to check system time.<br>\\nnow I have 3 question: </p>\\n\\n<p>1- Is there an other way to check system time every 1 second? and what is the best way for this work?</p>\\n\\n<p>2-what is this my way on battery charge? is it cause to reduce battery charge very faster?</p>\\n\\n<p>3- what mechanism use the <strong>android alarm app</strong> for checking time?</p>\\n\\n<p>please help me to built this app  </p>\\n\\n<p>thanks</p>\\n",
    "reco2": "Change alarm time set in clock app",
    "reco3": "Default Alarm Clock in Android Development",
    "reco1": "Set Phone Alarm Code"
  },
  {
    "index": 71401,
    "votes": 8,
    "tags": [
      "java",
      "android"
    ],
    "timestamp": 1395637266,
    "question": "How to set a frequency for the fm radio in android?",
    "answers": 2,
    "content": "<p>In my android app I am using this intent to start fm radio</p>\\n\\n<pre><code>Intent i = new Intent(Intent.ACTION_MAIN);\\nPackageManager manager = getPackageManager();\\ni = manager.getLaunchIntentForPackage(\\com.sec.android.app.fm\\\");\\ni.addCategory(Intent.CATEGORY_LAUNCHER);\\nstartActivity(i);\\n</code></pre>\\n\\n<p>Is it possible to <strong>set a manual frequency</strong> and open the fm radio? Thanks</p>\\n\"",
    "reco2": "How to read/write excel checkbox status in java",
    "reco3": "Align radioGroup buttons horzintally",
    "reco1": "android get radio stream data"
  },
  {
    "index": 126819,
    "votes": 8,
    "tags": [
      "java",
      "android"
    ],
    "timestamp": 1389262787,
    "question": "Reading and writing java.util.Date from Parcelable class",
    "answers": 3,
    "content": "<p>I'm working with Parcelable class. How can I read and write <code>java.util.Date</code> object to and from this class?</p>\\n",
    "reco2": "Bundle Not Parceling complete Data and then Returns null when trying to Retrieve it",
    "reco3": "How to get ClassLoader from type variable (for parceling a class using generics)",
    "reco1": "Android Parcelable List&lt;String[]&gt;"
  },
  {
    "index": 43718,
    "votes": 7,
    "tags": [
      "java",
      "android"
    ],
    "timestamp": 1398600224,
    "question": "addProximityAlert and KEY_PROXIMITY_ENTERING",
    "answers": 2,
    "content": "<p>In the documentation  when discussing <code>addProximityAlert</code>   the description about Intent confuses me a bit. Specifically this part.. </p>\\n\\n<blockquote>\\n  <p>The fired Intent will have a boolean extra added with key\\n  KEY_PROXIMITY_ENTERING. If the value is true  the device is entering\\n  the proximity region; if false  it is exiting.</p>\\n</blockquote>\\n\\n<p>This may sound like a dumb question but.. how do I get true or false when I'm entering/ or in  a certain radius of a location. </p>\\n\\n<p>I'm not sure how this would work exactly.</p>\\n\\n<p>Do I have to write my own code and check when I'm in the proximity of my location and then have it return true and false as I'm exiting?</p>\\n\\n<p>I can't figure it out.</p>\\n",
    "reco2": "Advancing an index forward and reverse continually  without a loop",
    "reco3": "Why does the condition in mentioned code blocks succeeds as true?",
    "reco1": "Maze solving using recursion in Java"
  },
  {
    "index": 147013,
    "votes": 7,
    "tags": [
      "java",
      "android"
    ],
    "timestamp": 1414529352,
    "question": "How to swipe to delete a Card (using appcompat v7&#39;s CardView)",
    "answers": 2,
    "content": "<pre><code>&lt;android.support.v7.widget.CardView xmlns:android=\\http://schemas.android.com/apk/res/android\\\"\\n                                    android:orientation=\\\"horizontal\\\"\\n                                    android:layout_width=\\\"match_parent\\\"\\n                                    android:stateListAnimator=\\\"@anim/anim\\\"\\n                                    android:layout_margin=\\\"5dp\\\"\\n                                    android:clickable=\\\"true\\\"\\n                                    android:layout_height=\\\"wrap_content\\\"&gt;\\n    &lt;TextView\\n              android:layout_width=\\\"match_parent\\\"\\n              android:layout_height=\\\"match_parent\\\"\\n              android:id=\\\"@+id/textview\\\"\\n              android:minHeight=\\\"?android:listPreferredItemHeight\\\"\\n              android:gravity=\\\"center_vertical\\\"&gt;\\n\\n    &lt;/TextView&gt;\\n&lt;/android.support.v7.widget.CardView&gt;\\n</code></pre>\\n\\n<p>I'm using CardView to display a row of texts. How do I swipe to delete those rows -- which are cardviews? Also  how to set an onItemClickListener for each row? Again  I'm using cardview to display each row.</p>\\n\"",
    "reco2": "Cannot start this animator on a detached view! reveal effect",
    "reco3": "android CardView alternative",
    "reco1": "Cardview doesn&#39;t respect z index order in relative layout"
  },
  {
    "index": 1279,
    "votes": 6,
    "tags": [
      "java",
      "android"
    ],
    "timestamp": 1418256357,
    "question": "Differences in protected inner class visibility across packages in different versions of Android",
    "answers": 1,
    "content": "<p>I came across this issue in our Android codebase today that baffled me &amp; my colleagues for a while. We previously had a class structure like so:</p>\\n\\n<p>Foo.java</p>\\n\\n<pre><code>package test.a;\\n\\npublic abstract class Foo extends View {\\n    protected abstract class InnerFoo {\\n        public InnerFoo() {}\\n    }\\n    protected class Cog {\\n        public Cog() {}\\n    }\\n}\\n</code></pre>\\n\\n<p>Bar.java</p>\\n\\n<pre><code>package test.a;\\n\\npublic class Bar extends Foo {\\n    private abstract class AbstractInnerBar extends InnerFoo {\\n        protected abstract void someMethod();\\n    }\\n    private class InnerBar extends AbstractInnerBar {\\n        Cog myCog;\\n        public InnerBar() {\\n            myCog = new Cog();\\n        }\\n        protected void someMethod() {}\\n    }        \\n}\\n</code></pre>\\n\\n<p>I understand this class structure isn't necessarily simple  but it worked without problems. However  we recently did some package restructuring and realized Bar belonged somewhere else. So  we moved it to a different package and have almost the same structure  with two different packages.</p>\\n\\n<p>Foo.java</p>\\n\\n<pre><code>package test.a;\\n\\npublic abstract class Foo extends View {\\n    protected abstract class InnerFoo {\\n        public InnerFoo() {}\\n    }\\n    protected class Cog {\\n        public Cog() {}\\n    }\\n}\\n</code></pre>\\n\\n<p>Bar.java</p>\\n\\n<pre><code>package test.b; //This is the only change\\n\\npublic class Bar extends Foo {\\n    private abstract class AbstractInnerBar extends InnerFoo {\\n        protected abstract void someMethod();\\n    }\\n    private class InnerBar extends AbstractInnerBar {\\n        Cog myCog;\\n        public InnerBar() {\\n            myCog = new Cog();\\n        }\\n        protected void someMethod() {}\\n    }        \\n}\\n</code></pre>\\n\\n<p>The odd thing is that after the change on <em>some</em> versions of Android we get errors like: <code>java.lang.IllegalAccessError: tried to access class test.a.Foo$Cog[] from class test.b.Bar$InnerBar</code>. I didn't think this would be a problem because <code>Cog</code> is given <code>protected</code> visibility  <code>Bar extends Foo</code> and <code>InnerBar</code> extends <code>InnerFoo</code>. Strangely  other versions of Android work just fine (no errors  no visibility issues). We are able to solve the issue by declaring <code>Cog</code> as <code>public</code>  but that seems like an unnecessary workaround. </p>\\n\\n<p>We saw the problem on a Motorola Moto X (first generation Developer Edition) running Android 4.4.4. We did not have the problem on a Nexus 5 running Lollipop or a Nexus S running Android 4.1.2</p>\\n\\n<p>Can anyone shed light on this?</p>\\n",
    "reco2": "Inheritance mind boggler",
    "reco3": "Overloaded Generics in Java",
    "reco1": "Java: Use the same code with two different versions of a dependent class"
  },
  {
    "index": 47862,
    "votes": 6,
    "tags": [
      "java",
      "android"
    ],
    "timestamp": 1398193844,
    "question": "Android: Yahoo Weather App Horizontal Scroll-view Effect?",
    "answers": 3,
    "content": "<p>I would like to know what the Android implementation is of this type of scrolling that you see in the Yahoo Weather App. Here is a video example:</p>\\n\\n<p><a href=\\http://www.youtube.com/watch?v=a-q_yetkpik\\\">http://www.youtube.com/watch?v=a-q_yetkpik</a></p>\\n\\n<p>Any examples or ideas on how to implement this would sincerely help this poor lost soul!</p>\\n\\n<p>Thank you</p>\\n\"",
    "reco2": "Change JS regex to work in Java",
    "reco3": "Simple android weather app",
    "reco1": "How to get youtube video id from URL with java?"
  },
  {
    "index": 51227,
    "votes": 6,
    "tags": [
      "java",
      "android"
    ],
    "timestamp": 1397732870,
    "question": "Changing locale programmatically not working in some devices",
    "answers": 2,
    "content": "<p>I've the following piece of code:</p>\\n\\n<pre><code>/**\\n * Sets a new Locale for the APP.\\n * @param newLocale - Valid new locale.\\n */\\nprivate static void setLocale( String newLocale )\\n{\\n    Locale locale = new Locale( newLocale );\\n    Locale.setDefault( locale );\\n\\n    Configuration config = new Configuration();\\n    config.locale = locale;\\n\\n    context.getResources().updateConfiguration( config  context.getResources().getDisplayMetrics() );\\n}\\n</code></pre>\\n\\n<p>Simple.</p>\\n\\n<p>However when I run it in a Smartphone (4.1.1)  it does work flawlessly. The device changes Strings in order to match the language.</p>\\n\\n<p>But with a tablet (4.3)  it doesn't work. If I output something like:</p>\\n\\n<pre><code>Log.d(\\TAG\\\" Locale.getDefault());\\n</code></pre>\\n\\n<p>The Locale seems to be changed on both devices  but as I said  Strings doesn't get translated to the correct language.</p>\\n\\n<p>I've done a lot of debugging  and I've spotted a difference between objects:\\nCheck out the Configuration object on 4.1.1:</p>\\n\\n<p><img src=\\\"http://i.stack.imgur.com/QNpMa.png\\\" alt=\\\"enter image description here\\\"></p>\\n\\n<p>And check out the Configuration Object on the tablet (4.3)\\n<img src=\\\"http://i.stack.imgur.com/J1FYb.png\\\" alt=\\\"enter image description here\\\"></p>\\n\\n<p>As you can see  the only notable difference is the <code>userSetLocale</code> which is set to False on tablet.</p>\\n\\n<p>So I checked Google SourceCode (<a href=\\\"https://github.com/android/platform_frameworks_base/blob/master/core/java/android/content/res/Configuration.java\\\" rel=\\\"nofollow\\\">https://github.com/android/platform_frameworks_base/blob/master/core/java/android/content/res/Configuration.java</a>)  and it states:</p>\\n\\n<pre><code> /**\\n * Locale should persist on setting.  This is hidden because it is really\\n * questionable whether this is the right way to expose the functionality.\\n * @hide\\n */\\npublic boolean userSetLocale;\\n</code></pre>\\n\\n<p>Looks like this is affecting me. So as I can't access this value  nor by getter / setter nor by public access  I used reflection in order to change it.</p>\\n\\n<p>However  after changing it by reflection  even though I've seen that it internally changed (boolean is set to false after reflection)  same issue is still up.</p>\\n\\n<p>Do you guys have any tips?</p>\\n\\n<p>Meanwhile I will keep testing.</p>\\n\\n<p>Thanks.\\n<strong>TESTING:</strong></p>\\n\\n<ul>\\n<li>Nexus 10 - 4.4.2 - OK</li>\\n<li>Nexus 5 - 4.4.2 - OK</li>\\n<li>Tablet 320 dpi - 4.4.2 - OK</li>\\n<li>SmartPhone 480 dpi - 4.3 - OK</li>\\n<li>SmartPhone 160 dpi - 4.1.1 - OK</li>\\n<li>Tablet 160 dpi - 4.3 - <strong>NOT OK</strong></li>\\n<li>SmartPhone 320 dpi - 4.1.1 - OK</li>\\n</ul>\\n\"",
    "reco2": "Does DPI matter for desktop in LibGDX?",
    "reco3": "How to set DPI information in a grayscale image?",
    "reco1": "application works on tablet but crashes on smartphone"
  },
  {
    "index": 115992,
    "votes": 6,
    "tags": [
      "java",
      "android"
    ],
    "timestamp": 1390745832,
    "question": "How can I make my API key hidden so that anyone decompling my app wouldn&#39;t see it?",
    "answers": 0,
    "content": "<p>In my app i am using many thirdparty APIs that require an API key and have quotas that I must not go over.</p>\\n\\n<p>I am worried that someone decompling my app would be able to see these keys and use them.</p>\\n\\n<p>How can I keep them hidden?</p>\\n\\n<p>I am using proguard for obfuscation </p>\\n",
    "reco2": "Running Android app from Eclipse after setting up for obfuscation",
    "reco3": "Use proguard to ONLY remove log statements",
    "reco1": "Avoid direct translation of &quot;public static final&quot; with ProGuard"
  },
  {
    "index": 172793,
    "votes": 6,
    "tags": [
      "java",
      "android"
    ],
    "timestamp": 1418814819,
    "question": "Error in conversion of dates in java",
    "answers": 3,
    "content": "<pre><code>String date = jsonobject.getString(\\needbydate\\\");\\nDateFormat df = new SimpleDateFormat(\\\"MMM/dd/yyyy\\\");\\nDateFormat sdf = new SimpleDateFormat(\\\"yyyy-MM-dd'T'hh:mm:ssZ\\\");\\nDate startDate = sdf.parse(date);\\nString needbydate = df.format(startDate).toString()+\\\"\\\";\\n</code></pre>\\n\\n<h2>What is happening::</h2>\\n\\n<ul>\\n<li><strong>At the start</strong></li>\\n</ul>\\n\\n<p><code>date</code>=<code>2014-12-17T21:37:00+00:00</code></p>\\n\\n<ul>\\n<li><strong>At the end</strong></li>\\n</ul>\\n\\n<p><code>needbydate</code>= Dec/18/2014</p>\\n\\n<p><code>17</code> is changed to <code>18</code> .... What wrong am i doing in conversion</p>\\n\\n<hr>\\n\\n<h2>EDIT:</h2>\\n\\n<pre><code>            String date=jsonobject.getString(\\\"needbydate\\\");\\n            DateFormat df = new SimpleDateFormat(\\\"MMM/dd/yyyy\\\" Locale.ENGLISH);\\n            DateFormat sdf = new SimpleDateFormat(\\\"yyyy-MM-dd'T'hh:mm:ss\\\" Locale.ENGLISH);\\n            sdf.setTimeZone(TimeZone.getTimeZone(\\\"UTC\\\"));\\n            Date startDate;\\n            startDate = sdf.parse(date);\\n            needbydate = df.format(startDate).toString()+\\\"\\\";\\n</code></pre>\\n\"",
    "reco2": "Weird JAVA date formatting giving wrong result",
    "reco3": "when converting power to number the number formatting is not good",
    "reco1": "Change date format Nov 18  2014 to 2014-11-18"
  },
  {
    "index": 183820,
    "votes": 6,
    "tags": [
      "java",
      "android"
    ],
    "timestamp": 1418659207,
    "question": "How combine two strings with random position android",
    "answers": 4,
    "content": "<p>i'm trying to generate a license key with two strings combine both into another one.</p>\\n\\n<pre><code>String key1 = \\X1X2X3X4..Xn\\\"; //this is for the imei key cellphone\\nString key2 = \\\"Y1Y2Y3Y4M1M2D1D2H1H2m1m2\\\"; //this is a key to mix with the first one\\n</code></pre>\\n\\n<p>the result of the combination should be like this: \\nString result = \\\"D1H1X1X2X3Y2Y4X4X5...XnY3Y1D2m2m1H1H2\\\";</p>\\n\\n<p>I split my strings every two spaces like this and i save into an array.</p>\\n\\n<pre><code>String [] key1splited = splitStringEvery(key1  2);\\nString [] key2splited = splitStringEvery(key2  2);\\n\\npublic String[] splitStringEvery(String s  int interval) {\\n        int arrayLength = (int) Math.ceil(((s.length() / (double)interval);\\n        String[] result = new String[arrayLength];\\n\\n        int j = 0;\\n        int lastIndex = result.length - 1;\\n        for (int i = 0; i &lt; lastIndex; i++) {\\n            result[i] = s.substring(j  j + interval);\\n            j += interval;\\n        } \\n        result[lastIndex] = s.substring(j);\\n\\n        return result;\\n    }\\n</code></pre>\\n\\n<p>how can i make the combination of my strings gives me a result looks like this.\\nString result = \\\"D1H1X1X2X3Y2Y4X4X5...XnY3Y1D2m2m1H1H2\\\";</p>\\n\\n<p>hope someone could giveme an idea how to solve this  thanks.</p>\\n\\n<p>I am trying to do something like this but it is very poor method.</p>\\n\\n<pre><code>static String res = \\\"\\\";\\n        String[] key1splited = splitStringEvery(key1  2);\\n        String[] key2splited = splitStringEvery(key2  2);\\n        for (int i = 0; i &lt; key2splited.length; i++) {\\n            if (key2splited[i].equals(\\\"D1\\\")) {\\n                res = key2splited[i];\\n            }\\n            if (key2splited[i].equals(\\\"H1\\\")) {\\n                res += key2splited[i];\\n                for (int j = 0; j &lt; key1splited.length; j++) {\\n                    if (key1splited[j].equals(\\\"X1\\\")) {\\n                        res += key1splited[j];\\n                    }\\n                    if (key1splited[j].equals(\\\"X2\\\")) {\\n                        res += key1splited[j];\\n                    }\\n                    if (key1splited[j].equals(\\\"X3\\\")) {\\n                        res += key1splited[j];\\n                    }\\n                }\\n            }\\n        }\\n</code></pre>\\n\\n<p>and so on but it is no a good way to do because the strings are going to change.  i am very noob </p>\\n\"",
    "reco2": "Break up the text on the page",
    "reco3": "Non-Static String Variables from MainActivity to Fragment Issue",
    "reco1": "Deleting randomly generated strings as the loop keeps executing"
  },
  {
    "index": 2285,
    "votes": 5,
    "tags": [
      "java",
      "android"
    ],
    "timestamp": 1404553857,
    "question": "Could not find class &#39;org.codehaus.jackson.io.SegmentedStringWriter&#39;  referenced from method org.codehaus.jackson.map.ObjectMapper.writeValueAsString",
    "answers": 1,
    "content": "<p>i created a service </p>\\n\\n<p>public class JsonSpiceService extends SpringAndroidSpiceService{</p>\\n\\n<pre><code>    @Override\\n        public RestTemplate createRestTemplate() {\\n             RestTemplate restTemplate = new RestTemplate();\\n                // find more complete examples in RoboSpice Motivation app\\n                // to enable Gzip compression and setting request timeouts.\\n\\n                // web services support json responses\\n                MappingJacksonHttpMessageConverter jsonConverter =\\n                        new MappingJacksonHttpMessageConverter();\\n                FormHttpMessageConverter formHttpMessageConverter =\\n                        new FormHttpMessageConverter();\\n                StringHttpMessageConverter stringHttpMessageConverter =\\n                        new StringHttpMessageConverter();\\n                final List&lt;HttpMessageConverter&lt;?&gt;&gt; listHttpMessageConverters =\\n                        restTemplate.getMessageConverters();\\n\\n                listHttpMessageConverters.add(jsonConverter);\\n                listHttpMessageConverters.add(formHttpMessageConverter);\\n                listHttpMessageConverters.add(stringHttpMessageConverter);\\n                restTemplate.setMessageConverters(listHttpMessageConverters);\\n\\n                // @see http://sapandiwakar.in/eofexception-with-spring-rest-template-android/\\n                restTemplate.setRequestFactory(new HttpComponentsClientHttpRequestFactory()); \\n\\n                return restTemplate;\\n        }\\n\\n        @Override\\n        public CacheManager createCacheManager(Application application)\\n                throws CacheCreationException {\\n            CacheManager cacheManager = new CacheManager();\\n            JacksonObjectPersisterFactory jacksonObjectPersisterFactory =\\n                    new JacksonObjectPersisterFactory(application);\\n            cacheManager.addPersister(jacksonObjectPersisterFactory);\\n            return cacheManager;\\n\\n        }\\n\\n}\\n</code></pre>\\n\\n<p>then i created a request like that </p>\\n\\n<p>public class PractitionerRequest extends SpringAndroidSpiceRequest{</p>\\n\\n<pre><code>    final String TAG=\\ROBOSPICE\\\";\\n        public PractitionerRequest() {\\n            super(PractList.class); \\n            // TODO Auto-generated constructor stub\\n        }\\n\\n        @Override\\n        public PractList loadDataFromNetwork()  throws Exception{\\n\\n             URL url = new URL(\\\"http://svv.in.net/service/test.php\\\"); \\n             Log.d(TAG  \\\"\\\"+url);\\n                return getRestTemplate().getForObject(url.toURI()  PractList.class);\\n\\n\\n            //return getRestTemplate().getForObject(url  PractList.class);\\n        }\\n\\n}\\n</code></pre>\\n\\n<p>and this is my POJO class</p>\\n\\n<pre><code>public class PractList {\\n\\n\\n\\n    String name;\\n        String hobbies;\\n\\n        public String getName() {\\n            return name;\\n        }\\n        public void setName(String name) {\\n            this.name = name;\\n        }\\n        public String getHobbies() {\\n            return hobbies;\\n        }\\n        public void setHobbies(String hobbies) {\\n            this.hobbies = hobbies;\\n        }\\n\\n\\n\\n}\\n</code></pre>\\n\\n<p>i'm calling the that in the Acitivity</p>\\n\\n<p>SpiceManager spiceManager = new SpiceManager(JsonSpiceService.class);</p>\\n\\n<pre><code>@Override\\nprotected void onStart() {\\n    super.onStart();\\n    Log.d(TAG  \\\"starting service\\\");\\n    spiceManager.start(this);\\n}\\n\\n@Override\\nprotected void onStop() {\\n    if( spiceManager.isStarted() ) {\\n           spiceManager.shouldStop();\\n           Log.d(TAG  \\\"stopping service\\\");\\n        }\\n    super.onStop();\\n\\n}\\n\\nprivate void performRequest() {\\n      AdminActivity.this.setProgressBarIndeterminateVisibility(true);\\n\\n      PractitionerRequest request = new PractitionerRequest();        \\n\\n      spiceManager.execute(request  \\\"sss\\\"  DurationInMillis.ONE_MINUTE  new PractRequestListerner());\\n    }\\n\\n\\nprivate void roboSpice() {\\n\\n    performRequest();\\n    Log.d(TAG  \\\"started\\\");\\n    /*Log.d(TAG  \\\"started\\\");\\n\\n    PractitionerRequest request=new PractitionerRequest();\\n    spiceManager.execute(request \\\"Json\\\" DurationInMillis.ONE_MINUTE  new PractitionerRequestListener());\\n    Log.d(TAG  \\\"started:\\\"+request.toString());\\n    Log.d(TAG  \\\"end\\\");*/\\n    /*new PractRequestListerner();\\n\\n    if (isPageInCache()) {\\n        showMsg(\\\"The page is already cached.\\\");\\n        Log.d(TAG  \\\"The page is already cached\\\");\\n    }\\n    */\\n}\\n\\nprivate boolean isPageInCache() {\\n\\n    String pageName=\\\"yes\\\";\\n    try {\\n        PractitionerRequest request=new PractitionerRequest();\\n        spiceManager.execute(request \\\"Json\\\" DurationInMillis.ONE_MINUTE  new PractitionerRequestListener());\\n    } catch (Exception e) {\\n        return false;\\n    }\\n    return true;\\n}\\n\\n public void onRequestSuccess(PractList practList) {\\n       // setProgressBarIndeterminateVisibility(false);\\n     Log.d(TAG  \\\"*******************\\\");\\n     Log.e(\\\"TEST\\\" practList.getName());\\n        Log.e(\\\"TEST\\\" practList.getHobbies());\\n\\n    }\\n\\n    public void onRequestFailure(SpiceException spiceException) {\\n        setProgressBarIndeterminateVisibility(false);\\n        final String msg = spiceException.getCause().getMessage();\\n        showMsg(\\\"Error: \\\" + msg);\\n    }\\n\\nprivate void showMsg(String msg) {\\n    Toast.makeText(this  msg  Toast.LENGTH_SHORT).show();\\n}\\n\\nclass PractRequestListerner implements RequestListener&lt;PractList&gt;{\\n\\n    @Override\\n    public void onRequestFailure(SpiceException e) {\\n        Log.e(\\\"TEST\\\" \\\"fail\\\");\\n        Log.e(\\\"TEST\\\" \\\"fail\\\"+e.getMessage());\\n\\n    }\\n\\n    @Override\\n    public void onRequestSuccess(PractList list) {\\n        Log.e(\\\"TEST\\\" \\\"succes\\\");\\n        Log.e(\\\"TEST\\\" \\\"fail\\\"+list.getName());\\n\\n    }\\n\\n}\\n</code></pre>\\n\\n<p>but i'm getting these error not getting exact error</p>\\n\"",
    "reco2": "Multilevel Inheritace &quot;is-a&quot; relationship?",
    "reco3": "How can I call a method in another class",
    "reco1": "Using Robospice inside BroadcastReceiver to download data in background"
  },
  {
    "index": 214187,
    "votes": 70,
    "tags": [
      "java",
      "arrays"
    ],
    "timestamp": 1404902160,
    "question": "Populating a Boolean Array in Java",
    "answers": 13,
    "content": "<p>As a fairly green Java coder I've set myself the hefty challenge of trying to write a simple text adventure. Unsurprisingly  I've encountered difficulties already! </p>\\n\\n<p>I'm trying to give my Location class a property to store which exits it contains. I've used a boolean array for this  to essentially hold true/false values representing each exit. I'm not entirely convinced that </p>\\n\\n<p><strong>a)</strong> this is the most efficient way to do this and </p>\\n\\n<p><strong>b)</strong> that I'm using the right code to populate the array.</p>\\n\\n<p>I would appreciate any and all feedback  even if it is for a complete code over-haul!</p>\\n\\n<p>At present  when instantiating a Location I generate a String which I send through to the setExits method:</p>\\n\\n<pre><code>    String e = \\N S U\\\";\\n    secretRoom.setExits(e);\\n</code></pre>\\n\\n<p>In the Location class  setExits looks like this:</p>\\n\\n<pre><code>public void setExits(String e) {\\n    if (e.contains(\\\"N\\\"))\\n        bexits[0] = true;\\n    else if (e.contains(\\\"W\\\"))\\n        bexits[1] = true;\\n    else if (e.contains(\\\"S\\\"))\\n        bexits[2] = true;\\n    else if (e.contains(\\\"E\\\"))\\n        bexits[3] = true;\\n    else if (e.contains(\\\"U\\\"))\\n        bexits[4] = true;\\n    else if (e.contains(\\\"D\\\"))\\n        bexits[5] = true;\\n}\\n</code></pre>\\n\\n<p>I'll be honest  I think this looks particularly clunky  but I couldn't think of another way to do it. I'm also not entirely sure now how to write the getExits method...</p>\\n\\n<p>Any help would be welcome!</p>\\n\"",
    "reco2": "Get current user location",
    "reco3": "Android current location is returned null",
    "reco1": "Android GPS sensor don&#39;t enter onLocationChanged method"
  },
  {
    "index": 171319,
    "votes": 14,
    "tags": [
      "java",
      "arrays"
    ],
    "timestamp": 1411072672,
    "question": "2d array diagonally filling",
    "answers": 8,
    "content": "<pre><code>1 2 3\\n4 5 6\\n7 8 9\\n</code></pre>\\n\\n<p>this is my normal array  but i need to make it diagonally like this </p>\\n\\n<pre><code>1 2 4\\n3 5 7\\n6 8 9\\n</code></pre>\\n\\n<p>this is very stupid way to make it work  but even it is not working because i am not able to find 2nd column elements. </p>\\n\\n<pre><code>for (i = 0; i &lt; arr.length; ++i) {\\n    for (n = 0; n &lt; arr[0].length; ++n) {\\n        if (i == 0 &amp;&amp; n == 0){\\n            arr[i][n] = 0;\\n        } else if (i == 0 &amp;&amp; n == 1) {\\n            arr[i][n] = 2;\\n        } else if (i == 1 &amp;&amp; n == 0) {\\n            arr[i][n] = 3;\\n        } else if (n == 0) {\\n            arr[i][n] = arr[i - 1][n] - arr[i - 2][n] + 1 + arr[i - 1][n];\\n        } else {\\n            arr[i][n] = arr[i][n - 1] - arr[i][n - 2] + 1 + arr[i][n - 1];\\n        }\\n    }\\n}\\n</code></pre>\\n",
    "reco2": "Multidimensional array column swap",
    "reco3": "Multi array/object with Java same as in PHP",
    "reco1": "Assigning an array&#39;s elements to another array"
  },
  {
    "index": 208571,
    "votes": 10,
    "tags": [
      "java",
      "arrays"
    ],
    "timestamp": 1405710882,
    "question": "Difference between printing char and int arrays in Java",
    "answers": 2,
    "content": "<p>When I run the following code I get the address of the array:</p>\\n\\n<pre><code>int arr[] = {2 5 3};\\nSystem.out.println(arr); // [I@3fe993\\n</code></pre>\\n\\n<p>But when I declare a character array and print it the same way it gives me the actual content of the array. Why?</p>\\n\\n<pre><code>char ch[] = {'a' 'b' 'c'};\\nSystem.out.println(ch); // abc\\n</code></pre>\\n",
    "reco2": "Why is this printing the memory address of array",
    "reco3": "how to delete specified character in array and copy the elements to another array",
    "reco1": "Checking to see if array is full"
  },
  {
    "index": 154306,
    "votes": 9,
    "tags": [
      "java",
      "arrays"
    ],
    "timestamp": 1413576053,
    "question": ".txt file to arrays using Java",
    "answers": 3,
    "content": "<p>I have a .txt file containing document information (For 1400 documents). Each document has an ID  title  author  area and abstract. A sample looks like this:</p>\\n\\n<pre><code>.I 1\\n.T\\nexperimental investigation of the aerodynamics of a\\nwing in a slipstream .\\n.A\\nbrenckman m.\\n.B\\nj. ae. scs. 25  1958  324.\\n.W\\nexperimental investigation of the aerodynamics of a\\nwing in a slipstream .\\n  [...]\\nthe specific configuration of the experiment .\\n</code></pre>\\n\\n<p>I want to put each of these into 5 arrays dedicated to each category. I'm having trouble inserting the title and abstract into a single array position  can anyone tell me what's wrong with this code?\\nWhat I am trying to do is insert the text lines into position x after a \\.T\\\" is read and stop when it finds a \\\".A\\\"  when it happens  increase position by 1 for it to fill the next position</p>\\n\\n<pre><code>try{\\n    collection = new File (File location);\\n    fr = new FileReader (collection);\\n    br = new BufferedReader(fr);\\n    String numDoc = \\\" \\\";\\n    int pos = 0;\\n    while((numDoc=br.readLine())!=null){\\n        if(numDoc.contains(\\\".T\\\")){\\n            while((numDoc=br.readLine())!= null &amp;&amp; !numDoc.contains(\\\".A\\\")){\\n                Title[pos] = Title[pos] + numDoc; \\n                pos++;\\n           }\\n\\n        }\\n    }\\n}\\ncatch(Exception e){\\n     e.printStackTrace();\\n}\\n</code></pre>\\n\\n<p>The goal is to have all the information within a single line of String. Any help would be greatly appreciated.</p>\\n\"",
    "reco2": "Hashmap not showing previously added strings",
    "reco3": "Is my understanding of Java&#39;s Class and Type correct?",
    "reco1": "Matches of numbers into another array JAVA"
  },
  {
    "index": 130192,
    "votes": 8,
    "tags": [
      "java",
      "arrays"
    ],
    "timestamp": 1388709924,
    "question": "Why &quot;Object[] object = new String[][]&quot; compiles? - Java",
    "answers": 5,
    "content": "<p>Why does this code compile? </p>\\n\\n<pre><code>Object[] object = new String[5][5];\\n</code></pre>\\n\\n<p>I mean  why can I do that if I'm creating an array object with different dimensions than specified in the reference variable?</p>\\n\\n<p>This doesn't compile:</p>\\n\\n<pre><code>String[] strings = new String[5][5];\\n</code></pre>\\n\\n<p>So what is happening here?</p>\\n",
    "reco2": "How to find Array type and its dimensions for a multidimensional Array for an Object reference",
    "reco3": "Java overloading with variable length arguments",
    "reco1": "Multidimensional Array given the dimensions"
  },
  {
    "index": 150112,
    "votes": 7,
    "tags": [
      "java",
      "arrays"
    ],
    "timestamp": 1419285727,
    "question": "Split 1d array into chunks",
    "answers": 2,
    "content": "<p>I am trying to not load my entire tile based map into memory to save RAM client side.  The map will be huge and already is requriring 1GB client side (multi-layered map).</p>\\n\\n<p>I have gotten some perspective on Game Dev SO.  I am trying to Load zones/chunks of my game map into memory (i.e. 300x300) and then when the player moves 100 steps shift the array and load 100 new tiles depending on direction.  I have tried to work on a scaled version of this and now have a generic question.</p>\\n\\n<hr>\\n\\n<p><strong>I need help when the playerX/Y coordinates are on the perimeter of the map (which causes the chunk to be outside of the map)</strong></p>\\n\\n<p>Here is what I have come up with so far (note: player is in center of chunk &amp; chunk always odd number sized)...  It has the following issues(when the character is on the edge of the map):</p>\\n\\n<ul>\\n<li><p>change characterX/Y to 0 0 and the bottom left(0 2) coordinate will incorrectly be 7</p>\\n\\n<blockquote>\\n  <p>0  0  0</p>\\n  \\n  <p>0  1  1</p>\\n  \\n  <p><strong>7</strong>  1  8</p>\\n</blockquote></li>\\n<li><p>change characterX/Y to 8 8 and the top right(2 0) coordinate of the chunk will incorrectly be 6</p>\\n\\n<blockquote>\\n  <p>1  1  <strong>6</strong></p>\\n  \\n  <p>1  1  0</p>\\n  \\n  <p>0  0  0</p>\\n</blockquote></li>\\n</ul>\\n\\n<p><strong>Here is the SSCCE:</strong></p>\\n\\n<pre><code>public class MapChunkLoad {\\n\\n    public static void main(String[] args) {\\n        short[] groundLayer;\\n        int mapWidth = 9;\\n        int mapHeight = 9;\\n        int chunkWidth = mapWidth / 3; //3\\n        int chunkHeight = mapHeight / 3; //3\\n        int characterX = 8;\\n        int characterY = 8;\\n        String map = \\1  1  1  1  1  1  1  1  7  \\\" +\\n                     \\\"1  8  8  1  1  1  1  1  1  \\\" +\\n                     \\\"1  8  9  9  1  1  1  1  1  \\\" +\\n                     \\\"1  1  9  9  1  1  1  1  1  \\\" +\\n                     \\\"1  1  1  1  1  1  1  1  1  \\\" +\\n                     \\\"1  1  1  1  1  1  1  1  1  \\\" +\\n                     \\\"1  1  1  1  1  1  1  1  1  \\\" +\\n                     \\\"1  1  1  1  1  1  1  1  1  \\\" +\\n                     \\\"6  1  1  1  1  1  1  1  1\\\";\\n        String[] strArr = map.split(\\\"  \\\");\\n        groundLayer = new short[chunkWidth * chunkHeight];\\n\\n        //load chunk into groundLayer\\n        int arrayIndex = 0;\\n        int count = (characterX - (chunkWidth/2)) + ((characterY - (chunkHeight/2)) * mapWidth); //top left tile within chunk\\n\\n        for (int y = 0; y &lt; chunkHeight; y++){\\n            for (int x = 0; x &lt; chunkWidth; x++){\\n                if (count &gt; -1 &amp;&amp; count &lt; strArr.length){\\n                    groundLayer[arrayIndex] = Short.parseShort(strArr[count]);\\n                    System.out.println(\\\"arrayIndex[\\\" + arrayIndex + \\\"] = \\\" + strArr[count]);\\n                } else {\\n                    groundLayer[arrayIndex] = 0;\\n                    System.out.println(\\\"arrayIndex[\\\" + arrayIndex + \\\"] = \\\" + 0);\\n                }\\n\\n                arrayIndex++;\\n                count++;\\n            }\\n            count += (mapWidth - chunkWidth);\\n        }\\n\\n        System.out.println(\\\"\\\");\\n        //print map grid\\n        int printcount = 0;\\n        for (int y = 0; y &lt; chunkHeight; y++){\\n            for (int x = 0; x &lt; chunkWidth; x++){\\n                if (x == chunkWidth - 1){\\n                    System.out.println(groundLayer[printcount]);\\n                } else {\\n                    System.out.print(groundLayer[printcount] + \\\"  \\\");\\n                }\\n                printcount++;\\n            }\\n        }\\n\\n    }\\n}\\n</code></pre>\\n\\n<p>Thanks so much for any assistance.</p>\\n\"",
    "reco2": "Game creating infinite map",
    "reco3": "Intalizing new values in an array at different times",
    "reco1": "Chunks don&#39;t load"
  },
  {
    "index": 170087,
    "votes": 6,
    "tags": [
      "java",
      "arrays"
    ],
    "timestamp": 1411318610,
    "question": "What&#39;s the difference between float x[] vs. float[] x?",
    "answers": 2,
    "content": "<p>I was watching a video  and they showed that they were establishing a float array like this:</p>\\n\\n<pre><code>private final float x[];\\n</code></pre>\\n\\n<p>I have always done this:</p>\\n\\n<pre><code>private final float[] x;\\n</code></pre>\\n\\n<p>I tested both and neither produces an error.  Is there a difference or is this just preference?</p>\\n",
    "reco2": "setLookAtM not working or missing",
    "reco3": "reading C++ binary file in Java",
    "reco1": "SpriteBatch is not applicable for the arguments JAVA libgdx"
  },
  {
    "index": 5887,
    "votes": 5,
    "tags": [
      "java",
      "arrays"
    ],
    "timestamp": 1403953566,
    "question": "How can we use array elements as a counters in java?",
    "answers": 2,
    "content": "<pre><code>import java.util.Random;\\n\\npublic class DemoArrayElement {\\n\\n    public static void main(String arg[]) {\\n        Random rand = new Random();\\n        int[] freq = new int[7];\\n\\n        for (int roll = 1; roll &lt; 10; roll++) {\\n            ++freq[1 + rand.nextInt(6)];\\n        }\\n        System.out.println(\\FACE\\\\tFREQUENCY\\\");\\n\\n        for (int face = 1; face &lt; freq.length; face++) {\\n            System.out.println(face + \\\"\\\\t\\\\t\\\" + freq[face]);\\n        }\\n    }\\n}\\n</code></pre>\\n\\n<p>Can someone please explain me this <code>++freq[1+rand.nextInt(6)];</code> line of code.</p>\\n\"",
    "reco2": "Why does my code print [I@87816d when i run this code?",
    "reco3": "Array and linkedlist in java",
    "reco1": "How to declare array of class types in Java"
  },
  {
    "index": 30334,
    "votes": 5,
    "tags": [
      "java",
      "arrays"
    ],
    "timestamp": 1400411211,
    "question": "Not able to understand array declaration int[] it2= new int[][]{{1}}[0];",
    "answers": 1,
    "content": "<p>Please someone can help me understanding the way this array has been created.</p>\\n\\n<pre><code>int[] it2= new int[][]{{1}}[0];\\n</code></pre>\\n\\n<p><code>it2</code> is one dimension array and on the right hand we have weird type of initialization.\\nThe code compiles fine  but I am able to understand how it is working.</p>\\n",
    "reco2": "Array of Arbitrary Type",
    "reco3": "2D array: 1 dimension determined at run time  other known at compile time",
    "reco1": "Checking to see if array is full"
  },
  {
    "index": 148734,
    "votes": 5,
    "tags": [
      "java",
      "arrays"
    ],
    "timestamp": 1414280290,
    "question": "Is it possible to concate two int arrays without using a return type?",
    "answers": 3,
    "content": "<p>This particular problem I'm working on is listed as such:</p>\\n\\n<p>ConcatArrays(int[] listA  int[] listB  int[] listC) with no return type.\\n1.  The method passes the formal array parameters listA and listB  then return the concatenated array listC.\\n2.  The first part of listC contains elements which are the same as the corresponding elements of listA and the second part contains the same elements as listB. The length of listC is listA.length + listB.length.</p>\\n\\n<p>This is what I have and obviously it's not going to work. Is it even possible to do this without a return type/removing list c as the third parameter?</p>\\n\\n<pre><code>  public static void  ConcatArray(int[] listA  int[] listB  int[] listC) \\n    {\\n         int aLen = listA.length ; \\n         int bLen = listB.length;\\n         int cLen = listC[aLen + bLen];\\n    }\\n</code></pre>\\n\\n<p>Edit : I appreciate all of the answers everybody  I up voted them all. This was a homework assignment and after rereading it I believe the no return type was an error because of what he said in question 1. Basically saying to return list c by using parameters listB and ListA. There were several other typos before that he has since corrected. He also gave us array1 and array 2 for our test class with values  but no array 3.</p>\\n",
    "reco2": "Java next line print.writer",
    "reco3": "how to return an array and its length in java",
    "reco1": "How to remove an item from a List&lt;Integer&gt; that is inside an array?"
  },
  {
    "index": 205620,
    "votes": 5,
    "tags": [
      "java",
      "arrays"
    ],
    "timestamp": 1418332621,
    "question": "How to put String arrays into an array of String arrays?",
    "answers": 7,
    "content": "<p>I have 4 string arrays like this:</p>\\n\\n<pre><code>String[] array1  = new String{\\there\\\"   \\\"there2\\\"  \\\"there3\\\"  \\\"there4\\\"};\\nString[] array2  = new String{\\\"here\\\" \\\"here2\\\" \\\"here3\\\"};\\nString[] array3  = new String{\\\"hi\\\" \\\"hi2\\\"};\\nString[] array4  = new String{\\\"blah\\\" \\\"blah2\\\" \\\"blah3\\\"};\\n</code></pre>\\n\\n<p>And I want to put these into an array of arrays that would look something like this:</p>\\n\\n<pre><code>   Array myArray =  [{\\\"there\\\"   \\\"there2\\\"  \\\"there3\\\"  \\\"there4\\\"} \\n                     {\\\"here\\\" \\\"here2\\\" \\\"here3\\\"} {\\\"hi\\\" \\\"hi2\\\"} \\n                     {\\\"blah\\\" \\\"blah2\\\" \\\"blah3\\\"}];\\n</code></pre>\\n\\n<p>And then would be able to access element in it somewhat like this:</p>\\n\\n<pre><code>myArray[0][1] would equal \\\"there2\\\"\\nmyArray[1][2] would equal \\\"here3\\\"\\n</code></pre>\\n\\n<p>Hope that makes sense  how could I go about doing this?</p>\\n\\n<p>I have tried making an ArrayList like this and then adding them but it doesn't seem to work</p>\\n\\n<pre><code>ArrayList&lt;String[]&gt; myArrayList = new ArrayList&lt;String[]&gt;();\\nmyArrayList.add(myArray);\\n</code></pre>\\n\"",
    "reco2": "How can an element of a string array be used as a variable of another string array in java?",
    "reco3": "how can I return as a string with everything in the array per row?",
    "reco1": "Why does my code print [I@87816d when i run this code?"
  },
  {
    "index": 21167,
    "votes": 4,
    "tags": [
      "java",
      "arrays"
    ],
    "timestamp": 1401699079,
    "question": "How to remove the elements of an array which are equal in value?",
    "answers": 4,
    "content": "<p>Using ArrayUtills in java code it is possible to remove an element from an java array.\\nBelow is the code which removes an element at a particlular index (in the code it is '2'  which removes element value equalto '10'.</p>\\n\\n<pre><code>import java.util.Arrays;\\n\\nimport org.apache.commons.lang3.ArrayUtils;\\n\\n\\npublic class RemoveObjectFromArray{\\n\\n public static void main(String args[]) {\\n\\n\\n     int[] test = new int[] { 10  13  10  10  105};\\n\\n     System.out.println(\\Original Array : size : \\\" + test.length );\\n     System.out.println(\\\"Contents : \\\" + Arrays.toString(test));\\n\\n     //let's remove or delete an element from Array using Apache Commons ArrayUtils\\n     test = ArrayUtils.remove(test  2); //removing element at index 2\\n\\n     //Size of array must be 1 less than original array after deleting an element\\n     System.out.println(\\\"Size of array after removing an element  : \\\" + test.length);\\n     System.out.println(\\\"Content of Array after removing an object : \\\"\\n                       + Arrays.toString(test));\\n\\n } }\\n</code></pre>\\n\\n<p>It gives the output as:</p>\\n\\n<pre><code>run:\\nOriginal Array : size : 5\\nContents : [10  13  10  10  105]\\nSize of array after removing an element  : 4\\nContent of Array after removing an object : [10  13  10  105]\\n</code></pre>\\n\\n<p>How the code can be amended to get the following output:</p>\\n\\n<pre><code>run:\\nOriginal Array : size : 5\\nContents : [10  13  10  10  105]\\nSize of array after removing an element  : 2\\nContent of Array after removing an object : [ 13  105]\\n</code></pre>\\n\"",
    "reco2": "Single Linked Lists: Trying to remove element before a passed type Object paramater",
    "reco3": "Adding elements to a multidimensional Array",
    "reco1": "Replacing an existing element by another element in Set in Java"
  },
  {
    "index": 30161,
    "votes": 4,
    "tags": [
      "java",
      "arrays"
    ],
    "timestamp": 1400443496,
    "question": "Reading a text file using Scanner and count every time each alphabet appear",
    "answers": 2,
    "content": "<p>so I have an assignment about array. It is asked to use Scanner to read through text files and record the occurrences of each alphabet and store them in a table.</p>\\n\\n<p>For example:</p>\\n\\n<pre><code>public class something {\\n\\nchar[] alphabet = \\abcdefghijklmnopqrstuvwxyz\\\".toCharArray();\\n\\npublic void displayTable () {\\n        for (int i = 0; i &lt; alphabet.length; i++) {\\n            System.out.println(alphabet[i] + \\\":  \\\" + count);\\n        }\\n    }\\n</code></pre>\\n\\n<p>I don't know how to construct the method to store the occurrences of each alphabet.</p>\\n\\n<p>It is supposed to be like:</p>\\n\\n<pre><code>public void countOccurrences (Scanner file) {\\n     //code to be written here\\n}\\n</code></pre>\\n\\n<p>If the text file only has a line and the line is : </p>\\n\\n<blockquote>\\n  <p>Hello World</p>\\n</blockquote>\\n\\n<p>The method would ignore any integers or symbols and only output char that appeared in the table.</p>\\n\\n<pre><code>d: 1\\ne: 1\\nh: 1\\nl: 3\\no: 2\\nr: 1\\nw: 1\\n</code></pre>\\n\\n<p>I can't figure this out myself and any help is greatly appreciated!</p>\\n\\n<p>Thanks \\nShy</p>\\n\"",
    "reco2": "Need to use Scanner to read a file but don&#39;t know how to compare",
    "reco3": "Merge two list on the basis of employee Alphabet (sort)",
    "reco1": "Java built-in method - occurrences of a char in a string"
  },
  {
    "index": 46412,
    "votes": 4,
    "tags": [
      "java",
      "arrays"
    ],
    "timestamp": 1398349130,
    "question": "Avoiding duplicates without Sets?",
    "answers": 5,
    "content": "<p>I am in a beginner Java class and I haven't gotten the chance to learn how to avoid duplicated values when storing values inside arrays.</p>\\n\\n<pre><code>String[] newAlphabet = new String[26];\\n\\nfor(int I = 0; I &lt; newAlphabet.length; I++){\\n\\n int random = (65 + (int)(Math.random() * ((90 - 65) + 1));\\n char ascii = (char)random;\\n String letters = ascii + \\\\\";\\n\\nif(letters != newAlphabet[0] &amp;&amp; letters != newAlphabet[1] ... so on and so on until\\n                                                               newAlphabet[25])\\n     newAlphabet[I] = letters; \\n}//end \\n</code></pre>\\n\\n<p>So this is my pseudo code for part of my program and the point of it is to avoid having duplicated letters inside the array. </p>\\n\\n<p>The problem that I am having is inside the if statement. Instead of typing <code>letters != newAlphabet[]</code> to 25  is there another way of doing it? </p>\\n\\n<p>I have seen some of the forums in stackedoverflow that I should use <code>HashSet</code> but I have not learned that? I can ask my teacher if I am allowed but is there another way to avoid this problem?</p>\\n\\n<p>I have been thinking of using for-each loop to search through all the elements in the array but I haven't thought out the plan long enough if it's valid.</p>\\n\"",
    "reco2": "Identifying  if there&#39;s duplicated inputted integer in Java",
    "reco3": "If statement  compare one variable to multiple",
    "reco1": "Using a For loop to populate an array"
  },
  {
    "index": 48456,
    "votes": 4,
    "tags": [
      "java",
      "arrays"
    ],
    "timestamp": 1398144798,
    "question": "Java: Using &quot;08&quot; and &quot;09&quot; in an array",
    "answers": 3,
    "content": "<p>How can I store 08 and 09 into an int array? I understand that they cannot due to binary characteristics and have tried both...</p>\\n\\n<p>0b08  0b09 ... and ... 0B08  0B09 with no luck. </p>\\n\\n<p>The following line of code is ideally what I'd like to have:</p>\\n\\n<pre><code>final int[] monthValidDosInputs = {00  01  02  03  04  05  06  07  08  09  10  11  12};\\n</code></pre>\\n\\n<p>Here is the error...</p>\\n\\n<pre><code>ConvertDate.java:15: error: integer number too large: 08\\nConvertDate.java:15: error: integer number too large: 09\\n</code></pre>\\n\\n<p>Thanks!</p>\\n",
    "reco2": "Object is added to a list  but not sorted with other objects  but added at the end",
    "reco3": "How to sort map with a date key in reverse order?",
    "reco1": "how to insert binary string of 8 bit to a byte array"
  },
  {
    "index": 70343,
    "votes": 4,
    "tags": [
      "java",
      "arrays"
    ],
    "timestamp": 1395744268,
    "question": "Unexpected output for multiple assignment with arrays",
    "answers": 6,
    "content": "<p>Consider</p>\\n\\n<pre><code>int b = 2;\\n\\nint[] a = new int[4];\\n\\na[a[b]] = a[b] = b = 2;\\n\\nfor (int i = 0; i &lt;= 3; i++)\\n{\\n    System.out.println(a[i]);\\n}\\n</code></pre>\\n\\n<p>The output is</p>\\n\\n<pre><code>2\\n0\\n2\\n0\\n</code></pre>\\n\\n<p>I was expecting <code>a[0]</code> to be zero.</p>\\n",
    "reco2": "Double.Min_Value not working as expected",
    "reco3": "Regular expression query issue",
    "reco1": "the output of an operation is always zero what ever the input was"
  },
  {
    "index": 89569,
    "votes": 4,
    "tags": [
      "java",
      "arrays"
    ],
    "timestamp": 1417090992,
    "question": "Partition 2d array in sub-arrays",
    "answers": 2,
    "content": "<p>I have to partition a 2d array (the size is given by the user) into sub-arrays given an input number by the user. The code i Wrote works well for most of the instances by there are some that I need some help with.</p>\\n\\n<p>I do this by taking the square root of the input number. So for example:\\nIf the user inserts [10  10  9] it means that this is a 10 * 10 array with 9 sub-arrays. Taking the square root of 9 works fine because it gives 3.\\nIf the user inserts [8  6  6] it takes the square root of 6 and rounds it up for the longest side (which gives 3) and rounds it down for the shortest (which is 2). So 3 * 2 = 6. It also works fine.</p>\\n\\n<p>Then there is a situation like 8. The square root of 8 gives 3 and 2. So the array is partitioned into 6 sub-arrays. Is there another way to find a better partitioning for numbers like 8  14? Or is there a way to find the optimal distribution for such numbers (e.g. 2 * 4 = 8  2 * 7 = 14)?</p>\\n",
    "reco2": "Write a program which calculates the square root of a number without using math(sqrt)",
    "reco3": "Check a number is perfect square or not",
    "reco1": "Arrays.asList issue when computing square root of integer array elements"
  },
  {
    "index": 89610,
    "votes": 4,
    "tags": [
      "java",
      "arrays"
    ],
    "timestamp": 1417087206,
    "question": "Copying values of array at specific indices to another array",
    "answers": 3,
    "content": "<p>I came up to a situation where I have an array and I need to copy some specific attributes (i.e. values at specific indinces) not the whole array to another array.</p>\\n\\n<p>For example if the initial array is:</p>\\n\\n<pre><code>double[] initArray = {1.0  2.0  1.5  5.0  4.5};\\n</code></pre>\\n\\n<p>then if I wanted to copy only 2nd  4th and 5th attribute (i.e. values at these indices) the desired output array would be:</p>\\n\\n<pre><code>double[] reducedArray = {2.0  5.0  4.5};\\n</code></pre>\\n\\n<p>I know that if the indices appear in a sequential form  e.g. 1-3 then I can use <a href=\\http://stackoverflow.com/q/2371568/3584765\\\"><code>System.arraycopy()</code></a> but my indices does not have that aspect.</p>\\n\\n<p>So  is there any official way to do this  besides the trivial loop through each value and copy the ones needed:</p>\\n\\n<pre><code>double[] includedAttributes = {1  4  5};\\ndouble[] reducedArray = new double[includedAttributes.length];\\nfor(int j = 0; j &lt; includedAttributes.length; j++) {\\n    reducedArray[j] = initArray[includedAttributes[j]];\\n}\\n</code></pre>\\n\"",
    "reco2": "Copy and array to greater size array then return to original size array",
    "reco3": "CPLEX decision variables with array[i] as values",
    "reco1": "Finding all indices for certain input"
  },
  {
    "index": 119187,
    "votes": 4,
    "tags": [
      "java",
      "arrays"
    ],
    "timestamp": 1390296850,
    "question": "Javadoc of ArrayUtils.isNotEmpty is faulty?",
    "answers": 2,
    "content": "<p>The javadoc of ArrayUtils.isNotEmpty() seems to be wrong. Or  at least  misleading.  It says </p>\\n\\n<blockquote>\\n  <p>Returns:\\n    true if the array is not empty or not null</p>\\n</blockquote>\\n\\n<p>In my understanding  an empty array is not null.  So  according to the above definition  isNotEmpty() should return true for an empty array  which is counterintuitive.</p>\\n\\n<p>Wouldn't </p>\\n\\n<blockquote>\\n  <p>Returns:\\n    true if the array is not null and not empty</p>\\n</blockquote>\\n\\n<p>be more correct?</p>\\n",
    "reco2": "Checking to see if array is full",
    "reco3": "Java 2D array encirclement",
    "reco1": "checking for occurrences of null between first value of array and last non null value of array?"
  },
  {
    "index": 174102,
    "votes": 3,
    "tags": [
      "java",
      "hadoop"
    ],
    "timestamp": 1410863911,
    "question": "Hadoop: Measuring shuffle time from JAVA",
    "answers": 1,
    "content": "<p>Is there a way to get the shuffle time required from each reduce task from the client side using the Hadoop API (Hadoop 1.2.1). I can get the execution time of the reduce tasks from the JobClient using the getReduceTaskReports(JobID jobID) method  but I wonder is there a way to get the percentage that corresponds to the shuffle time. \\nThanks in advance. </p>\\n",
    "reco2": "Extract JobID etc from Hadoop Job",
    "reco3": "Debugging a map reduce job in Eclipse",
    "reco1": "When to call job.getJobID()?"
  },
  {
    "index": 3931,
    "votes": 2,
    "tags": [
      "java",
      "hadoop"
    ],
    "timestamp": 1404300812,
    "question": "Sending mapper output to different reducer",
    "answers": 1,
    "content": "<p>I am new to Hadoop and now I am working with java mapper/reducer codes. While working  I came across a problem that I have to pass the output of mapper class to two different reducer class.If it is possible or not.Also can we send two different outputs from same mapper class...Can any one tell me..</p>\\n",
    "reco2": "How to solve casting error from IntWritable to Mutation? Map Reduce HBase",
    "reco3": "hadoop program not executing.... throwing null pointer exception",
    "reco1": "Hadoop passing variables to mapper and reducer"
  },
  {
    "index": 7271,
    "votes": 2,
    "tags": [
      "java",
      "hadoop"
    ],
    "timestamp": 1403734440,
    "question": "how to avoid ConcurrentHashMap usage",
    "answers": 1,
    "content": "<p>I have written this code inside the run() method of the Reducer class in Hadoop</p>\\n\\n<pre><code>@Override\\n    public void run(Context context) throws IOException  InterruptedException {\\n        setup(context);\\n\\n        ConcurrentHashMap&lt;String  HashSet&lt;Text&gt;&gt; map = new ConcurrentHashMap&lt;String  HashSet&lt;Text&gt;&gt;();\\n\\n        while (context.nextKey()) {\\n            String line = context.getCurrentKey().toString();\\n            HashSet&lt;Text&gt; values = new HashSet&lt;Text&gt;();\\n            for (Text t : context.getValues()) {\\n                values.add(new Text(t));\\n            }\\n\\n            map.put(line  new HashSet&lt;Text&gt;());\\n            for (Text t : values) {\\n                map.get(line).add(new Text(t));\\n            }\\n        }\\n\\n        ConcurrentHashMap&lt;String  HashSet&lt;Text&gt;&gt; newMap = new ConcurrentHashMap&lt;String  HashSet&lt;Text&gt;&gt;();\\n\\n        for (String keyToMerge : map.keySet()) {\\n            String[] keyToMergeTokens = keyToMerge.split(\\ \\\");\\n            for (String key : map.keySet()) {\\n                String[] keyTokens = key.split(\\\" \\\");\\n                if (keyToMergeTokens[keyToMergeTokens.length - 1].equals(keyTokens[0])) {\\n                    String newKey = keyToMerge;\\n                    for (int i = 1; i &lt; keyTokens.length; i++) {\\n                        newKey += \\\" \\\" + keyTokens[i];\\n                    }\\n                    if (!newMap.contains(newKey)) {\\n                        newMap.put(newKey  new HashSet&lt;Text&gt;());\\n                        for (Text t : map.get(keyToMerge)) {\\n                            newMap.get(newKey).add(new Text(t));\\n                        }\\n                    }\\n                    for (Text t : map.get(key)) {\\n                        newMap.get(newKey).add(new Text(t));\\n                    }\\n                }\\n            }\\n\\n\\n        //call the reducers\\n        for (String key : newMap.keySet()) {\\n            reduce(new Text(key)  newMap.get(key)  context);\\n        }\\n\\n        cleanup(context);\\n    }\\n</code></pre>\\n\\n<p>my problem is that even if my input is too small it takes 30 minutes to run epsecially because of the <strong>newMap.put()</strong> call. If I put this command in comments then it runs quickly without any problems.\\nAs you can see I use ConcurrentHashMap. I didn't want to use it because I think that run() is called only once at each machine (it doesn't run concurrently) so I would not have any problem with a simple HashMap but if I replace the concurrentHashMap with the simple HashMap I am getting an error (concurrentModificationError). \\nDoes anyone have an idea about how to make it work without any delays ?\\nthanks in advance!</p>\\n\\n<p>*java6\\n*hadoop 1.2.1</p>\\n\"",
    "reco2": "hadoop version command gives error related to java (No such file or directory)",
    "reco3": "Hadoop HDFS PutMerge doesn&#39;t work",
    "reco1": "using string split failed in hadoop mapper"
  },
  {
    "index": 11612,
    "votes": 2,
    "tags": [
      "java",
      "hadoop"
    ],
    "timestamp": 1403074964,
    "question": "How to practice Hadoop online?",
    "answers": 2,
    "content": "<p>Is there a way to find an online Hadoop database and practice on it using Java?</p>\\n\\n<p>I found that you can practice on www.gethue.com  but I don't think you can do it using java.</p>\\n\\n<p>Thank you</p>\\n",
    "reco2": "using string split failed in hadoop mapper",
    "reco3": "Running Hadoop with single node configuration",
    "reco1": "hadoop version command gives error related to java (No such file or directory)"
  },
  {
    "index": 21941,
    "votes": 2,
    "tags": [
      "java",
      "hadoop"
    ],
    "timestamp": 1401484926,
    "question": "Getting NameNode&#39;s fsimage size using Java",
    "answers": 0,
    "content": "<p>I'm trying to get metadata about a NameNode from a running Hadoop cluster using Java.  Specifically  I would like to get the size of fsimage  the last checkpoint time  and number and size of the edit log files.  </p>\\n\\n<p>I'm aware that I can use the Offline Image Viewer to dump the contents of the fsimage file and I can also go to the <code>dfs.namenode.name.dir</code> directory to get the size of the fsimage files and the edit logs files.  </p>\\n\\n<p>However  I haven't found a way to get this information using the Hadoop Java API.  Is there a way to do this?  </p>\\n\\n<p>Any ideas?  </p>\\n",
    "reco2": "hadoop version command gives error related to java (No such file or directory)",
    "reco3": "nameNode doesnt start - hadoop-1.0.3 ubuntu 13.10 single node cluster",
    "reco1": "Content of FSIMAGE and EDIT files in Hadoop command error"
  },
  {
    "index": 59653,
    "votes": 2,
    "tags": [
      "java",
      "hadoop"
    ],
    "timestamp": 1396877390,
    "question": "Cannot write to local HDFS datanode",
    "answers": 1,
    "content": "<p>I tried to write a file to my local HDFS setup using a java program I am using <code>Hadoop 2.3.0</code> distribution and <code>hadoop-client 2.3.0</code> <code>hadoop-hdfs 2.3.0</code> libraries. </p>\\n\\n<p>In the HDFS log it shows the following error: </p>\\n\\n<pre><code>2014-04-07 18:40:44 479 ERROR org.apache.hadoop.hdfs.server.datanode.DataNode: prabhathp:50010:DataXceiver error processing unknown operation  src: /127.0.0.1:38572 dest: /127.0.0.1:50010\\njava.io.IOException: Version Mismatch (Expected: 28  Received: 26738 )\\nat org.apache.hadoop.hdfs.protocol.datatransfer.Receiver.readOp(Receiver.java:54)\\nat org.apache.hadoop.hdfs.server.datanode.DataXceiver.run(DataXceiver.java:198)\\nat java.lang.Thread.run(Thread.java:744)\\n</code></pre>\\n\\n<p>Can somebody explain this?</p>\\n",
    "reco2": "MalformedURLException on reading file from HDFS",
    "reco3": "Reading HDFS through java API",
    "reco1": "How to compress a file using java on hdfs"
  },
  {
    "index": 77783,
    "votes": 2,
    "tags": [
      "java",
      "hadoop"
    ],
    "timestamp": 1394819780,
    "question": "Unable to get Hadoop job information through java client",
    "answers": 0,
    "content": "<p>Am using Hadoop 1.2.1 and trying to print Job details through java client but it is not printing anything  here is my java code</p>\\n\\n<pre><code>    Configuration configuration = new Configuration();\\n    configuration.addResource(new Path(\\/usr/local/hadoop/conf/core-site.xml\\\"));\\n    configuration.addResource(new Path(\\\"/usr/local/hadoop/conf/hdfs-site.xml\\\"));\\n    configuration.addResource(new Path(\\\"/usr/local/hadoop/conf/mapred-site.xml\\\")); \\n    InetSocketAddress jobtracker = new InetSocketAddress(\\\"localhost\\\"  54311);\\n    JobClient jobClient;\\n    jobClient = new JobClient(jobtracker  configuration);\\n    jobClient.setConf(configuration);\\n    JobStatus[] jobs = jobClient.getAllJobs();\\n    System.out.println(jobs.length);//it is printing 0.\\n    for (int i = 0; i &lt; jobs.length; i++) {\\n        JobStatus js = jobs[i];\\n        JobID jobId = js.getJobID();\\n        System.out.println(jobId);\\n    }\\n</code></pre>\\n\\n<p>But from job tracker history i can see three jobs. Here is the screen shot\\n<img src=\\\"http://i.stack.imgur.com/l0Gdt.png\\\" alt=\\\"enter image description here\\\">\\nCan any body tell me where am going wrong. I just want to print all the job details.</p>\\n\\n<p>And here is my configuration files :</p>\\n\\n<p><strong>core-site.xml</strong></p>\\n\\n<pre><code>&lt;configuration&gt;\\n&lt;property&gt;\\n&lt;name&gt;hadoop.tmp.dir&lt;/name\\n&lt;value&gt;/data/tmp&lt;/value&gt;\\n&lt;description&gt;A base for other temporary directories.&lt;/description&gt;\\n&lt;/property&gt;\\n&lt;property&gt;\\n&lt;name&gt;fs.default.name&lt;/name&gt;\\n&lt;value&gt;hdfs://localhost:54310&lt;/value&gt;\\n&lt;description&gt;The name of the default file system.  A URI whose&lt;/description&gt;\\n&lt;property&gt;\\n&lt;name&gt;fs.default.name&lt;/name&gt;\\n&lt;value&gt;hdfs://localhost:54310&lt;/value&gt;\\n&lt;description&gt;The name of the default file system.  A URI whose\\nscheme and authority determine the FileSystem implementation.  The\\nuri's scheme determines the config property (fs.SCHEME.impl) naming\\nthe FileSystem implementation class.  The uri's authority is used to\\ndetermine the host  port  etc. for a filesystem.&lt;/description&gt;\\n&lt;/property&gt;\\n&lt;/configuration&gt;\\n</code></pre>\\n\\n<p><strong>hdfs-site.xml</strong></p>\\n\\n<pre><code>&lt;configuration&gt;\\n&lt;property&gt;\\n&lt;name&gt;dfs.replication&lt;/name&gt;\\n&lt;value&gt;1&lt;/value&gt;\\n&lt;description&gt;Default block replication.  The actual number of replications can be specified when the file is created. The default is used if replication is not specified in create time.\\n&lt;/description&gt;\\n&lt;/property&gt;\\n&lt;/configuration&gt;\\n</code></pre>\\n\\n<p><strong>mapred-site.xml</strong></p>\\n\\n<pre><code>&lt;configuration&gt;\\n&lt;property&gt;\\n&lt;name&gt;mapred.job.tracker&lt;/name&gt;\\n&lt;value&gt;localhost:54311&lt;/value&gt;\\n&lt;description&gt;The host and port that the MapReduce job tracker runs at. If \\\"local\\\"  then jobs are run in-process as a single map and reduce task.\\n&lt;/description&gt;\\n&lt;/property&gt;\\n&lt;/configuration&gt;\\n</code></pre>\\n\"",
    "reco2": "Launch mapreduce job on hadoop 2.2 (Yarn) from java application",
    "reco3": "How to get hdfs configuration info by using libhdfs.so",
    "reco1": "Hadoop is not showing my job in the job tracker even though it is running"
  },
  {
    "index": 105475,
    "votes": 2,
    "tags": [
      "java",
      "hadoop"
    ],
    "timestamp": 1391858901,
    "question": "what are the replacement for hadoop Job deprecated class",
    "answers": 1,
    "content": "<p>I am learning hadoop and I got through this line </p>\\n\\n<pre><code>import org.apache.hadoop.mapreduce.Job;\\nJob job = new Job();\\n</code></pre>\\n\\n<p>I keep getting warning (deprecated class)  I'm aware that using it will work fine. but I don't want to use deprecated classes.\\nso what is the best way to do this? a link or a reference would be highly appreciated. </p>\\n\\n<p>note: I'm using hadoop 2.2.0</p>\\n",
    "reco2": "hadoop version command gives error related to java (No such file or directory)",
    "reco3": "Single node Hadoop and map reduce with mongodb",
    "reco1": "using string split failed in hadoop mapper"
  },
  {
    "index": 188888,
    "votes": 2,
    "tags": [
      "java",
      "hadoop"
    ],
    "timestamp": 1408600556,
    "question": "how to define memory seperately for hadoop daemons in hadoop-env.sh",
    "answers": 0,
    "content": "<p>As I know hadoop-env.sh is the configuration file for settings environment for the hadoop daemons. In This file how can I define <b>HADOOP_HEAPSIZE</b> is the property to define heap size for daemons. Is it mean that it will work for all the daemons like namenode datanode task tracker job tracker and secondary namenode all will take 1000 mb memory on each machine. If yes then how can I make different for each one.</p>\\n\\n<p>I watch following few entries in hadoop-env.sh</p>\\n\\n<pre>\\nexport HADOOP_NAMENODE_OPTS=\\-Dcom.sun.management.jmxremote $HADOOP_NAMENODE_OPTS\\\"\\nexport HADOOP_SECONDARYNAMENODE_OPTS=\\\"-Dcom.sun.management.jmxremote $HADOOP_SECONDARYNAMENODE_OPTS\\\"\\nexport HADOOP_DATANODE_OPTS=\\\"-Dcom.sun.management.jmxremote $HADOOP_DATANODE_OPTS\\\"\\nexport HADOOP_BALANCER_OPTS=\\\"-Dcom.sun.management.jmxremote $HADOOP_BALANCER_OPTS\\\"\\nexport HADOOP_JOBTRACKER_OPTS=\\\"-Dcom.sun.management.jmxremote $HADOOP_JOBTRACKER_OPTS\\\"\\n</pre>\\n\\n<p>Are these entries for seperatly allocate the memory for each daemon  if yes then what is -Dcom.sub.management.jmxremote as much I know syntax for java heap memory allocation is like <b>-Xmx&lt;size&gt;m</b>. </p>\\n\\n<p>Also In this where is task tracker. and what is Balancer.</p>\\n\\n<p>Thanks</p>\\n\"",
    "reco2": "Not able to connect to JMX remotely for PocessBuilder program",
    "reco3": "Batch job not stopping with stop commandLineJobRunner",
    "reco1": "Accessing Tomcat Monitors using Java code"
  },
  {
    "index": 190035,
    "votes": 2,
    "tags": [
      "java",
      "hadoop"
    ],
    "timestamp": 1408438638,
    "question": "Java complains about Hadoop native library",
    "answers": 1,
    "content": "<p>On my Ubuntu x32  Java x32  Hadoop 2.5.0 I execute:</p>\\n\\n<pre><code>hduser@master:~$ hdfs dfs -ls /\\n14/08/19 08:51:21 WARN util.NativeCodeLoader: Unable to load native-hadoop library for your platform... using builtin-java classes where applicable\\nFound 3 items\\ndrwxr-xr-x   - hduser supergroup          0 2014-08-19 08:37 /data\\ndrwxr-xr-x   - hduser supergroup          0 2014-08-19 08:37 /export\\ndrwxrwx---   - hduser supergroup          0 2014-08-19 08:32 /tmp\\n</code></pre>\\n\\n<p>Can someone tell me how to fix the warning?</p>\\n\\n<p>Java version:</p>\\n\\n<pre><code>hduser@master:~$ java -d64 -version\\nError: This Java instance does not support a 64-bit JVM. Please install the desired version.\\n\\nhduser@master:~$ java -d32 -version\\njava version \\1.7.0_67\\\" Java(TM) SE Runtime Environment (build 1.7.0_67-b01) Java HotSpot(TM) Client VM (build 24.65-b04  mixed mode)\\n</code></pre>\\n\\n<p>Ubuntu version:</p>\\n\\n<blockquote>\\n  <p>hduser@master:~$ uname -a Linux master 3.13.0-29-generic #53-Ubuntu\\n  SMP Wed Jun 4 21:02:19 UTC 2014 i686 i686 i686 GNU/Linux</p>\\n</blockquote>\\n\\n<p>Hadoop version</p>\\n\\n<blockquote>\\n  <p>hduser@master:~$ hadoop version Hadoop 2.5.0 Subversion\\n  <a href=\\\"http://svn.apache.org/repos/asf/hadoop/common\\\" rel=\\\"nofollow\\\">http://svn.apache.org/repos/asf/hadoop/common</a> -r 1616291 Compiled by\\n  jenkins on 2014-08-06T17:31Z Compiled with protoc 2.5.0 From source\\n  with checksum 423dcd5a752eddd8e45ead6fd5ff9a24 This command was run\\n  using\\n  /home/hduser/hadoop-2.5.0/share/hadoop/common/hadoop-common-2.5.0.jar</p>\\n</blockquote>\\n\\n<p>EDIT:</p>\\n\\n<p>.bashrc</p>\\n\\n<pre><code>export SQOOP_HOME=/home/hduser/sqoop\\nexport JAVA_HOME=$(readlink -f /usr/bin/javac | sed \\\"s:/bin/javac::\\\")\\nexport PATH=$PATH:$SQOOP_HOME/bin\\nexport HADOOP_COMMON_HOME=/home/hduser/hadoop\\nexport HADOOP_MAPRED_HOME=/home/hduser/hadoop\\nexport HADOOP_HOME=/home/hduser/hadoop\\nexport PATH=$PATH:$HADOOP_HOME/bin\\nexport PIG_HOME=/home/hduser/pig\\nexport PATH=$PATH:$PIG_HOME/bin\\nexport HBASE_HOME=/home/hduser/hbase\\nexport HIVE_HOME=/home/hduser/hive\\nexport PATH=$PATH:$HIVE_HOME/bin\\n</code></pre>\\n\"",
    "reco2": "hadoop version command gives error related to java (No such file or directory)",
    "reco3": "using string split failed in hadoop mapper",
    "reco1": "Single node Hadoop and map reduce with mongodb"
  },
  {
    "index": 198944,
    "votes": 2,
    "tags": [
      "java",
      "hadoop"
    ],
    "timestamp": 1407152171,
    "question": "How to convert .txt / .csv file to ORC format",
    "answers": 1,
    "content": "<p>For some requirement I want to convert <strong>text file(delimited)</strong> to <strong>ORC(Optimized Row Columnar)</strong> format.\\nAs I have to run it in regular intervals  I want to write a <em>java program</em> to do so.\\nI don't want to use Hive temporary table workaround.\\nCan anyone please help me do it?\\nBelow is what i tried</p>\\n\\n<pre><code>/*ORCMapper.java*/\\nimport java.io.IOException;\\nimport java.util.*;\\nimport org.apache.hadoop.mapred.*;\\nimport org.apache.hadoop.hive.ql.io.orc.*;\\nimport org.apache.hadoop.io.*;\\n\\npublic class ORCMapper  extends MapReduceBase implements\\nMapper&lt;LongWritable  Text  NullWritable  Writable&gt;{\\n\\n    OrcSerde serde;\\n    @Override\\n    public void configure(JobConf job) {\\n        serde = new OrcSerde();\\n    }\\n\\n    @Override\\n    public void map(LongWritable key  Text value \\n            OutputCollector&lt;NullWritable  Writable&gt; output  Reporter reporter)\\n            throws IOException {\\n        output.collect(NullWritable.get() serde.serialize(value  null));\\n    }\\n\\n}\\n\\n/*ORCReducer.java*/\\nimport java.io.IOException;\\nimport java.util.Iterator;\\nimport org.apache.hadoop.io.NullWritable;\\nimport org.apache.hadoop.io.Writable;\\nimport org.apache.hadoop.mapred.MapReduceBase;\\nimport org.apache.hadoop.mapred.OutputCollector;\\nimport org.apache.hadoop.mapred.Reducer;\\nimport org.apache.hadoop.mapred.Reporter;\\n\\npublic class ORCReducer extends MapReduceBase implements Reducer&lt;NullWritable  Writable  NullWritable  Writable&gt;{\\n\\n    @Override\\n    public void reduce(NullWritable key  Iterator&lt;Writable&gt; values \\n            OutputCollector&lt;NullWritable  Writable&gt; output  Reporter reporter)\\n            throws IOException {\\n        Writable value = values.next();\\n         output.collect(key  value);\\n    }\\n\\n}\\n\\n/*ORCDriver.java*/\\nimport java.io.*;\\nimport org.apache.hadoop.fs.*;\\nimport org.apache.hadoop.hive.ql.io.orc.*;\\nimport org.apache.hadoop.io.*;\\nimport org.apache.hadoop.mapred.*;\\npublic class ORCDriver {\\n    public static void main(String[] args) throws IOException \\n    InterruptedException  ClassNotFoundException {\\n        JobClient client = new JobClient();\\n        JobConf conf = new JobConf(\\ORC_Generator\\\");\\n        conf.setInputFormat(TextInputFormat.class);\\n        conf.setOutputKeyClass(NullWritable.class);\\n        conf.setOutputValueClass(Writable.class);\\n        conf.setOutputFormat(OrcOutputFormat.class);\\n        FileInputFormat.addInputPath(conf  new Path(\\\"hdfs://localhost:9000/path/to/ipdir/textfile\\\"));\\n        OrcOutputFormat.setOutputPath(conf  new Path(\\\"hdfs://localhost:9000/path/to/opdir/orcfile\\\"));\\n        conf.setMapperClass(ORCMapper.class);\\n        System.out.println(OrcOutputFormat.getWorkOutputPath(conf));\\n        conf.setNumReduceTasks(0);\\n\\n        client.setConf(conf);\\n        try {\\n          JobClient.runJob(conf);\\n        } catch (Exception e) {\\n          e.printStackTrace();\\n        }\\n\\n    }\\n\\n}\\n</code></pre>\\n\\n<p>Running this shows below error and a file named <strong>part-00000</strong> is generated in my local </p>\\n\\n<pre><code>java.io.IOException: File already exists:part-00000\\n    at org.apache.hadoop.fs.RawLocalFileSystem.create(RawLocalFileSystem.java:249)\\n    at org.apache.hadoop.fs.RawLocalFileSystem.create(RawLocalFileSystem.java:241)\\n    at org.apache.hadoop.fs.ChecksumFileSystem$ChecksumFSOutputSummer.&lt;init&gt;(ChecksumFileSystem.java:335)\\n    at org.apache.hadoop.fs.ChecksumFileSystem.create(ChecksumFileSystem.java:381)\\n    at org.apache.hadoop.fs.ChecksumFileSystem.create(ChecksumFileSystem.java:364)\\n    at org.apache.hadoop.fs.FileSystem.create(FileSystem.java:564)\\n    at org.apache.hadoop.fs.FileSystem.create(FileSystem.java:545)\\n    at org.apache.hadoop.hive.ql.io.orc.WriterImpl.ensureWriter(WriterImpl.java:1672)\\n    at org.apache.hadoop.hive.ql.io.orc.WriterImpl.flushStripe(WriterImpl.java:1688)\\n    at org.apache.hadoop.hive.ql.io.orc.WriterImpl.close(WriterImpl.java:1868)\\n    at org.apache.hadoop.hive.ql.io.orc.OrcOutputFormat$OrcRecordWriter.close(OrcOutputFormat.java:95)\\n    at org.apache.hadoop.hive.ql.io.orc.OrcOutputFormat$OrcRecordWriter.close(OrcOutputFormat.java:80)\\n    at org.apache.hadoop.mapred.MapTask$DirectMapOutputCollector.close(MapTask.java:833)\\n    at org.apache.hadoop.mapred.MapTask.closeQuietly(MapTask.java:1763)\\n    at org.apache.hadoop.mapred.MapTask.runOldMapper(MapTask.java:439)\\n    at org.apache.hadoop.mapred.MapTask.run(MapTask.java:366)\\n    at org.apache.hadoop.mapred.LocalJobRunner$Job$MapTaskRunnable.run(LocalJobRunner.java:223)\\n    at java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:471)\\n    at java.util.concurrent.FutureTask.run(FutureTask.java:262)\\n    at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1145)\\n    at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:615)\\n    at java.lang.Thread.run(Thread.java:745)\\n14/09/02 11:23:26 INFO mapred.LocalJobRunner: Map task executor complete.\\n14/09/02 11:23:26 WARN mapred.LocalJobRunner: job_local688970064_0001\\njava.lang.Exception: java.lang.NullPointerException\\n    at org.apache.hadoop.mapred.LocalJobRunner$Job.run(LocalJobRunner.java:354)\\nCaused by: java.lang.NullPointerException\\n    at org.apache.hadoop.hive.ql.io.orc.WriterImpl.createTreeWriter(WriterImpl.java:1515)\\n    at org.apache.hadoop.hive.ql.io.orc.WriterImpl.&lt;init&gt;(WriterImpl.java:154)\\n    at org.apache.hadoop.hive.ql.io.orc.OrcFile.createWriter(OrcFile.java:258)\\n    at org.apache.hadoop.hive.ql.io.orc.OrcOutputFormat$OrcRecordWriter.write(OrcOutputFormat.java:63)\\n    at org.apache.hadoop.hive.ql.io.orc.OrcOutputFormat$OrcRecordWriter.write(OrcOutputFormat.java:46)\\n    at org.apache.hadoop.mapred.MapTask$DirectMapOutputCollector.collect(MapTask.java:847)\\n    at org.apache.hadoop.mapred.MapTask$OldOutputCollector.collect(MapTask.java:591)\\n    at ORCMapper.map(ORCMapper.java:42)\\n    at ORCMapper.map(ORCMapper.java:1)\\n    at org.apache.hadoop.mapred.MapRunner.run(MapRunner.java:50)\\n    at org.apache.hadoop.mapred.MapTask.runOldMapper(MapTask.java:430)\\n    at org.apache.hadoop.mapred.MapTask.run(MapTask.java:366)\\n    at org.apache.hadoop.mapred.LocalJobRunner$Job$MapTaskRunnable.run(LocalJobRunner.java:223)\\n    at java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:471)\\n    at java.util.concurrent.FutureTask.run(FutureTask.java:262)\\n    at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1145)\\n    at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:615)\\n    at java.lang.Thread.run(Thread.java:745)\\n14/09/02 11:23:26 INFO mapred.JobClient:  map 0% reduce 0%\\n14/09/02 11:23:26 INFO mapred.JobClient: Job complete: job_local688970064_0001\\n14/09/02 11:23:26 INFO mapred.JobClient: Counters: 0\\n14/09/02 11:23:26 INFO mapred.JobClient: Job Failed: NA\\njava.io.IOException: Job failed!\\n    at org.apache.hadoop.mapred.JobClient.runJob(JobClient.java:1357)\\n    at ORCDriver.main(ORCDriver.java:53)\\n</code></pre>\\n\"",
    "reco2": "Hive Error while executing a join query [Caused by: java.lang.ArrayIndexOutOfBoundsException]",
    "reco3": "java.io.FileNotFoundException: HIVE_PLAN no such file or dir",
    "reco1": "UDF execution procedure in hive"
  },
  {
    "index": 1528,
    "votes": 1,
    "tags": [
      "java",
      "hadoop"
    ],
    "timestamp": 1418227508,
    "question": "security.UserGroupInformation: PriviledgedActionException",
    "answers": 0,
    "content": "<p>I'm trying to run the MapRedure MaxTemperaute App and I'm getting this error:</p>\\n\\n<pre><code>\\ERROR security.UserGroupInformation: PriviledgedActionException as:yosr cause:java.io.IOException: Failed to set permissions of path: \\\\tmp\\\\hadoop-yosr\\\\mapred\\\\staging\\\\yosr1581500197\\\\.staging to 0700\\nException in thread \\\"main\\\" java.io.IOException: Failed to set permissions of path: \\\\tmp\\\\hadoop-yosr\\\\mapred\\\\staging\\\\yosr1581500197\\\\.staging to 0700\\\"\\n</code></pre>\\n\\n<p>I'm running it on eclipse on windows and the hadoop configuration is on a VM centOS\\nHow can I resolve this</p>\\n\"",
    "reco2": "Unable to load native-hadoop library for your platform... using builtin-java classes where applicable",
    "reco3": "using string split failed in hadoop mapper",
    "reco1": "hadoop version command gives error related to java (No such file or directory)"
  },
  {
    "index": 2159,
    "votes": 1,
    "tags": [
      "java",
      "hadoop"
    ],
    "timestamp": 1404585485,
    "question": "Hadoop Process started from Java Code",
    "answers": 1,
    "content": "<p>I am currently trying to start an Apache Hadoop job inside my Java Code. Before I jump into my question  I would like to provide some information about my code and my working environment.</p>\\n\\n<p>Since I am working on a development environment (Ubuntu 14.04  Eclipse Kepler  OpenJDK v7)  I have set up Hadoop in a standalone-mode. In detail  I have only made the following changes in my <code>.bashrc</code> file: </p>\\n\\n<pre><code>export JAVA_HOME=/usr/lib/jvm/java-7-openjdk-amd64\\n\\nexport HADOOP_INSTALL=/home/db2inst1/hadoop\\n\\nexport PATH=$PATH:$HADOOP_INSTALL/bin:$HADOOP_INSTALL/sbin\\n</code></pre>\\n\\n<p>Therefore  the output from a Terminal I get is the following:</p>\\n\\n<pre><code>db2inst1@rethimno:~$ which hadoop\\n/home/db2inst1/hadoop/bin/hadoop\\ndb2inst1@rethimno:~$ hadoop version\\nHadoop 1.2.1\\nSubversion https://svn.apache.org/repos/asf/hadoop/common/branches/branch-1.2 -r 1503152\\nCompiled by mattf on Mon Jul 22 15:23:09 PDT 2013\\nFrom source with checksum 6923c86528809c4e7e6f493b6b413a9a\\nThis command was run using /home/db2inst1/hadoop/hadoop-core-1.2.1.jar\\ndb2inst1@rethimno:~$ \\n</code></pre>\\n\\n<p>Turning to my Java Code (I invoke inside Eclipse IDE) is the following:</p>\\n\\n<pre><code>import java.io.IOException;\\nimport java.lang.ProcessBuilder.Redirect;\\n\\n\\npublic class ProcessSpanwer {\\n\\n    public static void main(String[] args) throws IOException  InterruptedException {\\n        String[] command = {\\hadoop\\\"  \\\"version\\\"};\\n        ProcessBuilder processBuilder = new ProcessBuilder(command);\\n        processBuilder.redirectErrorStream(true);\\n        processBuilder.redirectOutput(Redirect.INHERIT);\\n        Process p = processBuilder.start();\\n        p.waitFor();\\n    }\\n\\n}\\n</code></pre>\\n\\n<p>As you can understand  the code above is just some sample code to test whether I can initiate a Hadoop Job through Java. The output I receive from the execution is the following:</p>\\n\\n<pre><code>Exception in thread \\\"main\\\" java.io.IOException: Cannot run program \\\"hadoop\\\": error=2  No such file or directory\\n    at java.lang.ProcessBuilder.start(ProcessBuilder.java:1041)\\n    at ProcessSpanwer.main(ProcessSpanwer.java:12)\\nCaused by: java.io.IOException: error=2  No such file or directory\\n    at java.lang.UNIXProcess.forkAndExec(Native Method)\\n    at java.lang.UNIXProcess.&lt;init&gt;(UNIXProcess.java:135)\\n    at java.lang.ProcessImpl.start(ProcessImpl.java:130)\\n    at java.lang.ProcessBuilder.start(ProcessBuilder.java:1022)\\n    ... 1 more\\n</code></pre>\\n\\n<p>It is apparent to me that the JVM does not have access to the environment variables <code>$HADOOP_INSTALL</code> and the updated <code>$PATH</code> variable. I have verified that by printing out the environment variables through Java code.</p>\\n\\n<p>Therefore  my question is what do I need to do in order to:</p>\\n\\n<ol>\\n<li>Make Hadoop visible by the JVM</li>\\n<li>Provide the Hadoop Classpath (jar libraries) to my Java Code</li>\\n</ol>\\n\\n<p>Thank you for your time.</p>\\n\"",
    "reco2": "hadoop version command gives error related to java (No such file or directory)",
    "reco3": "using string split failed in hadoop mapper",
    "reco1": "Execute failed  java.io.IOException cannot run program &quot;~/Documents/apache-forrest-0.8/bin/forrest&quot; error=2  no such file or directory"
  },
  {
    "index": 3463,
    "votes": 1,
    "tags": [
      "java",
      "hadoop"
    ],
    "timestamp": 1404365540,
    "question": "How to write the output of reducer once",
    "answers": 1,
    "content": "<p>I am new to hadoop.While working on the samples I came to know that OutputCollector of reducer write the output(part-0000) for each key and value pair by appending it.</p>\\n\\n<p>For eg:\\n    my k-v pair for reducer is <code>sachin#mumbai</code>\\n    then reducer will write at <code>part-0000 as sachin mumbai</code>\\n    Then other k-v pair is <code>rajni#chennai</code>\\n    then reducer append part-0000 as </p>\\n\\n<pre><code> sachin mumbai\\n rajni chennai\\n</code></pre>\\n\\n<p>What my doubt is ..is it possible to write the output(all k-v pairs)only once </p>\\n",
    "reco2": "send multiple float arguments into reducer results null pointer exception",
    "reco3": "What is the control flow of Hadoop mapper with MultipleInputs?",
    "reco1": "Fetch byte offset of output record from reducer in Hadoop 1"
  },
  {
    "index": 4958,
    "votes": 1,
    "tags": [
      "java",
      "hadoop"
    ],
    "timestamp": 1404150603,
    "question": "Error uploading data on multinode hadoop-2.2.0 cluster",
    "answers": 0,
    "content": "<p>i have successfully configured hadoop-2.2.0 in pseudo distribution mode on ubuntu 13.10  i tried for multinode cluster of hadoop-2.2.0 on ubuntu 13.10 with two systems it was installed successfully.  i got error while uploading data to hdfs   it says no data is running. i checked using jps command on both master and slave node  it gives Namenode  ResourceManager and Secondary Namenode running on master  NodeManager and Datanode running on slave node. </p>\\n\\n<p>this is my error trace:</p>\\n\\n<pre><code>hduser@master:~/Downloads$ hdfs dfs -put BX-Books.csv input\\n14/06/30 23:04:31 WARN util.NativeCodeLoader: Unable to load native-hadoop library for your platform... using builtin-java classes where applicable\\n14/06/30 23:04:32 WARN hdfs.DFSClient: DataStreamer Exception\\norg.apache.hadoop.ipc.RemoteException(java.io.IOException): File /user/hduser/input/BX-Books.csv._COPYING_ could only be replicated to 0 nodes instead of minReplication (=1).  There are 0 datanode(s) running and no node(s) are excluded in this operation.\\n    at org.apache.hadoop.hdfs.server.blockmanagement.BlockManager.chooseTarget(BlockManager.java:1384)\\n    at org.apache.hadoop.hdfs.server.namenode.FSNamesystem.getAdditionalBlock(FSNamesystem.java:2477)\\n    at org.apache.hadoop.hdfs.server.namenode.NameNodeRpcServer.addBlock(NameNodeRpcServer.java:555)\\n    at org.apache.hadoop.hdfs.protocolPB.ClientNamenodeProtocolServerSideTranslatorPB.addBlock(ClientNamenodeProtocolServerSideTranslatorPB.java:387)\\n    at org.apache.hadoop.hdfs.protocol.proto.ClientNamenodeProtocolProtos$ClientNamenodeProtocol$2.callBlockingMethod(ClientNamenodeProtocolProtos.java:59582)\\n    at org.apache.hadoop.ipc.ProtobufRpcEngine$Server$ProtoBufRpcInvoker.call(ProtobufRpcEngine.java:585)\\n    at org.apache.hadoop.ipc.RPC$Server.call(RPC.java:928)\\n    at org.apache.hadoop.ipc.Server$Handler$1.run(Server.java:2048)\\n    at org.apache.hadoop.ipc.Server$Handler$1.run(Server.java:2044)\\n    at java.security.AccessController.doPrivileged(Native Method)\\n    at javax.security.auth.Subject.doAs(Subject.java:415)\\n    at org.apache.hadoop.security.UserGroupInformation.doAs(UserGroupInformation.java:1491)\\n    at org.apache.hadoop.ipc.Server$Handler.run(Server.java:2042)\\n\\n    at org.apache.hadoop.ipc.Client.call(Client.java:1347)\\n    at org.apache.hadoop.ipc.Client.call(Client.java:1300)\\n    at org.apache.hadoop.ipc.ProtobufRpcEngine$Invoker.invoke(ProtobufRpcEngine.java:206)\\n    at com.sun.proxy.$Proxy9.addBlock(Unknown Source)\\n    at sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\\n    at sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:57)\\n    at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\\n    at java.lang.reflect.Method.invoke(Method.java:606)\\n    at org.apache.hadoop.io.retry.RetryInvocationHandler.invokeMethod(RetryInvocationHandler.java:186)\\n    at org.apache.hadoop.io.retry.RetryInvocationHandler.invoke(RetryInvocationHandler.java:102)\\n    at com.sun.proxy.$Proxy9.addBlock(Unknown Source)\\n    at org.apache.hadoop.hdfs.protocolPB.ClientNamenodeProtocolTranslatorPB.addBlock(ClientNamenodeProtocolTranslatorPB.java:330)\\n    at org.apache.hadoop.hdfs.DFSOutputStream$DataStreamer.locateFollowingBlock(DFSOutputStream.java:1226)\\n    at org.apache.hadoop.hdfs.DFSOutputStream$DataStreamer.nextBlockOutputStream(DFSOutputStream.java:1078)\\n    at org.apache.hadoop.hdfs.DFSOutputStream$DataStreamer.run(DFSOutputStream.java:514)\\nput: File /user/hduser/input/BX-Books.csv._COPYING_ could only be replicated to 0 nodes instead of minReplication (=1).  There are 0 datanode(s) running and no node(s) are excluded in this operation.\\n14/06/30 23:04:33 ERROR hdfs.DFSClient: Failed to close file /user/hduser/input/BX-Books.csv._COPYING_\\norg.apache.hadoop.ipc.RemoteException(java.io.IOException): File /user/hduser/input/BX-Books.csv._COPYING_ could only be replicated to 0 nodes instead of minReplication (=1).  There are 0 datanode(s) running and no node(s) are excluded in this operation.\\n    at org.apache.hadoop.hdfs.server.blockmanagement.BlockManager.chooseTarget(BlockManager.java:1384)\\n    at org.apache.hadoop.hdfs.server.namenode.FSNamesystem.getAdditionalBlock(FSNamesystem.java:2477)\\n    at org.apache.hadoop.hdfs.server.namenode.NameNodeRpcServer.addBlock(NameNodeRpcServer.java:555)\\n    at org.apache.hadoop.hdfs.protocolPB.ClientNamenodeProtocolServerSideTranslatorPB.addBlock(ClientNamenodeProtocolServerSideTranslatorPB.java:387)\\n    at org.apache.hadoop.hdfs.protocol.proto.ClientNamenodeProtocolProtos$ClientNamenodeProtocol$2.callBlockingMethod(ClientNamenodeProtocolProtos.java:59582)\\n    at org.apache.hadoop.ipc.ProtobufRpcEngine$Server$ProtoBufRpcInvoker.call(ProtobufRpcEngine.java:585)\\n    at org.apache.hadoop.ipc.RPC$Server.call(RPC.java:928)\\n    at org.apache.hadoop.ipc.Server$Handler$1.run(Server.java:2048)\\n    at org.apache.hadoop.ipc.Server$Handler$1.run(Server.java:2044)\\n    at java.security.AccessController.doPrivileged(Native Method)\\n    at javax.security.auth.Subject.doAs(Subject.java:415)\\n    at org.apache.hadoop.security.UserGroupInformation.doAs(UserGroupInformation.java:1491)\\n    at org.apache.hadoop.ipc.Server$Handler.run(Server.java:2042)\\n\\n    at org.apache.hadoop.ipc.Client.call(Client.java:1347)\\n    at org.apache.hadoop.ipc.Client.call(Client.java:1300)\\n    at org.apache.hadoop.ipc.ProtobufRpcEngine$Invoker.invoke(ProtobufRpcEngine.java:206)\\n    at com.sun.proxy.$Proxy9.addBlock(Unknown Source)\\n    at sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\\n    at sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:57)\\n    at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\\n    at java.lang.reflect.Method.invoke(Method.java:606)\\n    at org.apache.hadoop.io.retry.RetryInvocationHandler.invokeMethod(RetryInvocationHandler.java:186)\\n    at org.apache.hadoop.io.retry.RetryInvocationHandler.invoke(RetryInvocationHandler.java:102)\\n    at com.sun.proxy.$Proxy9.addBlock(Unknown Source)\\n    at org.apache.hadoop.hdfs.protocolPB.ClientNamenodeProtocolTranslatorPB.addBlock(ClientNamenodeProtocolTranslatorPB.java:330)\\n    at org.apache.hadoop.hdfs.DFSOutputStream$DataStreamer.locateFollowingBlock(DFSOutputStream.java:1226)\\n    at org.apache.hadoop.hdfs.DFSOutputStream$DataStreamer.nextBlockOutputStream(DFSOutputStream.java:1078)\\n    at org.apache.hadoop.hdfs.DFSOutputStream$DataStreamer.run(DFSOutputStream.java:514)\\n</code></pre>\\n\\n<p>i followed this link : <a href=\\http://www.sbarjatiya.com/notes_wiki/index.php/Installing_Hadoop_2.2.0_cluster_on_Ubuntu_12.04_x86_64_Desktops\\\" rel=\\\"nofollow\\\">http://www.sbarjatiya.com/notes_wiki/index.php/Installing_Hadoop_2.2.0_cluster_on_Ubuntu_12.04_x86_64_Desktops</a>   any body pls help here..</p>\\n\"",
    "reco2": "Call From &lt;hostname&gt;/&lt;ip&gt; to &lt;hostname&gt;:9000 failed on connection exception: java.net.ConnectException: Connection refused",
    "reco3": "Is it advisable to format namenode each time before running jps?",
    "reco1": "Hadoop namenode format"
  },
  {
    "index": 8866,
    "votes": 1,
    "tags": [
      "java",
      "hadoop"
    ],
    "timestamp": 1403530937,
    "question": "how we can run hadoop program in eclipse in java",
    "answers": 0,
    "content": "<p>i am working on hadoop but i am not able to understand how we can configure to eclipse and which software install to run hadoop program .in single machine in windows 7.\\nis there any plugin is available to run hadoop program . \\ncan you please suggest me any link detailed information how can i rum hadoop program.\\ni refer many sides but i am not getting exact information how can i run program .\\nis there any side getting all information about the hadoop.program running in eclipse \\nand how can i map and reduce the program .</p>\\n",
    "reco2": "what should be included when extracting a jar aiming to run in aws hadoop",
    "reco3": "hadoop version command gives error related to java (No such file or directory)",
    "reco1": "Single node Hadoop and map reduce with mongodb"
  },
  {
    "index": 16143,
    "votes": 1,
    "tags": [
      "java",
      "hadoop"
    ],
    "timestamp": 1402483031,
    "question": "pass HashSet&lt;Text&gt; as Iterable&lt;Text&gt; in reduce function&#39;s parameter - HADOOP",
    "answers": 2,
    "content": "<p>I have a HashMap and I want to pass its values to the reduce function in hadoop via overoloading the run method. The reduce function accepts Iterable. Is there a way to do that? Thanks in advance for your help.</p>\\n",
    "reco2": "Multiple outputs for one key for reducer function  Hadoop",
    "reco3": "Use mapreduce for an object in memory",
    "reco1": "Debugging a map reduce job in Eclipse"
  },
  {
    "index": 18203,
    "votes": 1,
    "tags": [
      "java",
      "hadoop"
    ],
    "timestamp": 1402098886,
    "question": "How to specify uberization of a Hive query in Hadoop2?",
    "answers": 1,
    "content": "<p>There is a new feature in Hadoop 2 called <em>uberization</em>.  For example  <a href=\\http://www.ibm.com/developerworks/library/bd-yarn-intro/index.html\\\" rel=\\\"nofollow\\\">this reference</a> says:</p>\\n\\n<blockquote>\\n  <p>Uberization is the possibility to run all tasks of a MapReduce job in\\n  the ApplicationMaster's JVM if the job is small enough. This way  you\\n  avoid the overhead of requesting containers from the ResourceManager\\n  and asking the NodeManagers to start (supposedly small) tasks.</p>\\n</blockquote>\\n\\n<p>What I can't tell is whether this just happens magically behind the scenes or does one need to do something for this to happen?  For example  when doing a Hive query is there a setting (or hint) to get this to happen?  Can you specify the threshold for what is \\\"small enough\\\"?</p>\\n\\n<p>Also  I'm having trouble finding much about this concept - does it go by another name?</p>\\n\"",
    "reco2": "Launch mapreduce job on hadoop 2.2 (Yarn) from java application",
    "reco3": "MapReduce counters are always zero for Hadoop/TEZ jobs",
    "reco1": "Hadoop: How can I prevent failed tasks from making the whole job fail?"
  },
  {
    "index": 18268,
    "votes": 1,
    "tags": [
      "java",
      "hadoop"
    ],
    "timestamp": 1402083001,
    "question": "Hadoop Mapreduce job stuck at map 100% reduce 51%",
    "answers": 1,
    "content": "<p>So  I am looking for an infinite loop somewhere  and I don't know if there is anything else that can cause this. I am using four cluster nodes  so I am pretty sure that there cannot be a lack of RAM  as has been suggested in other questions of the same kind. </p>\\n\\n<p>My code: </p>\\n\\n<pre><code>package org.myorg;\\n\\nimport java.io.IOException;\\nimport java.util.*;\\n\\nimport org.apache.hadoop.fs.Path;\\nimport org.apache.hadoop.conf.*;\\nimport org.apache.hadoop.io.*;\\nimport org.apache.hadoop.mapreduce.*;\\nimport org.apache.hadoop.mapreduce.lib.input.FileInputFormat;\\nimport org.apache.hadoop.mapreduce.lib.input.TextInputFormat;\\nimport org.apache.hadoop.mapreduce.lib.output.FileOutputFormat;\\nimport org.apache.hadoop.mapreduce.lib.output.TextOutputFormat;\\n\\nimport util.hashing.*;\\n\\n\\n\\npublic class LatLong {\\n\\n\\n public static class Map extends Mapper&lt;Object  Text  Text  Text&gt; {\\n    //private final static IntWritable one = new IntWritable(1);\\n\\n\\n    public void map(Object key  Text value  Context context) throws IOException  InterruptedException {\\n        String line = value.toString();\\n        String[] longLatArray = line.split(\\ \\\");\\n        double longi = Double.parseDouble(longLatArray[0]);\\n        double lat = Double.parseDouble(longLatArray[1]);\\n        //List&lt;Double&gt; origLatLong = new ArrayList&lt;Double&gt;(2);\\n        //origLatLong.add(lat);\\n        //origLatLong.add(longi);\\n        Geohash inst = Geohash.getInstance();\\n        //encode is the library's encoding function\\n        String hash = inst.encode(lat longi);\\n        //Using the first 5 characters just for testing purposes\\n        //Need to find the right one later\\n        int accuracy = 4;\\n        //hash of the thing is shortened to whatever I figure out\\n        //to be the right size of each tile\\n        Text shortenedHash = new Text(hash.substring(0 accuracy));\\n        Text origHash = new Text(hash);\\n\\n        context.write(shortenedHash  origHash);\\n    }\\n } \\n\\n public static class Reduce extends Reducer&lt;Text  Text  Text  Text&gt; {\\n\\n     private IntWritable totalTileElementCount = new IntWritable();\\n     private Text latlongimag = new Text();\\n     private Text dataSeparator = new Text();\\n\\n     @Override\\n     public void reduce(Text key  Iterable&lt;Text&gt; values  Context context) throws IOException  InterruptedException {\\n      int elementCount = 0;\\n      boolean first = true;\\n      Iterator&lt;Text&gt; it = values.iterator();\\n      String lat = new String();\\n      String longi = new String();\\n      Geohash inst = Geohash.getInstance();\\n\\n      while (it.hasNext()) {\\n       elementCount = elementCount+1;\\n       if(first)\\n       {\\n           double[] doubleArray = (inst.decode(it.next().toString()));\\n           lat = Double.toString(doubleArray[0]);\\n           longi = Double.toString(doubleArray[1]);\\n           first = false;\\n\\n       }\\n\\n\\n\\n      }\\n      totalTileElementCount.set(elementCount);\\n      //Geohash inst = Geohash.getInstance();\\n\\n      String mag = totalTileElementCount.toString();\\n\\n      latlongimag.set(lat+\\\" \\\"+ longi +\\\" \\\"+mag+\\\" \\\");\\n      dataSeparator.set(\\\"\\\");\\n      context.write(latlongimag  dataSeparator );\\n     }\\n }\\n\\n public static void main(String[] args) throws Exception {\\n    Configuration conf = new Configuration();\\n    Job job = new Job(conf  \\\"wordcount\\\");\\n    job.setJarByClass(LatLong.class);\\n\\n    job.setOutputKeyClass(Text.class);\\n    job.setOutputValueClass(Text.class);\\n\\n    job.setMapperClass(Map.class);\\n    job.setReducerClass(Reduce.class);\\n\\n    job.setInputFormatClass(TextInputFormat.class);\\n    job.setOutputFormatClass(TextOutputFormat.class);\\n\\n    FileInputFormat.addInputPath(job  new Path(args[0]));\\n    FileOutputFormat.setOutputPath(job  new Path(args[1]));\\n\\n    job.waitForCompletion(true);\\n }\\n\\n}       \\n</code></pre>\\n\"",
    "reco2": "Testing for an infinite loop +java",
    "reco3": "How to determine Ram consumption in each map reduce task?",
    "reco1": "How hadoop works? How a client is connected to hadoop"
  },
  {
    "index": 11891,
    "votes": 5,
    "tags": [
      "java",
      "hibernate"
    ],
    "timestamp": 1403025792,
    "question": "Hibernate Example ignores case without calling Example.ignoreCase()",
    "answers": 1,
    "content": "<p>I'm using <em>Hibernate version 4.3.5.Final</em>.  The problem here is that Hibernate finds entities of the type <code>Foo</code> where the case of the property <code>address</code> has different a case (e.g. \\BLAFOO\\\"). However  in my example  <code>ex.ignoreCase()</code> is not called.</p>\\n\\n<p>I only want to find entities which match the exact case.  What am i doing wrong?</p>\\n\\n<pre><code>Foo myBean = new Foo();\\nmyBean.setAddress(\\\"blaFoo\\\");\\nExample ex = Example.create(myBean);\\nex.excludeZeroes();\\n//ex.ignoreCase();\\nDetachedCriteria crit = DetachedCriteria.forClass(Foo.class).add(ex);   \\nList&lt;MonitoredApp&gt; apps = dao.findByDetachedCriteria(crit);\\n</code></pre>\\n\"",
    "reco2": "how to resolve hibernate mapping exception",
    "reco3": "How can I get multiple entities values from a table in Hibernate?",
    "reco1": "HQL not working &quot;in&quot; with multiple values"
  },
  {
    "index": 41823,
    "votes": 5,
    "tags": [
      "java",
      "hibernate"
    ],
    "timestamp": 1398841069,
    "question": "What kind of difficulties you&#39;ve faced with Hibernate",
    "answers": 1,
    "content": "<p>As any other framework Hibernate impose some restrictions. One of a very popular interview questions is: </p>\\n\\n<blockquote>\\n  <p>\\What kind of difficulties you've faced with Hibernate?\\\"</p>\\n</blockquote>\\n\\n<p><strong>For instance:</strong></p>\\n\\n<ol>\\n<li>Lazy one-2-one bidirectional is impossible.</li>\\n<li>Lazy collection loading after session close. That happens when you use DAO + Spring transactions. <a href=\\\"http://stackoverflow.com/questions/11298594/what-are-some-common-problems-with-hibernate-persistence\\\">You can read here about it</a>.</li>\\n<li>Troubles with concurrent update on clustered application</li>\\n<li><a href=\\\"http://stackoverflow.com/questions/97197/what-is-the-n1-selects-issue\\\">N + 1 selecting problem</a></li>\\n</ol>\\n\\n<p><strong>Question:</strong> may you supplement this humble list please?</p>\\n\\n<p><strong>P.S.</strong>\\nI don't  mean those difficulties when you are newcomer in Hibernate and don't now how to map many-2-many. I mean those difficulties that faced every experienced programmer while using this framework.</p>\\n\"",
    "reco2": "How can I get multiple entities values from a table in Hibernate?",
    "reco3": "transaction is getting started in hibernate 4.3.6",
    "reco1": "how to resolve hibernate mapping exception"
  },
  {
    "index": 179348,
    "votes": 5,
    "tags": [
      "java",
      "hibernate"
    ],
    "timestamp": 1410021259,
    "question": "Hibernate 4 bytecode enhancement not working for dirty checking optimization",
    "answers": 0,
    "content": "<p>I am using the Hibernate 4.3.6 and I made use of the latest <a href=\\https://hibernate.atlassian.net/browse/HHH-8337\\\" rel=\\\"nofollow\\\">Maven bytecode enhancement</a> to instrument all entities for self dirtiness awareness.</p>\\n\\n<p>I added the maven plugin:</p>\\n\\n<pre><code>&lt;build&gt;\\n    &lt;plugins&gt;\\n        &lt;plugin&gt;\\n            &lt;groupId&gt;org.hibernate.orm.tooling&lt;/groupId&gt;\\n            &lt;artifactId&gt;hibernate-enhance-maven-plugin&lt;/artifactId&gt;\\n            &lt;executions&gt;\\n                &lt;execution&gt;\\n                    &lt;phase&gt;process-test-resources&lt;/phase&gt;\\n                    &lt;goals&gt;\\n                        &lt;goal&gt;enhance&lt;/goal&gt;\\n                    &lt;/goals&gt;\\n                &lt;/execution&gt;\\n            &lt;/executions&gt;\\n        &lt;/plugin&gt;\\n    &lt;/plugins&gt;\\n&lt;/build&gt;\\n</code></pre>\\n\\n<p>and I see my entities are being enhanced:</p>\\n\\n<pre><code>@Entity\\npublic class EnhancedOrderLine\\nimplements ManagedEntity  PersistentAttributeInterceptable  SelfDirtinessTracker\\n{\\n    @Id\\n  @GeneratedValue(strategy=GenerationType.AUTO)\\n  private Long id;\\n  private Long number;\\n  private String orderedBy;\\n  private Date orderedOn;\\n\\n  @Transient\\n  private transient PersistentAttributeInterceptor $$_hibernate_attributeInterceptor;\\n\\n  @Transient\\n  private transient Set $$_hibernate_tracker;\\n\\n  @Transient\\n  private transient CollectionTracker $$_hibernate_collectionTracker;\\n\\n  @Transient\\n  private transient EntityEntry $$_hibernate_entityEntryHolder;\\n\\n  @Transient\\n  private transient ManagedEntity $$_hibernate_previousManagedEntity;\\n\\n  @Transient\\n  private transient ManagedEntity $$_hibernate_nextManagedEntity;\\n\\n  ...\\n</code></pre>\\n\\n<p>While debugging  I am checking org.hibernate.event.internal.DefaultFlushEntityEventListener#dirtyCheck method:</p>\\n\\n<pre><code>        if ( entity instanceof SelfDirtinessTracker ) {\\n            if ( ( (SelfDirtinessTracker) entity ).$$_hibernate_hasDirtyAttributes() ) {\\n                dirtyProperties = persister.resolveAttributeIndexes( ( (SelfDirtinessTracker) entity ).$$_hibernate_getDirtyAttributes() );\\n            }\\n        }\\n</code></pre>\\n\\n<p>and the $$_hibernate_hasDirtyAttributes() always returns <strong>false</strong>.</p>\\n\\n<p>This is because $$_hibernate_attributeInterceptor is always null  so when setting any property:</p>\\n\\n<pre><code>private void $$_hibernate_write_number(Long paramLong)\\n{\\n if (($$_hibernate_getInterceptor() == null) || ((this.number == null) || (this.number.equals(paramLong))))\\n  break label39;\\n $$_hibernate_trackChange(\\\"number\\\");\\n label39: Long localLong = paramLong;\\n if ($$_hibernate_getInterceptor() != null)\\n  localLong = (Long)$$_hibernate_getInterceptor().writeObject(this  \\\"number\\\"  this.number  paramLong);\\n this.number = localLong;\\n}\\n</code></pre>\\n\\n<p>because the $$_hibernate_getInterceptor() is null the trackChange will be bypassed  hence the bytecode enhancement will not resolve the dirty properties and the default deep-comparison algorithm will be used.</p>\\n\\n<p>What am I missing? How can I get the $$_hibernate_attributeInterceptor to be properly set so that the dirty properties are tracked by the bytecode instrumentation methods?</p>\\n\"",
    "reco2": "Which source code gets compiled to a swap in the Java bytecode?",
    "reco3": "Programming in Java bytecode example",
    "reco1": "Hibernate - Difference between bytecode instrumentation and bytecode enhancement?"
  },
  {
    "index": 68402,
    "votes": 4,
    "tags": [
      "java",
      "hibernate"
    ],
    "timestamp": 1395931851,
    "question": "Error: Deprecated PersistenceProvider  use HibernatePersistenceProvider instead of HibernatePersistence",
    "answers": 2,
    "content": "<p>I think this is a very common problem for all beginners like me. But I could not find a solution. Yet.</p>\\n\\n<p>File persistence.xml is in src/META-INF/persistence.xml</p>\\n\\n<pre><code>&lt;?xml version=\\1.0\\\" encoding=\\\"UTF-8\\\"?&gt;\\n    &lt;persistence xmlns=\\\"http://java.sun.com/xml/ns/persistence\\\"\\n    xmlns:xsi=\\\"http://www.w3.org/2001/XMLSchema-instance\\\"\\n    xsi:schemaLocation=\\\"http://java.sun.com/xml/ns/persistence\\n    http://java.sun.com/xml/ns/persistence/persistence_2_0.xsd\\\"\\n    version=\\\"2.0\\\"&gt;\\n\\n    &lt;persistence-unit name=\\\"jobs\\\"&gt;\\n\\n    &lt;!-- provedor/implementacao do JPA --&gt;\\n    &lt;provider&gt;org.hibernate.ejb.HibernatePersistenceProvider&lt;/provider&gt;\\n\\n    &lt;!-- entidade mapeada --&gt;\\n    &lt;class&gt;\\n        br.com.caelum.tarefas.modelo.Job\\n    &lt;/class&gt;\\n\\n    &lt;properties&gt;\\n        &lt;!-- dados da conexao --&gt;\\n        &lt;property name=\\\"javax.persistence.jdbc.driver\\\" value=\\\"com.mysql.jdbc.Driver\\\" /&gt;\\n        &lt;property name=\\\"javax.persistence.jdbc.url\\\" value=\\\"jdbc:mysql://localhost/fj21\\\" /&gt;\\n        &lt;property name=\\\"javax.persistence.jdbc.user\\\" value=\\\"root\\\" /&gt;\\n        &lt;property name=\\\"javax.persistence.jdbc.password\\\" value=\\\"root\\\" /&gt;\\n\\n        &lt;!-- propriedades do hibernate --&gt;\\n        &lt;property name=\\\"hibernate.dialect\\\" value=\\\"org.hibernate.dialect.MySQL5InnoDBDialect\\\" /&gt;\\n        &lt;property name=\\\"hibernate.show_sql\\\" value=\\\"true\\\" /&gt;\\n        &lt;property name=\\\"hibernate.format_sql\\\" value=\\\"true\\\" /&gt;\\n\\n        &lt;!-- atualiza o banco  gera as tabelas se for preciso --&gt;\\n        &lt;property name=\\\"hibernate.hbm2ddl.auto\\\" value=\\\"update\\\" /&gt;\\n\\n    &lt;/properties&gt;\\n&lt;/persistence-unit&gt;\\n</code></pre>\\n\\n<p></p>\\n\\n<p>When I run the code</p>\\n\\n<pre><code>try\\n{\\n    EntityManagerFactory factory = Persistence.createEntityManagerFactory(\\\"tarefas\\\");\\n    EntityManager manager = factory.createEntityManager();\\n\\n    manager.close();\\n    factory.close();\\n    System.out.println(\\\"Execu\ufffd\ufffdo com sucesso!\\\");\\n}catch(Exception _Ex)\\n{\\n    System.out.println(\\\"Erro: \\\" + _Ex.getMessage());\\n}\\n</code></pre>\\n\\n<p>I get the message </p>\\n\\n<pre><code>27/03/2014 11:35:18 org.hibernate.ejb.HibernatePersistence logDeprecation WARN: HHH015016: Encountered a deprecated javax.persistence.spi.PersistenceProvider [org.hibernate.ejb.HibernatePersistence]; use [org.hibernate.jpa.HibernatePersistenceProvider] instead.\\n27/03/2014 11:35:18 org.hibernate.ejb.HibernatePersistence logDeprecation WARN: HHH015016: Encountered a deprecated javax.persistence.spi.PersistenceProvider [org.hibernate.ejb.HibernatePersistence]; use [org.hibernate.jpa.HibernatePersistenceProvider] instead.\\n27/03/2014 11:35:18 org.hibernate.ejb.HibernatePersistence logDeprecation WARN: HHH015016: Encountered a deprecated javax.persistence.spi.PersistenceProvider [org.hibernate.ejb.HibernatePersistence]; use [org.hibernate.jpa.HibernatePersistenceProvider] instead.\\nErro: No Persistence provider for EntityManager named jobs\\n</code></pre>\\n\\n<p>What I'm doing wrong?</p>\\n\"",
    "reco2": "JPA Hibernate: Invalid persistence.xml",
    "reco3": "Location of persistence.xml file in non-maven project",
    "reco1": "Exception Unable to build entity manager factory"
  },
  {
    "index": 127939,
    "votes": 4,
    "tags": [
      "java",
      "hibernate"
    ],
    "timestamp": 1389110756,
    "question": "Close SessionFactory in Hibernate 4.3",
    "answers": 3,
    "content": "<p>I'm upgrading my Hibernate to the latest version. With my old <code>HibernateUtil.java</code> I had no problems but when upgrading it  the SessionFactory doesn't seem to close anymore. </p>\\n\\n<p>This is my <strong>new</strong> <code>HibernateUtil.java</code> class:</p>\\n\\n<pre><code>import org.hibernate.HibernateException;\\nimport org.hibernate.cfg.Configuration;\\nimport org.hibernate.SessionFactory;\\nimport org.hibernate.boot.registry.StandardServiceRegistryBuilder;\\n\\npublic class HibernateUtil {\\n\\n    private static final SessionFactory sessionFactory;\\n\\n    static {\\n        try {\\n            Configuration configuration = new Configuration().configure();\\n            StandardServiceRegistryBuilder builder = new StandardServiceRegistryBuilder().applySettings(configuration.getProperties());\\n            sessionFactory = configuration.buildSessionFactory(builder.build());\\n        } catch (HibernateException ex) {\\n            System.err.println(\\Initial SessionFactory creation failed.\\\" + ex);\\n            throw new ExceptionInInitializerError(ex);\\n        }\\n    }\\n\\n    public static SessionFactory getSessionFactory() {\\n        return sessionFactory;\\n    }\\n\\n    public static void closeSessionFactory() {\\n        sessionFactory.close();\\n    }\\n}\\n</code></pre>\\n\\n<p>This is my <strong>old</strong> <code>HibernateUtil.java</code> class:</p>\\n\\n<pre><code>import org.hibernate.cfg.Configuration;\\nimport org.hibernate.SessionFactory;\\n\\npublic class HibernateUtil {\\n\\n    private static final SessionFactory sessionFactory;\\n\\n    static {\\n        try {\\n            // Create the SessionFactory from standard (hibernate.cfg.xml) \\n            // config file.\\n            sessionFactory = new Configuration().configure().buildSessionFactory();\\n        } catch (Throwable ex) {\\n            // Log the exception. \\n            System.err.println(\\\"Initial SessionFactory creation failed.\\\" + ex);\\n            throw new ExceptionInInitializerError(ex);\\n        }\\n    }\\n\\n    public static SessionFactory getSessionFactory() {\\n        return sessionFactory;\\n    }\\n\\n    public static void closeSessionFactory() {\\n        sessionFactory.close();\\n    }\\n}\\n</code></pre>\\n\\n<p>This is my <strong>hibernate.cfg.xml</strong>:</p>\\n\\n<pre><code>&lt;?xml version=\\\"1.0\\\" encoding=\\\"UTF-8\\\"?&gt;\\n&lt;!DOCTYPE hibernate-configuration PUBLIC\\n        \\\"-//Hibernate/Hibernate Configuration DTD 3.0//EN\\\"\\n        \\\"http://www.hibernate.org/dtd/hibernate-configuration-3.0.dtd\\\"&gt;\\n&lt;hibernate-configuration&gt;\\n    &lt;session-factory&gt;\\n        &lt;!-- Database connection settings --&gt;\\n        &lt;property name=\\\"hibernate.dialect\\\"&gt;org.hibernate.dialect.H2Dialect&lt;/property&gt;\\n        &lt;property name=\\\"hibernate.connection.driver_class\\\"&gt;com.mysql.jdbc.Driver&lt;/property&gt;\\n        &lt;property name=\\\"hibernate.connection.url\\\"&gt;jdbc:mysql://localhost:3306/mydatabase&lt;/property&gt;\\n        &lt;property name=\\\"hibernate.connection.username\\\"&gt;user&lt;/property&gt;\\n        &lt;property name=\\\"hibernate.connection.password\\\"&gt;pass&lt;/property&gt;\\n\\n        &lt;!-- JDBC connection pool (use the built-in) --&gt;\\n        &lt;property name=\\\"connection.pool_size\\\"&gt;1&lt;/property&gt;\\n\\n        &lt;!-- SQL dialect --&gt;\\n        &lt;property name=\\\"dialect\\\"&gt;org.hibernate.dialect.H2Dialect&lt;/property&gt;\\n\\n        &lt;!-- Disable the second-level cache  --&gt;\\n        &lt;property name=\\\"cache.provider_class\\\"&gt;org.hibernate.cache.internal.NoCacheProvider&lt;/property&gt;\\n\\n        &lt;!-- Echo all executed SQL to stdout --&gt;\\n        &lt;property name=\\\"show_sql\\\"&gt;false&lt;/property&gt;\\n        &lt;property name=\\\"format_sql\\\"&gt;false&lt;/property&gt;\\n        &lt;property name=\\\"use_sql_comments\\\"&gt;false&lt;/property&gt;\\n\\n\\n        &lt;!-- Use the thread as the context --&gt;\\n        &lt;property name=\\\"hibernate.current_session_context_class\\\"&gt;thread&lt;/property&gt;\\n\\n        &lt;!-- Use these files for mapping configuration --&gt;\\n        &lt;mapping resource=\\\"test/Person.hbm.xml\\\"/&gt;\\n    &lt;/session-factory&gt;\\n&lt;/hibernate-configuration&gt;\\n</code></pre>\\n\\n<p>Code in which I create the session:</p>\\n\\n<pre><code>public class Helper {\\n\\n    Session session = null;\\n\\n    public Helper() {\\n        this.session = HibernateUtil.getSessionFactory().getCurrentSession();\\n    }\\n\\n    public List getPeople(int id) {\\n       ...\\n    }\\n}\\n</code></pre>\\n\\n<p>Main method:</p>\\n\\n<pre><code>public static void main(String args[]) {\\n    Logger log = Logger.getLogger(\\\"org.hibernate\\\");\\n    log.setLevel(Level.WARNING);\\n\\n    Helper helper = new Helper();\\n    List&lt;Person&gt; people = helper.getPeople(1);\\n\\n    for (int i = 0; i &lt; people.size(); i++) {\\n        System.out.println(\\\"people \\\" + i + \\\": \\\" + people.get(i).getID());\\n    }\\n\\n    HibernateUtil.closeSessionFactory();\\n}\\n</code></pre>\\n\"",
    "reco2": "Getting Error : Could not parse configuration: /hibernate.cfg.xml",
    "reco3": "Hibernate Configuration Loading Error",
    "reco1": "Hibernate 4 Access to DialectResolutionInfo cannot be null when &#39;hibernate.dialect&#39; not set"
  },
  {
    "index": 180413,
    "votes": 4,
    "tags": [
      "java",
      "hibernate"
    ],
    "timestamp": 1409840433,
    "question": "How to set Integer parameter as null in Hibernate query?",
    "answers": 1,
    "content": "<p>I've got an entity:</p>\\n\\n<pre><code>    @Entity\\n    @Table(name = \\smsc.security_users\\\")\\n    public class User {\\n\\n        @Id\\n        @Column(name = \\\"id\\\")\\n        private int id;\\n\\n        @Column(name = \\\"username\\\")\\n        private String username;\\n\\n        @Column(name = \\\"password\\\")\\n        private String password;\\n\\n        @Column(name = \\\"enabled\\\")\\n        private int enabled;\\n\\n        @Column(name = \\\"master_id\\\"  nullable = true)\\n        private Integer master_id;\\n\\n        @Temporal(TemporalType.TIMESTAMP)\\n        @Column(name = \\\"passwordExpiration\\\")\\n        private Date passwordExpiration;\\n\\n        public String getUsername() {\\n            return username;\\n        }\\n        ...\\n</code></pre>\\n\\n<p>I'm talking about <code>master_id</code>. And this is my DAO method:</p>\\n\\n<pre><code>public void add(String userName  String password  Integer master_id) {\\n        Session session = null;\\n        session = this.sessionFactory.getCurrentSession();\\n        Query query = session\\n                .createSQLQuery(\\n                        \\\"INSERT INTO smsc.security_users(id username password enabled passwordExpiration master_id) VALUES(smsc.SeqDictID.nextval+1 :userName :password 1 :passwordExpiration :master_id)\\\")\\n                .setString(\\\"userName\\\"  userName)\\n                .setString(\\\"password\\\"  Sha1.getHash(password))\\n                .setTimestamp(\\\"passwordExpiration\\\"  DateUtil.getTomorrow())\\n                .setInteger(\\\"master_id\\\"  master_id);\\n        int updated = query.executeUpdate();\\n\\n    }\\n</code></pre>\\n\\n<p>Log says: </p>\\n\\n<blockquote>\\n  <p>Request processing failed; nested exception is\\n  java.lang.NullPointerException</p>\\n</blockquote>\\n\\n<p>and puts pointer at this line:</p>\\n\\n<pre><code>.setInteger(\\\"master_id\\\"  master_id);\\n</code></pre>\\n\\n<p><code>master_id</code> must be null sometimes. So how can I set null?</p>\\n\"",
    "reco2": "How to solve null pointer exception?",
    "reco3": "No null pointer exception after calling method of null object",
    "reco1": "How to deal with null value in table column in java?"
  },
  {
    "index": 213780,
    "votes": 4,
    "tags": [
      "java",
      "hibernate"
    ],
    "timestamp": 1404942809,
    "question": "Overcoming lazy loading issues in Hibernate  many-to-many  relationship",
    "answers": 1,
    "content": "<p>Teaching myself Hibernate  I have the following table structure/relationship</p>\\n\\n<p><img src=\\http://i.stack.imgur.com/8XRWh.png\\\" alt=\\\"Relationship\\\"></p>\\n\\n<p>Which is represented by the following classes...</p>\\n\\n<h3>Users</h3>\\n\\n<pre><code>@Entity\\n@Table(name = \\\"users\\\")\\npublic class User implements IUser&lt;Role&gt;  Serializable {\\n\\n    @Id\\n    @GeneratedValue(strategy = javax.persistence.GenerationType.IDENTITY)\\n    @SequenceGenerator(name = \\\"user_key_seq\\\")\\n    @Column(name = \\\"key\\\"  insertable = false  updatable = false)\\n    private Long key;\\n\\n    @Column(name = \\\"name\\\")\\n    private String name;\\n\\n    @ManyToMany(cascade = {CascadeType.ALL})\\n    @JoinTable(name = \\\"userroles\\\" \\n                    joinColumns = {\\n                        @JoinColumn(name = \\\"userkey\\\")} \\n                    inverseJoinColumns = {\\n                        @JoinColumn(name = \\\"rolekey\\\")})\\n    private Set&lt;Role&gt; roles = new HashSet&lt;&gt;(5);\\n\\n    @Override\\n    public Set&lt;Role&gt; getRoles() {\\n        return roles;\\n    }\\n\\n    // Other setters and getters\\n\\n}\\n</code></pre>\\n\\n<h3>Roles</h3>\\n\\n<pre><code>@Entity\\n@Table(name = \\\"roles\\\")\\npublic class Role implements IRole  Serializable {\\n\\n    @Id\\n    @GeneratedValue(strategy = javax.persistence.GenerationType.IDENTITY)\\n    @SequenceGenerator(name = \\\"roles_key_seq\\\")\\n    @Column(name = \\\"key\\\"  insertable = false  updatable = false)\\n    private Long key;\\n\\n    @Column(name=\\\"name\\\")\\n    private String name;\\n\\n    @ManyToMany(cascade = {CascadeType.ALL})\\n    @JoinTable(name=\\\"parentroles\\\" \\n                    joinColumns = {@JoinColumn(name=\\\"childkey\\\")} \\n                    inverseJoinColumns = {@JoinColumn(name=\\\"parentkey\\\")})\\n    private Set&lt;Role&gt; roles = new HashSet&lt;&gt;(5);\\n\\n    // Other setters and getters\\n\\n}\\n</code></pre>\\n\\n<p>The problem I'm getting is this...</p>\\n\\n<pre><code>org.hibernate.LazyInitializationException: failed to lazily initialize a collection of role: org.kaizen.chishiki.core.data.User.roles  could not initialize proxy - no Session\\n    at org.hibernate.collection.internal.AbstractPersistentCollection.throwLazyInitializationException(AbstractPersistentCollection.java:575)\\n    at org.hibernate.collection.internal.AbstractPersistentCollection.withTemporarySessionIfNeeded(AbstractPersistentCollection.java:214)\\n    at org.hibernate.collection.internal.AbstractPersistentCollection.initialize(AbstractPersistentCollection.java:554)\\n    at org.hibernate.collection.internal.AbstractPersistentCollection.read(AbstractPersistentCollection.java:142)\\n    at org.hibernate.collection.internal.PersistentSet.iterator(PersistentSet.java:180)\\n    at og.kaizen.chishiki.core.testdatacore.Main.&lt;init&gt;(Main.java:37)\\n    at og.kaizen.chishiki.core.testdatacore.Main.main(Main.java:25)\\n</code></pre>\\n\\n<p>Now  I know I could set the <code>fetch</code> type to <code>FetchType.EAGER</code>  but I'd prefer not to do that  apart from performance concerns  I'm trying to learn my way around these problems ;)</p>\\n\\n<p>I was wondering if there was a way to write a Hibernate query to satisfy this relationship and load the rows manually (it would also allow me to return the interface of <code>Role</code> instead of the implementation as I'm having to do now (would allow me to maintain that contract)).</p>\\n\\n<p>From what I've read  it would seem that I would need to construct an <code>Entity</code> for <code>UserRoles</code>.  Not that I'm against this solution  but I was curious if there was a way to get around it.</p>\\n\\n<p><code>roles</code> appears in a number of other relationships  so there is no way it can form a direct relationship with the parent table (that is  I can't put the <code>key</code> of the parent table in the <code>role</code> table directly  besides  <code>users</code> can have multiple <code>roles</code>)</p>\\n\\n<p>The other solution I had in mind was to write a stored procedure to do it for me.  While this is viable solution that I'm not above doing  it does make migrating the application to another database more difficult  not a show stopper  but I'm trying to keep these ideas in mind.</p>\\n\"",
    "reco2": "Hibernate One to One relationship",
    "reco3": "hibernate not inserting @EmbeddedId into @JoinTable for @OneToMany relationship",
    "reco1": "Java  single database column referencing multiple times"
  },
  {
    "index": 1467,
    "votes": 3,
    "tags": [
      "java",
      "hibernate"
    ],
    "timestamp": 1418233693,
    "question": "org.hibernate.WrongClassException",
    "answers": 0,
    "content": "<p>I'm doing a project about figure skating.\\nI've got a Person class and three subclasses: Skater  Coach and Choreographer.</p>\\n\\n<pre><code>@Entity\\n@Inheritance(strategy = InheritanceType.JOINED)\\npublic class Person {\\n    private String idPerson;\\n    private String name;\\n    private String sex;\\n    private Calendar birthday;\\n    private String info;\\n... getters and setters\\n}\\n\\n@Entity\\n@PrimaryKeyJoinColumn(name=\\id_skater\\\")\\npublic class Skater extends Person {\\n    private List&lt;Result&gt; resultsByIdSkater;\\n    private List&lt;SkaterCoach&gt; skaterCoachesByIdSkater;\\n    private List&lt;SkaterCountry&gt; skaterCountriesByIdSkater;\\n    private List&lt;SkaterChoreographer&gt; skaterChoreographersByIdSkater;\\n...getters and setters\\n</code></pre>\\n\\n<p>Coach and Choreographer are similar.\\nIt's obvious that the real Person can be Coach  Choreographer and Skater at the same time.\\nI want to do something like this:</p>\\n\\n<pre><code>    CoachDao coachDao=new CoachDaoImpl();\\n    ChoreographerDao choreographerDao=new ChoreographerDaoImpl();\\n    Coach coach= (Coach) coachDao.findByName(\\\"SERHII VAYPAN\\\").get(0);\\n    Choreographer choreographer= (Choreographer) choreographerDao.findByName(\\\"SERHII VAYPAN\\\").get(0);\\n</code></pre>\\n\\n<p>But I have</p>\\n\\n<pre><code>org.hibernate.WrongClassException: Object [id=980ae71847e343f9a15755625456bf40] was not of the specified subclass [ru.fsinfo.entity.Coach] : loaded object was of wrong class class ru.fsinfo.entity.Choreographer\\n</code></pre>\\n\\n<p>I understand that I can do it in different sessions. But for some reason I want to do it within one session. Is it possible?</p>\\n\"",
    "reco2": "Need to create program to read data from text file and be able to print the data in a variety of ways  using java",
    "reco3": "How to implement view pager adapter in android?",
    "reco1": "Prompting to print all of that type  and calculate the total of that type"
  },
  {
    "index": 8640,
    "votes": 3,
    "tags": [
      "java",
      "hibernate"
    ],
    "timestamp": 1403556258,
    "question": "Where Annotation in hibernate with date as clause",
    "answers": 2,
    "content": "<p>I was wondering if there was a way to use the <code>@Where(clause=\\\\\")</code> to bind a Set of things where <code>is_active=1 AND expires_date &lt;= new Date()</code> in a <code>@OneToMany</code> relationship.</p>\\n\\n<p>Something like this</p>\\n\\n<pre><code>@Where(clause=\\\"is_active=1 AND expires_date &lt;=\\\" + new Date())\\n</code></pre>\\n\\n<p>Or can you only do it with constants?</p>\\n\\n<p>This code will not work just looking for a work around or if there is a way to do this.\\nThanks ahead.</p>\\n\"",
    "reco2": "Declare constants inside of enum",
    "reco3": "Is there a quick way to move a bunch of static constants to another (non-nested) class?",
    "reco1": "Hibernate One to One relationship"
  },
  {
    "index": 18722,
    "votes": 3,
    "tags": [
      "java",
      "hibernate"
    ],
    "timestamp": 1402026838,
    "question": "Hibernate how to get by id from lazy object",
    "answers": 1,
    "content": "<p>I had entity A A is many to one B fetch type is lazy.</p>\\n\\n<p>When i use below code B still lazy.</p>\\n\\n<pre><code>A a  = session.get(A.class aId);//a.getB(); is lazy\\nB b = session.get(B.class bId);//this object is same whith a.getB();\\n\\n//b.id is 0;\\n//b.name is null;\\n//b.age is 0;\\n\\n//if i remove A a  = session.get(A.class aId);\\n//then \\n\\n//b.id is bId;\\n//b.name is \\Test\\\";\\n//b.age = 18;\\n</code></pre>\\n\\n<p>how can i get don't empty B Use My code?</p>\\n\\n<pre><code>class A{\\n  @ManyToOne(fetch = FetchType.LAZY)\\n  @JoinColumn(name=\\\"bId\\\" nullable = false)\\n  B b;\\n  //getter and setter\\n}\\n\\nclass B{\\n  @Column\\n  int id;\\n  @Column\\n  String name;\\n  @Column\\n  int age;\\n//getter and setter\\n}\\n //it is in my porject Shipment is A OrderDetail is B\\nShipment shipment = shipmentDao.getByDate(id  shipmentDate); \\nOrderDetail od = baseDao.getById(OrderDetail.class  id); \\n</code></pre>\\n\"",
    "reco2": "Lazy load inverse One-To-One relationship with boolean flag in Hibernate",
    "reco3": "Hibernate lazy loading  nullify lazy object",
    "reco1": "failed to lazily initialize a collection of role:"
  },
  {
    "index": 27699,
    "votes": 3,
    "tags": [
      "java",
      "hibernate"
    ],
    "timestamp": 1400762595,
    "question": "Hibernate - Cannot Open Connection Exception",
    "answers": 1,
    "content": "<p>In order to solve the issue of too many connections to DB and idle connections  we made the following changes  to the Configuration file-</p>\\n\\n<pre><code>c3p0.min_size=1\\nc3p0.max_size=20\\nc3p0.timeout=1800\\nc3p0.max_statements=50\\nconnection.release_mode=on_close\\n</code></pre>\\n\\n<p>After that  while trying to run the application  we are getting the following exception. Please advice why this is happening &amp; how this can be corrected -</p>\\n\\n<hr>\\n\\n<pre><code>HTTP Status 500 - org.hibernate.exception.GenericJDBCException: Cannot open connection\\n</code></pre>\\n\\n<p>type Exception report</p>\\n\\n<pre><code>message org.hibernate.exception.GenericJDBCException: Cannot open connection\\n\\ndescription The server encountered an internal error that prevented it from fulfilling this request.\\n\\nexception\\n\\njavax.servlet.ServletException: org.hibernate.exception.GenericJDBCException: Cannot open connection\\n    org.apache.struts.chain.ComposableRequestProcessor.process(ComposableRequestProcessor.java:286)\\n    org.apache.struts.action.ActionServlet.process(ActionServlet.java:1913)\\n    org.apache.struts.action.ActionServlet.doPost(ActionServlet.java:462)\\n    javax.servlet.http.HttpServlet.service(HttpServlet.java:637)\\n    javax.servlet.http.HttpServlet.service(HttpServlet.java:717)\\n    com.alci.filters.ParamFilter.doFilter(ParamFilter.java:27)\\nroot cause\\n\\norg.hibernate.exception.GenericJDBCException: Cannot open connection\\n    org.hibernate.exception.SQLStateConverter.handledNonSpecificException(SQLStateConverter.java:126)\\n    org.hibernate.exception.SQLStateConverter.convert(SQLStateConverter.java:114)\\n    org.hibernate.exception.JDBCExceptionHelper.convert(JDBCExceptionHelper.java:66)\\n    org.hibernate.exception.JDBCExceptionHelper.convert(JDBCExceptionHelper.java:52)\\n    org.hibernate.jdbc.ConnectionManager.openConnection(ConnectionManager.java:449)\\n    org.hibernate.jdbc.ConnectionManager.getConnection(ConnectionManager.java:167)\\n    org.hibernate.jdbc.AbstractBatcher.prepareQueryStatement(AbstractBatcher.java:161)\\n    org.hibernate.loader.Loader.prepareQueryStatement(Loader.java:1577)\\n    org.hibernate.loader.Loader.doQuery(Loader.java:696)\\n    org.hibernate.loader.Loader.doQueryAndInitializeNonLazyCollections(Loader.java:259)\\n    org.hibernate.loader.Loader.doList(Loader.java:2232)\\n    org.hibernate.loader.Loader.listIgnoreQueryCache(Loader.java:2129)\\n    org.hibernate.loader.Loader.list(Loader.java:2124)\\n    org.hibernate.loader.hql.QueryLoader.list(QueryLoader.java:401)\\n    org.hibernate.hql.ast.QueryTranslatorImpl.list(QueryTranslatorImpl.java:363)\\n    org.hibernate.engine.query.HQLQueryPlan.performList(HQLQueryPlan.java:196)\\n    org.hibernate.impl.SessionImpl.list(SessionImpl.java:1149)\\n    org.hibernate.impl.QueryImpl.list(QueryImpl.java:102)\\n    com.alci.common.LoginAction.login(LoginAction.java:127)\\n    sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\\n    sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:39)\\n    sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:25)\\n    java.lang.reflect.Method.invoke(Method.java:597)\\n    org.apache.struts.actions.DispatchAction.dispatchMethod(DispatchAction.java:269)\\n    org.apache.struts.actions.DispatchAction.execute(DispatchAction.java:170)\\n    org.apache.struts.chain.commands.servlet.ExecuteAction.execute(ExecuteAction.java:58)\\n    org.apache.struts.chain.commands.AbstractExecuteAction.execute(AbstractExecuteAction.java:67)\\n    org.apache.struts.chain.commands.ActionCommandBase.execute(ActionCommandBase.java:51)\\n    org.apache.commons.chain.impl.ChainBase.execute(ChainBase.java:190)\\n    org.apache.commons.chain.generic.LookupCommand.execute(LookupCommand.java:304)\\n    org.apache.commons.chain.impl.ChainBase.execute(ChainBase.java:190)\\n    org.apache.struts.chain.ComposableRequestProcessor.process(ComposableRequestProcessor.java:283)\\n    org.apache.struts.action.ActionServlet.process(ActionServlet.java:1913)\\n    org.apache.struts.action.ActionServlet.doPost(ActionServlet.java:462)\\n    javax.servlet.http.HttpServlet.service(HttpServlet.java:637)\\n    javax.servlet.http.HttpServlet.service(HttpServlet.java:717)\\n    com.alci.filters.ParamFilter.doFilter(ParamFilter.java:27)\\nroot cause\\n\\njava.sql.SQLException: Connections could not be acquired from the underlying database!\\n    com.mchange.v2.sql.SqlUtils.toSQLException(SqlUtils.java:106)\\n    com.mchange.v2.c3p0.impl.C3P0PooledConnectionPool.checkoutPooledConnection(C3P0PooledConnectionPool.java:529)\\n    com.mchange.v2.c3p0.impl.AbstractPoolBackedDataSource.getConnection(AbstractPoolBackedDataSource.java:128)\\n    org.hibernate.connection.C3P0ConnectionProvider.getConnection(C3P0ConnectionProvider.java:78)\\n    org.hibernate.jdbc.ConnectionManager.openConnection(ConnectionManager.java:446)\\n    org.hibernate.jdbc.ConnectionManager.getConnection(ConnectionManager.java:167)\\n    org.hibernate.jdbc.AbstractBatcher.prepareQueryStatement(AbstractBatcher.java:161)\\n    org.hibernate.loader.Loader.prepareQueryStatement(Loader.java:1577)\\n    org.hibernate.loader.Loader.doQuery(Loader.java:696)\\n    org.hibernate.loader.Loader.doQueryAndInitializeNonLazyCollections(Loader.java:259)\\n    org.hibernate.loader.Loader.doList(Loader.java:2232)\\n    org.hibernate.loader.Loader.listIgnoreQueryCache(Loader.java:2129)\\n    org.hibernate.loader.Loader.list(Loader.java:2124)\\n    org.hibernate.loader.hql.QueryLoader.list(QueryLoader.java:401)\\n    org.hibernate.hql.ast.QueryTranslatorImpl.list(QueryTranslatorImpl.java:363)\\n    org.hibernate.engine.query.HQLQueryPlan.performList(HQLQueryPlan.java:196)\\n    org.hibernate.impl.SessionImpl.list(SessionImpl.java:1149)\\n    org.hibernate.impl.QueryImpl.list(QueryImpl.java:102)\\n    com.alci.common.LoginAction.login(LoginAction.java:127)\\n    sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\\n    sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:39)\\n    sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:25)\\n    java.lang.reflect.Method.invoke(Method.java:597)\\n    org.apache.struts.actions.DispatchAction.dispatchMethod(DispatchAction.java:269)\\n    org.apache.struts.actions.DispatchAction.execute(DispatchAction.java:170)\\n    org.apache.struts.chain.commands.servlet.ExecuteAction.execute(ExecuteAction.java:58)\\n    org.apache.struts.chain.commands.AbstractExecuteAction.execute(AbstractExecuteAction.java:67)\\n    org.apache.struts.chain.commands.ActionCommandBase.execute(ActionCommandBase.java:51)\\n    org.apache.commons.chain.impl.ChainBase.execute(ChainBase.java:190)\\n    org.apache.commons.chain.generic.LookupCommand.execute(LookupCommand.java:304)\\n    org.apache.commons.chain.impl.ChainBase.execute(ChainBase.java:190)\\n    org.apache.struts.chain.ComposableRequestProcessor.process(ComposableRequestProcessor.java:283)\\n    org.apache.struts.action.ActionServlet.process(ActionServlet.java:1913)\\n    org.apache.struts.action.ActionServlet.doPost(ActionServlet.java:462)\\n    javax.servlet.http.HttpServlet.service(HttpServlet.java:637)\\n    javax.servlet.http.HttpServlet.service(HttpServlet.java:717)\\n    com.alci.filters.ParamFilter.doFilter(ParamFilter.java:27)\\nroot cause\\n\\ncom.mchange.v2.resourcepool.CannotAcquireResourceException: A ResourcePool could not acquire a resource from its primary factory or source.\\n    com.mchange.v2.resourcepool.BasicResourcePool.awaitAvailable(BasicResourcePool.java:1319)\\n    com.mchange.v2.resourcepool.BasicResourcePool.prelimCheckoutResource(BasicResourcePool.java:557)\\n    com.mchange.v2.resourcepool.BasicResourcePool.checkoutResource(BasicResourcePool.java:477)\\n    com.mchange.v2.c3p0.impl.C3P0PooledConnectionPool.checkoutPooledConnection(C3P0PooledConnectionPool.java:525)\\n    com.mchange.v2.c3p0.impl.AbstractPoolBackedDataSource.getConnection(AbstractPoolBackedDataSource.java:128)\\n    org.hibernate.connection.C3P0ConnectionProvider.getConnection(C3P0ConnectionProvider.java:78)\\n    org.hibernate.jdbc.ConnectionManager.openConnection(ConnectionManager.java:446)\\n    org.hibernate.jdbc.ConnectionManager.getConnection(ConnectionManager.java:167)\\n    org.hibernate.jdbc.AbstractBatcher.prepareQueryStatement(AbstractBatcher.java:161)\\n    org.hibernate.loader.Loader.prepareQueryStatement(Loader.java:1577)\\n    org.hibernate.loader.Loader.doQuery(Loader.java:696)\\n    org.hibernate.loader.Loader.doQueryAndInitializeNonLazyCollections(Loader.java:259)\\n    org.hibernate.loader.Loader.doList(Loader.java:2232)\\n    org.hibernate.loader.Loader.listIgnoreQueryCache(Loader.java:2129)\\n    org.hibernate.loader.Loader.list(Loader.java:2124)\\n    org.hibernate.loader.hql.QueryLoader.list(QueryLoader.java:401)\\n    org.hibernate.hql.ast.QueryTranslatorImpl.list(QueryTranslatorImpl.java:363)\\n    org.hibernate.engine.query.HQLQueryPlan.performList(HQLQueryPlan.java:196)\\n    org.hibernate.impl.SessionImpl.list(SessionImpl.java:1149)\\n    org.hibernate.impl.QueryImpl.list(QueryImpl.java:102)\\n    com.alci.common.LoginAction.login(LoginAction.java:127)\\n    sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\\n    sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:39)\\n    sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:25)\\n    java.lang.reflect.Method.invoke(Method.java:597)\\n    org.apache.struts.actions.DispatchAction.dispatchMethod(DispatchAction.java:269)\\n    org.apache.struts.actions.DispatchAction.execute(DispatchAction.java:170)\\n    org.apache.struts.chain.commands.servlet.ExecuteAction.execute(ExecuteAction.java:58)\\n    org.apache.struts.chain.commands.AbstractExecuteAction.execute(AbstractExecuteAction.java:67)\\n    org.apache.struts.chain.commands.ActionCommandBase.execute(ActionCommandBase.java:51)\\n    org.apache.commons.chain.impl.ChainBase.execute(ChainBase.java:190)\\n    org.apache.commons.chain.generic.LookupCommand.execute(LookupCommand.java:304)\\n    org.apache.commons.chain.impl.ChainBase.execute(ChainBase.java:190)\\n    org.apache.struts.chain.ComposableRequestProcessor.process(ComposableRequestProcessor.java:283)\\n    org.apache.struts.action.ActionServlet.process(ActionServlet.java:1913)\\n    org.apache.struts.action.ActionServlet.doPost(ActionServlet.java:462)\\n    javax.servlet.http.HttpServlet.service(HttpServlet.java:637)\\n    javax.servlet.http.HttpServlet.service(HttpServlet.java:717)\\n    com.alci.filters.ParamFilter.doFilter(ParamFilter.java:27)\\nnote The full stack trace of the root cause is available in the Apache Tomcat/6.0.36 logs.\\n</code></pre>\\n",
    "reco2": "Spring + Hibernate + DBCP configuration issue",
    "reco3": "How is maxIdleTimeExcessConnections different from maxIdleTime in c3p0?",
    "reco1": "Connection pool in tomcat 7"
  },
  {
    "index": 39187,
    "votes": 3,
    "tags": [
      "java",
      "hibernate"
    ],
    "timestamp": 1399274448,
    "question": "Hibernate 4 Access to DialectResolutionInfo cannot be null when &#39;hibernate.dialect&#39; not set",
    "answers": 6,
    "content": "<p>I am using Hibernate latest version 4.3.5.Final.</p>\\n\\n<p>My hibernate.cfg.xml file content:</p>\\n\\n<pre><code>&lt;?xml version=\\1.0\\\" encoding=\\\"UTF-8\\\"?&gt;\\n&lt;!DOCTYPE hibernate-configuration PUBLIC\\n    \\\"-//Hibernate/Hibernate Configuration DTD 3.0//EN\\\"\\n    \\\"http://hibernate.org/dtd/hibernate-configuration-3.0.dtd\\\"&gt;\\n&lt;hibernate-configuration&gt;\\n&lt;session-factory&gt;\\n    &lt;property name=\\\"hibernate.connection.driver_class\\\"&gt;com.mysql.jdbc.Driver&lt;/property&gt;\\n    &lt;property name=\\\"hibernate.connection.url\\\"&gt;jdbc:mysql://localhost/Test&lt;/property&gt;\\n    &lt;property name=\\\"hibernate.connection.username\\\"&gt;pankaj&lt;/property&gt;\\n    &lt;property name=\\\"hibernate.connection.password\\\"&gt;xxxx&lt;/property&gt;\\n    &lt;property name=\\\"hibernate.dialect\\\"&gt;org.hibernate.dialect.MySQLDialect&lt;/property&gt;\\n\\n    &lt;mapping resource=\\\"employee.hbm.xml\\\"/&gt;\\n&lt;/session-factory&gt;\\n\\n&lt;/hibernate-configuration&gt;\\n</code></pre>\\n\\n<p>Utility class to create SessionFactory:</p>\\n\\n<pre><code>package com.example;\\nimport org.hibernate.SessionFactory;\\nimport org.hibernate.boot.registry.StandardServiceRegistryBuilder;\\nimport org.hibernate.cfg.Configuration;\\n\\npublic class HibernateUtil {\\n\\nprivate static final SessionFactory sessionFactory = buildSessionFactory();\\n\\nprivate static SessionFactory buildSessionFactory() {\\n    try {\\n        // Create the SessionFactory from hibernate.cfg.xml\\n        Configuration configuration = new Configuration();\\n        configuration.configure(\\\"hibernate.cfg.xml\\\");\\n        System.out.println(\\\"Hibernate Configuration loaded\\\");\\n\\n        SessionFactory sessionFactory = configuration.buildSessionFactory(new StandardServiceRegistryBuilder().build());\\n\\n        return sessionFactory;\\n    }\\n    catch (Throwable ex) {\\n        // Make sure you log the exception  as it might be swallowed\\n        System.err.println(\\\"Initial SessionFactory creation failed.\\\" + ex);\\n        throw new ExceptionInInitializerError(ex);\\n    }\\n}\\n\\npublic static SessionFactory getSessionFactory() {\\n    return sessionFactory;\\n}\\n}\\n</code></pre>\\n\\n<p>When I using it in my main() method  I am getting following exception:</p>\\n\\n<pre><code>May 04  2014 11:55:56 PM org.hibernate.cfg.Configuration doConfigure\\nINFO: HHH000041: Configured SessionFactory: null\\nHibernate Configuration loaded\\nMay 04  2014 11:55:57 PM org.hibernate.engine.jdbc.connections.internal.ConnectionProviderInitiator initiateService\\nWARN: HHH000181: No appropriate connection provider encountered  assuming application will be supplying connections\\nInitial SessionFactory creation failed.org.hibernate.HibernateException: Access to DialectResolutionInfo cannot be null when 'hibernate.dialect' not set\\nException in thread \\\"main\\\" java.lang.ExceptionInInitializerError\\n    at com.example.HibernateUtil.buildSessionFactory(HibernateUtil.java:25)\\n    at com.example.HibernateUtil.&lt;clinit&gt;(HibernateUtil.java:9)\\n    at com.example.HibernateMain.main(HibernateMain.java:26)\\nCaused by: org.hibernate.HibernateException: Access to DialectResolutionInfo cannot be null when 'hibernate.dialect' not set\\n    at org.hibernate.engine.jdbc.dialect.internal.DialectFactoryImpl.determineDialect(DialectFactoryImpl.java:104)\\n    at org.hibernate.engine.jdbc.dialect.internal.DialectFactoryImpl.buildDialect(DialectFactoryImpl.java:71)\\n    at org.hibernate.engine.jdbc.internal.JdbcServicesImpl.configure(JdbcServicesImpl.java:209)\\n    at org.hibernate.boot.registry.internal.StandardServiceRegistryImpl.configureService(StandardServiceRegistryImpl.java:111)\\n    at org.hibernate.service.internal.AbstractServiceRegistryImpl.initializeService(AbstractServiceRegistryImpl.java:234)\\n    at org.hibernate.service.internal.AbstractServiceRegistryImpl.getService(AbstractServiceRegistryImpl.java:206)\\n    at org.hibernate.cfg.Configuration.buildTypeRegistrations(Configuration.java:1885)\\n    at org.hibernate.cfg.Configuration.buildSessionFactory(Configuration.java:1843)\\n    at com.example.HibernateUtil.buildSessionFactory(HibernateUtil.java:18)\\n    ... 2 more\\n</code></pre>\\n\\n<p>I have tried so many options and looked for online resources  hibernate docs but couldn't find what is missing here. Any help is appreciated.</p>\\n\"",
    "reco2": "How can I get multiple entities values from a table in Hibernate?",
    "reco3": "Getting Error : Could not parse configuration: /hibernate.cfg.xml",
    "reco1": "how to resolve hibernate mapping exception"
  },
  {
    "index": 41062,
    "votes": 3,
    "tags": [
      "java",
      "hibernate"
    ],
    "timestamp": 1398946435,
    "question": "Hibernate Typecasting issue.",
    "answers": 1,
    "content": "<p>I'm facing problem while typecasting customer class to object class in hibernate : </p>\\n\\n<pre><code>public class HibernateCustomerDAO implements CustomerDAO {\\n    @Override\\n    public int addCustomer(CustomerDTO cto) {\\n        Customer cust = new Customer(cto.getName()  cto.getEmail()  cto.getTelephone()  cto.getAge()  cto.getTime());\\n        Integer it = (Integer)HibernateTemplate.save(cust);\\n        return it.intValue();\\n    }\\n}\\n</code></pre>\\n\\n<p>problem comming to the code given bellow:</p>\\n\\n<pre><code>public static Object save(Object obj) {     \\n    Object o = null;\\n    try {\\n        SessionFactory sf = HibernateUtil.getSessionFactory();\\n        Session session = sf.openSession();\\n        Transaction tx = session.beginTransaction();\\n        o = session.save(obj);\\n        tx.commit();\\n        session.close();\\n    } catch(Exception e) {\\n        e.printStackTrace();\\n    }\\n\\n    return o;\\n}\\n</code></pre>\\n",
    "reco2": "how to resolve hibernate mapping exception",
    "reco3": "How can I get multiple entities values from a table in Hibernate?",
    "reco1": "Object Typecasting"
  },
  {
    "index": 83777,
    "votes": 3,
    "tags": [
      "java",
      "hibernate"
    ],
    "timestamp": 1394239812,
    "question": "How to save complex objects using Hibernate?",
    "answers": 1,
    "content": "<p>I have three table: </p>\\n\\n<pre><code>CREATE TABLE catalog (\\n    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT \\n    type_id INT \\n    genre_id INT \\n    product_name VARCHAR(100) \\n    FOREIGN KEY ( genre_id ) REFERENCES genres ( genre_id ) \\n    FOREIGN KEY ( type_id ) REFERENCES types ( type_id )\\n);\\n\\nCREATE TABLE genres (\\n    genre_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT \\n    genre_name VARCHAR(50)\\n);\\n\\nCREATE TABLE types (\\n    type_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT \\n    type_name VARCHAR(50)\\n);\\n</code></pre>\\n\\n<p>Also I have Java classes</p>\\n\\n<pre><code>@Entity\\n@Table(name = \\catalog\\\"  catalog = \\\"media_store_db\\\")\\npublic class Catalog implements Serializable {\\n\\n    @Id\\n    @Column(name = \\\"id\\\")\\n    @GeneratedValue(strategy = GenerationType.AUTO)\\n    private Long id;\\n\\n    @Column(name = \\\"product_name\\\"  length = 100)\\n    private String productName;\\n\\n    @ManyToOne(cascade = {CascadeType.PERSIST  CascadeType.MERGE})\\n    @JoinColumn(name = \\\"genre_id\\\"  referencedColumnName = \\\"genre_id\\\")\\n    private Genre genre;\\n\\n    @ManyToOne(cascade = {CascadeType.PERSIST  CascadeType.MERGE})\\n    @JoinColumn(name = \\\"type_id\\\"  referencedColumnName = \\\"type_id\\\")\\n    private Type type;\\n\\n\\n@Entity\\n@Table(name = \\\"genres\\\"  catalog = \\\"media_store_db\\\")\\npublic class Genre implements Serializable {\\n\\n    @Id\\n    @Column(name = \\\"genre_id\\\")\\n    @GeneratedValue(strategy = GenerationType.AUTO)\\n    private Long id;\\n\\n    @Column(name = \\\"genre_name\\\")\\n    private String name;\\n\\n@Entity\\n@Table(name = \\\"types\\\"  catalog = \\\"media_store_db\\\")\\npublic class Type implements Serializable {\\n\\n    @Id\\n    @Column(name = \\\"type_id\\\")\\n    @GeneratedValue(strategy = GenerationType.AUTO)\\n    private Long id;\\n\\n    @Column(name = \\\"type_name\\\")\\n    private String name;\\n</code></pre>\\n\\n<p>Is it possible to save (using <em>save()</em> method of Hibernate Session) Catalog object like this</p>\\n\\n<pre><code>Catalog catalog = new Catalog();\\ncatalog.setProductName(\\\"Product\\\");\\ncatalog.setGenre(new Genre());\\ncatalog.setType(new Type());\\nsave(catalog);\\n</code></pre>\\n\\n<p>without writing SQL? And what I need to do with Genre and Type? Should I set id of both instances?</p>\\n\\n<p>UPD:</p>\\n\\n<p>This code works just fine</p>\\n\\n<pre><code>Catalog catalog = new Catalog();\\ncatalog.setProductName(\\\"12 Years a Slave\\\");\\ncatalog.setGenre(genreRepository.get(Long.valueOf(1)));\\ncatalog.setType(typeRepository.get(Long.valueOf(1)));\\nSession session = cfg.getSession();\\nTransaction tx = session.beginTransaction();\\nsession.save(catalog);\\ntx.commit();\\nsession.close();\\n</code></pre>\\n\"",
    "reco2": "Best way to run a M:N query in hibernate?",
    "reco3": "Hibernate won&#39;t save particular object to db",
    "reco1": "How to properly delete a complex object using Hibernate?"
  },
  {
    "index": 91210,
    "votes": 3,
    "tags": [
      "java",
      "hibernate"
    ],
    "timestamp": 1393500053,
    "question": "Structure for genericDAO",
    "answers": 2,
    "content": "<p>This is a general programming practice question and totally open to modifications if its not clear. I have implemented a customDao instead of using hibernate and other orm tools.</p>\\n\\n<p>Take a look at its get method:</p>\\n\\n<pre><code>def list(Map map){\\n    def condition=\\\\\"\\n    int count=0\\n    for (Map.Entry&lt;String  Object&gt; entry : map.entrySet()) {\\n        if(count != 0) condition +=\\\" AND \\\"\\n        def key=entry.getKey().toLowerCase()\\n        def value=\\\"'\\\"+entry.getValue()+\\\"'\\\"\\n        condition +=key+\\\" = \\\"+value\\n        count++\\n    }\\n    def SQL=\\\"SELECT * FROM  \\\"+entityClass.getSimpleName().toLowerCase()+\\\" WHERE \\\"+condition\\n    log.debug \\\"........\\\"+SQL\\n    return jdbcTemplate.queryForList(SQL)\\n}\\n</code></pre>\\n\\n<p>generally it takes a <code>Map</code> for conditions and returns list we want with the conditions in map.\\n<br>eg. <code>customDao.list([parentid:1 name:\\\"blabla\\\"])</code> </p>\\n\\n<p>Here I can ask for all database records with parentid=1 and name=\\\"blabla\\\"\\n<br>So far so good?</p>\\n\\n<p>What if I need to get a list for <code>parentid!=1</code>  I mean for now  I take map conditions for equality but what should I do for inequality or greaterThan or lesserThan conditions.\\n<br>Long story short I have to get these conditions in receiving parameters of list method.What are the best practices.</p>\\n\"",
    "reco2": "Refactoring multiple if conditions",
    "reco3": "Restructure if else conditions if possible",
    "reco1": "How do you call a method from another class?"
  },
  {
    "index": 93748,
    "votes": 3,
    "tags": [
      "java",
      "hibernate"
    ],
    "timestamp": 1393232937,
    "question": "Default value not working in hibernate",
    "answers": 4,
    "content": "<p>I have use <code>columnDefinition</code> to specify default value for a column  however it does not store default value it stores null only </p>\\n\\n<p>Please help regarding this  below is my code</p>\\n\\n<pre><code>private String sourceFrom;\\n@Column(name = \\SourceFrom\\\"  columnDefinition = \\\"varchar(15) default 'Case'\\\")\\npublic String getSourceFrom() {\\n    return sourceFrom;\\n}\\n\\npublic void setSourceFrom(String sourceFrom) {\\n    this.sourceFrom = sourceFrom;\\n}\\n</code></pre>\\n\"",
    "reco2": "Retrieve empty Set&lt;String&gt; from userPreferences",
    "reco3": "How to set default database values",
    "reco1": "In Hibernate mappings : how to set default value?"
  },
  {
    "index": 97021,
    "votes": 3,
    "tags": [
      "java",
      "hibernate"
    ],
    "timestamp": 1392817776,
    "question": "It is possible to use &quot;and&quot; in hibernate &quot;case when...then...else...end&quot;?",
    "answers": 1,
    "content": "<p>I have the following query:</p>\\n\\n<pre><code>select myentity from TEST as test\\nleft join test.org.parent as parentOrg\\nleft join test.clientRequest as clientReq\\nwhere test.customId = 1 and (test.dstatus = 1 or test.cm = true)\\norder by (case when test.request != '' then test.request else clientReq.name end) asc;\\n</code></pre>\\n\\n<p>It works correctly. But I need not only <code>clientReq.name</code> but also <code>clientReq.surname</code>. Is it possible to combine theese two columns in this <code>case when...then...else...end</code>?</p>\\n\\n<p>Something like:</p>\\n\\n<pre><code>order by (case when test.request != '' then test.request else (clientReq.name and clientReq.surname) end) asc;\\n</code></pre>\\n\\n<p>This one throws exception:</p>\\n\\n<pre><code>org.hibernate.hql.internal.ast.QuerySyntaxException: unexpected AST node\\n</code></pre>\\n",
    "reco2": "sql query work when run it in sqlDeveloper but not work using hibernate",
    "reco3": "Syntax error in HQL query",
    "reco1": "how to convert from String to Clob in java using Hibernate"
  },
  {
    "index": 113106,
    "votes": 3,
    "tags": [
      "java",
      "hibernate"
    ],
    "timestamp": 1391100277,
    "question": "TimestampType set override error",
    "answers": 1,
    "content": "<p>I am trying to create my own Hibernate mapping to read and write UTC Timestamps to DB with Hibernate  so I am extending the Hibernate TimestampType class as shown below  but I always get the following error. So can someone please help by telling me what I am doing wrong here? Thanks for your time.</p>\\n\\n<blockquote>\\n  <p>Multiple markers at this line\\n  - The method set(PreparedStatement  Object  int) of type UTCTimestampType must override or implement a supertype method\\n  - Name clash: The method set(PreparedStatement  Object  int) of type UTCTimestampType has the same erasure as set(PreparedStatement  T \\n  int) of type AbstractSingleColumnStandardBasicType but does not\\n  override it</p>\\n</blockquote>\\n\\n<pre><code>public class UTCTimestampType extends org.hibernate.type.TimestampType{\\n\\n        @Override\\n        public Object get(ResultSet rs  String name) throws SQLException {\\n            return rs.getTimestamp(name  createUTCCalendar());\\n        }\\n\\n        private static Calendar createUTCCalendar() {\\n            final Calendar c = Calendar.getInstance();\\n            c.setTimeZone(new SimpleTimeZone(0  \\UTC\\\"));\\n            return c;\\n        }\\n\\n        @Override\\n        public void set(PreparedStatement st  Object value  int index)\\n                    throws SQLException{\\n            Timestamp ts;\\n            if (value instanceof Timestamp) {\\n                ts = (Timestamp) value;\\n            } else {\\n                ts = new Timestamp(((java.util.Date)value).getTime());\\n            }\\n            st.setTimestamp(index  ts  createUTCCalendar());\\n        }   \\n}\\n</code></pre>\\n\"",
    "reco2": "How to write two queries in a single query statement using PreparedStatement",
    "reco3": "Why does put(K key  V value) and put(K key  Set&lt;V&gt; value) has a name clash?",
    "reco1": "error in overriding generic collections in Java"
  },
  {
    "index": 124671,
    "votes": 3,
    "tags": [
      "java",
      "hibernate"
    ],
    "timestamp": 1389630751,
    "question": "Getting list of lists in Hibernate",
    "answers": 4,
    "content": "<p>In my project I have two entities: <code>Race</code> and <code>RaceDriver</code>  which has-a <code>Race</code> in it:  </p>\\n\\n<pre><code>class RaceDriver {\\n\\n    @ManyToOne(fetch = FetchType.LAZY)\\n    @JoinColumn(name = \\race\\\"  nullable = false)\\n    private Race race;\\n    ...\\n    @Column(name = \\\"starting_nr\\\")\\n    private Integer startingNr;\\n    ...\\n    @Column(name = \\\"disqualified\\\"  nullable = false)\\n    private boolean disqualified;\\n}\\n</code></pre>\\n\\n<p>Now  what I wanted is to get the list of the <code>startingNr</code>s of the <code>disqualified</code> <code>RaceDriver</code>s in a <code>Race</code>  which looked like this:</p>\\n\\n<pre><code>public List&lt;Integer&gt; findDisqualifiedDriversStartingNumbers(Integer raceId) {\\n    ProjectionList projection = Projections.projectionList()\\n        .add(Projections.property(\\\"startingNr\\\").as(\\\"startingNr\\\"));\\n\\n    return getSession()\\n        .createCriteria(RaceDriver.class)\\n        .setProjection(projection)\\n        .add(Restrictions.eq(\\\"race.id\\\"  raceId))\\n        .add(Restrictions.eq(\\\"disqualified\\\"  true))\\n        .list();\\n}\\n</code></pre>\\n\\n<p>The thing is that now I need the same  but <strong>for the few</strong> <code>Races</code>. How can I achieve this without making a separate DAO calls? Because I've heard that it is better to make as much as possible in a single database call.</p>\\n\\n<p>My idea is to simply get the list of the drivers which are disqualified in the given races  and then parse it in the Java code  which I think will require few loops  and make some map of disqualified <code>RaceDriver</code>'s starting numbers  where the key would be <code>Race.id</code>.</p>\\n\\n<p>The DAO attempt looks like that:</p>\\n\\n<pre><code>public List&lt;RaceDriver&gt; findDisqualifiedDriversInRaces(List&lt;Integer&gt; raceIds) {\\n\\n    return getSession()\\n        .createCriteria(RaceDriver.class)\\n        .add(Restrictions.in(\\\"race.id\\\"  raceIds))\\n        .add(Restrictions.eq(\\\"disqualified\\\"  true))\\n        .list();\\n}\\n</code></pre>\\n\\n<p>The problem is that I will get that big objects  instead of some map or list of the only data I need (<code>startingNr</code> and <code>race.id</code>).</p>\\n\\n<p>So the question is - can I do it somehow using only Hibernate?</p>\\n\"",
    "reco2": "Using Hibernate to save/restore data from a database (postgresql)",
    "reco3": "Remove duplicates from a list of maps in java",
    "reco1": "in list the value of map being stored is of object type"
  },
  {
    "index": 183784,
    "votes": 8,
    "tags": [
      "java",
      "jdbc"
    ],
    "timestamp": 1418664466,
    "question": "NullPointerException on calling ResultSet.getDate()",
    "answers": 3,
    "content": "<p>I am getting a <code>java.lang.NullPointerException</code> on calling <code>ResultSet.getDate()</code> in the following code. The entry in the database  however  doesn't seem to be <code>null</code>. The connection seems to be active  since other fields are being fetched.\\nWhat am I doing wrong?</p>\\n\\n<pre><code>try {\\n    ... /* Code that creates a connection and initializes statement */\\n\\n    String query = \\SELECT * FROM groups WHERE id = 'testGroup1'\\\";\\n    ResultSet rs = statement.executeQuery(query);\\n    if(rs.next()) {\\n        admin = rs.getString(\\\"admin_id\\\");\\n        User.process(admin);\\n        java.sql.Date created_on = rs.getDate(\\\"created_on\\\");\\n        System.out.println(\\\"Created on = \\\" + created_on.toString());\\n    }\\n}\\ncatch(Exception e) {\\n    System.out.println(\\\"Stuck here\\\");\\n    e.printStackTrace();\\n}\\n</code></pre>\\n\\n<p>Here's the output and the stack trace:</p>\\n\\n<pre><code>Admin id = 42          // User.process prints the admin id\\nStuck here\\njava.lang.NullPointerException\\n    at com.mysql.jdbc.ResultSet.findColumn(ResultSet.java:966)\\n    at com.mysql.jdbc.ResultSet.getDate(ResultSet.java:1988)\\n    at com.myapp.server.model.Group.initInfo(Group.java:39)\\n    ...\\n</code></pre>\\n\\n<p>I have the following schema:</p>\\n\\n<pre><code>+-------------------+--------------+------+-----+---------+-------+\\n| Field             | Type         | Null | Key | Default | Extra |\\n+-------------------+--------------+------+-----+---------+-------+\\n| id                | varchar(50)  | NO   | PRI | NULL    |       |\\n| admin_id          | varchar(50)  | NO   | MUL | NULL    |       |\\n| created_on        | datetime     | NO   |     | NULL    |       |\\n+-------------------+--------------+------+-----+---------+-------+\\n</code></pre>\\n\\n<p>And the following entry in the database:</p>\\n\\n<pre><code>+------------+----------+---------------------+\\n| id         | admin_id | created_on          |\\n+------------+----------+---------------------+\\n| testGroup1 | 42       | 2014-12-15 22:46:31 |\\n+------------+----------+---------------------+\\n</code></pre>\\n\"",
    "reco2": "Reload the page on button click in netbeans",
    "reco3": "Get the connected mysql database name (JDBC)",
    "reco1": "How to return Entry&lt;K  V&gt; from method"
  },
  {
    "index": 152364,
    "votes": 4,
    "tags": [
      "java",
      "jdbc"
    ],
    "timestamp": 1413905104,
    "question": "JDBC getColumns differences between &quot;IS_NULLABLE&quot; and &quot;NULLABLE&quot;",
    "answers": 1,
    "content": "<p>I'm trying to extract the database metadata of JDBC database driver.</p>\\n\\n<p>And now I am facing a part of the documentation that I can not explain to myself:</p>\\n\\n<p>The Method <code>DatabaseMetaData.getColumns(...);</code> (<a href=\\http://docs.oracle.com/javase/7/docs/api/java/sql/DatabaseMetaData.html#getColumns%28java.lang.String %20java.lang.String %20java.lang.String %20java.lang.String%29\\\" rel=\\\"nofollow\\\">JavaDoc</a>) states two  different \\\"nullability\\\" columns:</p>\\n\\n<blockquote>\\n<pre>NULLABLE int => is NULL allowed.\\n    columnNoNulls - might not allow NULL values\\n    columnNullable - definitely allows NULL values\\n    columnNullableUnknown - nullability unknown </pre>\\n</blockquote>\\n\\n<p>and</p>\\n\\n<blockquote>\\n<pre> IS_NULLABLE String => ISO rules are used to determine the nullability for a column.\\n    YES --- if the column can include NULLs\\n    NO --- if the column cannot include NULLs\\n    empty string --- if the nullability for the column is unknown</pre>\\n</blockquote>\\n\\n<p>The only idea i could think of for the two different columns is:</p>\\n\\n<p>That one defines the table column could be null when read and the other states that into this table column could null be inserted. But I was not able to determine the correctness of this idea.</p>\\n\\n<p>Does anyone know for sure what is the difference between these two columns?\\nIs there somewhere a more detailed information about this part of JDBC API?</p>\\n\\n<p>Thanks for helping.</p>\\n\"",
    "reco2": "How to read a CSV file column wise using hadoop?",
    "reco3": "Get cell value from Excel file based on the column name in JAVA",
    "reco1": "How to add column with values in JTable?"
  },
  {
    "index": 188402,
    "votes": 4,
    "tags": [
      "java",
      "jdbc"
    ],
    "timestamp": 1408653019,
    "question": "Is it possible to map basic JDBC SQL types to a Java class?",
    "answers": 2,
    "content": "<p>When retrieving a column from a ResultSet object using the getObject method  the class is chosen by the JDBC driver. I am looking for a way to choose which class the column is retrieved as at runtime.</p>\\n\\n<p>In the example below type Class1 is created with variable T as an Integer.</p>\\n\\n<pre><code>Class Class1&lt;T&gt;\\n{\\n  public T getColumn(DataSource ds)\\n  {\\n    T value = null;\\n    Connection con = null;\\n\\n    try\\n    {\\n      con = ds.getConnection();\\n      Statement st = con.createStatement();\\n      ResultSet rs = st.executeQuery(\\select 1 from dual\\\");\\n      rs.next();\\n      Object o = rs.getObject(1); // I want an Integer but a BigDecimal is created!\\n      value = (T) o; // ClassCastException here!\\n      rs.close();\\n      st.close();\\n    }\\n    finally\\n    {\\n      if (con != null) { con.close(); }\\n    }\\n\\n    return i;\\n  }\\n}\\n</code></pre>\\n\\n<p>The ResultSet class provides a method called getObject that accepts a column argument and a type Map argument. This type Map is only used for UDT (user defined types). I need this functionality applied to basic SQL types as well. I know I can implement a solution to this using a switch/case statement but I'm trying to avoid that. Is this possible?</p>\\n\\n<p>EDIT</p>\\n\\n<p>I should've mentioned I am on Java 1.6. It looks like this may have been solved in 1.7. Thanks JB Nizet for the reference.</p>\\n\"",
    "reco2": "Safe method return type for unknown generic during construction",
    "reco3": "Spring JDBC PreparedStatementCreator Invalid Api Usage",
    "reco1": "How to implement one method with different argument types?"
  },
  {
    "index": 15289,
    "votes": 3,
    "tags": [
      "java",
      "jdbc"
    ],
    "timestamp": 1402587471,
    "question": "Why doesn&#39;t Java seem to respect my classpath?",
    "answers": 1,
    "content": "<p>I have the <a href=\\http://sourceforge.net/projects/jt400/\\\" rel=\\\"nofollow\\\">jt400.jar</a> in my directory:</p>\\n\\n<pre><code>/path\\n    /jt400.jar\\n    /Test.java\\n</code></pre>\\n\\n<p>The contents of Test.java:</p>\\n\\n<pre><code>import java.sql.*;\\n\\n//import com.ibm.as400.*;  // To be uncommented later\\npublic class Test {\\n    public static void main(String[] args) throws Exception {\\n        String url = \\\"jdbc:as400//myserver.domain.com;DSN=DB2;Uid=name;Pwd=password;\\\";\\n        Connection conn = DriverManager.getConnection(url);\\n    }\\n}\\n</code></pre>\\n\\n<p>I compile this:</p>\\n\\n<pre><code> $ javac -cp jt400.jar Test.java\\n</code></pre>\\n\\n<p>And try to run:</p>\\n\\n<pre><code> $ java -cp jt400.jar Test.java\\n</code></pre>\\n\\n<p>Which produces:</p>\\n\\n<pre><code>Exception in thread \\\"main\\\" java.sql.SQLException: No suitable driver found for jdbc:as400://myserver.domain.com;DSN=DB2;Uid=name;Pwd=password;\\n        at java.sql.DriverManager.getConnection(DriverManager.java:635)\\n        at java.sql.DriverManager.getConnection(DriverManager.java:213)\\n        at Killer.main(Test.java:8)\\n</code></pre>\\n\\n<p>Now  inside jt400.jar I have verified:</p>\\n\\n<pre><code>$ jar -tf jt400.jar | grep class | grep AS400 | grep Driv\\ncom/ibm/as400/access/AS400JDBCDriver.class\\n</code></pre>\\n\\n<p>Yet  when I uncomment the import line  I get</p>\\n\\n<pre><code>Test.java:3: package com.ibm.as400 does not exist\\nimport com.ibm.as400.*;\\n</code></pre>\\n\\n<p>So either I completely misunderstand Java's classpath and import mechanism  or it sure seems like it's not respecting the classpath that I provide.</p>\\n\\n<p>How can I solve this problem? I haven't been able to find anything useful on Google or Stackoverflow  but I don't spend much time in Java so I'm sure I'm doing something wrong.</p>\\n\"",
    "reco2": "How to create a org.eclipse.swt.graphics.Image from a external JAR",
    "reco3": "Specify Java CLASSPATH variable",
    "reco1": "JT400 ProgramCall&#39;s run() method is not returning any result"
  },
  {
    "index": 124482,
    "votes": 3,
    "tags": [
      "java",
      "jdbc"
    ],
    "timestamp": 1389660366,
    "question": "Where is the date format specified when reading a date as a string from JDBC ResultSet",
    "answers": 3,
    "content": "<p>This is exactly the same question as <a href=\\http://stackoverflow.com/questions/14700962/default-jdbc-date-format-when-reading-date-as-a-string-from-resultset\\\">Default JDBC date format when reading date as a string from ResultSet</a>  but that question was never actually answered as such; people just offered alternative ways to write the code.</p>\\n\\n<p>I'm specifically asking if anyone knows where the default conversion format is specified  and if it is defined by a JDBC spec somewhere  or just left up to the individual JDBC driver. If the latter  then an additional question of how does Oracle 10g JDBC do this?</p>\\n\\n<p>** Added 15-Jan:</p>\\n\\n<p>Sorry  I thought the question was sufficiently clear  but apparently not. I am not trying to retrieve a date value from a database  and have no need for suggestions on ways to do that.</p>\\n\\n<p>I do not think this is a duplicate of the referenced question  which is why I asked a separate question here. Whilst the title is the pretty much same  the referenced question (regardless of what the OP intended) has been answered with alternative approaches for retrieving a date value from a database  which is not what I wish to know.</p>\\n\\n<p>Cheers </p>\\n\"",
    "reco2": "How to remove milliseconds from Date Object format in Java",
    "reco3": "Oracle JDBC driver auto formatting the date column",
    "reco1": "JDBC: Inserting Date values into MySQL"
  },
  {
    "index": 22919,
    "votes": 2,
    "tags": [
      "java",
      "jdbc"
    ],
    "timestamp": 1401361586,
    "question": "Which is the better approach nested try finally or one try with if condition",
    "answers": 4,
    "content": "<p>For insert record in database with JDBC  there are two approaches : </p>\\n\\n<ol>\\n<li><p>Nested try.. finally : In this approach  nested try with finally use for close prepare statement and connection</p>\\n\\n<pre><code>public void performInsert(String insertSQL) {\\n    try {\\n        Connection connection = dataSource.getConnection();\\n        try {\\n            PreparedStatement insertStmt = connection\\n                    .prepareStatement(insertSQL);\\n            try {\\n                // bind value to prepare statements\\n                insertStmt.executeUpdate();\\n            } finally {\\n                insertStmt.close();\\n            }\\n        } finally {\\n            connection.close();\\n        }\\n    } catch (SQLException e) {\\n        // TODO: handle exception\\n    }\\n}\\n</code></pre></li>\\n<li><p>single try with if condition in finally block : In this approach single try use and in finally block use if condition for close statement and connection:   </p>\\n\\n<pre><code>public void performInsertIF(String insertSQL) {\\n    Connection connection = null;\\n    PreparedStatement insertStmt = null;\\n    try {\\n        connection = dataSource.getConnection();\\n        insertStmt = connection.prepareStatement(insertSQL);\\n        // bind value to prepare statements\\n        insertStmt.executeUpdate();\\n    }catch (SQLException e) {\\n        // TODO: handle exception\\n    } finally {\\n        if( insertStmt != null) {\\n            try {\\n                insertStmt.close();\\n            } catch (SQLException e) {\\n                // TODO Auto-generated catch block\\n                e.printStackTrace();\\n            }\\n        }\\n\\n        if( connection != null) {\\n            try {\\n                connection.close();\\n            } catch (SQLException e) {\\n                // TODO Auto-generated catch block\\n                e.printStackTrace();\\n            }\\n        }\\n    }\\n}\\n</code></pre></li>\\n</ol>\\n\\n<p>Both above approach is working fine  but which approach is better to use and why ?</p>\\n",
    "reco2": "Why is a &quot;finally&quot; block required in this code",
    "reco3": "return statement - finally block does not complete normally",
    "reco1": "Try   finally execution flow when return is in try block"
  },
  {
    "index": 31718,
    "votes": 2,
    "tags": [
      "java",
      "jdbc"
    ],
    "timestamp": 1400147585,
    "question": "jdbc batch insert  how to split jobs?",
    "answers": 1,
    "content": "<p>I split batched operation by 100 using <code>i</code> variable and this is my first <em>batch jdbc code</em>:</p>\\n\\n<pre><code>PreparedStatement oraclePs = oracleConn.prepareStatement(\\insert ...\\\");\\nResultSet sybaseRs = sybasePs.executeQuery();\\nint i = 1;\\nfinal int step = 100;\\nwhile (sybaseRs.next()) {\\n    oraclePs.setDate(1  sybaseRs.getDate(\\\"...\\\"));\\n    ...\\n    oraclePs.addBatch();\\n    if (i++ % step == 0)\\n        oraclePs.executeBatch();\\n}\\noraclePs.executeBatch();\\noraclePs.close();\\noracleConn.commit();\\n</code></pre>\\n\\n<p>Is that right technique?</p>\\n\\n<p>Is final out of loop <code>oraclePs.executeBatch();</code> correct if <code>i</code> end at 100 boundary?</p>\\n\\n<p>How you select <code>step</code>? For Oracle I see that \\\"Oracle SQL Developer\\\" IDE import CSV with this step...</p>\\n\"",
    "reco2": "OSGI Bundle Error - ojdbc6.jar",
    "reco3": "oracle.jdbc.OracleConnection Alternative in SQL server",
    "reco1": "getting java.sql.SQLSyntaxErrorException: ORA-00936: missing expression error"
  },
  {
    "index": 36051,
    "votes": 2,
    "tags": [
      "java",
      "jdbc"
    ],
    "timestamp": 1399646901,
    "question": "Java jdbc get column names of generated keys",
    "answers": 1,
    "content": "<p>I've inserted a record with a composite primary key in table via <code>jdbc</code> and got generated values of primary key.</p>\\n\\n<pre><code>pm = connection.prepareStatement(strQuery Statement.RETURN_GENERATED_KEYS);\\npm.executeUpdate();\\nResultSet rsInsert = pm.getGeneratedKeys();\\nif(rsInsert != null &amp;&amp; rsInsert.next()){\\n    int count = rsInsert.getMetaData().getColumnCount();\\n    Map&lt;String Object&gt; map = new HashMap&lt;&gt;();\\n    for(int i = 1;i &lt;=count;i++)\\n    {\\n        Object value = rsInsert.getObject(i);\\n    }\\n}\\n</code></pre>\\n\\n<p>How can I get the column names of generated values?\\nThanks</p>\\n",
    "reco2": "Error in Hibernate Mapping &quot;A Foreign key refering has the wrong number of column. should be 2&quot;",
    "reco3": "HQL query throws classCastException",
    "reco1": "SQLite SQL error or missing database (near &quot; &quot;: syntax error)"
  },
  {
    "index": 74969,
    "votes": 2,
    "tags": [
      "java",
      "jdbc"
    ],
    "timestamp": 1395186210,
    "question": "Best approach for try/catch while dealing with jdbc connection",
    "answers": 1,
    "content": "<p>I am trying to find out what is the best approach for try/catch when dealing with connections in JDBC.</p>\\n\\n<p>My personal view is.</p>\\n\\n<pre><code>Connection conn = null;\\ntry{\\n    conn = getDBConnection(); \\n    //Some jdbc code\\n} catch(SQLException e) {\\n    //...\\n} finally {\\n    if(conn != null) {\\n        try {\\n            conn.close();\\n        } catch(SQLException e) {\\n            //....\\n        }\\n    }\\n}\\n</code></pre>\\n\\n<p>But I have seen few smart guys doing this</p>\\n\\n<pre><code>Connection conn = null;\\ntry{\\n    conn = getDBConnection(); \\n    //Some jdbc code\\n    conn.close();\\n    conn = null;\\n} catch(SQLException e) {\\n    //...\\n} finally {\\n    if(conn != null) {\\n        try {\\n            conn.close();\\n        } catch(SQLException e) {\\n            //....\\n        }\\n    }\\n}\\n</code></pre>\\n\\n<p>Is there any advantage in closing the connection in try and setting it to null? </p>\\n",
    "reco2": "Closing Connection  PreparedStatement  and ResultSet all in one call",
    "reco3": "JDBC MySQL Disable Pooling",
    "reco1": "Good Idea to open a connection again in Catch Block?"
  },
  {
    "index": 95750,
    "votes": 2,
    "tags": [
      "java",
      "jdbc"
    ],
    "timestamp": 1392951361,
    "question": "send a broadcast message to all items in list in java",
    "answers": 1,
    "content": "<p>I would like to send a broadcast message to all numbers returned from the <code>select</code> statement. It saves elements in the list but then it sends the same message to everyone. What am I doing wrong? Please see my method below.</p>\\n\\n<pre class=\\lang-java prettyprint-override\\\"><code>public static List&lt;Message&gt; listAllMessages(Connection connection) {\\n\\n    List&lt;Message&gt; msg = new ArrayList&lt;Message&gt;();\\n\\n    String messages = ReturnTexts.getMessage(connection  \\\"EMPTYMESSAGE\\\");\\n\\n    String sql = \\\"SELECT b.`productid` as productid  p.`productname` as productname  b.`msisdn` as msisdn   MAX(b.`amount`) as amount  b.`productcode` as productcode  a.`endDate` as enddate FROM \\\"\\n            + TableNames.SAVEDBIDSTABLE\\n            + \\\"b LEFT JOIN \\\"\\n            + TableNames.PRODUCTTABLE1\\n            + \\\" p ON  b.`productcode`= p.`code` \\\"\\n            + \\\" JOIN \\\"\\n            + TableNames.AUCTIONTABLE1\\n            + \\\" a\\\"\\n            + \\\" ON  b.`productcode`= a.`productcode` \\\"\\n            + \\\"GROUP BY msisdn  productcode \\\";\\n\\n    PreparedStatement statement = null;\\n    ResultSet resultSet = null;\\n\\n    try {\\n        if (connection == null || connection.isClosed() )\\n            connection = DBConnection.getConnection();\\n        // LOGGER.info(sql);\\n\\n        statement = DBConnection.isConnected(connection).prepareStatement(\\n                sql);\\n        // statement = connection.createStatement();\\n        resultSet = statement.executeQuery();\\n        long productid = 0;\\n        String productname = null;\\n        String msisdn = null;\\n        int amount = 0;\\n        String productcode = null;\\n        Date enddate = null;\\n\\n        while (resultSet.next()) {\\n            productid = resultSet.getLong(\\\"productid\\\");\\n            productname = resultSet.getString(\\\"productname\\\");\\n            msisdn = resultSet.getString(\\\"msisdn\\\");\\n            amount = resultSet.getInt(\\\"amount\\\");\\n            productcode = resultSet.getString(\\\"productcode\\\");\\n            enddate = resultSet.getTimestamp(\\\"enddate\\\");\\n\\n            msg.add(new Message(Long.valueOf(productid)  productname \\n                    msisdn  amount  productcode  String.valueOf(enddate)));\\n        }\\n\\n        String messages = ReturnTexts\\n                .getMessage(connection  \\\"BROADCAST\\\")\\n                .replace(\\\"XXXX\\\"  productname)\\n                // .replace(\\\"YYYY\\\"  String.valueOf(amount))\\n                .replace(\\\"YYYY\\\" \\n                        String.valueOf(maxBid(productcode  connection)))\\n                .replace(\\\"ZZZZ\\\"  String.valueOf(enddate));\\n\\n        //LOGGER.info(messages.toString());\\n        try {\\n            for (Message obj : msg) {\\n\\n                obj.setMessage(messages); \\n                String apiUrl = \\\"url/sendsms.jsp\\\";\\n                getResponse(apiUrl + \\\"?\\\" + \\\"user=\\\"\\n                        + URLEncoder.encode(\\\"xxx\\\"  \\\"UTF-8\\\")\\n                        + \\\"&amp;password=\\\"\\n                        + URLEncoder.encode(\\\"xxx\\\"  \\\"UTF-8\\\")\\n                        + \\\"&amp;mobiles=\\\" + obj.getMsisdn() + \\\"&amp;sms=\\\"\\n                        + URLEncoder.encode(obj.getMessage()  \\\"UTF-8\\\"));\\n\\n                //bulkMessagesLog(obj.getMsisdn()  obj.getMessage() obj.getProductcode()  connection);\\n                bulkMessagesLog(productcode  msisdn  productname  connection); \\n\\n                //LOGGER.info(obj.getMsisdn() + \\\" : \\\" + obj.getProductcode()+ \\\" : \\\" + obj.getMessage()); \\n            }\\n\\n        } catch (UnsupportedEncodingException e) {\\n            System.err\\n                    .println(\\\"UnsupportedEncodingException while trying to send SMS.\\\");\\n            e.getMessage();\\n        }\\n\\n    } catch (SQLException e) {\\n        LOGGER.error(e.getMessage());\\n    } finally {\\n        DBConnection.closeAllDBUsage(resultSet  statement  null);\\n    }\\n\\n    return msg;\\n}\\n\\n\\n    public static void bulkMessagesLog(String msisdn  String message String productcode \\n        Connection connection) {\\n\\n    PreparedStatement statement = null;\\n\\n    String sql = \\\"INSERT INTO \\\" + TableNames.BULK_MESSAGESLOGTABLE\\n            + \\\"(`msisdn` `message` `productcode` `dateCreated`) VALUES(? ? ? now()) \\\";\\n    try {\\n        if ( connection == null || connection.isClosed() ) \\n            connection = DBConnection.getConnection();\\n        statement = DBConnection.isConnected(connection).prepareStatement(\\n                sql);\\n        statement.setString(1  msisdn);\\n        statement.setString(2  message);\\n        statement.setString(3  productcode);\\n\\n        //statement.addBatch();\\n        statement.executeUpdate();\\n\\n    } catch (SQLException e) {\\n        LOGGER.error(e.getMessage()  e);\\n    } finally {\\n        DBConnection.closeAllDBUsage(null  statement  connection);\\n    }\\n}\\n</code></pre>\\n\"",
    "reco2": "Websocket Broadcasting to different users with Spring web socket with SockJS",
    "reco3": "android-java- how to send a message to specific client from server",
    "reco1": "TCP server send message to the client"
  },
  {
    "index": 101292,
    "votes": 2,
    "tags": [
      "java",
      "jdbc"
    ],
    "timestamp": 1392380138,
    "question": "chained java.lang.SQLException instances vs. Throwable#getCause",
    "answers": 2,
    "content": "<p>What are the semantics behind a \\chain\\\" of <a href=\\\"http://docs.oracle.com/javase/7/docs/api/java/sql/SQLException.html\\\" rel=\\\"nofollow\\\">SQLException</a> objects and how is this different from the similar (implicit) chain that's formed by the <code>getCause</code> method on the <code>Throwable</code> class?</p>\\n\\n<p>Since a <code>SQLException</code> is also a <code>Throwable</code>  an instance of that class can have two such \\\"chains:</p>\\n\\n<ul>\\n<li>one defined by a sequence of <code>getNextException()</code> calls - till null is ultimately returned</li>\\n<li>the other defined by a sequence of <code>getCause()</code> calls - till null is ultimately returned</li>\\n</ul>\\n\\n<p>... in such a case how would these two chains relate to each other?</p>\\n\"",
    "reco2": "Trying to solve math equation whose operators and numbers are in two different lists",
    "reco3": "Canceling a CompletableFuture chain",
    "reco1": "Project Euler 14 - Java StackOverflowError"
  },
  {
    "index": 101467,
    "votes": 2,
    "tags": [
      "java",
      "jdbc"
    ],
    "timestamp": 1392361575,
    "question": "How to compare resultsets of two different databases?",
    "answers": 4,
    "content": "<p>I have two databases and i need to compare three rows from each database if they are matches  I have to print that row.</p>\\n\\n<p>Example:</p>\\n\\n<pre><code>Database 1:\\nRuleId  Dataset  Partition  Date\\n------  -------  --------   ----\\n1234     ABVD    012145    21/01/2014\\n1256     ABCD    124565    22/01/2013\\n4567     FGHJ    0123456  22/02/2013\\nDatabase 2:\\n1234    ABCD    012345    21/01/2014\\n4567    FGHJ    0123456   22/02/2013\\n7894    MNBV    0147896   20/01/2014\\n</code></pre>\\n\\n<p>If RuleId Dataset and Partition are equal in both databases I have to print those rows in output.</p>\\n\\n<p>My Code is as follows:</p>\\n\\n<pre><code>ArrayList&lt;String&gt; rslist = new ArrayList&lt;String&gt;();\\nArrayList&lt;String&gt; rs1list = new ArrayList&lt;String&gt;();\\nint count = 1;\\nwhile (rs.next()) {\\n    int i = 1;\\n    count = 1;\\n    while (i &lt; count) {\\n        rslist.add(rs.getString(i++));\\n    }\\n\\n    rslist.add(rs.getString(2) + rs.getString(4) + (rs.getString(5)));\\n\\n}\\nint count1 = 1;\\nwhile (rs1.next()) {\\n    int i = 1;\\n    count1 = 1;\\n    while (i &lt; count1) {\\n        rs1list.add(rs1.getString(i++));\\n\\n    }\\n    rs1list.add(rs1.getString(\\RuleId\\\") + rs1.getString(\\\"Dataset\\\")\\n            + rs1.getString(\\\"Partition\\\"));\\n}\\nfor (String s1 : rslist)\\n    for (String s2 : rs1list)\\n        if (s1.equals(s2)) {\\n\\n        }\\n</code></pre>\\n\\n<p>If these rows are equal I have to print all the row values.</p>\\n\"",
    "reco2": "My ResultSet will only print first row",
    "reco3": "How do I fill the last page of JQGrid with empty rows?",
    "reco1": "How to print all rows in Excel workbook using rs.next()?"
  },
  {
    "index": 125862,
    "votes": 2,
    "tags": [
      "java",
      "jdbc"
    ],
    "timestamp": 1389384238,
    "question": "getting the id of the inserted row",
    "answers": 3,
    "content": "<p>I am inserting records into a database table through plain old JDBC(as this is what the set up is in the project I am working on.. not yet migrated to Hibernate).</p>\\n\\n<p>here is my table structure</p>\\n\\n<pre><code>employee (empid int indentity not null  empName);\\n</code></pre>\\n\\n<p>when I try to insert record through JDBC code </p>\\n\\n<pre><code>insert into employee(empName) values('something')\\n</code></pre>\\n\\n<p>it works and a record gets inserted.\\nHowever I need to get the id against the inserted row. I can try executing a separate select query to get the inserted row but might not get the correct inserted record id if 2 employee names are same.</p>\\n\\n<p>How do I get the inserted record id using JDBC. I am using <code>preparedStatment.executeUpdate</code> which returns 0 or 1 based on whether the record is inserted or not.</p>\\n",
    "reco2": "Java MongoDB FindOne to get last inserted record",
    "reco3": "Database is not getting updated after executing this program",
    "reco1": "How to know all records are inserted one which record in not inserted in batch insertion"
  },
  {
    "index": 148159,
    "votes": 2,
    "tags": [
      "java",
      "jdbc"
    ],
    "timestamp": 1414399799,
    "question": "How JDBC implementation works",
    "answers": 4,
    "content": "<p>In JDBC  I see that <code>Connection</code> is an interface  which defines methods for interacting with Database.</p>\\n\\n<p>I also know that interface contains only abstract methods  and cannot be instantiated</p>\\n\\n<p>But In JDBC code  how does the following work  </p>\\n\\n<pre><code>Connection connection = DriverManager.getConnection(\\URL String\\\");\\n\\nStatement statement=connection.createStatement();\\n</code></pre>\\n\\n<p>As per my doubt <code>createStatement()</code> should be a abstract method  i..e  without any body</p>\\n\\n<p>But every thing works fine... with this</p>\\n\\n<p>Can anyone explain?</p>\\n\"",
    "reco2": "Creating new Abstract Method vs Interface Method",
    "reco3": "Is it considered better form for an abstract class to include abstract methods from an interface?",
    "reco1": "How does an abstract method differ when it is defined in an abstract class or an interface?"
  },
  {
    "index": 159454,
    "votes": 2,
    "tags": [
      "java",
      "jdbc"
    ],
    "timestamp": 1412835044,
    "question": "Delete row from table",
    "answers": 3,
    "content": "<p>I want to delete the current row displayed in jframe from the table contact</p>\\n\\n<p>I wrote the code</p>\\n\\n<pre><code>try\\n    {\\n        conn = java.sql.DriverManager.getConnection(connectionURL  \\usrnme\\\"  \\\"pswd\\\");\\n        Statement stmt = conn.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE ResultSet.CONCUR_UPDATABLE);//also tried with ResultSet.TYPE_SCROLL_SENSITIVE\\n        rs.deleteRow();\\n        rs.next();//it may or may not include in code\\n    }\\n    catch(Exception e){System.out.println( \\\"JDBC error: \\\" + e );}\\n</code></pre>\\n\\n<p>sql query</p>\\n\\n<pre><code> String sql=\\\"SELECT * FROM contact order by first_name  last_name\\\";\\n        rs=stmnt.executeQuery(sql);\\n</code></pre>\\n\\n<p>but it throws an exception while running</p>\\n\\n<pre><code> JDBC error: java.sql.SQLException: 'deleteRow' not allowed because the ResultSet is not an updatable ResultSet.\\n</code></pre>\\n\\n<p>Help me!</p>\\n\"",
    "reco2": "How to delete a row from database by position",
    "reco3": "How to pass parameter in JDBC query for creating table?",
    "reco1": "Deleteing data from database based on a jcomboBox throws an error"
  },
  {
    "index": 180075,
    "votes": 2,
    "tags": [
      "java",
      "jdbc"
    ],
    "timestamp": 1409898725,
    "question": "Convert String into Blob",
    "answers": 1,
    "content": "<p>I'm new to JDBC and stack overflow as well  and what I'm trying to do here is this :</p>\\n\\n<p>I'm trying to insert a string as blob into a database but I'm getting null pointer exception. Here is the code I'm using :</p>\\n\\n<pre><code>public String execute() {\\n    String success=\\Success\\\";\\n    try{\\n        Class.forName(\\\"com.mysql.jdbc.Driver\\\");\\n        Connection con = DriverManager.getConnection(\\\"jdbc:mysql://panorama-pc:3306/sample\\\"  \\\"sample\\\"  \\\"sample123\\\");\\n        String sql = \\\"Insert into users values(? ? ? ? ?)\\\";\\n        PreparedStatement ps = con.prepareStatement(sql);\\n        ps.setNull(1  Types.NULL);  \\n        ps.setString(2 name);\\n        ps.setString(3 RollNo);\\n        ps.setString(4  date);\\n\\n        Blob blob = con.createBlob();\\n\\n        blob.setBytes(1 desc.getBytes()); // getting exception here \\n\\n        int i = ps.executeUpdate();\\n        if(i&gt;0){\\n            return SUCCESS;\\n        }\\n        else{\\n            return ERROR;\\n        }\\n    }\\n    catch(SQLException | ClassNotFoundException e){\\n        e.printStackTrace();\\n    }       \\n</code></pre>\\n\\n<p>Here desc is a string and I'm trying to insert it into a blob column. Can someone please help me out ? </p>\\n\"",
    "reco2": "Issue with getBinaryStream(index)",
    "reco3": "Insertion of BLOB fails with the file being NULL",
    "reco1": "Data truncation: Data too long for column &#39;logo&#39; at row 1"
  },
  {
    "index": 188008,
    "votes": 2,
    "tags": [
      "java",
      "jdbc"
    ],
    "timestamp": 1408715208,
    "question": "What is the suitable way to close the database connection in Java?",
    "answers": 7,
    "content": "<p>I tried to close the DB connection.But had a bit of confusion  say </p>\\n\\n<pre><code>ResultSet rs = null \\n</code></pre>\\n\\n<p>Whether I have to it close by</p>\\n\\n<pre><code>rs.close();\\n</code></pre>\\n\\n<p>Or</p>\\n\\n<pre><code>DatabaseUtil.closeResultSet(rs);\\n</code></pre>\\n\\n<p>What is difference between those?</p>\\n",
    "reco2": "Does bean creation in spring datasource xml open connection to the database?",
    "reco3": "How can I close the main GUI?",
    "reco1": "Closing JInternalFrame added to JTabbedPane with MenuItem"
  },
  {
    "index": 14529,
    "votes": 1,
    "tags": [
      "java",
      "jdbc"
    ],
    "timestamp": 1402711213,
    "question": "Saving Timestamp data but only with date in Java",
    "answers": 1,
    "content": "<p>One of my database column is of type Timestamp format (yyyy-MM-dd HH:mm:ss) but the data saved in it is 2014-06-13 00:00:00. So the time component is not saved to the database table.</p>\\n\\n<p>I am trying to INSERT data to that table but unable to remove the time component from my data.</p>\\n\\n<p>Here is what I am doing:</p>\\n\\n<pre><code>long time = System.currentTimeMillis();\\njava.sql.Timestamp timestamp = new java.sql.Timestamp(time);\\n</code></pre>\\n\\n<p>So the time (long) = 1402710418003 and timestamp=2014-06-13 21:46:58.003</p>\\n\\n<p>Is there a way I can remove the time part from timestamp? \\nEx: 2014-06-13\\nOR\\nEx: 2014-06-13 00:00:00</p>\\n\\n<p>This is my prepared statement:</p>\\n\\n<pre><code>java.util.Date currentDate= new java.util.Date();\\nsql_statement4.setTimestamp(6 new Timestamp(currentDate.getTime()));\\n</code></pre>\\n\\n<p>sql_statement4 is a PreparedStatement object.</p>\\n\\n<p>I want the value to be in Timestamp format.</p>\\n\\n<p>How do I do this?</p>\\n",
    "reco2": "Convert String [] to timestamp",
    "reco3": "Wrong timezone in XMLGregorian calendar",
    "reco1": "How to make logger to ignore empty messages in java"
  },
  {
    "index": 22840,
    "votes": 1,
    "tags": [
      "java",
      "jdbc"
    ],
    "timestamp": 1401369354,
    "question": "JDBC 4.2 Interfaces DriverAction and SQLType - Examples",
    "answers": 1,
    "content": "<p>I'm having trouble to find an example of usage of JDBC 4.2 new interfaces DriverAction and SQLType. Can anyone give me an example?</p>\\n",
    "reco2": "Read a particular value xml file and replace values in property file using ant",
    "reco3": "How to get a java.time object from a java.sql.Timestamp without a JDBC 4.2 driver?",
    "reco1": "JDBC Prepared Statements not working"
  },
  {
    "index": 167892,
    "votes": 5,
    "tags": [
      "java",
      "json"
    ],
    "timestamp": 1411635309,
    "question": "Inverted order of JSON elements in Java after XML conversion",
    "answers": 8,
    "content": "<p>I'm using the <a href=\\http://www.json.org/java/\\\" rel=\\\"nofollow\\\">JSON in Java</a> for the transformation of XML to JSON. I have the problem that this implementation is inverting all child elements.</p>\\n\\n<p>When I pass this XML:</p>\\n\\n<pre><code>&lt;Person&gt;&lt;Child1&gt;a&lt;/Child1&gt;&lt;Child2&gt;b&lt;/Child2&gt;&lt;/Person&gt;\\n</code></pre>\\n\\n<p>I will end up with a JSON having the childs inverted:</p>\\n\\n<pre><code>{\\\"Person\\\":{\\\"Child2\\\":\\\"b\\\"  \\\"Child1\\\":\\\"a\\\"}}\\n</code></pre>\\n\\n<p>My Java code:</p>\\n\\n<pre><code>JSONObject jsonObject= XML.toJSONObject(\\\"&lt;Person&gt;&lt;Child1&gt;a&lt;/Child1&gt;&lt;Child2&gt;b&lt;/Child2&gt;&lt;/Person&gt;\\\");\\nString myJSONString = jsonObject.toString(4);\\n</code></pre>\\n\\n<p>How to transform to JSON with keeping the order of the elements (like in XML)? </p>\\n\"",
    "reco2": "Giving incorrect values when converting JSON string to XML and XML back to JSON string",
    "reco3": "Unable to Convert Json to XML",
    "reco1": "How Parse JSON in Java"
  },
  {
    "index": 189204,
    "votes": 5,
    "tags": [
      "java",
      "json"
    ],
    "timestamp": 1408545047,
    "question": "Looking for Json-path/(any API) to update any value in given json string in Java",
    "answers": 5,
    "content": "<p>Inshort : I am trying to find some api that could just change the value by taking first parameter as jsonString   second parameter as JSONPath and third will be new value of that parameter. But  all I found is this..\\n<a href=\\https://code.google.com/p/json-path/\\\">https://code.google.com/p/json-path/</a></p>\\n\\n<p>This api allows me to find any value in JSON String. But  I am not finding easy way to update the value of any key. For example  Here is a book.json. </p>\\n\\n<pre><code>{\\n\\\"store\\\":{\\n    \\\"book\\\":[\\n        {\\n            \\\"category\\\":\\\"reference\\\" \\n            \\\"author\\\":\\\"Nigel Rees\\\" \\n            \\\"title\\\":\\\"Sayings of the Century\\\" \\n            \\\"price\\\":8.95\\n        } \\n        {\\n            \\\"category\\\":\\\"fiction\\\" \\n            \\\"author\\\":\\\"Evelyn Waugh\\\" \\n            \\\"title\\\":\\\"Sword of Honour\\\" \\n            \\\"price\\\":12.99 \\n            \\\"isbn\\\":\\\"0-553-21311-3\\\"\\n        }\\n    ] \\n    \\\"bicycle\\\":{\\n        \\\"color\\\":\\\"red\\\" \\n        \\\"price\\\":19.95\\n    }\\n   }\\n }\\n</code></pre>\\n\\n<p>I can access color of bicycle by doing this.</p>\\n\\n<pre><code>String bicycleColor = JsonPath.read(json  \\\"$.store.bicycle.color\\\");\\n</code></pre>\\n\\n<p>But I am looking for a method in JsonPath or other api some thing like this</p>\\n\\n<pre><code>    JsonPath.changeNodeValue(json  \\\"$.store.bicycle.color\\\"  \\\"green\\\");\\n    String bicycleColor = JsonPath.read(json  \\\"$.store.bicycle.color\\\");\\n    System.out.println(bicycleColor);  // This should print \\\"green\\\" now. \\n</code></pre>\\n\\n<p>I am excluding these options </p>\\n\\n<ul>\\n<li>Create a new JSON String. </li>\\n<li>Create a JSON Object to deal with changing value and convert it back to jsonstring </li>\\n</ul>\\n\\n<p>Reason: I have about 500 different requests for different types of service which return different json structure. So  I do not want to manually create new JSON string always. Because  IDs are dynamic in json structure. </p>\\n\\n<p>Any idea or direction is much appreciated. </p>\\n\"",
    "reco2": "Why &quot;class&quot; as key included in JSON?",
    "reco3": "How Parse JSON in Java",
    "reco1": "Basic use of JSONPath in Java"
  },
  {
    "index": 84729,
    "votes": 4,
    "tags": [
      "java",
      "json"
    ],
    "timestamp": 1394133160,
    "question": "Need help building JSONObject java",
    "answers": 2,
    "content": "<p>I'm trying to build the following json object in java dynamically  for example  if the WARN object doesn't exist  add it or any other one followed by adding a new label message object to the sub array. </p>\\n\\n<p>This is an example of what I'm trying to dynamically build. </p>\\n\\n<pre><code>{\\n  \\warnings\\\" : [\\n    {\\n      \\\"WARN\\\" : [\\n        {\\n          \\\"label\\\" : \\\"Label Goes Here\\\" \\n          \\\"message\\\" : \\\"Message Goes Here\\\"\\n        } \\n        {\\n          \\\"label\\\" : \\\"Label Goes Here2\\\" \\n          \\\"message\\\" : \\\"Message Goes Here2\\\"\\n        }\\n      ] \\\"title\\\" : \\\"Please review the following warnings\\\"\\n    } \\n    {\\n      \\\"NOTIFICATION\\\" : [\\n        {\\n          \\\"label\\\" : \\\"Label Goes Here3\\\" \\n          \\\"message\\\" : \\\"Message Goes Here3\\\"\\n        } \\n        {\\n          \\\"label\\\" : \\\"Label Goes Here4\\\" \\n          \\\"message\\\" : \\\"Message Goes Here4\\\"\\n        }\\n      ] \\\"title\\\" : \\\"Please review the following warnings\\\"\\n    }\\n  ]\\n}\\n</code></pre>\\n\\n<p>This is the what I've tried. </p>\\n\\n<pre><code>public class Warning {\\n    warningTypes = new JSONObject();\\n}\\n\\nprivate JSONObject warningTypes;    \\n\\npublic Warning() {\\n\\npublic Warning(WarningType warningType  String label  String message) {\\n        this.warningType = warningType;\\n        this.label = label;\\n        this.message = message;\\n    }\\n\\n    public void add(WarningType warningType  String label  String message) {\\n        addToJSON(warningType  new JSONObject(\\\"label\\\" label \\\"message\\\" message));        \\n    }\\n\\n    private void addToJSON(WarningType warningType  JSONObject jsonObj) {       \\n        if(warningTypes.has(warningType.name())) {\\n            JSONArray array = warningTypes.getJSONArray(warningType.name());   \\n            array.put(jsonObj);\\n        } else {\\n\\n            warningTypes.put(warningType.name()  new JSONArray(jsonObj));\\n        }\\n    }\\n\\n    public JSONObject toJSON() {\\n        return new JSONObject(\\\"warnings\\\"  new JSONArray(warningTypes));\\n    }\\n\\n}\\n</code></pre>\\n\\n<p>However this is my outcome which you can see is incorrect. I'm unable to add the title do to the fact my warningTypes are being but into a single object. </p>\\n\\n<pre><code>{\\n  \\\"warnings\\\" : [\\n    {\\n      \\\"WARN\\\" : [\\n        {\\n          \\\"label\\\" : \\\"Label Goes Here\\\" \\n          \\\"message\\\" : \\\"Message Goes Here\\\"\\n        } \\n        {\\n          \\\"label\\\" : \\\"Label Goes Here2\\\" \\n          \\\"message\\\" : \\\"Message Goes Here2\\\"\\n        }\\n      ] \\n      \\\"NOTIFICATION\\\" : [\\n        {\\n          \\\"label\\\" : \\\"Label Goes Here3\\\" \\n          \\\"message\\\" : \\\"Message Goes Here3\\\"\\n        } \\n        {\\n          \\\"label\\\" : \\\"Label Goes Here4\\\" \\n          \\\"message\\\" : \\\"Message Goes Here4\\\"\\n        }\\n      ]\\n    }\\n  ]\\n}\\n</code></pre>\\n\\n<p>I can not figure out how to build this object dynamically  any help would be appreciated. </p>\\n\"",
    "reco2": "ArrayList ClassCastException with extended object",
    "reco3": "Android Arraylist find index",
    "reco1": "Hibernate  @ManyToOne and NullPointerException"
  },
  {
    "index": 52124,
    "votes": 3,
    "tags": [
      "java",
      "json"
    ],
    "timestamp": 1397637117,
    "question": "how to read json data of type linkedtreemap [GSON]?",
    "answers": 4,
    "content": "<p>I am trying to read the below json data. How to read using LinkedTreeMap?</p>\\n\\n<pre><code>{\\msgType\\\": \\\"gameInit\\\"  \\\"data\\\": {\\n  \\\"race\\\": {\\n    \\\"track\\\": {\\n      \\\"id\\\": \\\"indianapolis\\\" \\n      \\\"name\\\": \\\"Indianapolis\\\" \\n      \\\"pieces\\\": [\\n        {\\n          \\\"length\\\": 100.0\\n        } \\n        {\\n          \\\"length\\\": 100.0 \\n          \\\"switch\\\": true\\n        } \\n        {\\n          \\\"radius\\\": 200 \\n          \\\"angle\\\": 22.5\\n        }\\n      ] \\n      \\\"lanes\\\": [\\n        {\\n          \\\"distanceFromCenter\\\": -20 \\n          \\\"index\\\": 0\\n        } \\n        {\\n          \\\"distanceFromCenter\\\": 0 \\n          \\\"index\\\": 1\\n        } \\n        {\\n          \\\"distanceFromCenter\\\": 20 \\n          \\\"index\\\": 2\\n        }\\n      ] \\n      \\\"startingPoint\\\": {\\n        \\\"position\\\": {\\n          \\\"x\\\": -340.0 \\n          \\\"y\\\": -96.0\\n        } \\n        \\\"angle\\\": 90.0\\n      }\\n    } \\n    \\\"cars\\\": [\\n      {\\n        \\\"id\\\": {\\n          \\\"name\\\": \\\"Schumacher\\\" \\n          \\\"color\\\": \\\"red\\\"\\n        } \\n        \\\"dimensions\\\": {\\n          \\\"length\\\": 40.0 \\n          \\\"width\\\": 20.0 \\n          \\\"guideFlagPosition\\\": 10.0\\n        }\\n      } \\n      {\\n        \\\"id\\\": {\\n          \\\"name\\\": \\\"Rosberg\\\" \\n          \\\"color\\\": \\\"blue\\\"\\n        } \\n        \\\"dimensions\\\": {\\n          \\\"length\\\": 40.0 \\n          \\\"width\\\": 20.0 \\n          \\\"guideFlagPosition\\\": 10.0\\n        }\\n      }\\n    ] \\n    \\\"raceSession\\\": {\\n      \\\"laps\\\": 3 \\n      \\\"maxLapTimeMs\\\": 30000 \\n      \\\"quickRace\\\": true\\n    }\\n  }\\n}}\\n</code></pre>\\n\"",
    "reco2": "Read Multiple Objects JSON with Java",
    "reco3": "How to read null array in json",
    "reco1": "Read a Json File. Add an additional field depending on one of the field values. Write back Json"
  },
  {
    "index": 63055,
    "votes": 3,
    "tags": [
      "java",
      "json"
    ],
    "timestamp": 1396452642,
    "question": "ClassCastException when convert json to list of objects",
    "answers": 3,
    "content": "<p>I am using <a href=\\http://jackson.codehaus.org/1.7.3/javadoc/org/codehaus/jackson/map/ObjectMapper.html\\\" rel=\\\"nofollow\\\">Jackson</a> library to process json data.</p>\\n\\n<p>I have created a <strong>generic</strong> function to convert json string to a model class object:</p>\\n\\n<pre><code>public &lt;T&gt; T parseJsonToObject(String jsonStr  Class&lt;T&gt; clazz) {\\n    ObjectMapper mapper = new ObjectMapper();\\n    try {\\n      return mapper.readValue(jsonStr  clazz);\\n    } catch (Exception e) {\\n\\n    }\\n\\n     return null; \\n}\\n</code></pre>\\n\\n<p>I have a Person class:</p>\\n\\n<pre><code>public class Person{\\n   @JsonProperty(\\\"first_name\\\")\\n   private String firstName;\\n\\n   @JsonProperty(\\\"last_name\\\")\\n   private String lastName;\\n   //Getter &amp; Setters ...\\n}\\n</code></pre>\\n\\n<p>I got server response which is a List of persons:</p>\\n\\n<pre><code>[{\\\"first_name\\\":\\\"John\\\" \\\"last_name\\\":\\\"Smith\\\"} {\\\"first_name\\\":\\\"Kate\\\" \\\"last_name\\\":\\\"Green\\\"}]\\n</code></pre>\\n\\n<p>My <code>String jsonPersonsStr</code> holds the above json string.</p>\\n\\n<p>Now I try to use my function to directly convert the json string to a List of Person:</p>\\n\\n<pre><code>List&lt;Person&gt; persons = parseJsonToObject(jsonPersonsStr  ArrayList.class);\\n</code></pre>\\n\\n<p>But I got Exception:</p>\\n\\n<pre><code>java.lang.ClassCastException: java.util.LinkedHashMap cannot be cast to com.my.models.Person\\n</code></pre>\\n\\n<p>How to modify my generic function to get rid of this Exception?</p>\\n\"",
    "reco2": "conversion of java string to json object",
    "reco3": "JSON to Java Bean with embeded object",
    "reco1": "Convert Exception to JSON"
  },
  {
    "index": 71102,
    "votes": 3,
    "tags": [
      "java",
      "json"
    ],
    "timestamp": 1395666668,
    "question": "Is there any why to create java object files with JSon string",
    "answers": 1,
    "content": "<p>I want an automator library that take a <code>json</code> string and generates <code>java</code> files. </p>\\n\\n<p><strong>Example</strong></p>\\n\\n<p><strong>Input</strong>\\nJson = <code>{name:\\max\\\" phone:\\\"416465465\\\" email:\\\"xyx@gmail.com\\\"}</code></p>\\n\\n<p><strong>Output file</strong></p>\\n\\n<pre><code>public class object{\\n    public String name;\\n    public String  phone;\\n    public String email;\\n\\n}\\n</code></pre>\\n\"",
    "reco2": "Giving incorrect values when converting JSON string to XML and XML back to JSON string",
    "reco3": "Why &quot;class&quot; as key included in JSON?",
    "reco1": "How do i modify or update an existing json object?"
  },
  {
    "index": 80976,
    "votes": 3,
    "tags": [
      "java",
      "json"
    ],
    "timestamp": 1394611697,
    "question": "Parsing Json to Java Object",
    "answers": 3,
    "content": "<p>got this problem:\\nJson:</p>\\n\\n<pre><code>{\\authenticationToken\\\":{\\\"token\\\":\\\"c9XXXX1-XXXX-4XX9-XXXX-41XXXXX3XXXX\\\"}}\\n</code></pre>\\n\\n<p>Object:</p>\\n\\n<pre><code>    public class AuthenticationToken {\\n public AuthenticationToken() {\\n\\n }\\n\\n public AuthenticationToken(String token) {\\n  authenticationToken = token;\\n }\\n\\n    @JsonProperty(value=\\\"token\\\")\\n    private String authenticationToken;\\n\\n\\n public String getAuthenticationToken() {\\n  return authenticationToken;\\n }\\n\\n public void setAuthenticationToken(String authenticationToken) {\\n  this.authenticationToken = authenticationToken;\\n }\\n}\\n</code></pre>\\n\\n<p>But i got a a error in logs: Could not read JSON: Unrecognized field \\\"authenticationToken\\\" (class de.regalfrei.android.AuthenticationToken)  not marked as ignorable (one known property: \\\"token\\\"]) and i do not have any idea how to set the JSON properties correct for this situation. Can someone help?</p>\\n\\n<p>As you said i added a Wrapperclass:</p>\\n\\n<pre><code>public class AuthenticationTokenWrapper {\\n    AuthenticationToken authenticationToken;\\n\\n    public AuthenticationTokenWrapper(AuthenticationToken authenticationToken) {\\n        this.authenticationToken = authenticationToken;\\n    }\\n    @JsonProperty(value=\\\"authenticationToken\\\")\\n    public AuthenticationToken getAuthenticationToken() {\\n        return authenticationToken;\\n    }\\n\\n    public void setAuthenticationToken(AuthenticationToken authenticationToken) {\\n        this.authenticationToken = authenticationToken;\\n    }\\n\\n}\\n</code></pre>\\n\\n<p>and called this function:</p>\\n\\n<pre><code>AuthenticationTokenWrapper tok =restTemplate.postForObject(url  requestEntity  AuthenticationTokenWrapper.class);\\n</code></pre>\\n\"",
    "reco2": "How Parse JSON in Java",
    "reco3": "Android problems with a JSON file",
    "reco1": "Unrecognized Field error in deserialization with Jackson"
  },
  {
    "index": 23309,
    "votes": 2,
    "tags": [
      "java",
      "json"
    ],
    "timestamp": 1418025450,
    "question": "Traverse JSON data in JAVA",
    "answers": 5,
    "content": "<p>I am new to JSON..Am using HTTPUrlConnections and getting some response in JAVA program.The response data will be like </p>\\n\\n<pre><code>    {\\n    \\data\\\": [\\n        {\\n    \\\"id\\\": 1 \\n            \\\"userId\\\": 1 \\n            \\\"name\\\": \\\"ABC\\\" \\n            \\\"modified\\\": \\\"2014-12-04\\\" \\n            \\\"created\\\": \\\"2014-12-04\\\" \\n            \\\"items\\\": [\\n                {\\n                    \\\"email\\\": \\\"abc@gmail.com\\\" \\n                    \\\"links\\\": [\\n                        {\\n                            .\\n                            .\\n                            .\\n                            .\\n                        }\\n                    ]\\n                }\\n            ]\\n            }\\n        ]\\n}\\n</code></pre>\\n\\n<p>From this response am able to get the value of \\\"<strong>name</strong>\\\" field with the below java code.</p>\\n\\n<pre><code>JSONArray items = newObj.getJSONArray(\\\"data\\\");\\nfor (int it=0 ; it &lt; items.length() ; it++){\\n    JSONObject contactItem = items.getJSONObject(it);\\n    String userName = contactItem.getString(\\\"name\\\");\\n    System.out.println(\\\"Name----------\\\"+userName);\\n}\\n</code></pre>\\n\\n<p>But my requirement is I need to get the value of \\\"<strong>email</strong>\\\" ..How should I code for that..\\nAny advice..</p>\\n\\n<p>Thanks in advance..\\nChitra</p>\\n\"",
    "reco2": "how can i configure java bean and jersey client2.12 jersey to get response as a bean class object",
    "reco3": "How to serialize list of objects using GSON",
    "reco1": "jquery   JSON   Strings and Java response as HashMap"
  },
  {
    "index": 57743,
    "votes": 2,
    "tags": [
      "java",
      "json"
    ],
    "timestamp": 1397061900,
    "question": "java long values rounded off in json response",
    "answers": 1,
    "content": "<p>While getting a JSON response from my restful service implemented in JAVA  I am observing that the long data type values  ending with 01 are rounded off to 00.\\nFor example:</p>\\n\\n<p>the long values </p>\\n\\n<p><code>12345123459876501 is returned as 12345123459876500 (last digit rounded to 0)</code></p>\\n\\n<p><code>12345123459876502 is returned as 12345123459876502</code></p>\\n\\n<p><code>12345123451234501 is returned as 12345123451234500 (last digit rounded to 0)</code></p>\\n\\n<p><code>12345123451234502 is returned as 12345123451234502</code></p>\\n\\n<p>Could anybody help me understand why only the values ending with 01 are getting rounded to 00?</p>\\n",
    "reco2": "Special Round Decimal Java",
    "reco3": "How to update time elapsed",
    "reco1": "How to store rounded values in a table instead of just displaying them as rounded"
  },
  {
    "index": 58807,
    "votes": 2,
    "tags": [
      "java",
      "json"
    ],
    "timestamp": 1396962043,
    "question": "Write HashMap to JSON in Java",
    "answers": 5,
    "content": "<p>I'm new to Java. I've been working on a project that uses Maven and Java 1.7. In my project I have a HashMap. I want to output this HashMap to JSON. What is the recommended approach at this time? </p>\\n\\n<p>When I do a Google search  I get a lot of options (ie Jackson). However  I'm not sure what I should be using. Plus  I'd like to use a library that's accessible via Maven.</p>\\n\\n<p>Thank you </p>\\n",
    "reco2": "Parse json without knowning the keys",
    "reco3": "JSON to hashmap with GSON",
    "reco1": "creating Hashmap from a JSON String"
  },
  {
    "index": 96658,
    "votes": 2,
    "tags": [
      "java",
      "json"
    ],
    "timestamp": 1392852492,
    "question": "Generate sample Json output from Json Schema",
    "answers": 0,
    "content": "<p>I want to know whether there is a method in which I can generate sample json output based on a json schema input.</p>\\n\\n<p>for example :-</p>\\n\\n<pre><code>input =&gt;\\n\\n{\\n\\title\\\": \\\"Example Schema\\\" \\n\\\"type\\\": \\\"object\\\" \\n\\\"properties\\\": {\\n    \\\"firstName\\\": {\\n        \\\"type\\\": \\\"string\\\"\\n    } \\n    \\\"lastName\\\": {\\n        \\\"type\\\": \\\"string\\\"\\n    } \\n    \\\"age\\\": {\\n        \\\"description\\\": \\\"Age in years\\\" \\n        \\\"type\\\": \\\"integer\\\" \\n        \\\"minimum\\\": 0\\n    }\\n} \\n\\\"required\\\": [\\\"firstName\\\"  \\\"lastName\\\"]\\n}\\n\\noutput =&gt; \\n\\n{     \\n  \\\"firstName\\\" : \\\"RandomFirstName\\\" \\n   \\\"lastName\\\" : \\\"RandomLastName\\\"\\n}\\n</code></pre>\\n\\n<p>I have a large Json Schema with plenty of validations so to generate a sample valid json I could either create one manually using either Java or just a type it into a file. Is there a better way available ?</p>\\n\"",
    "reco2": "generating POJOs from JSON Schema for non-object types",
    "reco3": "How to validate JSON schema during the build?",
    "reco1": "How Parse JSON in Java"
  },
  {
    "index": 118780,
    "votes": 2,
    "tags": [
      "java",
      "json"
    ],
    "timestamp": 1390335444,
    "question": "Problems creating JSON file with javax createObjectBuilder",
    "answers": 2,
    "content": "<p>I am trying to teach myself how to work with JSON but I am having trouble building a JSON object in Java. I am importing javax.json and trying to create something like this:</p>\\n\\n<pre><code>  JsonObject model = Json.createObjectBuilder()\\n            .add(\\firstName\\\"  \\\"Duke\\\")\\n            .add(\\\"lastName\\\"  \\\"Java\\\")\\n            .add(\\\"age\\\"  18)\\n            .build();\\n</code></pre>\\n\\n<p>I get this error:</p>\\n\\n<pre><code>    Exception in thread \\\"main\\\" java.lang.AbstractMethodError: javax.json.spi.JsonProvider.createObjectBuilder()Ljavax/json/JsonObjectBuilder;\\n    at javax.json.Json.createObjectBuilder(Json.java:266)\\n    at com.example.jsontest.Test.main(Test.java:15)\\n</code></pre>\\n\\n<p>Any ideas?</p>\\n\"",
    "reco2": "How Parse JSON in Java",
    "reco3": "map a json object of string arrays to a java class",
    "reco1": "Why &quot;class&quot; as key included in JSON?"
  },
  {
    "index": 173177,
    "votes": 2,
    "tags": [
      "java",
      "json"
    ],
    "timestamp": 1410967518,
    "question": "How to edit  modify nested JSONObject",
    "answers": 2,
    "content": "<p>Could you help me with this issue please. \\nfor example I have JSONEObject</p>\\n\\n<pre><code>{\\n\\glossary\\\": {\\n    \\\"title\\\": \\\"example glossary\\\" \\n    \\\"GlossDiv\\\": {\\n        \\\"title\\\": \\\"S\\\" \\n        \\\"seeds\\\": \\\"12415\\\" \\n    }\\n}\\n</code></pre>\\n\\n<p>}</p>\\n\\n<p>For example  I need change \\\"seeds\\\":\\\"12415\\\" to \\\"seeds\\\":\\\"555\\\".\\nI found some solution:</p>\\n\\n<pre><code>JSONObject js = new JSONObject(jsonString);\\njs.getJSONObject(\\\"glossary\\\").getJSONObject(\\\"GlossDiv\\\").remove(\\\"seeds\\\");\\njs.getJSONObject(\\\"glossary\\\").getJSONObject(\\\"GlossDiv\\\").put(\\\"seeds\\\" \\\"555\\\");\\n</code></pre>\\n\\n<p>So for editing seeds in my version I need first to get \\\"glossary\\\" then \\\"GlossDiv\\\" after I delete \\\"seeds\\\" and put new \\\"seeds\\\" with new value.</p>\\n\\n<p>Could you help me to find another way to edit? For example: just somemethod(String key String NewValue).</p>\\n\"",
    "reco2": "MongoClient constructor with seeds",
    "reco3": "Using a Specific Seed for a Random Number Generator in Java",
    "reco1": "Using Nutch to Retrive Page Contents"
  },
  {
    "index": 174025,
    "votes": 2,
    "tags": [
      "java",
      "json"
    ],
    "timestamp": 1410871208,
    "question": "Parsing Json String to a Map",
    "answers": 2,
    "content": "<p>I have a JSON value like the following  and I needed to parse the pair values of data.</p>\\n\\n<pre><code>  {\\n    \\columns\\\" : [ \\\"Book\\\"  \\\"Publisher\\\" ] \\n    \\\"data\\\" : [ [ \\\"Book1\\\"  \\\"Author1\\\" ]  [ \\\"Book2\\\"  \\\"Author2\\\" ]  [ \\\"Book3\\\"  \\\"Author3\\\" ]]\\n  }\\n</code></pre>\\n\\n<p>How should I use the org.json library to extract the values I needed  and put in data type like Map? I am using Java programming. Thanks in advance!</p>\\n\\n<p>EDIT: The dataset of \\\"data\\\" are query results  so we can't determined the value in the code. The columns Book and Publisher is known already  but the only thing we know about the dataset is they are a pair values. </p>\\n\"",
    "reco2": "How to parse this simple JSON data",
    "reco3": "How to append a String to JSON String in java?",
    "reco1": "Mapping a single JSON object to three different JAVA classes?"
  },
  {
    "index": 194848,
    "votes": 2,
    "tags": [
      "java",
      "json"
    ],
    "timestamp": 1418466337,
    "question": "merging two json objects into single object in java",
    "answers": 2,
    "content": "<p>I have two json objects like below:</p>\\n\\n<pre><code>{\\name\\\":[\\\"Karbonn Smart A12 Star (Black &amp; Silver)\\\" \\\"Nokia 220 (Black)\\\" \\\"Karbonn Smart A52 Plus (Black &amp; Gold)\\\" \\\"Karbonn Smart A12 Star (White &amp; Gold)\\\" .......]}\\n{\\\"price\\\":[\\\"Rs. 3 699\\\" \\\"Rs. 2 599\\\" \\\"Rs. 2 499\\\" \\\"Rs. 3 699\\\" ..........]}\\n</code></pre>\\n\\n<p>I would like to combine both the objects like below I tried by using nested for each loop it did not worked I am not knowing the procedure to achieve this:</p>\\n\\n<pre><code>{\\\"mobile\\\":[{\\\"name\\\":\\\"Karbonn Smart A12 Star (Black &amp; Silver)\\\" \\\"price\\\":\\\"Rs. 2 499\\\"}]...........}\\n</code></pre>\\n\\n<p>my code is below:</p>\\n\\n<pre><code>for(Element a:mobilename)\\n    {\\n    text= a.text();\\n    arr.add(text);\\n    obj1.put(\\\"name\\\"  arr);\\n    //a11.add(text);\\n\\n}\\n   arr2.add(obj1);\\n\\n    for(Element b:price)\\n    {\\n    text1=b.text();\\n    arr1.add(text1);\\n\\n    obj.put(\\\"price\\\"  arr1);\\n\\n\\n\\n\\n     }\\n    arr2.add(obj1);\\n    arr2.add(obj);\\n    obj2.put(\\\"mobile\\\"  arr2);\\n</code></pre>\\n\"",
    "reco2": "Automatically creating java objects from json?",
    "reco3": "Json. converting many objects from one json",
    "reco1": "Traversing Nested JSON file with json.simple"
  },
  {
    "index": 198200,
    "votes": 2,
    "tags": [
      "java",
      "json"
    ],
    "timestamp": 1407245234,
    "question": "Getting &quot;JSONObject[&quot;myKey&quot;] is not a JSONArray.&quot;",
    "answers": 3,
    "content": "<p>I have a bit of code that has been working for years</p>\\n\\n<pre><code>JSONObject variableData = new JSONObject(request.getParameter(\\VARIABLE_DATA\\\"));\\nJSONArray companies = variableData.getJSONArray(\\\"COMPANIES\\\");\\n</code></pre>\\n\\n<p>and today  I get the following error:</p>\\n\\n<pre><code>JSONObject[\\\"COMPANIES\\\"] is not a JSONArray.\\n</code></pre>\\n\\n<p>I have stopped the code prior to executing the getJSONArray() call and looked into variableData.  Here is what I find:</p>\\n\\n<pre><code>{\\\"COMPANIES\\\":[{\\\"COMPANY\\\":\\\"2\\\"}]}\\n</code></pre>\\n\\n<p>To me  this looks like a valid JSONArray to be pulled from a valid JSONObject  so I'm flummoxed and looking for help.  Thanks.</p>\\n\"",
    "reco2": "Getting an array from a JSON Object",
    "reco3": "Creating nested JSON object for the following structure in Java using JSONObject?",
    "reco1": "how to get data from JSONObject"
  },
  {
    "index": 208289,
    "votes": 2,
    "tags": [
      "java",
      "json"
    ],
    "timestamp": 1405782523,
    "question": "Using JSON.Simple with nested objects and arrays",
    "answers": 0,
    "content": "<p>I've decided on using JSON.Simple to parse Java in my application  as apposed to GSON or Jackson  because both of them seem over complicated for my needs and appeared to need additional class files to work as intended. I have the following JSON:</p>\\n\\n<pre><code>{\\n    \\request\\\":{\\n        \\\"act\\\":\\\"rec_load_all\\\" \\n        \\\"email\\\":\\\"Redacted\\\" \\n        \\\"tkn\\\":\\\"Redacted\\\" \\n        \\\"a\\\":\\\"rec_load_all\\\" \\n        \\\"z\\\":\\\"Redacted\\\"\\n    } \\n    \\\"response\\\":{\\n        \\\"recs\\\":{\\n            \\\"has_more\\\":false \\n            \\\"count\\\":9 \\n            \\\"objs\\\":[{\\n                \\\"rec_id\\\":\\\"1385442465\\\" \\n                \\\"rec_hash\\\":\\\"1825780e334bcd831034bd9ca62\\\" \\n                \\\"zone_name\\\":\\\"Redacted\\\" \\n                \\\"name\\\":\\\"Redacted\\\" \\n                \\\"display_name\\\":\\\"Redacted\\\" \\n                \\\"type\\\":\\\"A\\\" \\n                \\\"prio\\\":null \\n                \\\"content\\\":\\\"Redacted\\\" \\n                \\\"display_content\\\":\\\"Redacted\\\" \\n                \\\"ttl\\\":\\\"1\\\" \\n                \\\"ttl_ceil\\\":86400 \\n                \\\"ssl_id\\\":null \\n                \\\"ssl_status\\\":null \\n                \\\"ssl_expires_on\\\":null \\n                \\\"auto_ttl\\\":1 \\n                \\\"service_mode\\\":\\\"1\\\" \\n                \\\"props\\\":{\\n                    \\\"proxiable\\\":1 \\n                    \\\"cloud_on\\\":1 \\n                    \\\"cf_open\\\":0 \\n                    \\\"ssl\\\":0 \\n                    \\\"expired_ssl\\\":0 \\n                    \\\"expiring_ssl\\\":0 \\n                    \\\"pending_ssl\\\":0 \\n                    \\\"vanity_lock\\\":0\\n                }\\n            }]\\n        }\\n    } \\n    \\\"result\\\":\\\"success\\\" \\n    \\\"msg\\\":null\\n}\\n</code></pre>\\n\\n<p>The <code>objs</code> array lists 9 different items  but I only included one for simplicity. I need to get <code>has_more</code>  <code>count</code>  and the <code>id</code> within <code>objs</code>. I've tried:</p>\\n\\n<pre><code>JSONParser jsonParser = new JSONParser();\\nJSONObject jsonObject = (JSONObject) jsonParser.parse(responseString);\\nJSONArray objs = (JSONArray) jsonObject.get(\\\"objs\\\");\\nIterator&lt;JSONObject&gt; iterator = objs.iterator();\\nwhile (iterator.hasNext()) {\\n    JSONObject idObj = (JSONObject) iterator.next();\\n    String id = (String) idObj.get(\\\"rec_id\\\");\\n    System.out.println(id);\\n}\\n</code></pre>\\n\\n<p>But it fires a <code>java.lang.NullPointerException</code> error  so I'm assuming because it's nested under <code>response -&gt; recs -&gt; objs</code> it isn't getting a value. I'm also following a few year old tutorial  so something could have changed since. If you could explain whats wrong and an example of how to fix it  I would greatly appreciate it  I learn by seeing.</p>\\n\\n<p>EDIT: Full error</p>\\n\\n<pre><code>Exception in thread \\\"main\\\" java.lang.NullPointerException\\n    at ddns.Net.getId(Net.java:46)\\n    at ddns.DDNS.main(DDNS.java:7)\\nJava Result: 1\\n</code></pre>\\n\\n<p>ddns.Net.getId(Net.java:46) | <code>Iterator&lt;JSONObject&gt; iterator = objs.iterator();</code>\\nddns.DDNS.main(DDNS.java:7) | <code>Just calls the method</code></p>\\n\"",
    "reco2": "Gson - Non static variable cannot be referenced from a static context",
    "reco3": "dynamically change the length of String inside the EditText field in Android",
    "reco1": "Can I use database IP address instead of hostname in JDBC connector?"
  },
  {
    "index": 9064,
    "votes": 1,
    "tags": [
      "java",
      "json"
    ],
    "timestamp": 1403511670,
    "question": "Java JSONSimple Parser",
    "answers": 3,
    "content": "<p>I'm trying to parse data from a php script to my Java application with a JSONArray.\\nThis is the php output:</p>\\n\\n<pre><code>{\\name\\\":\\\"test\\\"}\\n</code></pre>\\n\\n<p>This is my Java code that I got from the JSONSimple documentation:</p>\\n\\n<pre><code>try {\\n    String urlParameters = \\\"test\\\";    \\n    URL url = new URL(\\\"http://localhost:8080/Test\\\");\\n    URLConnection conn = url.openConnection();\\n\\n    conn.setDoOutput(true);\\n\\n    OutputStreamWriter writer = new OutputStreamWriter(conn.getOutputStream());\\n\\n    writer.write(urlParameters);\\n    writer.flush();\\n\\n    String line;\\n\\n    BufferedReader reader = new BufferedReader(new  InputStreamReader(conn.getInputStream()));\\n\\n    while ((line = reader.readLine()) != null) {\\n        System.out.println(line);\\n\\n        Object obj=JSONValue.parse(line);\\n        JSONArray array=(JSONArray)obj;\\n\\n        System.out.println(array.get(0));     \\n    }\\n\\n    writer.close();\\n    reader.close();\\n\\n} catch (IOException e) {\\n    System.out.print(\\\"ERROR: 1\\\");\\n    return;\\n}\\n</code></pre>\\n\\n<p>It doesn't show any errors in de editor but when I try to run the program I get the following error message:</p>\\n\\n<pre><code>Exception in thread \\\"main\\\" java.lang.ClassCastException: org.json.simple.JSONObject cannot be cast to org.json.simple.JSONArray\\n</code></pre>\\n\\n<p>Does anybody know hot to fix this problem? Any help wil be appreciated.</p>\\n\"",
    "reco2": "receiving JSON response in java",
    "reco3": "Can&#39;t connect to db android because error parsing json",
    "reco1": "error org.json.JSONObject cannot be converted to JSONArray"
  },
  {
    "index": 16466,
    "votes": 1,
    "tags": [
      "java",
      "json"
    ],
    "timestamp": 1402430818,
    "question": "Unable to create JSON correctly",
    "answers": 1,
    "content": "<p>Following JSon structure creation is my target for which i am using org.json </p>\\n\\n<pre><code>{\\n    \\Soft Drinks\\\": {\\n        \\\"T2\\\": [\\n            {\\n                \\\"name\\\": \\\"Bottled\\\" \\n                \\\"T3\\\": [\\n                    {\\n                        \\\"name\\\": \\\"Lemon\\\" \\n                        \\\"leaf\\\": [\\n                            {\\n                                \\\"name\\\": \\\"500 ML\\\"\\n                            }\\n                        ]\\n                    } \\n                    {\\n                        \\\"name\\\": \\\"Orange\\\" \\n                        \\\"leaf\\\": [\\n                            {\\n                                \\\"name\\\": \\\"500 ML\\\"\\n                            }\\n                        ]\\n                    }\\n                ]\\n            } \\n            {\\n                \\\"name\\\": \\\"Fountain\\\" \\n                \\\"T3\\\": [\\n                    {\\n                        \\\"name\\\": \\\"Lemon\\\" \\n                        \\\"leaf\\\": [\\n                            {\\n                                \\\"name\\\": \\\"500 ML\\\"\\n                            }\\n                        ]\\n                    } \\n                    {\\n                        \\\"name\\\": \\\"Orange\\\" \\n                        \\\"leaf\\\": [\\n                            {\\n                                \\\"name\\\": \\\"500 ML\\\"\\n                            }\\n                        ]\\n                    }\\n                ]\\n            }\\n        ]\\n    }\\n}\\n</code></pre>\\n\\n<p>I was trying with the following program </p>\\n\\n<pre><code>  package com;\\n\\n\\nimport java.util.LinkedHashMap;\\nimport java.util.LinkedList;\\nimport java.util.Map;\\nimport java.util.StringTokenizer;\\n\\nimport org.json.JSONArray;\\nimport org.json.JSONException;\\nimport org.json.JSONObject;\\n\\npublic class Test {\\n    public static void main(String[] args) throws JSONException {\\n\\n        Test testJson = new Test();\\n        Map&lt;String  LinkedList&lt;String&gt;&gt; categoryitemslistMap = new LinkedHashMap&lt;String  LinkedList&lt;String&gt;&gt;();\\n        JSONObject leafobj = new JSONObject();\\n\\n        JSONArray T2Array = new JSONArray();\\n        JSONArray T3Array = new JSONArray();\\n        JSONArray T4Array = new JSONArray();\\n\\n        JSONObject T3JsonObj = new JSONObject();\\n        JSONObject T2JsonObj = new JSONObject();\\n\\n        LinkedList&lt;String&gt; T3ValuesList = new LinkedList&lt;String&gt;();\\n        T3ValuesList.add(\\\"Bottled\\\");\\n        T3ValuesList.add(\\\"Fountain\\\");\\n\\n        categoryitemslistMap.put(\\\"Soft Drinks\\\"  T3ValuesList);\\n\\n        String t2consildated_Data = \\\"Lemon Orange\\\";\\n\\n        for (Map.Entry&lt;String  LinkedList&lt;String&gt;&gt; entry : categoryitemslistMap.entrySet()) {\\n            String t1data = entry.getKey();\\n            if (t1data.equalsIgnoreCase(\\\"Soft Drinks\\\")) {\\n                LinkedList&lt;String&gt; t1ChildList = entry.getValue();\\n\\n                for (String t2Data : t1ChildList) {\\n                    if (t2consildated_Data != null&amp;&amp; !t2consildated_Data.isEmpty()) {\\n                        StringTokenizer stt = new StringTokenizer(t2consildated_Data  \\\" \\\");\\n\\n                        while (stt.hasMoreTokens()) {\\n                        String   t3data = stt.nextToken();\\n                            JSONArray jsonarray = testJson.createLeaf();\\n                            leafobj.put(\\\"leaf\\\"  jsonarray);\\n                            T4Array.put(leafobj);\\n                        }\\n\\n                    }\\n                }\\n\\n            } // end of processing values of categoryitemslistMap(Linked List)\\n\\n        } // end of processing categoryitemslistMap\\n\\n        T3JsonObj.put(\\\"T3\\\" T4Array);\\n\\n\\n        System.out.println(T3JsonObj);\\n    } // end of main method\\n    public JSONArray createLeaf() throws JSONException {\\n        JSONArray ja = new JSONArray();\\n\\n        for(int i=0;i&lt;2;i++)\\n        {\\n            if(i==0)\\n            {\\n                JSONObject jo = new JSONObject();\\n                jo.put(\\\"name\\\"  \\\"500 ML\\\");\\n                ja.put(jo);\\n            }\\n            else if(i==1)\\n            {\\n                JSONObject jo = new JSONObject();\\n                jo.put(\\\"name\\\"  \\\"1 Litre\\\");\\n                ja.put(jo);\\n            }\\n\\n        }\\n\\n\\n        return ja;\\n    }\\n\\n}\\n</code></pre>\\n\\n<p>I was successful until here </p>\\n\\n<pre><code>leafobj.put(\\\"leaf\\\"  jsonarray);\\n</code></pre>\\n\\n<p>Which is producing jsom until leaf   from there on i am completely lost .</p>\\n\\n<p>The result of the above JSON is </p>\\n\\n<pre><code>  {\\\"T3\\\":[{\\\"leaf\\\":[{\\\"name\\\":\\\"500 ML\\\"} {\\\"name\\\":\\\"1 Litre\\\"}]} {\\\"leaf\\\":[{\\\"name\\\":\\\"500 ML\\\"} {\\\"name\\\":\\\"1 Litre\\\"}]} {\\\"leaf\\\":[{\\\"name\\\":\\\"500 ML\\\"} {\\\"name\\\":\\\"1 Litre\\\"}]} {\\\"leaf\\\":[{\\\"name\\\":\\\"500 ML\\\"} {\\\"name\\\":\\\"1 Litre\\\"}]}]}\\n</code></pre>\\n\\n<p>My question is the T3 array must be the value of t3data with corresponding leaf of it   i am unable to produce the T3 Array with that data   for example T3 should look like this .</p>\\n\\n<pre><code>  \\\"T3\\\": [\\n                        {\\n                            \\\"name\\\": \\\"Lemon\\\" \\n                            \\\"leaf\\\": [\\n                                {\\n                                    \\\"name\\\": \\\"500 ML\\\"\\n                                }\\n                            ]\\n                        } \\n                        {\\n                            \\\"name\\\": \\\"Orange\\\" \\n                            \\\"leaf\\\": [\\n                                {\\n                                    \\\"name\\\": \\\"500 ML\\\"\\n                                }\\n                            ]\\n                        }\\n                    ]\\n</code></pre>\\n\"",
    "reco2": "Dynamically generated JSON Order is missing",
    "reco3": "setting a button two tasks but only doing one at a time depending on toggle state",
    "reco1": "Producing a wrong JSON (Data is being repeated for every element)"
  },
  {
    "index": 186813,
    "votes": 10,
    "tags": [
      "java",
      "multithreading"
    ],
    "timestamp": 1408981870,
    "question": "Using Thread.stop() on carefully locked down  but untrusted  code",
    "answers": 1,
    "content": "<p>I'm aware that <code>Thread.stop()</code> is deprecated  and for good reason: it is not  in general  safe. But that doesn't mean that it is <em>never</em> safe... as far as I can see  it is safe in the context in which I want to use it; and  as far as I can see  I have no other option.</p>\\n\\n<p>The context is a third-party plug-in for a two-player strategy game: chess will do as the working example. The third-party code needs to be given a current board state  and (say) 10 seconds to decide on its move. It can return its move and terminate within the allowable time  or it can  whenever it wants to  signal its current preferred move; if the time limit expires  it should be stopped in its tracks  and its most recent preferred move should be played.</p>\\n\\n<p>Writing the plug-in to stop gracefully on request is <strong>not an option</strong>: I need to be able to take arbitrary untrusted third-party plug-ins. So I have to have some way of forcibly terminating it.</p>\\n\\n<p>Here's what I'm doing to lock it down:</p>\\n\\n<ol>\\n<li>The classes for the plug-in get put into their own thread  into their own thread group.</li>\\n<li>They are loaded with a class loader that has a highly restrictive <code>SecurityManager</code> in place: all the classes can do is number crunching.</li>\\n<li>The classes don't get a reference to any other threads  so they can't use <code>Thread.join()</code> on anything they haven't created.</li>\\n<li>The plug-in gets only two references to objects from the host system. One is the state of the chess board; this is a deep copy  and is thrown away afterwards  so it doesn't matter if it gets into an inconsistent state. The other is a simple object that allows the plug-in to set its current preferred move.</li>\\n<li>I'm checking when CPU time has exceeded the limit  and I'm periodically checking that at least one thread of the plug-in is doing something (so that it can't sleep indefinitely and avoid CPU time ever hitting the limit).</li>\\n<li>The preferred move doesn't have enough state to be inconsistent  but in any case it is carefully and defensively cloned after it is returned  and the one that was returned is discarded. By this point  there is <strong>nothing</strong> left in the host system to which the plug-in had a reference: no threads  no object instances.</li>\\n</ol>\\n\\n<p>In consequence  it seems  the plug-in can't leave anything in an inconsistent state (except for any objects it might create  which will then be discarded); and it can't affect any other threads (except for any threads it spawns  which will be in the same <code>ThreadGroup</code>  and so will also be killed off).</p>\\n\\n<p>It looks to me as though the reasons that <code>Thread.stop()</code> is deprecated don't apply here (by design). Have I missed anything? Is there still danger here? Or have I isolated things carefully enough that there can't be a problem?</p>\\n\\n<p>And is there a better way? The only alternative  I think  is to start up a whole new JVM to run the untrusted code  and forcibly kill the process when it's no longer wanted  but that has a thousand other problems (expensive  fragile  OS-dependent).</p>\\n\\n<p><strong>Please note:</strong> I'm not interested in answers along the lines of \\Ooh  it's deprecated for a reason  you want to watch it  mate.\\\" I <strong>know</strong> it's deprecated for a reason  and I completely understand why it is not safe to be let out of the cage <strong>in general</strong>. What I am asking is whether there is a <strong>specific reason</strong> for thinking that it is unsafe in <strong>this context</strong>.</p>\\n\\n<p>For what it's worth  here is the (abridged) relevant bit of the code:</p>\\n\\n<pre><code>public void playMoveInternal(GameState game) throws IllegalMoveException \\n        InstantiationException  IllegalAccessException \\n        IllegalMoveSpecificationException {\\n    ThreadGroup group = new ThreadGroup(\\\"playthread group\\\");\\n    Thread playthread = null;\\n    group.setMaxPriority(Thread.MIN_PRIORITY);\\n    GameMetaData meta = null;\\n    StrategyGamePlayer player = null;\\n    try {\\n        GameState newgame = (GameState) game.clone();\\n        SandboxedURLClassLoader loader = new SandboxedURLClassLoader(\\n          // recreating this each time means static fields don't persist\\n                urls[newgame.getCurPlayer() - 1]  playerInterface);\\n        Class&lt;?&gt; playerClass = loader.findPlayerClass();\\n        GameTimer timer = new GameTimer(\\n                newgame.getCurPlayer() == 1 ? timelimit : timelimit2);\\n          // time starts ticking here!\\n        meta = new GameMetaData((GameTimer) timer.clone());\\n        try {\\n            player = (StrategyGamePlayer) playerClass.newInstance();\\n        } catch (Exception e) {\\n            System.err.println(\\\"Couldn't create player module instance!\\\");\\n            e.printStackTrace();\\n            game.resign(GameMoveType.MOVE_ILLEGAL);\\n            return;\\n        }\\n        boolean checkSleepy = true;\\n        playthread = new Thread(group  new MoveMakerThread(player  meta \\n                newgame)  \\\"MoveMaker thread\\\");\\n        int badCount = 0;\\n        playthread.start();\\n        try {\\n            while ((timer.getTimeRemaining() &gt; 0) &amp;&amp; (playthread.isAlive())\\n                    &amp;&amp; (!stopping) &amp;&amp; (!forceMove)) {\\n                playthread.join(50);\\n                if (checkSleepy) {\\n                    Thread.State thdState = playthread.getState();\\n                    if ((thdState == Thread.State.TIMED_WAITING)\\n                            || (thdState == Thread.State.WAITING)) {\\n                        // normally  main thread will be busy\\n                        Thread[] allThreads = new Thread[group\\n                                .activeCount() * 2];\\n                        int numThreads = group.enumerate(allThreads);\\n                        boolean bad = true;\\n                        for (int i = 0; i &lt; numThreads; i++) {\\n                            // check some player thread somewhere is doing something\\n                            thdState = allThreads[i].getState();\\n                            if ((thdState != Thread.State.TIMED_WAITING)\\n                                    &amp;&amp; (thdState != Thread.State.WAITING)) {\\n                                bad = false;\\n                                break; // found a good thread  so carry on\\n                            }\\n                        }\\n                        if ((bad) &amp;&amp; (badCount++ &gt; 100))\\n                            // means player has been sleeping for an expected 5\\n                            // sec  which is naughty\\n                            break;\\n                    }\\n                }\\n            }\\n        } catch (InterruptedException e) {\\n            System.err.println(\\\"Interrupted: \\\" + e);\\n        }\\n    } catch (Exception e) {\\n        System.err.println(\\\"Couldn't play the game: \\\" + e);\\n        e.printStackTrace();\\n    }\\n    playthread.destroy();\\n    try {\\n        Thread.sleep(1000);\\n    } catch (Exception e) {\\n    }\\n    group.stop();\\n    forceMove = false;\\n    try {\\n        if (!stopping)\\n            try {\\n                if (!game.isLegalMove(meta.getBestMove())) {\\n                    game.resign(GameMoveType.MOVE_ILLEGAL);\\n                }\\n                else\\n                    game.makeMove((GameMove) (meta.getBestMove().clone()));\\n                // We rely here on the isLegalMove call to make sure that\\n                // the return type is the right (final) class so that the clone()\\n                // call can't execute dodgy code\\n            } catch (IllegalMoveException e) {\\n                game.resign(GameMoveType.MOVE_ILLEGAL);\\n            } catch (NullPointerException e) {\\n                // didn't ever choose a move to make\\n                game.resign(GameMoveType.MOVE_OUT_OF_TIME);\\n            }\\n    } catch (Exception e) {\\n        e.printStackTrace();\\n        game.resign(GameMoveType.MOVE_OUT_OF_TIME);\\n    }\\n}\\n</code></pre>\\n\"",
    "reco2": "Loading a Grizzly/Jersey server in a JAR",
    "reco3": "How to deploy plugin as a folder in Eclipse?",
    "reco1": "Resolving Dependancys on Eclipse Plug-in with Maven / Junit"
  },
  {
    "index": 197826,
    "votes": 10,
    "tags": [
      "java",
      "multithreading"
    ],
    "timestamp": 1407308218,
    "question": "Sharing array of bins between threads",
    "answers": 2,
    "content": "<p>I have an application that is multithreaded and working OK. However it's hitting lock contention issues (checked by snapshotting the java stack and seeing whats waiting).</p>\\n\\n<p>Each thread consumes objects off a list and either rejects each or places it into a Bin.</p>\\n\\n<p>The Bins are initially null as each can be expensive (and there is potentially a <strong>lot</strong> of them).</p>\\n\\n<p>The code that is causing the contention looks roughly like this:</p>\\n\\n<pre><code>public void addToBin(Bin[] bins  Item item) {\\n   Bin bin;\\n   int bin_index = item.bin_index\\n   synchronized(bins) {\\n      bin = bins[bin_index];\\n      if(bin==null) {\\n        bin = new Bin();\\n        bins[bin_index] = bin;\\n      }\\n   }\\n   synchronized(bin) {\\n     bin.add(item);\\n   }\\n}\\n</code></pre>\\n\\n<p>It is the synchronization on the <code>bins</code> array that is the bottleneck. </p>\\n\\n<p>It was suggested to me by a colleague to use double checked locking to solve this  but we're unsure exactly what would be involved to make it safe. The suggested solution looks like this:</p>\\n\\n<pre><code>public void addToBin(Bin[] bins  Item item) {\\n   int bin_index = item.bin_index\\n   Bin bin = bins[bin_index];\\n\\n   if(bin==null) {\\n     synchronized(bins) {\\n        bin = bins[bin_index];\\n        if(bin==null) {\\n          bin = new Bin();\\n          bins[bin_index] = bin;\\n        }\\n     }\\n   }\\n\\n   synchronized(bin) {\\n     bin.add(item);\\n   }\\n}\\n</code></pre>\\n\\n<p>Is this safe and/or is there a better/safer/more idiomatic way to do this?</p>\\n",
    "reco2": "Is this Double-Checked Locking that is not Broken?",
    "reco3": "Map synchronization with double check locking",
    "reco1": "Measure contention in wait-free multi-threaded java programs"
  },
  {
    "index": 80754,
    "votes": 7,
    "tags": [
      "java",
      "multithreading"
    ],
    "timestamp": 1394627072,
    "question": "when does the main thread die?",
    "answers": 3,
    "content": "<p>The question was to generate random numbers between 1 and 99 using a thread. However the problem here is I don't know where does the \\main thread is stopping\\\" coming from?\\nDoesn't the main thread die in the end?</p>\\n\\n<p>This is the sample output:</p>\\n\\n<pre><code>Main thread stopping\\nRandom no = 57\\nRandom no = 47\\nRandom no = 96\\nRandom no = 25\\nRandom no = 74\\nRandom no = 15\\nRandom no = 46\\nRandom no = 90\\nRandom no = 52\\nRandom no = 97\\nThread that generates random nos is stopping\\n</code></pre>\\n\\n<p>Mythread class:</p>\\n\\n<pre><code>public class MyThread extends Thread {\\n    MyThread() {\\n        // default constructor\\n    }\\n\\n    MyThread(String threadName) {\\n        super(threadName); // Initialize thread.\\n        start();\\n    }\\n\\n    public void run() {\\n        // System.out.println(Thread.currentThread().getName());\\n        Random rand = new Random();\\n        int newValue;\\n        for (int i = 0; i &lt; 10; i++) {\\n            newValue = rand.nextInt(99);// generates any vale between 1 to 99\\n            System.out.println(\\\"Random no = \\\" + newValue);\\n        }\\n        System.out.println(\\\"Thread that generates random nos is stopping\\\");\\n\\n    }\\n}\\n</code></pre>\\n\\n<p>Main class:</p>\\n\\n<pre><code>public class HW5ex2a {\\n    public static void main(String[] args) throws InterruptedException {\\n        MyThread t = new MyThread();\\n        t.start();\\n        t.join();// wait for the thread t to die\\n\\n        System.out.println(\\\"Main thread stopping\\\");\\n\\n    }\\n}\\n</code></pre>\\n\"",
    "reco2": "synchronize two threads in java",
    "reco3": "Java - What happens when child thread dies from NPE   does parent thread get killed",
    "reco1": "How does a Thread notify the main thread  while the main thread is still running"
  },
  {
    "index": 87673,
    "votes": 7,
    "tags": [
      "java",
      "multithreading"
    ],
    "timestamp": 1393849908,
    "question": "How can thread run after main method closes?",
    "answers": 6,
    "content": "<p>Here are my two classes:</p>\\n\\n<pre><code>public class Firstclass {\\n    public static void main(String args[]) throws InterruptedException {\\n        System.out.println(\\Main start....\\\");\\n        Secondclass t1 = new Secondclass();\\n        t1.setName(\\\"First Thread\\\");\\n        Secondclass t2 = new Secondclass();\\n        t2.setName(\\\"Second Thread\\\");\\n        t1.start();\\n        t2.start();\\n        System.out.println(\\\"Main close...\\\");\\n    }\\n}\\n</code></pre>\\n\\n<p>and</p>\\n\\n<pre><code>public class Secondclass extends Thread {\\n    @Override\\n    public void run() {\\n        try {\\n            loop();\\n        } catch(Exception e) {\\n            System.out.println(\\\"exception is\\\" + e);\\n        }\\n    }\\n\\n    public void loop() throws InterruptedException {\\n        for(int i = 0; i &lt;= 10; i++) {\\n            Thread t = Thread.currentThread();\\n            String threadname = t.getName();\\n            if(threadname.equals(\\\"First Thread\\\")) {\\n                Thread.sleep(1000);\\n            } else {\\n                Thread.sleep(1500);\\n            }\\n            System.out.println(\\\"i==\\\" + i);   \\n        }\\n    }\\n}\\n</code></pre>\\n\\n<p>Now when I run <code>Firstclass</code> then the output is:</p>\\n\\n<pre><code>Main start....\\nMain close...\\ni==0\\ni==0\\ni==1\\ni==1\\ni==2\\ni==3\\ni==2\\ni==4\\ni==3\\ni==5\\ni==6\\ni==4\\ni==7\\ni==5\\ni==8\\ni==9\\ni==6\\ni==10\\ni==7\\ni==8\\ni==9\\ni==10\\n</code></pre>\\n\\n<p><strong>My first question is:</strong> I want to know why both threads are still running even though the <code>main</code> method have finished?</p>\\n\\n<p><strong>My second question is:</strong> can anybody explain to me what the difference is between methods <code>join</code> and <code>synchronized</code>?</p>\\n\"",
    "reco2": "What is the need of Thread start method? why not have only run method?",
    "reco3": "How to set a flag to indicate when all threads are done running",
    "reco1": "How can I call a different method than run() from a Thread"
  },
  {
    "index": 103139,
    "votes": 7,
    "tags": [
      "java",
      "multithreading"
    ],
    "timestamp": 1392175981,
    "question": "Java - terminating a method within a Thread",
    "answers": 3,
    "content": "<p>I have a <code>Java</code> thread with a run method that computes many things. You can think of it as a series of math statements as follows. Note that each computation may utilize other methods that in turn might have additional loops and such.</p>\\n\\n<pre><code>public void run() {\\n   [computation 1 goes here here that takes a few seconds]\\n   [computation 2 goes here that takes a few seconds]\\n   ....\\n   [computation 30 goes here that takes a few seconds]\\n}\\n</code></pre>\\n\\n<p>There is a <code>GUI</code> that prints the output of these statements as they produce their results  and I'd like the user to be able to say \\Stop\\\" whenever they want. Here are two methods I thought of</p>\\n\\n<hr>\\n\\n<p><strong>Method 1: Many Boolean Checks [LOOKS TERRIBLE]</strong></p>\\n\\n<pre><code>private boolean stop;\\npublic void run() {\\n   if(!stop)\\n       [computation 1 goes here here that takes a few seconds]\\n   if(!stop)\\n       [computation 2 goes here that takes a few seconds]\\n   ....\\n   if(!stop)\\n       [computation 30 goes here that takes a few seconds]\\n}\\n</code></pre>\\n\\n<p>In this method  once the stop flag has been set to true  the computations will end. Note how silly this looks  having 30 <code>if</code> statements. Importantly  the critical question here is how often to put these conditions. Note that the computations on each line are not necessarily a single line. Taken to the extreme  does EVERY line in the <code>run()</code> method deserve a <code>if(!stop)</code> call above it? This doesn't seem like good design.</p>\\n\\n<p><strong>Method 2: Generalizing Computations [CANNOT DO THIS]</strong></p>\\n\\n<pre><code>pirivate boolean stop;\\npublic void run() {\\n   for(int i = 0; i &lt; computationsN &amp;&amp; !stop; i++) {\\n       computuations.get(i).compute();\\n}\\n</code></pre>\\n\\n<p>I imagine that this method will be suggested  so I'd like to simply state that it is impossible in my case  given the sheer variation in the lines that I am calling \\\"computations\\\" for simplicity. I have typically done this for threads that are basic <code>while</code> loops  and it works great for such. But not in this case when the <code>run()</code> method is simply a huge method of variable code.</p>\\n\\n<hr>\\n\\n<p>Any other solutions out there? Seems like this should be a universal problem. Thanks in advance!</p>\\n\"",
    "reco2": "Primitive double equals to NaN",
    "reco3": "How can I call a different method than run() from a Thread",
    "reco1": "Prevent future.get() from Making GUI Unresponsive in Order to Implement a Pause Button"
  },
  {
    "index": 199945,
    "votes": 7,
    "tags": [
      "java",
      "multithreading"
    ],
    "timestamp": 1406916510,
    "question": "Run a process asynchronously and read from stdout and stderr",
    "answers": 4,
    "content": "<p>I have some code that runs a process and reads from the stdout and stderr asynchronously and then handles when the process completes. It looks something like this:</p>\\n\\n<pre><code>Process process = builder.start();\\n\\n    Thread outThread = new Thread(() -&gt; {\\n        try (BufferedReader reader = new BufferedReader(new InputStreamReader(process.getInputStream()))) {\\n            // Read stream here\\n        } catch (Exception e) {\\n        }\\n    });\\n\\n    Thread errThread = new Thread(() -&gt; {\\n      try (BufferedReader reader = new BufferedReader(new InputStreamReader(process.getErrorStream()))) {\\n        // Read stream here\\n      } catch (Exception e) {\\n      }\\n    });\\n\\n    outThread.start();\\n    errThread.start();\\n\\n    new Thread(() -&gt; {\\n      int exitCode = -1;\\n      try {\\n        exitCode = process.waitFor();\\n        outThread.join();\\n        errThread.join();\\n      } catch (Exception e) {\\n      }\\n\\n    // Process completed and read all stdout and stderr here\\n    }).start();\\n</code></pre>\\n\\n<p>My issue is with the fact that I am using 3 threads to achieve this asynchronous \\run-and-get-output\\\" task - I don't know why  but I feel it doesn't feel right using 3 threads. I could allocate the threads out of a thread pool  but that would still be blocking those threads.</p>\\n\\n<p>Is there anything I can do  maybe with NIO  to reduce this to fewer (1?) thread? Anything I can think of will be constantly spinning a thread (unless I add a few sleeps)  which I don't really want to do either...</p>\\n\\n<p><strong>NOTE: I do need to read as I go (rather than when the process has stopped) and I do need to separate stdin from stderr so can't do a redirect.</strong></p>\\n\"",
    "reco2": "How to join the threads to main thread in threadpool?",
    "reco3": "how many threads are created in this code?",
    "reco1": "Stopping Thread or Let it Run"
  },
  {
    "index": 34553,
    "votes": 6,
    "tags": [
      "java",
      "multithreading"
    ],
    "timestamp": 1417793834,
    "question": "Does multithreading always yield better performance than single threading?",
    "answers": 6,
    "content": "<p>I know the answer is <strong>No</strong>  here is an example <a href=\\http://stackoverflow.com/questions/19901915/why-single-thread-is-faster-than-multithreading-in-java\\\">Why single thread is faster than multithreading in Java?</a> .</p>\\n\\n<p>So when processing a task in a thread is trivial  the cost of creating a thread will create more overhead than distributing the task. This is one case where a single thread will be faster than multithreading.</p>\\n\\n<h2>Questions</h2>\\n\\n<ul>\\n<li><p>Are there more cases where a single thread will be faster than multithreading?</p></li>\\n<li><p>When should we decide to give up multithreading and only use a single thread to accomplish our goal?</p></li>\\n</ul>\\n\\n<p>Although the question is tagged <a href=\\\"/questions/tagged/java\\\" class=\\\"post-tag\\\" title=\\\"show questions tagged 'java'\\\" rel=\\\"tag\\\">java</a>  it is also welcome to discuss beyond Java.\\nIt would be great if we could have a small example to explain in the answer.</p>\\n\"",
    "reco2": "Return result of thread to a separate thread",
    "reco3": "JDBC MySQL multiple connection  which one is the best?",
    "reco1": "Java Thread: start() - How does it create a new thread?"
  },
  {
    "index": 67681,
    "votes": 6,
    "tags": [
      "java",
      "multithreading"
    ],
    "timestamp": 1417426092,
    "question": "Calculate maximum number of thread that can be used for better performance in a Threadpool",
    "answers": 3,
    "content": "<p>Recently I face a interview where interviewer asked me about what will be maximum thread you can assign to thread pool. I answered him it will be depend upon hardware combination. \\nAlso I can manually test execution by increasing threads in thread-pool. </p>\\n\\n<p>He seem to be not happy with that.</p>\\n\\n<p>can anyone tell how can we decide what will be the maximum threads we should use for better performance. any guide link will be appreciated(In core java application)</p>\\n",
    "reco2": "Is AsyncTask&#39;s Thread Pool managed by the application or the android os?",
    "reco3": "How can i make one thread out of several run for maximum time(minimum time in waiting queue)?",
    "reco1": "Are there any disadvantages of using a thread pool?"
  },
  {
    "index": 92863,
    "votes": 6,
    "tags": [
      "java",
      "multithreading"
    ],
    "timestamp": 1393325818,
    "question": "How Thread run starts?",
    "answers": 5,
    "content": "<p>I was looking a small example on Threads.For creating Threads we can do in 2 ways either by implementing <code>Runnable</code> interface or by extending Thread.I used the 1st way</p>\\n\\n<pre><code>package test;\\n\\npublic class test implements Runnable{\\n    public static void main(String args[])\\n    {\\n        test t=new test();\\n        t.run();Thread th=Thread.currentThread();\\n        th.start();\\n    }\\n\\n    @Override\\n    public void run() {\\n        // TODO Auto-generated method stub\\n        System.out.println(\\hi\\\");\\n    }\\n}\\n</code></pre>\\n\\n<p>My doubt is when we are calling <code>th.start();</code> then <code>run()</code> is called.I want to know how.I thought internally there <code>start()</code> may be calling <code>run()</code> so I looked in the documentation of Thread class</p>\\n\\n<p>The following is the <code>start()</code> declaration in Thread class</p>\\n\\n<pre><code>public synchronized void start() {\\n    /**\\n     * This method is not invoked for the main method thread or \\\"system\\\"\\n     * group threads created/set up by the VM. Any new functionality added\\n     * to this method in the future may have to also be added to the VM.\\n     *\\n     * A zero status value corresponds to state \\\"NEW\\\".\\n     */\\n    if (threadStatus != 0)\\n        throw new IllegalThreadStateException();\\n\\n    /* Notify the group that this thread is about to be started\\n     * so that it can be added to the group's list of threads\\n     * and the group's unstarted count can be decremented. */\\n    group.add(this);\\n\\n    boolean started = false;\\n    try {\\n        start0();\\n        started = true;\\n    } finally {\\n        try {\\n            if (!started) {\\n                group.threadStartFailed(this);\\n            }\\n        } catch (Throwable ignore) {\\n            /* do nothing. If start0 threw a Throwable then\\n              it will be passed up the call stack */\\n        }\\n    }\\n}\\n</code></pre>\\n\\n<p>As you can see inside <code>start()</code> <code>run()</code> is not called but when we are calling <code>th.start()</code> then automatically overriden <code>run()</code> is called.Can anybody please throw some light in this</p>\\n\"",
    "reco2": "Storing information and getting it back from currentThread",
    "reco3": "Number of current threads in java",
    "reco1": "Calling multithreaded methods in one class"
  },
  {
    "index": 139502,
    "votes": 6,
    "tags": [
      "java",
      "multithreading"
    ],
    "timestamp": 1419393207,
    "question": "Updating integer atomically over multiple JVMs for every key",
    "answers": 1,
    "content": "<p>We have a requirement  where the problem can be narrowed down as.</p>\\n\\n<ul>\\n<li>There are multiple keys and each key maps to a integer.</li>\\n<li>When a key is received on a JVM  you need to retrieve the int value from the shared memory  increment it and then put the incremented value back on the shared memory.</li>\\n</ul>\\n\\n<p>So when two JVMs or two threads read the same value  then the update of one of them should fail consistently  so that you do not lose any increment done by any of the thread on any of the JVM.</p>\\n\\n<p>Once an update fails  you read again from the shared memory  increment it and then update again till the update is successful or you have exhausted some 'N' number of retries.</p>\\n\\n<p>Right now we are using infinispan with optimistic locking  but the behavior is not consistent. Please find the link to that thread.</p>\\n\\n<p><a href=\\https://developer.jboss.org/message/914490\\\">https://developer.jboss.org/message/914490</a></p>\\n\\n<p>Is there any other technology which will fit in well for this requirement.</p>\\n\"",
    "reco2": "Incrementing variables",
    "reco3": "An int increments twice even though access to it is in synchronized method",
    "reco1": "Accessing shared memory created in C using shmget() from Java"
  },
  {
    "index": 5301,
    "votes": 5,
    "tags": [
      "java",
      "multithreading"
    ],
    "timestamp": 1404114528,
    "question": "Why there is no system call being invoked for thread creation  when i am creating multiple threads in java?",
    "answers": 2,
    "content": "<p>The following code creates 100 new java threads and runs them.</p>\\n\\n<pre><code>class ThreadTest {\\n    public static void main(String[] args) {\\n        for (int i = 0; i &lt; 100; i++) {\\n            final int tNo = i;\\n            new Thread(new Runnable() {\\n                @Override\\n                public void run() {\\n                    System.out.println(\\thread #\\\" + tNo);\\n                }\\n            }).start();\\n        }\\n    }\\n}\\n</code></pre>\\n\\n<p>When i run the above code and records the system calls executed by this using strace  i cannot find any system call(maybe clone()) which is creating a new thread. </p>\\n\\n<p>But when i check the threads for the above process using ps -eLf command then it lists(>100) threads with different thread ids. </p>\\n\\n<p>How does these threads got created without any system call? And if jvm were creating threads in userspace then these shouldn't be listed by ps -eLf. </p>\\n\\n<p>The output of strace command </p>\\n\\n<pre><code>mprotect(0xf95000  8876032  PROT_READ|PROT_EXEC) = 0\\nmunmap(0xf7762000  92395)               = 0\\nmmap2(NULL  331776  PROT_READ|PROT_WRITE  MAP_PRIVATE|MAP_ANONYMOUS|MAP_STACK  -1  0) = 0xfffffffff770f000\\nmprotect(0xf770f000  4096  PROT_NONE)   = 0\\nclone(child_stack=0xf775f494  flags=CLONE_VM|CLONE_FS|CLONE_FILES|CLONE_SIGHAND|CLONE_THREAD|CLONE_SYSVSEM|CLONE_SETTLS|CLONE_PARENT_SETTID|CLONE_CHILD_CLEARTID  parent_tidptr=0xf775fbd8  tls=0xf775fbd8  child_tidptr=0xffdb53d0) = 31692\\nfutex(0xf775fbd8  FUTEX_WAIT  31692  NULLthread #1\\nthread #5\\nthread #4\\nthread #3\\n.....\\n) = 0\\nexit_group(0)                           = ?\\n</code></pre>\\n\\n<p>I have removed the initial system calls required for launching jvm. The only clone system call being shown is the one for creating the main thread.</p>\\n\"",
    "reco2": "Stopping Thread or Let it Run",
    "reco3": "Return to the main thread after the threadpool shuts down?",
    "reco1": "how many threads are created in this code?"
  },
  {
    "index": 28048,
    "votes": 5,
    "tags": [
      "java",
      "multithreading"
    ],
    "timestamp": 1400708779,
    "question": "I have a dual core machine. In java  how is a fixedThreadPool of 3 threads managed by my computer? What is a possible behavior of the jvm?",
    "answers": 1,
    "content": "<p>I'm trying to visualize how my machine would behave with this code if its a dual core processor. How would it behave if it were a quad core machine?</p>\\n\\n<pre><code>    ExecutorService executor = Executors.newFixedThreadPool(3);\\n\\n    // Submission of tasks\\n    for (int i =0; i&lt;10; i++){\\n        executor.submit(new Processor(i));\\n    }\\n</code></pre>\\n\\n<p>The Processor has a run method that prints \\running in thread: about to sleep...\\\" \\nThen it sleeps for 5 seconds then prints \\\"running in thread: woke up...\\\"</p>\\n\\n<p>I'm trying to connect the dots between java code and hardware. I'm having difficulty picturing how this differs in different processor environments. Could someone give an example of a possible behavior of the jvm in this situation? Thank you in advance.</p>\\n\"",
    "reco2": "AnnotationProcessor option not recorgnized by any processor",
    "reco3": "How to process multiple jpa entity to processor in camel",
    "reco1": "Does downloading with multiple threads actually speed things up?"
  },
  {
    "index": 97002,
    "votes": 5,
    "tags": [
      "java",
      "multithreading"
    ],
    "timestamp": 1392819630,
    "question": "Create Thread within a thread - good practice?",
    "answers": 2,
    "content": "<p>Is it good practice to start a thread within a thread? I have searched around but have not found much information.</p>\\n\\n<p>I have a TimerTask which gets a list of users every day at a certain time. I then want to get some data about the user  but this requires user input. Because it requires user input  I don't want my TimerTask thread to be blocked in the case of users not responding. For example  the first user in the list may not respond in X amount of time  I don't want to wait X amount of time until I ask the second user for their data  and so on. So within my TimerTask  I create and start a new Thread to get the data. This way  in Y amount of time  if i have recieved some data (but not all) I can still do other things instead of waiting for every one to complete.</p>\\n\\n<p>Is it good practice to do the above? Are there any better solutions?</p>\\n\\n<p>Here is some psudeo code which may help you understand.</p>\\n\\n<pre><code>class UserThread extends TimerTask {\\n\\n        @Override\\n        public void run() {\\n            log.debug(\\Get a list of members!\\\");\\n            List&lt;String&gt; users = userManager.getUsers();\\n            retrieveInitialData(users);\\n        }\\n\\n        public void retrieveInitialData(List&lt;String&gt; users) {\\n            for(String user : users) {\\n                new Thread(new GetData(user)).start();\\n            }\\n        }\\n\\n        addToSuccessList(String user) {\\n            synchronized(successList) {\\n                successList.add(user);\\n            }\\n        }\\n\\n        addToFailureList(String user) {\\n            synchronized(failureList) {\\n                failureList.add(user);\\n            }\\n        }\\n\\n        class GetData extends Thread {\\n\\n            String userID;\\n\\n            public GetData(String user) {\\n            this.userID = user;\\n            }\\n\\n            public void run() {\\n            try {\\n                dataManager.getData(user);\\n                addToSuccessList(user);\\n            } catch(Execption e) {\\n                addToFailureList(user);\\n            }\\n\\n        }\\n</code></pre>\\n\"",
    "reco2": "Android: Restart Timer",
    "reco3": "TimerTask run/cancel with url call?",
    "reco1": "Does everything scoped within TimerTask need to be thread safe?"
  },
  {
    "index": 98662,
    "votes": 5,
    "tags": [
      "java",
      "multithreading"
    ],
    "timestamp": 1392642403,
    "question": "Data race and Race condition during lazy initializing a SIngleton",
    "answers": 2,
    "content": "<p>While reading <em>Java Concurrency in Practice</em> book by Brian Goetz  I came across Data races and Race conditions.</p>\\n\\n<p><strong>Data races</strong></p>\\n\\n<blockquote>\\n  <p>A program is said to have a data race  and therefore not be a\\n  \\properly synchronized\\\" program  when there is a variable that is read\\n  by more than one thread  written by at least one thread  and the write\\n  and the reads are not ordered by a happens-before relationship.</p>\\n</blockquote>\\n\\n<p><strong>Race condition</strong></p>\\n\\n<blockquote>\\n  <p>A race condition occurs when the correctness of a computation depends\\n  on the relative timing or interleaving of multiple threads by the\\n  runtime; in other words  when getting the correct answer relies on\\n  lucky timing. The most common type of race condition is\\n  check-then-act  where a potentially stale observation is used to make\\n  a decision on what to do next</p>\\n</blockquote>\\n\\n<p>As I understand  Data race can be avoided by making sure that one or more of the above conditions hold false - ie  by making shared variables immutable or by making the access to them properly <code>synchronized</code>. </p>\\n\\n<p>My question is about the example of a SingletonFactory that is usually given to illustrate <strong>race condition</strong>.</p>\\n\\n<p>e.g.:</p>\\n\\n<pre><code>public class SingletonFactory {\\n\\n    private Singleton singleton = null;\\n\\n    private SingletonFactory() {}\\n\\n    public Singleton getInstance() {\\n        if(this.singleton == null) {\\n            this.singleton = new Singleton();\\n        }\\n        return this.singleton;\\n   }\\n}\\n</code></pre>\\n\\n<p>My question is whether this code can also be considered to cause a <strong>Data race</strong>? </p>\\n\\n<p>I understand that one way to make the above program <em>\\\"completely thread safe\\\"</em> would be to have a <a href=\\\"http://en.wikipedia.org/wiki/Double-checked_locking\\\" rel=\\\"nofollow\\\">double checked locking</a> and also make the class variable <code>volatile</code>. </p>\\n\\n<p>But in case I just declare the <code>Singleton</code> variable <code>volatile</code>  but fail to synchronize the code block that initializes the variable  then can it be considered as safe at-least w.r.t \\\"Data race\\\"  but still unsafe w.r.t. race condition?  In general I am still in search of a good realistic example where there is no data race  but there is still a potential race condition!</p>\\n\\n<p>(a <a href=\\\"http://blog.regehr.org/archives/490\\\" rel=\\\"nofollow\\\">blog</a> that is usually referred to explain the difference between data race and race condition does not help me to understand this)</p>\\n\"",
    "reco2": "Can Synchronized Methods Have Race Conditions? [Example]",
    "reco3": "Cannot force a simple &#39;race condition&#39; when extending Thread  only when using ExecutorService",
    "reco1": "Java data race example using counter"
  },
  {
    "index": 111269,
    "votes": 5,
    "tags": [
      "java",
      "multithreading"
    ],
    "timestamp": 1419723414,
    "question": "Why Once a thread has been started  it can never be started again in java",
    "answers": 3,
    "content": "<p>I know that \\Once a thread has been started  it can never be started again\\\". <br>\\nBut I want to know why? <br>\\nWhat's the wrong if it is allowed to start again later in another time? <br>\\nWhy  the only time you can start a thread is when it is in the NEW state? Why it can't be also after DEAD at least?<br></p>\\n\\n<pre><code>public class ThreadDemo {\\n\\n    public static void main(String[] args) {\\n\\n        Thread thread = new Thread(new MyRunnable());\\n        thread.start();\\n        thread.start(); // java.lang.IllegalThreadStateException\\n\\n    }\\n\\n}\\n\\nclass MyRunnable implements Runnable{\\n\\n    @Override\\n    public void run() {\\n\\n        System.out.println(\\\"run().Thread.currentThread().getName() : \\\" + Thread.currentThread().getName());\\n\\n    }\\n}\\n</code></pre>\\n\\n<p>Note : I have gone through these <a href=\\\"http://stackoverflow.com/questions/2663426/why-cant-we-call-start-method-twice-on-a-same-instance-of-the-thread-object\\\">posts</a>. But my question is much more specific and descriptive.</p>\\n\\n<p>Here  please note that I want to know this mainly to understand the threads internal functionalities and how the related aspects like GC works with thread states.</p>\\n\"",
    "reco2": "Java multithreading difference between run() and start()",
    "reco3": "What happens when creating a Thread instance  Java",
    "reco1": "How can thread already be started?"
  },
  {
    "index": 139584,
    "votes": 5,
    "tags": [
      "java",
      "multithreading"
    ],
    "timestamp": 1419371459,
    "question": "Multithreading summing large number of values atomically",
    "answers": 2,
    "content": "<p>I am developing an application where we have large number of threads and have to add 100's of values atomically. I am using <code>AtomicLong</code> which work well but still need to improve the performance. Is there something which offers better performance then AtomicLong?</p>\\n",
    "reco2": "Improving performance by making own Coordinate class instead of using Point2D",
    "reco3": "How to atomically set the value of the file attribute in java?",
    "reco1": "Upper limit for active threads in JVM"
  },
  {
    "index": 184032,
    "votes": 5,
    "tags": [
      "java",
      "multithreading"
    ],
    "timestamp": 1409397141,
    "question": "Why is CopyOnWriteArrayList safe?",
    "answers": 1,
    "content": "<p>Say I have an array <strong>[a  b  c  d]</strong></p>\\n\\n<p>Thread <strong>A</strong> wants to add a new element <strong>e</strong> to the set. <a href=\\http://docs.oracle.com/javase/8/docs/api/java/util/concurrent/CopyOnWriteArrayList.html\\\" rel=\\\"nofollow\\\"><code>CopyOnWriteArrayList</code></a> creates new array  copies all values from the old array  adds new element <strong>e</strong> and then updates the reference to the new array with element <strong>e</strong> in it.</p>\\n\\n<p>While thread <strong>A</strong> copies values  thread <strong>B</strong> also wants to add a new element <strong>f</strong>. So it copies all values without <strong>e</strong> adds <strong>f</strong> and then updates the reference to the array. </p>\\n\\n<p>In this case the array may not have element <strong>e</strong> in it. </p>\\n\\n<p>How thread safety is achieved here?</p>\\n\"",
    "reco2": "Remove spaces in array element and add empty element in that place",
    "reco3": "Split array into different sized chunks",
    "reco1": "Android creates incorrect array list with method Arrays.asList"
  },
  {
    "index": 191802,
    "votes": 5,
    "tags": [
      "java",
      "multithreading"
    ],
    "timestamp": 1408066244,
    "question": "java local variable synchronization",
    "answers": 1,
    "content": "<p>I have problem with following java code  this program always give \\KKBB\\\" as the output (so it seems like synchronization works )  So i am unable to understand since i is a local variable why synchronization is working here?</p>\\n\\n<pre><code>class Test implements Runnable {\\n    public void run() {\\n        Integer i=10;\\n        synchronized(i)\\n        {\\n            try {\\n                System.out.print(Thread.currentThread().getName());\\n                Thread.sleep(1200);\\n                System.out.print(Thread.currentThread().getName());\\n            } catch (InterruptedException e) {\\n            }\\n        }\\n    }\\n\\n    public static void main(String[] args) {\\n        new Thread(new Test()  \\\"K\\\").start();\\n        new Thread(new Test()  \\\"B\\\").start();\\n    }\\n}\\n</code></pre>\\n\\n<p>I heard that since local variables have different copies for each methods  so synchronization won't work  please help me  to understand  thanks</p>\\n\"",
    "reco2": "My java code does not synchronize",
    "reco3": "Synchronization: What is wrong in my code?",
    "reco1": "Synchronizing on a static object"
  },
  {
    "index": 17454,
    "votes": 4,
    "tags": [
      "java",
      "multithreading"
    ],
    "timestamp": 1402302786,
    "question": "End of constructor as happens - before relation in Java",
    "answers": 2,
    "content": "<p>Do I understand right that end of constructor is not a happens - before relation in Java? Is it possible  that code below with threads A and B not been synchronized somehow could throw a NullPointerException ?</p>\\n\\n<pre><code>// Shared reference declaration\\npublic MyClass val;\\n\\n// Class declaration\\npublic class MyClass {\\n    public Object object;\\n    public MyClass() {\\n        object = new Object();\\n    }\\n}\\n\\n// Using in thread A\\nMyClass loc = new MyClass();\\nval = loc;\\n\\n// Using in thread B\\nif(val != null) {\\n    val.object.hashCode(); // IMO could throw NPE\\n}\\n</code></pre>\\n",
    "reco2": "what does it mean when we say synchronized(instance field)..?",
    "reco3": "questions regarding multi threading",
    "reco1": "Java basic synchronized threads"
  },
  {
    "index": 198880,
    "votes": 5,
    "tags": [
      "java",
      "mysql"
    ],
    "timestamp": 1407157690,
    "question": "Mysql datetime becomes 0000-00-00 00:00:00 in mysql version 5.6",
    "answers": 1,
    "content": "<p>We have a java-based program containing some hundred thousands lines of code that has worked perfectly the past 8-9 years before and up to mysql 5.5.\\nA customer has installed mysql 5.6.17 and now we face a big problem: Datetime values becomes 0000-00-00 00:00:00\\nHere is one of the tables: As you can see  the default is Null:</p>\\n\\n<pre><code>+-------+-------------+------+-----+---------+----------------+\\n| Field | Type        | Null | Key | Default | Extra          |\\n+-------+-------------+------+-----+---------+----------------+\\n| Id    | int(11)     | NO   | PRI | NULL    | auto_increment |\\n| Key1  | varchar(10) | NO   | MUL | NULL    |                |\\n| Key2  | varchar(25) | NO   |     | NULL    |                |\\n| Date  | datetime    | YES  |     | NULL    |                |\\n| Value | text        | NO   |     | NULL    |                |\\n</code></pre>\\n\\n<p>And we insert like this through mysql-connector in the java-code:</p>\\n\\n<pre><code>String sql = \\INSERT INTO DATA_SUNDRYMATRIX (Key1  Key2  Date  Value) VALUES(? ? ? ?)\\\";\\nPreparedStatement p = c.prepareStatement(sql Statement.RETURN_GENERATED_KEYS);\\np.setString(1  i.getKey1());\\np.setString(2  i.getKey2());\\np.setTimestamp(3  i.getDate()==null?null:new Timestamp(i.getDate().getTime()));\\np.setString(4  i.getValue());\\np.executeUpdate();\\n</code></pre>\\n\\n<p>I can take a system out println on the Preparedstatement to see the sql before executeupdate and it looks like this:</p>\\n\\n<pre><code>com.mysql.jdbc.ServerPreparedStatement[1] - INSERT INTO DATA_SUNDRYMATRIX (Key1  Key2  Date  Value) VALUES('TEST2' '' '2014-08-04 14:46:15' '')\\n</code></pre>\\n\\n<p>But the result is still '0000-00-00 00:00:00 in the table. Why is that??\\nThe really strange thing is that if I copy/paste the insert query to the mysql console  the datetime value is correctly set.\\nI have tried upgrading to mysql-connector-java-5.1.31-bin.jar with no luck.\\nSELECT @@sql_mode; gives NO_ENGINE_SUBSTITUTION\\nAlas  we cannot set it to strict mode due to a huge number of legacy tables and code.\\nI don't think ?zeroDateTimeBehavior=convertToNull can help  as we don't want null-values  we want the actual values  and they somehow become converted to 0000-00-00 even though NULL is the default for the table.. (By the way  the same happens for updates) What on earth is wrong in this mysql-setup?</p>\\n\\n<p>EDIT:\\nI have some more info. I have now extended my code with the following:</p>\\n\\n<pre><code>System.out.println(p);\\np.executeUpdate();\\nSQLWarning warning = p.getWarnings();\\nwhile (warning != null){\\n    System.out.println(\\\"ToString(): \\\"+warning.toString());\\n    System.out.println(\\\"ErrorCode: \\\"+warning.getErrorCode());\\n    System.out.println(\\\"LocalizedMessage: \\\"+warning.getLocalizedMessage());\\n    System.out.println(\\\"State: \\\"+warning.getSQLState());\\n    warning = warning.getNextWarning();\\n}\\n</code></pre>\\n\\n<p>The output is:</p>\\n\\n<pre><code>com.mysql.jdbc.ServerPreparedStatement[1] - INSERT INTO DATA_SUNDRYMATRIX (Key1  Key2  Date  Value) VALUES('TEST2' '' '2014-08-04 15:35:02' '')\\nToString(): java.sql.SQLWarning: Data truncated for column 'Date' at row 1\\nErrorCode: 1265\\nLocalizedMessage: Data truncated for column 'Date' at row 1\\nState: 01000\\n</code></pre>\\n\\n<p>So I actually get a data truncation warning  even though I use preparedstatements setTimeStamp correctly (as of all the other mysql versions we have tried) and the sql seems ok when printing the PreparedStatement object before executing it. Why then the reason for the data truncation?</p>\\n\\n<p>EDIT#2\\nI was told to try setDate instead of setTimestamp to see if that gives the same error. It does not  but I cannot use setDate since I then don't get the time component of the DATETIME  but only the date. \\nAs I said  the System.out.println of the prepared PreparedStatement gives \\\"INSERT INTO DATA_SUNDRYMATRIX (Key1  Key2  Date  Value) VALUES('TEST2' '' '2014-08-04 15:35:02' '')\\\" which is valid sql and works without warnings and truncations when copying it to the mysql console. I have now also tried this sql directly by the following code:</p>\\n\\n<pre><code>String sql = \\\"INSERT INTO DATA_SUNDRYMATRIX (Key1  Key2  Date  Value) VALUES('TEST2' '' '2014-08-04 15:35:02' '')\\\";\\nPreparedStatement p = c.prepareStatement(sql Statement.RETURN_GENERATED_KEYS);\\np.executeUpdate();\\n</code></pre>\\n\\n<p>This also gives correct result with no warnings and no truncations. It is only when I use setTimestamp on my PreparedStatement that the truncation occurs. I have tried with both old and new versions of the jconnector  3.1.10  5.1.18 and 5.1.31. All versions work ok with my old mysql-versions  and produce this peculiar bug in mysql 5.6.17.</p>\\n\\n<p>EDIT#3\\nI noticed that setTimestamp(1  new Timestamp(0)); gave no truncation  but the correct date for january 1970. I therefore made some litte testcode:</p>\\n\\n<pre><code>//CREATE TABLE `test` (Id BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY  `Test` DATETIME NULL DEFAULT NULL);\\nString sql = \\\"INSERT INTO Test (Id  Test) VALUES (? ?)\\\";\\nPreparedStatement p = c.prepareStatement(sql Statement.RETURN_GENERATED_KEYS);\\nlong current = System.currentTimeMillis();\\nfor (long t = 0; t &lt; current; t += (long)100000000){\\n    p.setLong(1 t);\\n    p.setTimestamp(2  new Timestamp(t));\\n    p.executeUpdate();\\n}\\np.close();\\np = c.prepareStatement(sql Statement.RETURN_GENERATED_KEYS);\\np.setLong(1 current);\\np.setTimestamp(2  new Timestamp(current));\\np.executeUpdate();\\np.close();\\n</code></pre>\\n\\n<p>This gives only one incorrect result  the last one. SELECT * FROM test gives the following last rows:</p>\\n\\n<pre><code>| Id            | Test                |\\n+---------------+---------------------+\\n....\\n| 1407000000000 | 2014-08-02 19:20:00 |\\n| 1407100000000 | 2014-08-03 23:06:40 |\\n| 1407200000000 | 2014-08-05 02:53:20 |\\n| 1407224107714 | 0000-00-00 00:00:00 |\\n</code></pre>\\n\\n<p>EDIT#4\\nIt seems that there is a bug that if there exists sub-second precision in the timestamp when setting setTimestamp  then instead of truncating the nanoseconds  the whole datetime gets destroyed. It seems to work ok if I do the following:</p>\\n\\n<pre><code>p.setTimestamp(2  new Timestamp(current/1000*1000));\\n</code></pre>\\n\\n<p>I will then get the result</p>\\n\\n<pre><code>| 1407225888000 | 2014-08-05 10:04:48 |\\n</code></pre>\\n\\n<p>I will probably write up this as a solution soon. But I will have to fix a lot of setTimestamp-values in our code. Can anyone confirm if this is still a bug in mysql databases after 5.6.17?</p>\\n\\n<p>EDIT#5 (SOLUTION)\\nTheConstructors suggestion of useServerPrepStmts=false solves the issue! And is a much better solution that my own /1000*1000 -solution that I found  as I only have to change the connection String instead of every setTimestamp-call (ok  I have allready done this the last hour  but nice to have the 'real' solution too ;-) )</p>\\n\"",
    "reco2": "Does java handle packets differently on ubuntu vs windows",
    "reco3": "Calendar can not set hour correctly",
    "reco1": "how to format date and time from JDateChooser to mysql datetime column"
  },
  {
    "index": 142393,
    "votes": 3,
    "tags": [
      "java",
      "mysql"
    ],
    "timestamp": 1415197132,
    "question": "How to avoid explicitly writing MySQL database password in your code",
    "answers": 4,
    "content": "<p>I'm building some dynamic website that will query the MySQL database from Apache Tomcat interface. Although the database stores all the user information with encrypted password  it seems I still need to explicitly write the password (root or admin account) in the java code to authenticate the users. I feel this is not very safe. What's the correct way to do that?</p>\\n\\n<p>Thank you!                 </p>\\n",
    "reco2": "Database &#39;mysql&#39; in the server mysql in different OS",
    "reco3": "Where should I keep the credentials of my database?",
    "reco1": "multiple markers at this line. - syntax error on token"
  },
  {
    "index": 203062,
    "votes": 3,
    "tags": [
      "java",
      "mysql"
    ],
    "timestamp": 1406472461,
    "question": "Cannot use database when more than 2 web apps connect.. Hibernate",
    "answers": 1,
    "content": "<p>My application will stop working with the following config file.</p>\\n\\n<p>My config file:</p>\\n\\n<pre><code>&lt;property name=\\hibernate.c4p1.min_size\\\"&gt;3&lt;/property&gt;\\n&lt;property name=\\\"hibernate.c4p1.max_size\\\"&gt;10&lt;/property&gt;\\n&lt;property name=\\\"hibernate.c4p1.acquire_increment\\\"&gt;1&lt;/property&gt;\\n&lt;property name=\\\"hibernate.c4p1.timeout\\\"&gt;300&lt;/property&gt;\\n&lt;property name=\\\"hibernate.c4p1.idle_test_period\\\"&gt;3000&lt;/property&gt;\\n&lt;property name=\\\"hbm2ddl.auto\\\"&gt;update&lt;/property&gt;\\n&lt;property name=\\\"dynamic-update\\\"&gt;true&lt;/property&gt;\\n</code></pre>\\n\\n<p>Log:  Our DB servers also have a maximum simultaneous connections they allow. e.g. the server says \\\"50 simultaneous connections is ok\\\" and you connect with 6 apps and each wants 10 you run into trouble. </p>\\n\\n<pre><code>Caused by: com.mysql.jdbc.exceptions.jdbc4.CommunicationsException: The last packet successfully received from the server was 155 938 milliseconds ago.  The last packet sent successfully to the server was 155 938 milliseconds ago. is longer than the server configured value of 'wait_timeout'. You should consider either expiring and/or testing connection validity before use in your application  increasing the server configured values for client timeouts  or using the Connector/J connection property 'autoReconnect=true' to avoid this problem.\\nat sun.reflect.GeneratedConstructorAccessor245.newInstance(Unknown Source)\\nat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\\nat java.lang.reflect.Constructor.newInstance(Unknown Source)\\nat com.mysql.jdbc.Util.handleNewInstance(Util.java:411)\\nat com.mysql.jdbc.SQLError.createCommunicationsException(SQLError.java:1117)\\nat com.mysql.jdbc.MysqlIO.send(MysqlIO.java:3829)\\nat com.mysql.jdbc.MysqlIO.sendCommand(MysqlIO.java:2449)\\nat com.mysql.jdbc.MysqlIO.sqlQueryDirect(MysqlIO.java:2629)\\n    at com.mysql.jdbc.ConnectionImpl.execSQL(ConnectionImpl.java:2713)\\nat com.mysql.jdbc.ConnectionImpl.setAutoCommit(ConnectionImpl.java:5060)\\nat             com.mchange.v2.c3p0.impl.NewProxyConnection.setAutoCommit(NewProxyConnection.java:881)\\nat org.hibernate.connection.C3P0ConnectionProvider.getConnection(C3P0ConnectionProvider.java:37)\\nat org.hibernate.jdbc.AbstractBatcher.openConnection(AbstractBatcher.java:424)\\n... 49 more\\n</code></pre>\\n\"",
    "reco2": "MySQL connections not closing",
    "reco3": "What determines number of simultaneous connections",
    "reco1": "Connection pool in tomcat 7"
  },
  {
    "index": 919,
    "votes": 2,
    "tags": [
      "java",
      "mysql"
    ],
    "timestamp": 1419827862,
    "question": "How to get values from resultset which satisfies some condition and display that in table",
    "answers": 1,
    "content": "<p>I have a method which displays the values in a table where I have the latest time.The code for this method is:</p>\\n\\n<p><div class=\\snippet\\\" data-lang=\\\"js\\\" data-hide=\\\"false\\\">\\r\\n<div class=\\\"snippet-code\\\">\\r\\n<pre class=\\\"snippet-code-js lang-js prettyprint-override\\\"><code>public String[][] beamline_Status() {\\r\\n  int i = 0;\\r\\n  try\\r\\n\\r\\n  {\\r\\n    con = getConnection();\\r\\n    stmt = con.createStatement();\\r\\n\\r\\n    String sql = \\\"SELECT TOP 1 c.logtime  a.BL1_data_SS_ST a.BL2_data_SS_ST a.BL3_data_SS_ST a.BL4_data_SS_ST a.BL5_data_SS_ST a.BL6_data_SS_ST a.BL7_data_SS_ST a.BL8_data_SS_ST a.BL9_data_SS_ST a.BL10_data_SS_ST a.BL11_data_SS_ST  a.BL12_data_SS_ST a.BL13_data_SS_ST a.BL14_data_SS_ST a.BL15_data_SS_ST a.BL16_data_SS_ST a.BL17_data_SS_ST a.BL18_data_SS_ST a.BL19_data_SS_ST a.BL20_data_SS_ST a.BL21_data_SS_ST a.BL22_data_SS_ST a.BL23_data_SS_ST a.BL24_data_SS_ST a.BL25_data_SS_ST a.BL26_data_SS_ST a.BL27_data_SS_ST b.st1_prmt_status_p45 c.beam_current c.beam_energy from INDUS2_BLFE.dbo.main_BLFE_status a inner join INDUS2_MSIS.dbo.main_MSIS_status b on a.logtime=b.logtime inner join INDUS2_BDS.dbo.DCCT c on b.logtime=c.logtime ORDER BY c.logtime DESC \\\";\\r\\n\\r\\n    stmt.executeQuery(sql);\\r\\n    rs = stmt.getResultSet();\\r\\n\\r\\n    while (rs.next()) {\\r\\n\\r\\n      for (int j = 0; j &lt; 31; j++) {\\r\\n        a[i][j] = rs.getString(j + 1);\\r\\n\\r\\n      }\\r\\n\\r\\n\\r\\n    }\\r\\n  } catch (Exception e) {\\r\\nSystem.out.println(\\\"\\\\nException in  Bean \\\" +e.getMessage());\\r\\n  } finally {\\r\\n    closeConnection(stmt  rs  con);\\r\\n  }\\r\\n\\r\\n  return a;\\r\\n\\r\\n\\r\\n\\r\\n}</code></pre>\\r\\n</div>\\r\\n</div>\\r\\n</p>\\n\\n<p>This method returns correct result.</p>\\n\\n<p>Now I have another method from which I want to retrieve only those column values where 1 is present and three other columns from the resultset which shows the time and beam_energy and beam_current values and display those values in a table with there respective column name.The code for the method is:</p>\\n\\n<p><div class=\\\"snippet\\\" data-lang=\\\"js\\\" data-hide=\\\"false\\\">\\r\\n<div class=\\\"snippet-code\\\">\\r\\n<pre class=\\\"snippet-code-js lang-js prettyprint-override\\\"><code>public List &lt; Integer &gt; beam_CurrentStatus() throws SQLException {\\r\\n\\r\\n  try\\r\\n\\r\\n  {\\r\\n    con = getConnection();\\r\\n    stmt = con.createStatement();\\r\\n\\r\\n    String sql = \\\"SELECT TOP 1 c.logtime  a.BL1_data_SS_ST a.BL2_data_SS_ST a.BL3_data_SS_ST a.BL4_data_SS_ST a.BL5_data_SS_ST a.BL6_data_SS_ST a.BL7_data_SS_ST a.BL8_data_SS_ST a.BL9_data_SS_ST a.BL10_data_SS_ST a.BL11_data_SS_ST  a.BL12_data_SS_ST a.BL13_data_SS_ST a.BL14_data_SS_ST a.BL15_data_SS_ST a.BL16_data_SS_ST a.BL17_data_SS_ST a.BL18_data_SS_ST a.BL19_data_SS_ST a.BL20_data_SS_ST a.BL21_data_SS_ST a.BL22_data_SS_ST a.BL23_data_SS_ST a.BL24_data_SS_ST a.BL25_data_SS_ST a.BL26_data_SS_ST a.BL27_data_SS_ST b.st1_prmt_status_p45 c.beam_current c.beam_energy from INDUS2_BLFE.dbo.main_BLFE_status a inner join INDUS2_MSIS.dbo.main_MSIS_status b on a.logtime=b.logtime inner join INDUS2_BDS.dbo.DCCT c on b.logtime=c.logtime ORDER BY c.logtime DESC \\\";\\r\\n\\r\\n    stmt.executeQuery(sql);\\r\\n    rs = stmt.getResultSet();\\r\\n\\r\\n    while (rs.next()) {\\r\\n\\r\\n\\r\\n      for (int j = 2; j &lt; 30; j++) {\\r\\n        if (rs.getInt(j) == 1)\\r\\n\\r\\n          al.add(rs.getInt(j));\\r\\n      }\\r\\n\\r\\n\\r\\n    }\\r\\n  } catch (Exception e) {\\r\\n    System.out.println(\\\"\\\\nException in  Bean \\\" + e.getMessage());\\r\\n  } finally {\\r\\n   closeConnection(stmt  rs  con);\\r\\n  }\\r\\n\\r\\n\\r\\n  return al;\\r\\n\\r\\n\\r\\n}</code></pre>\\r\\n</div>\\r\\n</div>\\r\\n</p>\\n\\n<p>This method returns only 1 as many times 1 is present in table   the output is</p>\\n\\n<blockquote>\\n  <p>[1  1  1  1  1  1] </p>\\n</blockquote>\\n\\n<p>But I want this to be shown along with column name in tabular format.How to do that?</p>\\n\"",
    "reco2": "How to add column with values in JTable?",
    "reco3": "Comparison of different values from ResultSet to database SQL Query",
    "reco1": "How to get all values in one column in mysql"
  },
  {
    "index": 4732,
    "votes": 2,
    "tags": [
      "java",
      "mysql"
    ],
    "timestamp": 1404193248,
    "question": "Displaying japanese characters from SQLException.getMessage()",
    "answers": 0,
    "content": "<p>I have a simple class which displays records having japanese characters from the database.\\nThe character encoding for class file is UTF-8. I have also altered database to use charset UTF-8.</p>\\n\\n<p>There is no problem displaying the records having japanese characters on console. No problem with hard coded too.</p>\\n\\n<p>But when I try to enter the records with same userid (Primary key in table) as one of the old record. It throws SQLException that shows duplicate entry error message.But It shows junk characters. Like : </p>\\n\\n<pre><code>Duplicate entry '\u30e9\u30b1\u30b7\u30e5\uff11\uff12\uff13\uff14\uff15' for key 1\\n</code></pre>\\n\\n<p>So what is the problem exactly. Why records are displayed correctly but not SQLException.getMessage();</p>\\n",
    "reco2": "xmlhttp.setRequestHeader not working",
    "reco3": "UTF-8 Encoding ; Only some Japanese characters are not getting converted",
    "reco1": "parse japanese in java"
  },
  {
    "index": 17203,
    "votes": 2,
    "tags": [
      "java",
      "mysql"
    ],
    "timestamp": 1402333678,
    "question": "Java stuck waiting for slow MySQL query that has finished executing server side  no error thrown",
    "answers": 2,
    "content": "<p>I am querying a remote MySQL server with a java program. The queries are select statements that may take anywhere from a minute to half an hour. The size of the data returned is always the same (I am counting rows).</p>\\n\\n<p>The program usually executes without any problems  but sometimes it gets stuck at one of the longer queries. It doesn't abort (java program is still \\running\\\") and there is no error thrown. When I check the MySQL server process list  the query is not listed  and the error log is empty as well  so I assume it has finished executing.</p>\\n\\n<p>I have a print directly before and after every query  so i know for certain that the program gets stuck with the query.</p>\\n\\n<p>I thought it was a connection time out problem  so I set autoreconnect to true  but it didn't help. I am pretty clueless about how to solve this since there is no error thrown.</p>\\n\\n<p>Java code looks like this:</p>\\n\\n<pre><code>Class.forName(\\\"com.mysql.jdbc.Driver\\\");\\nDBConnection=DriverManager.getConnection(DBConnectionURL);\\nDBStatement=DBConnection.createStatement();\\n\\n// being of loop\\nSystem.out.println(\\\"starting query \\\" +selectQuery);\\nqA=DBStatement.executeQuery(selectQuery);\\nSystem.out.println(\\\"finished query \\\" +selectQuery);\\n// do sth with query\\n// end of loop\\n</code></pre>\\n\\n<p>If the program gets stuck  the last output is always a <code>starting query [..]</code></p>\\n\"",
    "reco2": "Error in database query",
    "reco3": "Establishing a communication between Java program and MySQL database",
    "reco1": "Have Java variables at MySQL query limit clause"
  },
  {
    "index": 34685,
    "votes": 2,
    "tags": [
      "java",
      "mysql"
    ],
    "timestamp": 1417780704,
    "question": "Gregorian Calendar 12 hour 24 hour confusion",
    "answers": 2,
    "content": "<p>I am using GregorianCalendar for getting time value.</p>\\n\\n<pre><code>public class Tester {\\n\\n    public static void main(String[] args) {\\n        Calendar cal = GregorianCalendar.getInstance();\\n        cal.set(Calendar.HOUR  12);\\n        cal.set(Calendar.MINUTE  0);\\n        cal.set(Calendar.SECOND  0);\\n        cal.set(Calendar.MILLISECOND  0);\\n        cal.set(Calendar.AM_PM  Calendar.AM);\\n        System.out.println(cal.getTimeInMillis() + \\ \\\" + cal);\\n    }\\n}\\n</code></pre>\\n\\n<p>When I use the cal.getTimeInMillis() in an mysql query  it interprets the time as 12 noon. Is my understanding correct? Or how to set it right?</p>\\n\"",
    "reco2": "Exception:- Caused by: com.mysql.jdbc.exceptions.jdbc4.CommunicationsException: Communications link failure",
    "reco3": "i want to assign value of count query to an integer variable",
    "reco1": "Why GregorianCalendar.getTimeInMillis() changes the value of the instance?"
  },
  {
    "index": 42351,
    "votes": 2,
    "tags": [
      "java",
      "mysql"
    ],
    "timestamp": 1398770234,
    "question": "MySQL exception com.mysql.jdbc.exceptions.jdbc4.CommunicationsException: Communications link failure",
    "answers": 2,
    "content": "<p>`</p>\\n\\n<pre><code>import java.sql.*;\\n\\npublic class Match {\\n    public static void main(String args[]) throws Exception{\\n        DBConnection1 con = new DBConnection1();\\n        DBConnection con1 = new DBConnection();\\n        Connection conn = null conn1=null;\\n        conn = con.getConnection();\\n        conn1 = con1.getConnection();\\n        Statement st = null;\\n        PreparedStatement pst = null;\\n        ResultSet rs = null rs1 = null;\\n        st = conn.createStatement();\\n        String query1 = \\SELECT Name FROM Employee WHERE Name=?\\\";\\n        pst = conn1.prepareStatement(query1);\\n        st.setFetchSize(Integer.MIN_VALUE);\\n        String query = \\\"SELECT name FROM emp\\\";\\n        rs = st.executeQuery(query);\\n        String name = \\\"\\\";\\n        int count = 0;\\n        while(rs.next()){\\n            title = rs.getString(\\\"name\\\");\\n            pst.setString(1  title);\\n            rs1 = pst.executeQuery();\\n            while(rs1.next()){\\n                    count++;\\n                    if(count % 100 == 0)\\n                        System.out.println(count);\\n            }\\n        }\\n        System.out.println(count);\\n    }\\n}\\n</code></pre>\\n\\n<p>`</p>\\n\\n<p>I am selecting value from the very large database based on some value from other database . I am running my select query in a while loop. After running my java code after getting many result   i am getting </p>\\n\\n<pre><code>com.mysql.jdbc.exceptions.jdbc4.CommunicationsException:Communications link failure exception. \\n</code></pre>\\n\\n<p>I have no idea why this is happening. If you guys have any idea please help</p>\\n\\n<p>I already read the old questions based on this exception but none of them helps.</p>\\n\"",
    "reco2": "Spring / Hibernate : org.hibernate.StaleStateException: Batch update returned unexpected",
    "reco3": "Java multiple table query",
    "reco1": "dateadd function is not working in Hibbernate"
  },
  {
    "index": 57287,
    "votes": 2,
    "tags": [
      "java",
      "mysql"
    ],
    "timestamp": 1397116130,
    "question": "Check if number is already in field before concatenating?",
    "answers": 6,
    "content": "<p>I am writing a crawler that scans many urls and then puts all the words found in each webpage into a table. In this same table the <code>ID</code> of the url is stored. If the word is repeated in another page  the <code>ID</code> of the url the word was found on is concatenated with a comma separating them. So if a word appears on multiple pages  all the concatenated <code>ID</code> numbers in the field might look like:</p>\\n\\n<pre><code>2 3 6 8 9\\n</code></pre>\\n\\n<p>At the moment  if the number appears multiple times on the same page  the <code>ID</code> number will be added each time the number is found so the <code>URLID</code> field might end up looking like:</p>\\n\\n<pre><code>2 2 2 4 7 8 8 8 8 8 9 9\\n</code></pre>\\n\\n<p>Using <code>Java</code> is there a way I get it to check if the number exists in the field already and only add it if it is not already there? I have looked through the api but cannot seem to find a suitable way to do this. Any ideas?</p>\\n\\n<hr>\\n\\n<p>Addition: </p>\\n\\n<pre><code>public void updateWordTable( String[] array  int urlid ) throws SQLException  IOException {\\n    Statement stat = connection.createStatement();\\n    String wordQuery;\\n    String query;\\n\\n\\n    for (String item : array) {\\n        if(item.matches(\\[A-Za-z0-9]+\\\")){\\n            wordQuery = \\\"SELECT * FROM word WHERE word = '\\\"+item+\\\"'\\\";\\n            ResultSet rs = stat.executeQuery(wordQuery);\\n            if(!rs.next()){\\n                query = \\\"INSERT INTO word VALUES ('\\\"+item+\\\"' \\\"+urlid+\\\")\\\";\\n                stat.executeUpdate( query );\\n            }\\n            else {\\n                //query = \\\"UPDATE word SET urlid = concat(urlid  ' \\\"+urlid+\\\"') WHERE word = '\\\"+item+\\\"' \\\";\\n                //query = \\\"UPDATE word SET urlid = CASE WHEN FIND_IN_SET( '\\\"+urlid+\\\"'  urlid ) &gt; 0 THEN urlid ELSE CONCAT( urlid  ' '  '\\\"+urlid+\\\"' )END WHERE word = '\\\"+item+\\\"' \\\";\\n\\n                String query2 = \\\"UPDATE word SET urlid = CASE WHEN FIND_IN_SET( ?  urlid ) &gt; 0 THEN urlid ELSE CONCAT( urlid  ' '  ? )END WHERE word = ? \\\";\\n\\n                PreparedStatement pst = connection.prepareStatement( query2 );\\n\\n                pst.setLong( 1  urlid );\\n                pst.setLong( 2  urlid );\\n                pst.setString( 3  item);\\n\\n                int result = pst.executeUpdate();\\n\\n                //stat.executeUpdate( query2 );\\n            }\\n        }\\n    }\\n\\n    stat.close();\\n}\\n</code></pre>\\n\"",
    "reco2": "read contents from a file to form sql statement in java",
    "reco3": "How to get the line number  page number of a particular word in a doc docx file using apache poi?",
    "reco1": "Most efficient data structure for searching for a word in text Java"
  },
  {
    "index": 59194,
    "votes": 2,
    "tags": [
      "java",
      "mysql"
    ],
    "timestamp": 1396925474,
    "question": "MySQL Backup (JAVA)",
    "answers": 1,
    "content": "<p>What are the possible reasons why i can't backup my DB using <code>MYSQLDUMP</code>?\\nIn my localhost  i can backup the db but when I use the db in my hosting  there seems to be a problem. Is it possible that my hosting can't backup db? Btw  im using cloudbees in my database. I'm 100% sure that I change all the username  password and the name of the db when using my hosting <code>MySQL</code>. Actually it creates the <code>.sql</code> file but it is empty.</p>\\n\\n<pre><code>String executeCmd = \\C:/xampp/mysql/bin/mysqldump -u \\\" + username\\n                    + \\\" -p\\\" + password + \\\" somedbname\\\" + \\\" -r \\\"\\n                    + \\\"C:/tech-report-db/backup\\\"\\n                    + c.getTimeInMillis() + c.getWeekYear() + \\\".sql\\\";\\n            try {\\n\\n                Process runtimeProcess;\\n\\n                runtimeProcess = Runtime.getRuntime().exec(executeCmd);\\n\\n                int processComplete = runtimeProcess.waitFor();\\n\\n                if (processComplete == 0) {\\n                    System.out.println(\\\"Backup created successfully\\\");\\n                } else {\\n                    System.out.println(\\\"Could not create the backup\\\");\\n                }\\n</code></pre>\\n\\n<hr>\\n\\n<h2>it returns the error \\\"Could not create the backup\\\"</h2>\\n\\n<hr>\\n\"",
    "reco2": "how to backup and restore mysql database from remoteclient to server and vice versa using java?",
    "reco3": "Android Backup Extract Error in CMD",
    "reco1": "CreateProcess error=5  Access is denied while mysql database backup using processbuilder in java"
  },
  {
    "index": 111305,
    "votes": 2,
    "tags": [
      "java",
      "mysql"
    ],
    "timestamp": 1419711867,
    "question": "Java String hashcode as Mysql ID",
    "answers": 3,
    "content": "<p>The scenario is something like this description.</p>\\n\\n<p>I've the typical mysql table for the users storage  currently  the user ID is one integer set as autoincrement. Very much of the API rest interfaces works with the user alias (that's unique) to find the user  then  I'm thinking implement the user ID with the alias.hashcode() (that's one integer) to find diretly for ID every times.</p>\\n\\n<p>Is a good idea implement Mysql ID with one java String hashcode?. Would enhance the performance?</p>\\n",
    "reco2": "How to overwrite the hashcode method that returns a unique hashcode value with its unique entity ID in my defined Java object?",
    "reco3": "How to auto-increment a column in a MySQL table?",
    "reco1": "set and retrieve auto increment value from mysql to java (set in jlabel)"
  },
  {
    "index": 116219,
    "votes": 2,
    "tags": [
      "java",
      "mysql"
    ],
    "timestamp": 1390692637,
    "question": "Syntax error in mysql count(*)",
    "answers": 2,
    "content": "<p>I have anoying problem with my program and I don't know what is wrong. I've problem with code :</p>\\n\\n<pre><code> public boolean checkGroup(String groupname){\\n        connect();\\n        createtableuser();\\n        int count = 0;\\n        String query = \\SELECT COUNT(*) FROM `groups` WHERE group = '\\\"+groupname+\\\"';\\\";\\n        System.out.println(query);\\n        try{\\n            statement = connection.createStatement();\\n            resultSet = statement.executeQuery(query);\\n            resultSet.next();\\n            count = resultSet.getInt(1);\\n        } catch(SQLException e){\\n            e.printStackTrace(System.out);\\n            return false;\\n        }\\n        if(count == 1){\\n            return true;\\n        }\\n        else{\\n            return false;\\n        }\\n\\n    }\\n</code></pre>\\n\\n<p>When I compile i get this error : </p>\\n\\n<pre><code>com.mysql.jdbc.exceptions.jdbc4.MySQLSyntaxErrorException: You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'group='user2'' at line 1\\n    at sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\\n    at sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\\n    at sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\\n    at java.lang.reflect.Constructor.newInstance(Unknown Source)\\n    at com.mysql.jdbc.Util.handleNewInstance(Util.java:411)\\n    at com.mysql.jdbc.Util.getInstance(Util.java:386)\\n    at com.mysql.jdbc.SQLError.createSQLException(SQLError.java:1054)\\n    at com.mysql.jdbc.MysqlIO.checkErrorPacket(MysqlIO.java:4237)\\n    at com.mysql.jdbc.MysqlIO.checkErrorPacket(MysqlIO.java:4169)\\n    at com.mysql.jdbc.MysqlIO.sendCommand(MysqlIO.java:2617)\\n    at com.mysql.jdbc.MysqlIO.sqlQueryDirect(MysqlIO.java:2778)\\n    at com.mysql.jdbc.ConnectionImpl.execSQL(ConnectionImpl.java:2819)\\n    at com.mysql.jdbc.ConnectionImpl.execSQL(ConnectionImpl.java:2768)\\n    at com.mysql.jdbc.StatementImpl.executeQuery(StatementImpl.java:1651)\\n    at server.Database.checkGroup(Database.java:135)\\n    at server.AddUser$2.actionPerformed(AddUser.java:90)\\n    at javax.swing.AbstractButton.fireActionPerformed(Unknown Source)\\n    at javax.swing.AbstractButton$Handler.actionPerformed(Unknown Source)\\n    at javax.swing.DefaultButtonModel.fireActionPerformed(Unknown Source)\\n    at javax.swing.DefaultButtonModel.setPressed(Unknown Source)\\n    at javax.swing.plaf.basic.BasicButtonListener.mouseReleased(Unknown Source)\\n    at java.awt.Component.processMouseEvent(Unknown Source)\\n    at javax.swing.JComponent.processMouseEvent(Unknown Source)\\n    at java.awt.Component.processEvent(Unknown Source)\\n    at java.awt.Container.processEvent(Unknown Source)\\n    at java.awt.Component.dispatchEventImpl(Unknown Source)\\n    at java.awt.Container.dispatchEventImpl(Unknown Source)\\n    at java.awt.Component.dispatchEvent(Unknown Source)\\n    at java.awt.LightweightDispatcher.retargetMouseEvent(Unknown Source)\\n    at java.awt.LightweightDispatcher.processMouseEvent(Unknown Source)\\n    at java.awt.LightweightDispatcher.dispatchEvent(Unknown Source)\\n    at java.awt.Container.dispatchEventImpl(Unknown Source)\\n    at java.awt.Window.dispatchEventImpl(Unknown Source)\\n    at java.awt.Component.dispatchEvent(Unknown Source)\\n    at java.awt.EventQueue.dispatchEventImpl(Unknown Source)\\n    at java.awt.EventQueue.access$200(Unknown Source)\\n    at java.awt.EventQueue$3.run(Unknown Source)\\n    at java.awt.EventQueue$3.run(Unknown Source)\\n    at java.security.AccessController.doPrivileged(Native Method)\\n    at java.security.ProtectionDomain$1.doIntersectionPrivilege(Unknown Source)\\n    at java.security.ProtectionDomain$1.doIntersectionPrivilege(Unknown Source)\\n    at java.awt.EventQueue$4.run(Unknown Source)\\n    at java.awt.EventQueue$4.run(Unknown Source)\\n    at java.security.AccessController.doPrivileged(Native Method)\\n    at java.security.ProtectionDomain$1.doIntersectionPrivilege(Unknown Source)\\n    at java.awt.EventQueue.dispatchEvent(Unknown Source)\\n    at java.awt.EventDispatchThread.pumpOneEventForFilters(Unknown Source)\\n    at java.awt.EventDispatchThread.pumpEventsForFilter(Unknown Source)\\n    at java.awt.EventDispatchThread.pumpEventsForHierarchy(Unknown Source)\\n    at java.awt.EventDispatchThread.pumpEvents(Unknown Source)\\n    at java.awt.EventDispatchThread.pumpEvents(Unknown Source)\\n    at java.awt.EventDispatchThread.run(Unknown Source)\\n</code></pre>\\n\\n<p>I don't know what I think about it and where is problem. I please for any help.</p>\\n\\n<p>PS. Sorry for my English</p>\\n\"",
    "reco2": "Too many connection error",
    "reco3": "How to solve an exception java.sql.SQLException: No suitable driver found?",
    "reco1": "Invalid method declaration: &quot;return type required&quot;"
  },
  {
    "index": 117616,
    "votes": 2,
    "tags": [
      "java",
      "mysql"
    ],
    "timestamp": 1390483829,
    "question": "How to execute the other schema stored procedures?",
    "answers": 1,
    "content": "<p>I am working in a java web application project. I have the requirement like  i want to invoke the other schema stored procedure to execute in some other schema. </p>\\n\\n<p>But  when i am trying this approach  it's showing <code>error like the table already exists(contains in SP).</code> I can understand what the issue is  it's calling the stored procedure in same schema itself where the stored procedure was created.</p>\\n\\n<p>Following is the detailed illustration</p>\\n\\n<pre><code> 1. Schema1(Subscription) - Stored procedure created is here\\n 2. Schema2(Subscription1)- Executing the stored procedure here like following\\n\\n    &gt; USE Subscription1;  \\n    &gt; CALL subscription.createcorporatedbproc();\\n</code></pre>\\n\\n<p>Please help me to know about this issue.</p>\\n",
    "reco2": "Invoking stored procedure from other schema to create tables",
    "reco3": "Stored Procedure Returning Null",
    "reco1": "Null value is returned from stored procedure"
  },
  {
    "index": 138837,
    "votes": 2,
    "tags": [
      "java",
      "mysql"
    ],
    "timestamp": 1415580340,
    "question": "Java mysql query (&quot;SELECT * FROM movies&quot; is only returning 1 row",
    "answers": 2,
    "content": "<p>I\ufffdm doing a simple movie-renting application  and this method from the <code>DAO</code> section is supposed to return an array of \\movie\\\" objects  but only returns 1 movie.</p>\\n\\n<p>I checked the database  connection is fine  but only list the first row and nothing else. There are currently 3 movies entries on the database.</p>\\n\\n<pre><code>public ArrayList&lt;Pelicula&gt; obtainMovies () {\\n\\n    ArrayList&lt;Movie&gt; p=new ArrayList&lt;&gt;();\\n    Movie pelic=new Movie();\\n\\n    try{\\n        conn=connect();\\n        String sql=\\\"SELECT * FROM movies\\\";\\n        ps=conn.prepareStatement(sql);\\n        rs=ps.executeQuery();\\n        if(rs.next()){\\n            pelic.setTitle(rs.getString(\\\"title\\\"));\\n            pelic.setGenre(rs.getString(\\\"genre\\\"));\\n            pelic.setRating(rs.getInt(\\\"rating\\\"));\\n            pelic.setRented(rs.getBoolean(\\\"rented\\\"));\\n            p.add(pelic);\\n        }\\n        else {return null;}\\n\\n        return p;\\n    }\\n</code></pre>\\n\"",
    "reco2": "android: How do I check that a movie has done playing?",
    "reco3": "What&#39;s most efficient; creating a new instance or changing a value in an existing one?",
    "reco1": "Creating  controlling  and destroying a Movie in Java"
  },
  {
    "index": 139069,
    "votes": 2,
    "tags": [
      "java",
      "mysql"
    ],
    "timestamp": 1419501561,
    "question": "Client Server chat application in java",
    "answers": 1,
    "content": "<p>I have developed a LAN client server chat application in java .Now my server also establishes a connection with mysql database which i use to store files of any type.Now my problem is i want to retrieve  file from database and be able to transfer that file to the client.Can anyone tell me how can this be done.I know how to retrieve the file from database and i am not understanding how to send it to the client. </p>\\n",
    "reco2": "Connection Pooling in a java chat server",
    "reco3": "Exception: java.io.UTFDataFormatException: Server /Client",
    "reco1": "J2SE Java  is that possible to connect MySql database on other PC in same Connection?"
  },
  {
    "index": 140448,
    "votes": 2,
    "tags": [
      "java",
      "mysql"
    ],
    "timestamp": 1415461835,
    "question": "Creating a Panel of JButtons with values from a SQL table;",
    "answers": 2,
    "content": "<p>What I am trying to do is get the values from a column in my SQL table  specifically a column named SubjectName. Once I have these values I want to create JButtons named for each value in the ResultSet.  My current code connects to my database and as far as I can tell the query to the table also works  however when I attempt to generate and add these buttons to my display the try/catch only returns that my statement failed.  The code causing the problem lies somewhere here:</p>\\n\\n<pre><code>try\\n    (\\n        Statement initializeDisplay = connect.createStatement()\\n    ){\\n\\n    ArrayList&lt;String&gt; buttonList = new ArrayList&lt;String&gt;();\\n    try\\n    {\\n        ResultSet rs = initializeDisplay.executeQuery(\\SELECT SubjectName from subjectpacktable order by SubjectID\\\");\\n        buttonList = new ArrayList&lt;String&gt;();\\n\\n        while(rs.next())\\n        {\\n            buttonList.add(rs.getString(1));\\n        }\\n\\n        ArrayList&lt;JButton&gt; listOfButtons = new ArrayList&lt;JButton&gt;();\\n        for (int i=0; i &lt; 10; i++) \\n        {\\n            String temp2 = rs.getString(l);\\n            JButton button1 = new JButton(temp2);\\n            listOfButtons.add(button1);\\n            l++;\\n        }\\n        l = 0;\\n        while(listOfButtons.get(l) != null)\\n        {\\n            JButton tempButton = listOfButtons.get(l);\\n            AddCardPanel1.add(tempButton);\\n            l++;\\n        }\\n        while(buttonList.get(l) != null)\\n        {\\n            System.out.println(buttonList.get(l));\\n            l++;\\n        }\\n        l = 0;\\n    }\\n    catch(SQLException e1)\\n    {\\n        System.err.println(\\\"Initial Display Failed\\\");\\n    }} catch (SQLException e2) \\n    {\\n        System.err.println(\\\"Initial Display Failed\\\");\\n    }\\n</code></pre>\\n\\n<p>I'm wondering if the problem lies in actually retrieving the values from the table or somewhere else in the code are values not being assigned properly.  Any help is appreciated.</p>\\n\"",
    "reco2": "How to add column with values in JTable?",
    "reco3": "Add values from existing object to JTable?",
    "reco1": "How to select unique column values all from database using select *?"
  },
  {
    "index": 142653,
    "votes": 2,
    "tags": [
      "java",
      "mysql"
    ],
    "timestamp": 1415170535,
    "question": "MySQL loop through every row (big table)",
    "answers": 3,
    "content": "<p>I have a table with <code>ID</code> and <code>name</code>. I want to go through every row of this table. \\nThe<code>ID</code> is a <code>primary key</code> and <code>auto_increment</code>.</p>\\n\\n<p>I can't use(?) a single query to get all rows because the table is huge. \\nI am doing something with every result. I want the possibility to stop this task and continue with it later.</p>\\n\\n<p>I thought I could do something like this:</p>\\n\\n<pre><code>for (int i = 0; i &lt; 90238529; i++) {\\n  System.out.println(\\Current ID :\\\" + i);\\n  query = \\\"SELECT name FROM table_name WHERE id = \\\" + i;\\n  ...\\n}\\n</code></pre>\\n\\n<p>But that does not work because the <code>auto_increment</code> skipped some numbers.</p>\\n\\n<p>As mentioned  I need an option to stop this task in a way that would allow me to start again where I left. Like with the example code above  I know the <code>ID</code> of the current entry and if I want to start it again  I just set <code>int i = X</code>.</p>\\n\"",
    "reco2": "Mysql select and update table at same time",
    "reco3": "How can I ensure I have no gaps in my primary key values  even after deletes?",
    "reco1": "Java multiple table query"
  },
  {
    "index": 11591,
    "votes": 1,
    "tags": [
      "java",
      "mysql"
    ],
    "timestamp": 1403076193,
    "question": "Fetching large value from the database",
    "answers": 1,
    "content": "<p>Sorry for this noob question but I really don't know what to search and how to solve it.I have a table structure like this:</p>\\n\\n<p><img src=\\http://i.stack.imgur.com/DbdUZ.png\\\" alt=\\\"enter image description here\\\"></p>\\n\\n<p>This is only a part of my table.</p>\\n\\n<p><code>budget_cost</code> has <code>1000000000.1</code> literal</p>\\n\\n<p>I tried to fetch the values</p>\\n\\n<pre><code>while( result.next() )\\n{\\n   ProjectBean projectBean = new ProjectBean();\\n   ...\\n   projectBean.setBudgetCost( result.getDouble( \\\"budget_cost\\\" ) );\\n   ...\\n}\\n</code></pre>\\n\\n<p>my model has setter and getter of each variables</p>\\n\\n<pre><code>public class ProjectBean\\n{\\n    ...\\n    private double profitRate;\\n    private double vatRate;\\n    private double fees;\\n    private double budgetCost;\\n    private String dateDeadline;\\n    ...\\n}\\n</code></pre>\\n\\n<p>I tried to print the <code>budgetCost</code> and it prints <code>1.0E9</code></p>\\n\\n<p><strong>I need it to display <code>1000000000.1</code> what am I doing wrong?</strong></p>\\n\"",
    "reco2": "Mysql select and update table at same time",
    "reco3": "How to use getters and setters in two different classes",
    "reco1": "Is there anyway convert mysql table to java class"
  },
  {
    "index": 16518,
    "votes": 1,
    "tags": [
      "java",
      "mysql"
    ],
    "timestamp": 1402424523,
    "question": "Is there any command like IF NOT EXISTS for inserting values?",
    "answers": 1,
    "content": "<pre><code>CREATE TABLE IF NOT EXISTS Orari (ID int AUTO_INCREMENT PRIMARY KEY titolo Char(40)  sala int  giorno char(10) Ora char(10));\\n\\nINSERT INTO Orari VALUES (null null 1 'lunedi' '16:30') \\n    (null null 1 'lunedi' '19:30') \\n    (null null 2 'lunedi' '16:30') \\n    (null null 2 'lunedi' '19:30') \\n    (null null 1 'martedi' '16:30') \\n    (null null 1 'martedi' '19:30') \\n    (null null 2 'martedi' '16:30') \\n    (null null 2 'martedi' '19:30') \\n    (null null 1 'mercoledi' '16:30') \\n    (null null 1 'mercoledi' '19:30') \\n    (null null 2 'mercoledi' '16:30') \\n    (null null 2 'mercoledi' '19:30') \\n    (null null 1 'giovedi' '16:30') \\n    (null null 1 'giovedi' '19:30') \\n    (null null 2 'giovedi' '16:30') \\n    (null null 2 'giovedi' '19:30') \\n    (null null 1 'venerdi' '16:30') \\n    (null null 1 'venerdi' '19:30') \\n    (null null 2 'venerdi' '16:30') \\n    (null null 2 'venerdi' '19:30') \\n    (null null 1 'sabato' '16:30') \\n    (null null 1 'sabato' '19:30') \\n    (null null 2 'sabato' '16:30') \\n    (null null 2 'sabato' '19:30') \\n    (null null 1 'domenica' '16:30') \\n    (null null 1 'domenica' '19:30') \\n    (null null 2 'domenica' '16:30') \\n    (null null 2 'domenica' '19:30');\\n</code></pre>\\n\\n<p>I want to put it in a function which im going to call every time i press a Button.</p>\\n\\n<p>The <code>IF NOT EXISTS</code> work for the first query ... and if the table already exists it does'nt recreate it. </p>\\n\\n<p>But the second query for inserting Values just keeps inserting again and again every time I push the button.</p>\\n\\n<p>Is there any comand like <code>IF NOT EXISTS</code> for Inserting values?</p>\\n",
    "reco2": "Exception after reading values from jsp page",
    "reco3": "Hibernate Mysql - OnetoOne Mapping not working",
    "reco1": "using arraylist found in servlet to insert into database using preparedstatement"
  },
  {
    "index": 115966,
    "votes": 4,
    "tags": [
      "java",
      "sockets"
    ],
    "timestamp": 1390750006,
    "question": "How to continue downloading the file Java (socket)",
    "answers": 1,
    "content": "<p>I'm doing a program that sends large files through sockets client-server  that piece of code</p>\\n\\n<pre><code>while ((bytesRead = in.read(mybytearray  0  mybytearray.length)) != -1) {\\n     bos.write(mybytearray  0  bytesRead);\\n}\\n</code></pre>\\n\\n<p><a href=\\https://github.com/Vlad161/MiniProj/blob/master/src/Client.java\\\" rel=\\\"nofollow\\\">All code can be found here</a></p>\\n\\n<p>I have already downloaded data as where to pass this number was spooled file? For example there is a file size 35000 bytes transmitted 20000 is broken and how to make the program to start downloading from 20000 bytes to continue?\\nP.S. I`m very sorry  my English is bad</p>\\n\"",
    "reco2": "File is not deleted when I send it via Java Sockets",
    "reco3": "Java - Keeping a socket client alive after finishing reading",
    "reco1": "java socket send strings instead of bytes"
  },
  {
    "index": 14022,
    "votes": 3,
    "tags": [
      "java",
      "sockets"
    ],
    "timestamp": 1402852044,
    "question": "How I can send an String and an Integer over a socket?",
    "answers": 1,
    "content": "<p>I have 2 buttons in my client with a button listener each.</p>\\n\\n<p>In my firt button listener I am sending a <em>String</em> over the socket and I am getting back an array of integers after it is spanwed. No problem there. Here is my code.</p>\\n\\n<pre><code>public void rollDice() {\\n\\n    try {\\n        DataOutputStream sout1 = new DataOutputStream(socket.getOutputStream());\\n        String line = \\dice\\\";\\n        PrintStream out1 = new PrintStream(sout1);\\n        out1.println(line);\\n    } catch (UnknownHostException e1) {\\n        e1.printStackTrace();\\n    } catch (IOException e1) {\\n        e1.printStackTrace();\\n    }\\n\\n}\\n</code></pre>\\n\\n<p>With the second listener I want t send first a <em>string</em> to put the server into the right state  and after I want to send an <em>integer</em> to continue the process. Here is my code but it doesn't seem to work. Server is printing a random number  even if I send a \\\"2\\\".</p>\\n\\n<pre><code>public void sendDice() {\\n\\n    try {\\n        DataOutputStream sout2 = new DataOutputStream(socket.getOutputStream());\\n        String line = \\\"pick\\\";\\n        PrintStream out2 = new PrintStream(sout2);\\n        out2.println(line);\\n\\n        out2.write(diceListLength);\\n    } catch (UnknownHostException e1) {\\n        e1.printStackTrace();\\n    } catch (IOException e1) {\\n        e1.printStackTrace();\\n    }\\n}\\n</code></pre>\\n\\n<p>Here is the server's side.</p>\\n\\n<pre><code>public void run() {\\n\\n        boolean running = true;\\n\\n        try {\\n\\n            // Create streams for reading / writing lines of text to the socket\\n            DataInputStream input = new DataInputStream(s.getInputStream());\\n            DataInputStream inputInt = new DataInputStream(s.getInputStream());\\n\\n            ObjectOutputStream output = new ObjectOutputStream(s.getOutputStream());\\n\\n            // Print a message:\\n            System.out.println(\\\"\\\\nClient from: \\\" + s.getInetAddress() + \\\" port \\\" + s.getPort());\\n\\n            while(running) {\\n                String st = input.readLine();\\n\\n                if (st.equals(\\\"dice\\\")) {\\n                    for (int i = 0; i &lt; diceRolled.length - number; i++) {\\n                        diceRolled[i] = (int) ( 1 + Math.random() * 6);\\n                        System.out.print(diceRolled[i] + \\\" \\\");\\n                    }\\n                    output.writeObject(diceRolled);\\n                    output.reset();\\n                } else if (st.equals(\\\"pick\\\")) {\\n                    number = inputInt.readInt();\\n                    System.out.print(number);\\n\\n                }\\n            } \\n        } catch (IOException e) {\\n            System.out.println(\\\"Error: \\\" + e.getMessage());\\n         // Always be sure to close the socket\\n        } finally {\\n            try {\\n                if (s != null) {\\n                    System.out.println(s.getLocalSocketAddress() + \\\" closed.\\\");\\n                    s.close();\\n                }                   \\n            } catch (Exception e) {\\n                System.out.println(\\\"Error: \\\" + e.getMessage());\\n            }\\n        }\\n    }\\n</code></pre>\\n\"",
    "reco2": "Trigger 2 spring integration in different server but with 1 same file polling folder",
    "reco3": "Android java client program using separate thread for socket IO  Can&#39;t find a way to send data with a button",
    "reco1": "I can&#39;t send strings from server to client"
  },
  {
    "index": 18474,
    "votes": 3,
    "tags": [
      "java",
      "sockets"
    ],
    "timestamp": 1402059073,
    "question": "Is it possible for a Java application to connect to a host from multiple IP addresses?",
    "answers": 3,
    "content": "<p>Is there a way to open multiple socket connections from a single Java application (Hosted within tomcat) and have each of the sockets appear to originate from a different IP address?</p>\\n\\n<p><strong>Background:</strong></p>\\n\\n<p>My team are in the process of planning how we are going to integrate with a third party system  we've been contracted to write an adaptor for this system  and we don't have very much detail on apart from an API doc.</p>\\n\\n<p>The doc specifies a TCP/IP based protocol  which allows a client to login to it.</p>\\n\\n<p>The documentation specifies that only one connection will be allowed from a given IP address/user. Although it's ambiguous whether it will allow multiple connections from a single IP address with different user names.</p>\\n\\n<p>We need to have a pool of connections open as our integration piece will be acting as a proxy and will need to have multiple connections open in parallel  we are hoping that having unique user names will be enough  but as we've not even been provided with a test system we want to have all out bases covered.</p>\\n",
    "reco2": "Client socket - get IP - java",
    "reco3": "How can I set up a socket with an IP outside my router in Java?",
    "reco1": "Print to video Ip-address-from socket"
  },
  {
    "index": 111572,
    "votes": 3,
    "tags": [
      "java",
      "sockets"
    ],
    "timestamp": 1419635091,
    "question": "Reading and Writing to Sockets  Java",
    "answers": 1,
    "content": "<p>I have a little problem with reading and writing to Sockets in my Server/Client Java application. Server have connection to database. I want to send an object \\Employee\\\" consist User Data (Name  Surname  Password) to Server  then Server look up to database about this user and resend to Client information - positive (1) or negative (-1).</p>\\n\\n<p>First  when I want to send an object Employee  I've got :\\n\\\"java.net.SocketException: Software caused connection abort: socket write error\\\" \\nI have my Firewall turned off.</p>\\n\\n<p>Second  when I want to send and receive just int through writeInt - readInt method for test  I can't to read anything on Server.</p>\\n\\n<p>What's the problem? Please help.</p>\\n\\n<p>Code Server:</p>\\n\\n<pre><code>class ClientCommunication implements Runnable {\\n    private Socket incoming;\\n\\n    public ClientCommunication(Socket clientSocket) {\\n        incoming = clientSocket;\\n\\n    }\\n\\n    public void run() {\\n        try {\\n            synchronized (this) {\\n                try {                   \\n                    serverObjectOutput = new ObjectOutputStream(\\n                            incoming.getOutputStream());\\n                    serverObjectInput = new ObjectInputStream(\\n                            incoming.getInputStream()); \\n                } finally {\\n                    incoming.close();\\n                }\\n            }\\n        } catch (IOException e) {\\n            e.printStackTrace();\\n        }\\n\\n        synchronized(this) {\\n            while (true) {\\n                try{                        \\n                    int operation = serverObjectInput.readInt();                        \\n\\n                    switch(operation) {\\n                    case 1:\\n                            Employee employee = (Employee) serverObjectInput.readObject();\\n                            String SelectUserDataSQL = \\\"SELECT COUNT(*) AS COUNT FROM pracownik where Imie = ? AND Nazwisko = ? AND Haslo = ?\\\";\\n                            PreparedStatement CheckEmployeeLogin;\\n                            CheckEmployeeLogin = conn.prepareStatement(SelectUserDataSQL);\\n\\n                            CheckEmployeeLogin.setString(1  employee.getFirstName());\\n                            CheckEmployeeLogin.setString(2  employee.getLastName());\\n                            CheckEmployeeLogin.setString(3  new String(employee.getPassword()));                    \\n\\n                            ResultSet resultSQL = CheckEmployeeLogin.executeQuery();\\n                            if (resultSQL.next()) \\n                                if (resultSQL.getInt(\\\"COUNT\\\") == 0)\\n                                    serverObjectOutput.writeInt(1);\\n                                else serverObjectOutput.writeInt(-1);\\n                            break;\\n                }\\n            } catch(IOException | ClassNotFoundException | SQLException ex)                 \\n            {                   \\n            }\\n          }\\n        }\\n    }\\n}\\n\\nclass ServerStart implements Runnable {\\n    private int portNumber;\\n\\n    public ServerStart(int portNumber) {\\n        this.portNumber = portNumber;\\n    }\\n\\n    public void run() {\\n\\n\\n        try {\\n            conn = getConnection();\\n            stat = conn.createStatement();\\n\\n        } catch (SQLException e1) {             \\n            e1.printStackTrace();\\n        } catch (IOException e1) {              \\n            e1.printStackTrace();\\n        } catch (InterruptedException e) {              \\n            e.printStackTrace();\\n        }\\n\\n\\n        try {\\n            serverSocket = new ServerSocket(portNumber);                \\n\\n        } catch (IOException e) {\\n            e.printStackTrace();                \\n        }\\n\\n\\n        try {\\n            while (true) {\\n                Socket incoming = serverSocket.accept();\\n\\n                clientSockets.add(incoming);\\n\\n                Runnable r = new ClientCommunication(incoming);\\n                Thread t = new Thread(r);\\n                t.start();\\n            }\\n        } catch (IOException e) {\\n            e.printStackTrace();                \\n        }\\n    }       \\n}\\n</code></pre>\\n\\n<p>Code Client:</p>\\n\\n<pre><code>public void actionPerformed(ActionEvent e) {\\n                if (isConnected == false) {\\n                    String ServerIP = ip.getText().trim();\\n\\n                    int ServerPort = Integer\\n                            .parseInt(port.getText().trim());\\n\\n\\n                    try {\\n                        ClientSocket = new Socket(ServerIP  ServerPort);                        \\n\\n                        clientObjectInput = new ObjectInputStream(\\n                                ClientSocket.getInputStream());\\n                        clientObjectOutput = new ObjectOutputStream(\\n                                ClientSocket.getOutputStream());\\n\\n                        isConnected = true;\\n                    } catch (IOException ex) {                          \\n                    }\\n                    synchronized (this) {\\n                        try {                               \\n                            ClientLoginFrame login = new ClientLoginFrame();\\n\\n                            Employee employee = login.getEmployee();                                                                \\n\\n                            clientObjectOutput.writeObject(employee);                               \\n                            int result = clientObjectInput.readInt();\\n\\n                            if(result == 1)\\n                            {       \\n                                  // DO SOMETHING\\n                            }\\n                            else { \\n                                ClientSocket.close();                                   \\n                            }                           \\n                        } catch (IOException ex) {\\n                            ex.printStackTrace();\\n\\n                        }\\n                    }\\n                }\\n            }\\n        });\\n    }       \\n</code></pre>\\n\"",
    "reco2": "sending a signal to another program using socket java",
    "reco3": "Server socket reading its output before client input. Socket reading/writing ordering?",
    "reco1": "send from client to server and from server to client in java"
  },
  {
    "index": 173951,
    "votes": 3,
    "tags": [
      "java",
      "sockets"
    ],
    "timestamp": 1410878481,
    "question": "Why does my code stop after a while loop?",
    "answers": 2,
    "content": "<p>I was recently messing around with sockets and transferring data between them  when my program just stopped working after looping through <code>InputStreamReader#read()</code>.\\nI have absolutely no idea why this is happening  and I would appreciate any help possible :)</p>\\n\\n<p>Here is my code:</p>\\n\\n<pre><code>public class SocketClient\\n{\\n    public static void main(String[] args)\\n    {\\n        String host = \\localhost\\\";\\n        int port = 19999;\\n\\n        String instr = \\\"\\\";\\n        System.out.println(\\\"SocketClient initialized\\\");\\n\\n        try\\n        {\\n            InetAddress address = InetAddress.getByName(host);\\n            Socket connection = new Socket(address  port);\\n            BufferedOutputStream bos = new BufferedOutputStream(connection.getOutputStream());\\n            OutputStreamWriter osw = new OutputStreamWriter(bos  \\\"US-ASCII\\\");\\n\\n            String process = \\\"{\\\\\\\"processType\\\\\\\":\\\\\\\"retrieveCoin\\\\\\\" \\\\\\\"uuid\\\\\\\":\\\\\\\"82012e57-6a02-3233-8ee5-63cc5bb52cd1\\\\\\\"}\\\" + (char) 13;\\n\\n            System.out.println(\\\"Querying Data Server: \\\" + process);\\n\\n            osw.write(process);\\n            osw.flush();\\n\\n            System.out.println(\\\"Sent data successfully.\\\");\\n\\n            BufferedInputStream bis = new BufferedInputStream(connection.getInputStream());\\n            System.out.println(\\\"bis\\\");\\n\\n            InputStreamReader isr = new InputStreamReader(bis  \\\"US-ASCII\\\");\\n            System.out.println(\\\"isr\\\");\\n\\n            int c;\\n\\n            System.out.println(\\\"ic\\\");\\n\\n            while ((c = isr.read()) != 13)\\n            {\\n                System.out.println(\\\"iwl \\\" + ((char) c));\\n                instr += ((char) c);\\n            }\\n\\n            System.out.println(\\\"awl\\\");\\n\\n            connection.close();\\n            System.out.println(\\\"Recieved data: \\\" + instr);\\n        }\\n        catch (Exception ex)\\n        {\\n            System.out.println(\\\"Exception: \\\" + ex);\\n        }\\n    }\\n}\\n</code></pre>\\n\\n<p>The console output is fine until the end of the while loop  as the \\\"awl\\\" message does not print  or anything else after that.</p>\\n\\n<p>The recieving end of the socket (the \\\"server\\\") gets the message okay  and also sends the data out correctly (I'm using some debug messages on the socket server as well).</p>\\n\\n<p>Please somebody help me  I'm dying here!</p>\\n\"",
    "reco2": "Java Server Socket transfer String to web socket",
    "reco3": "What is the best practice on storing lots of sockets?",
    "reco1": "Socket (C/Java) BufferedReader readLine() doesn&#39;t stop"
  },
  {
    "index": 30020,
    "votes": 2,
    "tags": [
      "java",
      "sockets"
    ],
    "timestamp": 1400480314,
    "question": "Java Client and Server",
    "answers": 0,
    "content": "<p>I am currently working on a File Transfer Client and Server program.  I can request and receive one file but then when I try to request another  it doesn't work.  It gives me an IOException.</p>\\n\\n<p>Process: Client prompts user to input a name  sends to server  server responds with file  and server should wait for another request while client prompts again for user to input a name.</p>\\n\\n<p>I believe I'm not \\Waiting\\\" correctly on the server side.  Any help that would kick me into the right direction would help.</p>\\n\\n<p>Client Code:</p>\\n\\n<pre><code> BufferedReader consoleIn = new BufferedReader(new InputStreamReader(System.in));\\n\\n    System.out.print(\\\"What file do you want? \\\");\\n    name = consoleIn.readLine();\\n    int bytesRead;\\n\\n    if(!name.equals(\\\"!\\\")) {\\n\\n        InputStream in = null;\\n        OutputStream output = null;\\n        DataInputStream serverData = null;\\n\\n        while(!name.equals(\\\"!\\\")) {\\n            //fileOut = new PrintWriter(new FileOutputStream(name));\\n            socketOut.println(name);\\n            socketOut.flush();\\n\\n            try {\\n                in = socket.getInputStream();   \\n            } catch (IOException ex) {\\n                System.out.println(\\\"Can't get socket input stream. \\\");\\n            }\\n\\n            serverData = new DataInputStream(in);     \\n\\n            String fileName = serverData.readUTF();       \\n            output = new FileOutputStream(fileName);       \\n            long size = serverData.readLong();      \\n\\n            byte[] buffer = new byte[4000];       \\n            while (size &gt; 0 &amp;&amp; (bytesRead = serverData.read(buffer  0  (int)Math.min(buffer.length  size))) != -1)       \\n            {       \\n                output.write(buffer  0  bytesRead);       \\n                size -= bytesRead;       \\n            }    \\n\\n\\n            System.out.print(\\\"What file do you want? \\\");\\n            name = consoleIn.readLine();\\n        }    \\n    }\\n</code></pre>\\n\\n<p>Server Code:</p>\\n\\n<pre><code>socket = serverSocket.accept();\\n            System.out.println(\\\"Connection accepted!\\\");\\n            BufferedReader socketIn =\\n                    new BufferedReader(new InputStreamReader(socket.getInputStream()));\\n            //PrintWriter socketOut = new PrintWriter(socket.getOutputStream());\\n            String name;\\n            BufferedReader fileIn;\\n            String line;\\n            name = socketIn.readLine();\\n            System.out.println(name);\\n\\n            while((!name.equals(\\\"!\\\")) &amp;&amp; (!name.equals(\\\"*\\\"))) {\\n\\n                File file = new File(rootDirectory  name);\\n\\n                byte[] bytes = new byte[(int) file.length()];\\n                FileInputStream fis = new FileInputStream(file);\\n                BufferedInputStream bis = new BufferedInputStream(fis);\\n\\n                DataInputStream dis = new DataInputStream(bis);\\n                dis.readFully(bytes  0  bytes.length);\\n\\n                OutputStream os = socket.getOutputStream();\\n\\n                DataOutputStream dos = new DataOutputStream(os);       \\n                dos.writeUTF(file.getName());       \\n                dos.writeLong(bytes.length);       \\n                dos.write(bytes  0  bytes.length);       \\n                dos.flush();    \\n\\n                System.out.println(\\\"Sending: \\\" + name); \\n                os.write(bytes  0  bytes.length); \\n                os.flush();\\n\\n                name = socketIn.readLine();\\n                System.out.println(name);\\n            }\\n</code></pre>\\n\"",
    "reco2": "Copying a File from Client to Server",
    "reco3": "Sends files from client to server",
    "reco1": "Can&#39;t send file from server to client over LAN"
  },
  {
    "index": 59011,
    "votes": 2,
    "tags": [
      "java",
      "sockets"
    ],
    "timestamp": 1396946406,
    "question": "Differences on Java Sockets between Windows and Linux - How to handle them?",
    "answers": 1,
    "content": "<p>I am having a lot of trouble in understanding the differences about how Java handles Sockets on Windows and Linux - Particularly when one of the sides (Client or Server) closes the connection abruptly.</p>\\n\\n<p>I have written the following <strong>very simple</strong> Server and Client classes to keep my point as simple  objective and as easy for you to understand as possible:<br/><br/></p>\\n\\n<p><strong>SimpleClient.java:</strong></p>\\n\\n<pre><code>import java.io.BufferedReader;\\nimport java.io.BufferedWriter;\\nimport java.io.InputStreamReader;\\nimport java.io.OutputStreamWriter;\\n\\nimport java.net.Socket;\\n\\npublic class SimpleClient {\\n\\n    public static void main(String args[]) {\\n        try {\\n            Socket client_socket = new Socket(\\127.0.0.1\\\"  9009);\\n\\n            // Used to read from a terminal input:\\n            BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\\n\\n            // Used for client/server communication:\\n            BufferedReader in = new BufferedReader(new InputStreamReader(client_socket.getInputStream()));\\n            BufferedWriter out = new BufferedWriter(new OutputStreamWriter(client_socket.getOutputStream()));\\n\\n            while(true) {\\n                System.out.print(\\\"Command: \\\");\\n                String msg = br.readLine();\\n\\n                // Send:\\n                out.write(msg);\\n                out.newLine();\\n                out.flush();\\n\\n                // Receive:\\n                int ifirst_char;\\n                char first_char;\\n\\n                if((ifirst_char = in.read()) == -1) {  // Server Closed\\n                    System.out.println(\\\"Server was closed on the other side.\\\");\\n\\n                    break;\\n                }\\n\\n                first_char = (char) ifirst_char;\\n\\n                msg = String.valueOf(first_char);\\n\\n                msg += in.readLine();\\n\\n                // Shows the message received from the server on the screen:\\n                System.out.println(msg);\\n            }\\n        }\\n        catch(Exception e) {\\n            e.printStackTrace();\\n        }\\n\\n    }\\n}\\n</code></pre>\\n\\n<p><br/></p>\\n\\n<p><strong>SimpleServer.java:</strong></p>\\n\\n<pre><code>import java.io.BufferedReader;\\nimport java.io.BufferedWriter;\\nimport java.io.InputStreamReader;\\nimport java.io.OutputStreamWriter;\\n\\nimport java.net.ServerSocket;\\nimport java.net.Socket;\\n\\npublic class SimpleServer {\\n\\n    public static void main(String args[]) {\\n        try {\\n            ServerSocket server_socket = new ServerSocket(9009);\\n\\n            Socket client_socket = server_socket.accept();\\n\\n            while(true) {\\n                BufferedReader in = new BufferedReader(new InputStreamReader(client_socket.getInputStream()));\\n                BufferedWriter out = new BufferedWriter(new OutputStreamWriter(client_socket.getOutputStream()));\\n\\n                // Receive:\\n                int ifirst_char;\\n                char first_char;\\n\\n                if((ifirst_char = in.read()) == -1) {  // Client Closed\\n                    System.out.println(\\\"Client was closed on the other side.\\\");\\n\\n                    break;\\n                }\\n\\n                first_char = (char) ifirst_char;\\n\\n                String msg = msg = String.valueOf(first_char);\\n\\n                msg += in.readLine();\\n\\n                msg = \\\"Server Received: \\\" + msg;\\n\\n                // Send:\\n                out.write(msg);\\n                out.newLine();\\n                out.flush();\\n            }\\n        }\\n        catch(Exception e) {\\n            e.printStackTrace();\\n        }\\n    }\\n}\\n</code></pre>\\n\\n<p><br/>\\nOf course I could implement a code for properly shutting down the client or the server  but the objective  as I said  is to simulate an abrupt shutdown on either side  where no \\\"disconnection code\\\" could be sent or received. That's why I created these 2 very simple classes.<br/><br/>\\nOn Linux  it runs pretty well:</p>\\n\\n<pre><code>$ java SimpleClient \\nCommand: echo\\nServer Received: echo\\nCommand: test\\nServer Received: test\\nCommand: (server now was closed on the other side)\\nServer was closed on the other side.\\n$\\n</code></pre>\\n\\n<p><br/>\\nOn Windows  however:</p>\\n\\n<pre><code>C:\\\\simplesocket&gt;java SimpleClient\\nCommand: echo\\nServer Received: echo\\nCommand: test\\nServer Received: test\\nCommand: (server now was closed on the other side)\\njava.net.SocketException: Connection reset by peer: socket write error\\n        at java.net.SocketOutputStream.socketWrite0(Native Method)\\n        at java.net.SocketOutputStream.socketWrite(Unknown Source)\\n        at java.net.SocketOutputStream.write(Unknown Source)\\n        at sun.nio.cs.StreamEncoder.writeBytes(Unknown Source)\\n        at sun.nio.cs.StreamEncoder.implFlushBuffer(Unknown Source)\\n        at sun.nio.cs.StreamEncoder.implFlush(Unknown Source)\\n        at sun.nio.cs.StreamEncoder.flush(Unknown Source)\\n        at java.io.OutputStreamWriter.flush(Unknown Source)\\n        at java.io.BufferedWriter.flush(Unknown Source)\\n        at SimpleClient.main(SimpleClient.java:32)\\n</code></pre>\\n\\n<p><br/>\\nLet's say I try to ignore this Exception by modifying the following lines on my SimpleClient.java:</p>\\n\\n<pre><code>// Send:\\ntry {\\n    out.write(msg);\\n    out.newLine();\\n    out.flush();\\n    }\\ncatch(Exception e) {}\\n</code></pre>\\n\\n<p><br/>\\nAnother Exception is thrown:</p>\\n\\n<pre><code>C:\\\\simplesocket&gt;java SimpleClient\\nCommand: echo\\nServer Received: echo\\nCommand: test\\nServer Received: test\\nCommand: (server now was closed on the other side)\\njava.net.SocketException: Connection reset\\n        at java.net.SocketInputStream.read(Unknown Source)\\n        at java.net.SocketInputStream.read(Unknown Source)\\n        at sun.nio.cs.StreamDecoder.readBytes(Unknown Source)\\n        at sun.nio.cs.StreamDecoder.implRead(Unknown Source)\\n        at sun.nio.cs.StreamDecoder.read(Unknown Source)\\n        at java.io.InputStreamReader.read(Unknown Source)\\n        at java.io.BufferedReader.fill(Unknown Source)\\n        at java.io.BufferedReader.read(Unknown Source)\\n        at SimpleClient.main(SimpleClient.java:42)\\n</code></pre>\\n\\n<p><br/>\\nI don't know if the corresponding lines on the code will be the ones pointed out on these Exceptions  but the first one is thrown on <strong>out.flush()</strong> and the second one on <strong>in.read()</strong>.<br/><br/>\\nSo basically  as you can see on Linux  even after abruptly closing the server:<br/><br/>\\n 1. It doesn't throw an Exception when I try to send the data.<br/>\\n 2. And more importantly  when I try to receive it  the first char is \\\"-1\\\" and received correctly.<br/><br/></p>\\n\\n<p>On Windows  it throws Exceptions both when sending and more importantly on receiving - when calling the read() method - I cannot get the \\\"end of the stream\\\" (-1) code.\\n<br/><br/>\\nWhich leads to some questions:<br/><br/>\\n <strong>1.</strong> Why is there such a big difference on Windows x Linux? Why on Linux these Exceptions are not thrown while on Windows they are?<br/><br/>\\n <strong>2.</strong> Shouldn't Java  with all its cross-platform qualities  try to minimize the differences on running in both the Systems? (by the way I'm using JDK 7 on both)<br/><br/>\\n <strong>3.</strong> Is there a way to change the code for an abrupt shutdown and get it to work more \\\"Linux-like\\\" on Windows  without throwing all these Exceptions and getting the -1 on my in.read()??<br/><br/>\\n <strong>4.</strong> If not  any external API recommended? \\n<br/><br/><br/>\\nI've tried to search the web for hours on this specific topic but without success.\\n<br/><br/>\\nI have also tried many solutions like calling methods like <strong>isConnected()</strong>  <strong>isBound()</strong>  <strong>isClosed()</strong>  etc. in the client_socket on the client side without success. They always say that there is an active connection and no problem with it  even after shutting down the server.<br/><br/>Hopefully someone would take the time to answer at least one of these questions.\\n<br/><br/>\\nYou have my most sincere thanks in advance for any answers.</p>\\n\"",
    "reco2": "Android Socket Error",
    "reco3": "How to make file search program in java?",
    "reco1": "Java detect disconnect from Server in Client"
  },
  {
    "index": 76987,
    "votes": 2,
    "tags": [
      "java",
      "sockets"
    ],
    "timestamp": 1394951815,
    "question": "What is the purpose of an unbound socket?",
    "answers": 2,
    "content": "<p>I am new to networking in Java and in general. I was reading up on sockets and saw the ServerSocket class had a constructor for an unbound socket.</p>\\n\\n<p>I thought the way socket connections worked was by connecting to specific ports. How could an unbound ServerSocket ever be used then?</p>\\n\\n<p>thanks.</p>\\n",
    "reco2": "ServerSocket.accept() throwing SocketTimeoutException with null message",
    "reco3": "ServerSocket vs Socket -- closing the socket",
    "reco1": "How to handle &quot;Connection reset&quot; error"
  },
  {
    "index": 91823,
    "votes": 2,
    "tags": [
      "java",
      "sockets"
    ],
    "timestamp": 1393431477,
    "question": "What is the proper way to read from Java sockets?",
    "answers": 3,
    "content": "<p>I have a simple TCP server that communicates on text-based protocol. I'm receiving data from clients and then I send an OK/NOT OK response.</p>\\n\\n<p>The protocol has this format:</p>\\n\\n<p><code>&lt;KEYWORD&gt; &lt;DATA&gt;\\\\r\\\\n</code></p>\\n\\n<p><code>&lt;KEYWORD&gt;</code> ascii text  no limits on length  just that it is atleast 1.</p>\\n\\n<p><code>&lt;DATA&gt;</code> mostly just ascii text  can be binary data  in that case  lenght is send first (to allow for \\\\r\\\\n sequence inside)</p>\\n\\n<p>every command ends in \\\\r\\\\n and there is always space between <code>&lt;KEYWORD&gt;</code> and <code>&lt;DATA&gt;</code></p>\\n\\n<p>I tried reading byte by byte  e.g.:</p>\\n\\n<pre><code>ByteArrayOutputStream baos = new ByteArrayOutputStream();\\nInputStream is = socket.getInputStream();    \\nwhile (tmp != ' '){\\n    baos.write(in.read());\\n}\\n</code></pre>\\n\\n<p>However I ran into a problem that <code>in.read()</code> returns -1 if it didn't read anything and my <code>ByteArrayOutputStream</code> was getting flooded with -1s (and not just -1  in debugging I saw -3  -32  3 and so on). My solution was to wrap it in <code>if</code>  like this:</p>\\n\\n<pre><code>while (tmp != ' '){\\n    byte tmp = in.read();\\n    if(tmp &gt;= 'A' &amp;&amp; tmp &lt;='z'){\\n        baos.write(tmp);\\n    }\\n}\\n</code></pre>\\n\\n<p>but that doesn't seem like a proper way to do this  since this also reads anything between uppercase and lowercase letters. What if I decide to exclude <code>^</code> and <code>_</code>  then I have to add <code>&amp;&amp; tmp != '^' &amp;&amp; tmp != '_'</code>. </p>\\n\\n<p>Can someone point me towards the right way?</p>\\n",
    "reco2": "Alternative to DataInputStream.readLine when dealing with binary data (so NOT BufferedReader)",
    "reco3": "Why is text file showing data in String format even if wrote a byte array to file in Java?",
    "reco1": "How to build a server/client protocol"
  },
  {
    "index": 99366,
    "votes": 2,
    "tags": [
      "java",
      "sockets"
    ],
    "timestamp": 1392540908,
    "question": "Sending &amp; Receiving Java Objects",
    "answers": 3,
    "content": "<p>I'm looking to send &amp; receive Java objects to &amp; from another Java application. This application may be on another machine. My need for this is that I am running multiple Java game servers and need them all to talk to the one central server. I've tried looking about for some pointers on how to do this but found nothing.</p>\\n\\n<p>I'd imagine you start off with with creating a new thread for each game server and then opening a Socket to the server.</p>\\n",
    "reco2": "How I compile my server code on server?",
    "reco3": "Why does OutputStream.write() closes socket connection?",
    "reco1": "Server to Server Communication with Java"
  },
  {
    "index": 110361,
    "votes": 2,
    "tags": [
      "java",
      "sockets"
    ],
    "timestamp": 1391190435,
    "question": "Socket does not throw exception when trying to write to closed connection",
    "answers": 1,
    "content": "<p>i am new in java socket programming but i have faced the problem.<br>\\nWhen i trying to write to connection that is unexpectedly closed in client side i don`t get any exception.\\nI have Server side.</p>\\n\\n<pre><code>    public static void main(String[] args) throws IOException { \\n    ServerSocket socket = new ServerSocket(8036);\\n    String st;\\n    while(true) {\\n        System.out.println(\\hello\\\");\\n        Socket socket1 = socket.accept();\\n        BufferedReader reader = new BufferedReader(new InputStreamReader (socket1.getInputStream()));\\n        BufferedWriter writer = new BufferedWriter(new OutputStreamWriter(socket1.getOutputStream()));\\n        System.out.println(reader.readLine());\\n        writer.write(\\\"h\\\");\\n        writer.flush();\\n    }\\n}\\n</code></pre>\\n\\n<p>And Client</p>\\n\\n<pre><code>    public static void main(String[] args) throws  Exception{\\n\\n    Inet4Address s = (Inet4Address)Inet4Address.getByName(\\\"localhost\\\");\\n    System.out.println(\\\"begin\\\");\\n     Socket socket = new Socket(s 8036);\\n     BufferedWriter w = new BufferedWriter (new OutputStreamWriter(socket.getOutputStream()));\\n     BufferedReader reader = new BufferedReader(new InputStreamReader(socket.getInputStream()));\\n     String h ;\\n     int prev = 0;\\n}\\n</code></pre>\\n\\n<p>As you can see client exits immediately after connection  i even don<code>t close socket  just try to model client that have exited unexpectedly. However i don</code>t get exception in server side while trying write to socket. Why? </p>\\n\"",
    "reco2": "Java ObjectInputStream(Socket socket) restarts the whole application?",
    "reco3": "What kind of strategy is more efficient: create a new socket or use one already created?",
    "reco1": "More information on socket connection type in java"
  },
  {
    "index": 120854,
    "votes": 2,
    "tags": [
      "java",
      "sockets"
    ],
    "timestamp": 1390013745,
    "question": "Where does the data go when writing to a socket in java?",
    "answers": 4,
    "content": "<p>Say I have the following code which sets up a Socket and a in and out stream for reading and writing to the socket.</p>\\n\\n<pre><code>toMonitor = new Socket(sd.m_sMonName  sd.m_iMonPort);\\nout = new PrintWriter(toMonitor.getOutputStream()  true);\\nin = new BufferedReader(new InputStreamReader(toMonitor.getInputStream()));\\n</code></pre>\\n\\n<p>Also say I have the method below called SendIt  which writes a String to the Sockets outputstream</p>\\n\\n<pre><code>public void SendIt (String message) throws IOException \\n{\\n    try \\n    {        \\n        newStatus(\\MessageParser [SendIt]: sent:\\\\n\\\\t\\\" + message  true);\\n\\n        out.println(message);\\n        if (out.checkError() == true) \\n            throw (new IOException());\\n        out.flush();\\n        if (out.checkError() == true) \\n            throw (new IOException());\\n    } \\n    catch (IOException e) {} //Bubble the Exception upwards\\n}\\n</code></pre>\\n\\n<p>When I call <code>out.println(message);</code> above  will that message sit in the buffer until the other end of the socket reads it? \\n- I take it the underlying writer object will break it into bytes  send it to the Sockets output stream where it is assembled into packets and sent out  thus clearing the Buffer as it is written?</p>\\n\\n<p>Will it sit there until I call <code>out.flush()</code>? </p>\\n\\n<p>Does <code>out.flush()</code> ALWAYS clear the buffer  or could something stay in there  somehow..?</p>\\n\\n<p>EDIT: </p>\\n\\n<p>I am currently using Netbeans as my IDE  is there are way in which I could watch the actual value of the output buffer in real time as the program runs?</p>\\n\"",
    "reco2": "Socket buffer size for small messages",
    "reco3": "Java sockets to C sockets",
    "reco1": "Can I set the socket send and receive buffer size when using HttpURLConnection class in Java?"
  },
  {
    "index": 160095,
    "votes": 2,
    "tags": [
      "java",
      "sockets"
    ],
    "timestamp": 1412752464,
    "question": "Detect the end of an HTTP request (Java socket) easiest way?",
    "answers": 2,
    "content": "<p>I have to use Java sockets to send and receive HTTP requests (I have to!). So I'm looking for a solution that takes into account <code>content-length</code> and <code>Transfer-Encoding: chunked</code>  etc... to decide when the HTTP request has ended.</p>\\n\\n<p>Here is an example of what I came up with so far:</p>\\n\\n<pre><code>    public String getWebpage()\\n    {\\n        try{\\n\\n            _out.print(\\GET / HTTP/1.1\\\\r\\\\nHost: www.google.com\\\\r\\\\n\\\\r\\\\n\\\");\\n            _out.flush();\\n\\n            String fullRequest = \\\"\\\";\\n            String line = null;\\n            while (( line = _in.readLine()) != null)\\n            {\\n                fullRequest += line + \\\"\\\\r\\\\n\\\";\\n                if(isFullRequest(fullRequest))\\n                {\\n                    System.out.println(fullRequest);\\n                    return fullRequest;\\n                }\\n            }            \\n\\n        }catch(Exception e){}\\n\\n        return null;\\n    }\\n\\n    private boolean isFullRequest(String request)\\n    {\\n        return request.contains(\\\"\\\\r\\\\n\\\\r\\\\n\\\") //Make sure we have the headers\\n            &amp;&amp; request.contains(\\\"&lt;/html&gt;\\\"); //Make sure we have the html\\n    }\\n</code></pre>\\n\\n<p>My <code>isFullRequest()</code> method is a very cheap way to detect the end of the request  but isn't reliable.</p>\\n\\n<p>Instead of reinventing the wheel and spending countless hours into debugging  I'm asking if there's already a Class or Method already included in Java that does exactly what I need ? Without extra unnecessary jar dependencies ?</p>\\n\"",
    "reco2": "Http request using sockets",
    "reco3": "Programming an upload speed test using java sockets",
    "reco1": "An easy way to detect the end of http response (raw socket  java)?"
  },
  {
    "index": 164197,
    "votes": 2,
    "tags": [
      "java",
      "sockets"
    ],
    "timestamp": 1412196914,
    "question": "Java Sockets - Sending Objects and distributing the object to all clients that are connected",
    "answers": 1,
    "content": "<p>So here I am  with a 3d game  works great and stuff...</p>\\n\\n<p>However  I wish to make it multi-player.\\nI am very new to sockets  so I don't fully understand how to use them  and more specifically  how to send objects from client to server  and then distribute that object to all the other clients.</p>\\n\\n<p>This is the object that I made that I wish to send: </p>\\n\\n<pre><code>public class Vector3f{\\n\\n    int x  y  z;\\n\\n    public Vector3f(int x  int y  int z){\\n        this.x = x;\\n        this.y = y;\\n        this.z = z;\\n    }\\n}\\n</code></pre>\\n\\n<p>(It is for the position of the players)\\nThe client class would create a new Socket simply to my local IP  and port 1500 (for example)  while the server would create the server socket to port 1500 (obviously).</p>\\n\\n<p>I would just like to know how I could send across this object to the server (or host)  where the server then edits the object to have different values  and then sends it back. E.g:</p>\\n\\n<p>In the Client class  something like:</p>\\n\\n<pre><code>Vector3f origionalpos = new Vector3f(0 0 0);\\nSystem.out.println(\\x: \\\"+origionalpos.x+\\\" y: \\\"+origionalpos.y+\\\" z: \\\"+origionalpos.z);\\n\\nObjectOutputStream.writeObject(origionalpos);\\n</code></pre>\\n\\n<p>Then the Server would receive this  and modify the object  before sending it back  something like this:</p>\\n\\n<pre><code>Vector3f obj = ObjectRecievedFromClient;\\nobj.x+=10;\\nobj.y+=10\\nobj.z+=10\\nObjectOutputStream.writeObject(obj);\\n//here I would also like to send to all clients who are connected.\\n</code></pre>\\n\\n<p>Realistically in my game I would not change the position from the server (unless i want to tp them with a command or something)  merely redistribute it to the other clients  however I would like to see proof that it has worked first :)</p>\\n\\n<p>Then finally  in the Client class  it would receive the new Position and assign another object to equal the object received from the server and do something like this:</p>\\n\\n<pre><code>Vector3f newpos = ObjectInputStream.readObject();\\nSystem.out.println(\\\"x: \\\"+newpos.x+\\\" y: \\\"+newpos.y+\\\" z: \\\"+newpos.z);\\n</code></pre>\\n\\n<p>Any help would be awesome. Remember that this is not yet to put into my game so for now will only be these 3 classes  where the Client class has its own main method  and so does the Server class.</p>\\n\"",
    "reco2": "TCP client/server only receives first two messages",
    "reco3": "Get string or file in server side with socket programming",
    "reco1": "Server and Client are sending multiple objects"
  },
  {
    "index": 194071,
    "votes": 2,
    "tags": [
      "java",
      "sockets"
    ],
    "timestamp": 1418631721,
    "question": "Java Socket specify a certain network interface for outgoing connections",
    "answers": 1,
    "content": "<p>OK. I know similar questions were asked before  but this is different.</p>\\n\\n<p>I noticed from responses to similar questions that I can use <code>Socket.bind</code> to specify a certain network interface for outgoing connections. <a href=\\http://docs.oracle.com/javase/tutorial/networking/nifs/definition.html\\\" rel=\\\"nofollow\\\">This</a> page is an official instruction on that.</p>\\n\\n<p>Now  my machine has two NICs <code>eth0</code> and <code>eth1</code>  and the system routing table sets <code>eth0</code> as the outgoing interface for connecting to a server <code>S</code>.</p>\\n\\n<p>Then I tried the following:</p>\\n\\n<pre><code>Socket so = new Socket();\\nso.bind(new InetSocketAddress(\\\"ip.address.of.eth1\\\"  0));\\nso.connect(new InetSocketAddress(\\\"ip.address.of.S\\\"  80));\\n</code></pre>\\n\\n<p>I used WireShark to capture the packets  and noticed that the \\\"Source Address\\\" field of IP header was indeed <code>ip.address.of.eth1</code>. But by checking Ethernet headers  I noticed that the source MAC address is actually the MAC address of <code>eth0</code>  that is  the packets were actually still sent out via <code>eth0</code>!</p>\\n\\n<p>Could anyone help explain why it had this behavior? Is it expected? Thanks a lot!</p>\\n\"",
    "reco2": "How can get Physical Address by pattern?",
    "reco3": "How to get web client",
    "reco1": "Find out IP address associated with MAC Address in servlet web application"
  },
  {
    "index": 197201,
    "votes": 2,
    "tags": [
      "java",
      "sockets"
    ],
    "timestamp": 1407396459,
    "question": "Java: Determining when a TCP Socket slows down and reestablish a connection",
    "answers": 1,
    "content": "<p>I am sending data from my system to third party systems using a persistent TCP Socket. It works fine but sometimes due to some bug in the third party system the connection slows down and it slows down my application.</p>\\n\\n<p>How to catch this state? Should i just set a connection timeout? Because when this happens i need to close the existing socket and reestablish a new one after some period of time.</p>\\n\\n<p>The code is as follows:</p>\\n\\n<pre><code>public static void initializeCongServer() throws Exception {\\n    try{\\n        Calendar currentTime = Calendar.getInstance();\\n        if(congestionDownStartTime!=null){\\n            long timeInSecs = (currentTime.getTimeInMillis() - congestionDownStartTime.getTimeInMillis())/1000;\\n            if(timeInSecs &lt; config.getCongestionReconnectTimeInSecs()){\\n                logWrapper1.log(Level.DEBUG  \\Packet not sent to Congestion as it was down when last checked. Connection to congestion will be retried again in: \\\"+ (config.getCongestionReconnectTimeInSecs() - timeInSecs)+\\\" seconds\\\");\\n                return;\\n            }\\n        }\\n        if(congConnector!=null){\\n            congConnector.close();\\n            if(congConnector.sock!=null){\\n                congConnector.sock.close();\\n            }\\n            congConnector = null;\\n        }\\n        logWrapper1.log(Level.DEBUG  \\\"Reconnecting with congestion server.\\\");\\n        congConnector = new Connector(config.getCongServerIP()  config.getCongServerPort()  1  2);\\n        congConnector.connect();\\n        congestionDownStartTime = null;\\n    } catch(Exception e){\\n        congestionDownStartTime = Calendar.getInstance();\\n        logWrapper1.log(Level.DEBUG  e.getMessage());\\n        e.printStackTrace();\\n    }\\n}\\n\\npublic static void sendDataToCongServer(String data){\\n    try {\\n        System.out.println(\\\"CONGESTION: \\\"+data);\\n        synchronized(Main.class){\\n            if(congConnector!=null &amp;&amp; congConnector.connected==true){\\n                congConnector.send(data  false  false  1);\\n            }else{\\n                initializeCongServer();\\n            }\\n        }\\n    } catch (Exception ex) {\\n        congestionDownStartTime = Calendar.getInstance();\\n        logWrapper1.log(Level.DEBUG  \\\"CONGESTION DOWN: \\\"+data);\\n        logWrapper1.log(Level.DEBUG  ex.getMessage());\\n    }\\n}\\n\\nimport java.io.BufferedReader;\\nimport java.io.DataOutputStream;\\nimport java.io.IOException;\\nimport java.io.InputStream;\\nimport java.io.InputStreamReader;\\nimport java.io.OutputStream;\\nimport java.net.Socket;\\nimport java.net.SocketTimeoutException;\\n\\npublic class Connector {\\n\\nString host = null;\\nint port = 0;\\nint index = 0;\\nlong reconnectTime = 0;\\nSocket sock = null;\\nboolean connected = false;\\nInputStream inputStream = null;\\nOutputStream outputStream = null;\\nBufferedReader bufferedReader = null;\\nDataOutputStream dataOutputStream = null;\\n\\npublic Connector(String host  int port  int index  long reconnectTime) throws Exception {\\n    this.host = host;\\n    this.port = port;\\n    this.index = index;\\n    this.reconnectTime = reconnectTime;\\n}\\n\\npublic synchronized Socket reconnect() throws Exception {\\n    sock = new Socket(host  port);\\n    inputStream = sock.getInputStream();\\n    outputStream = sock.getOutputStream();\\n    bufferedReader = new BufferedReader(new InputStreamReader(inputStream));\\n    dataOutputStream = new DataOutputStream(outputStream);\\n    connected = true;\\n    return sock;\\n}\\n\\npublic void close() {\\n    try {\\n        if (outputStream != null) {\\n            outputStream.close();\\n        }\\n    } catch (IOException ex) {\\n        //Logger.getLogger(Connector.class.getName()).log(Level.SEVERE  null  ex);\\n    }\\n    try {\\n        if (inputStream != null) {\\n            inputStream.close();\\n        }\\n    } catch (IOException ex) {\\n        //Logger.getLogger(Connector.class.getName()).log(Level.SEVERE  null  ex);\\n    }\\n}\\n\\n\\nprivate synchronized void notifyWait() {\\n    connected = false;\\n}\\n\\n\\npublic synchronized void connect() throws Exception {\\n    reconnect();\\n}\\n\\npublic void send(String str  boolean appendLine  boolean bindResult  int MedReadTimeOut) throws Exception {\\n    String result = null;\\n    if (connected == true) {\\n        try {\\n            byte[] b = null;\\n            if (appendLine == true) {\\n                b = (str + \\\"\\\\r\\\\n\\\").getBytes();\\n            } else {\\n                b = str.getBytes();\\n            }\\n            dataOutputStream.write(b  0  b.length);\\n            dataOutputStream.flush();\\n        } catch (IOException ex) {\\n            notifyWait();\\n            connected = false;\\n            throw new Exception(ex);\\n        }\\n        if (bindResult == true) {\\n            try {\\n                sock.setSoTimeout(MedReadTimeOut);\\n                result = bufferedReader.readLine();\\n            } \\n            catch (SocketTimeoutException sockEx) {\\n                String debugInfo = \\\"TIMEOUT= \\\"+MedReadTimeOut+\\\".MEDIATION PORT CLOSED \\\" + sock.getPort();\\n                System.out.println(debugInfo);\\n            }\\n            catch (IOException ex) {\\n                //Logger.getLogger(Connector.class.getName()).log(Level.SEVERE  null  ex);\\n                notifyWait();\\n                throw new Exception(ex);\\n            }\\n        }\\n    } else {\\n        throw new Exception(\\\"Congestion Socket Closed.\\\");\\n    }\\n}\\n}\\n</code></pre>\\n\"",
    "reco2": "Not Receiving data from Device if Socket is not closed",
    "reco3": "Socket server no connection",
    "reco1": "How to return an error message on socket timeout with Spring-Integration"
  },
  {
    "index": 237,
    "votes": 1,
    "tags": [
      "java",
      "sockets"
    ],
    "timestamp": 1419946470,
    "question": "Java tcp server programming does not work",
    "answers": 1,
    "content": "<p>I use this code to run simple TCP Server by JAVA and I use Socket Protocol android application to be client.  The problem is when the client connected then I send the message the Server side do nothing until I disconnected the client the massage appear after that. I think something stuck at \\n        while((inputLine = in.readLine()) != null)  </p>\\n\\n<pre><code>import java.net.*;\\nimport java.io.*;\\n\\npublic class TCPIP {\\n\\npublic static void main(String[] args) throws IOException {\\n    ServerSocket serverSocket = null;\\n    try{\\n        serverSocket = new ServerSocket(10007);\\n    }\\n    catch(IOException e)\\n    {\\n        System.err.println(\\Could not listen on port 10007\\\");\\n        //System.exit(1);\\n    }\\n    Socket clientSocket = null;\\n    System.out.println(\\\"Waiting for connection....\\\");\\n\\n    try{\\n        clientSocket = serverSocket.accept();\\n    }\\n    catch(IOException e){\\n        System.err.println(\\\"Accept Failed\\\");\\n        //System.exit(1);\\n    }\\n    System.out.println(\\\"Connection Successful\\\");\\n    System.out.println(\\\"Waiting for input\\\");\\n\\n    PrintWriter out = new PrintWriter(clientSocket.getOutputStream() true); \\n    BufferedReader in = new BufferedReader(new InputStreamReader(clientSocket.getInputStream()));\\n\\n\\n    String inputLine;\\n\\n\\n    while((inputLine = in.readLine()) != null) \\n    {\\n        System.out.println(\\\"Server: \\\"+ inputLine);\\n        out.println(inputLine);\\n\\n        if(inputLine.equals(\\\"Bye.\\\"))\\n        {\\n            break;\\n        }\\n    }\\n    out.close(); \\n    in.close(); \\n    clientSocket.close(); \\n    serverSocket.close(); \\n}\\n\\n}\\n</code></pre>\\n\"",
    "reco2": "TCP client/server only receives first two messages",
    "reco3": "TCP server - client  Server doesn&#39;t send date to client",
    "reco1": "Rise an Exception when socket client disconnected on sending message from server"
  },
  {
    "index": 6936,
    "votes": 1,
    "tags": [
      "java",
      "sockets"
    ],
    "timestamp": 1403784615,
    "question": "Java Socket doesn&#39;t wait to receive bytes",
    "answers": 2,
    "content": "<p>I have developed a socket in java like this:</p>\\n\\n<pre><code>serverSocket = new ServerSocket(port);\\n\\nSystem.out.println(\\Listening in port \\\" + port + \\\" ...\\\");\\n\\nwhile (true) {\\n    socket = serverSocket.accept();\\n    System.out.println(\\\"Connection has been created.\\\");\\n    handle(socket);\\n}\\n</code></pre>\\n\\n<p>And the <code>handle</code> method is:</p>\\n\\n<pre><code>private static void handle(final Socket socket) throws IOException {\\n    new Thread(new Runnable() {\\n        @Override\\n        public void run() {\\n            try {\\n                InputStream is = socket.getInputStream();\\n                MyClass elevator = new MyClass(socket  is);\\n                elevator.start();\\n            } catch (IOException io) {\\n                io.printStackTrace();\\n            } finally {\\n                try {\\n                    socket.close();\\n                } catch (IOException e) {\\n                    e.printStackTrace();\\n                }\\n            }\\n        }\\n    }).start();\\n}\\n</code></pre>\\n\\n<p>And MyClass is like this:</p>\\n\\n<pre><code>class MyClass {\\n\\n    private Socket socket;\\n    private InputStream is;\\n    private PrintWriter out;\\n    private OutputStream ds;\\n\\n    public MyClass(Socket socket  InputStream is) {\\n        this.socket = socket;\\n        this.is = is;\\n        initializeOutputStream(socket);\\n    }\\n\\n    private void initializeOutputStream(Socket socket) {\\n        try {\\n            ds = socket.getOutputStream();\\n        } catch (IOException e) {\\n            e.printStackTrace();\\n        }\\n    }\\n\\n    public void start() {\\n\\n        while (true) {\\n            try {\\n\\n                int dataLength = 10;\\n                byte[] dataBuffer = new byte[dataLength];\\n                is.read(dataBuffer  0  dataLength);\\n                // Read and Print cmd.\\n                System.out.println(\\\"data:\\\" + DataLayer.byteToString(dataBuffer));\\n\\n            } catch (IOException e) {\\n                e.printStackTrace();\\n                try {\\n                    ds.close();\\n                    System.out.println(\\\"ds closed.\\\");\\n                    is.close();\\n                    System.out.println(\\\"is closed.\\\");\\n                    socket.close();\\n                    System.out.println(\\\"socket closed.\\\");\\n                    break;\\n                } catch (IOException e1) {\\n                    e1.printStackTrace();\\n                }\\n                e.printStackTrace();\\n            }\\n        }\\n    }\\n}\\n</code></pre>\\n\\n<p>When the client sends data it works well  but when the client isn't sending data it prints:</p>\\n\\n<pre><code>data:0\\n\\ndata:0\\n\\ndata:0\\n...\\n</code></pre>\\n\\n<p>and it dont stops.</p>\\n\\n<p>Can you tell me how to solve this problem ?</p>\\n\"",
    "reco2": "Synchronize server with client java sockets",
    "reco3": "Java Tcp socket: how to detect on client that no more data needs to be received by server?",
    "reco1": "Stream Corrupted Exception"
  },
  {
    "index": 17339,
    "votes": 1,
    "tags": [
      "java",
      "sockets"
    ],
    "timestamp": 1402316037,
    "question": "Socket Server throwing &quot;Socket is closed&quot; after uploading files",
    "answers": 2,
    "content": "<p>I have a Java server uploading files for the android client. It does the upload but when it is finished  it keeps throwing: </p>\\n\\n<pre><code>Error::java.net.SocketException: Socket is closed\\n</code></pre>\\n\\n<p>I searched the code a lot  but didn't find anything. Since it is throwing after uploading the files  I think problem is at the end of code after last for loop  but I see nothing wrong. Any ideas guys?</p>\\n\\n<pre><code>class ClientThread extends Thread {\\n  // the socket where to listen/talk\\n  String Type;\\n  Socket socket;\\n  ObjectInputStream sInput;\\n  ObjectOutputStream sOutput;\\n  // my unique id (easier for deconnection)\\n  int id;\\n\\n  // Constructore\\n  ClientThread(Socket socket) throws InterruptedException {\\n    // a unique id\\n    id = ++uniqueId;\\n    this.socket = socket;\\n    /* Creating both Data Stream */\\n    System.out.println(\\Thread trying to create Object Input/Output Streams\\\");\\n    while (!jobdone) {\\n      try {\\n        // create output first\\n        sOutput = new ObjectOutputStream(socket.getOutputStream());\\n        sInput = new ObjectInputStream(socket.getInputStream());\\n        // read the username\\n        OutputStream os = socket.getOutputStream();\\n        FileInputStream fis = null;\\n        DataOutputStream dos = new DataOutputStream(os);\\n\\n        String Request = (String) sInput.readObject();\\n        System.out.println(Request);\\n\\n        String[] todoname = Request.split(\\\"\\\\\\\\@reza-hp\\\");\\n        String name = todoname[0];\\n        System.out.println(\\\"Connecting...\\\");\\n\\n        File fil = new File(\\\"D://Users//ProfileImages//reza\\\");\\n\\n        System.out.println(fil);\\n        File[] Files = fil.listFiles();\\n        System.out.println(Files);\\n        for (int count = 0; count &lt; Files.length; count++) {\\n          System.out.println(Files[count].getName());\\n\\n        }\\n\\n        os = socket.getOutputStream();\\n        dos = new DataOutputStream(os);\\n\\n        dos.writeInt(Files.length);\\n\\n        for (int count = 0; count &lt; Files.length; count++) {\\n          dos.writeUTF(Files[count].getName());\\n\\n        }\\n        for (int count = 0; count &lt; Files.length; count++) {\\n\\n          int filesize = (int) Files[count].length();\\n          dos.writeInt(filesize);\\n        }\\n\\n        for (int count = 0; count &lt; Files.length; count++) {\\n\\n          int filesize = (int) Files[count].length();\\n          byte[] buffer = new byte[filesize];\\n\\n          fis = new FileInputStream(Files[count].toString());\\n          BufferedInputStream bis = new BufferedInputStream(fis);\\n\\n          // Sending file name and file size to the server\\n          bis.read(buffer  0  buffer.length); // This line is\\n                                              // important\\n          dos.write(buffer  0  buffer.length);\\n          dos.flush();\\n          fis.close();\\n        }\\n\\n        dos.close();\\n        os.close();\\n\\n      } catch (Exception e) {\\n        System.out.println(\\\"Error::\\\" + e);\\n      }\\n    }\\n\\n    Thread.sleep(5000);\\n    Server.shutdown();\\n  }\\n}\\n</code></pre>\\n\"",
    "reco2": "HTTURLConnection Upload not 100% working",
    "reco3": "files uploading via server ip but not from domain name",
    "reco1": "Facing issues while uploading file in JAVA"
  },
  {
    "index": 107033,
    "votes": 17,
    "tags": [
      "java",
      "spring"
    ],
    "timestamp": 1391676808,
    "question": "Repeatable not found when using Spring 4 PropertySource",
    "answers": 3,
    "content": "<p>we are using Spring 4.0.1.RELEASE in combination with jdk6 (this is fixed).\\nOf course we have done the config in Java with usage of the <code>@PropertySource</code> annotation. This leads to an annoying warning message(s) when we compile the project with gradle:</p>\\n\\n<blockquote>\\n  <p>org\\\\springframework\\\\context\\\\annotation\\\\PropertySource.class(org\\\\springframework\\\\context\\\\annotation:PropertySource.class):\\n  warning: Cannot find annotat ion method 'value()' in type\\n  'java.lang.annotation.Repeatable': class file for\\n  java.lang.annotation.Repeatable not found</p>\\n</blockquote>\\n\\n<p>This is caused by the usage of not (in jdk6) existing Repeatable class and I am glad that it's just a warning.\\nI love the clean output of gradle and this is just annoying because it may obfuscate other \\real\\\" warnings (like checkstyle...).</p>\\n\\n<p>Maybe anyone faced the same problem and got a (not so much hack) solution for this situation. I just want to see a clean output again.</p>\\n\"",
    "reco2": "reference to java.lang.annotation.Annotation from Class?",
    "reco3": "Spring 4 and compiling with jdk 7",
    "reco1": "How to selectively disable warnings in javac for spring 4.1.1 release"
  },
  {
    "index": 73932,
    "votes": 14,
    "tags": [
      "java",
      "spring"
    ],
    "timestamp": 1395302073,
    "question": "Java 1.8 ASM ClassReader failed to parse class file - probably due to a new Java class file version that isn&#39;t supported yet",
    "answers": 2,
    "content": "<p>My web application runs fine on JDK 1.7 but crashes on 1.8 with the following exception(during application server startup-jetty 8).I am using Spring version: 3.2.5.RELEASE.</p>\\n\\n<h2>Exception:</h2>\\n\\n<p><code>org.springframework.core.NestedIOException: ASM ClassReader failed to parse class file - probably due to a new Java class file version that isn't supported yet</code></p>\\n\\n<p>I assume that problem occurs because of spring and \\asm.jar\\\" library on which it depends. </p>\\n\\n<p>How do I resolve this ?</p>\\n\"",
    "reco2": "PrintWriter object doesn&#39;t print all the lines in text document to out put file",
    "reco3": "Spring MVC. Not recognizing RequestMapping annotation name attribute when loading context",
    "reco1": "Glassfish always loads spring schema from internet"
  },
  {
    "index": 108435,
    "votes": 8,
    "tags": [
      "java",
      "spring"
    ],
    "timestamp": 1391518361,
    "question": "How does ApplicationContextAware work in Spring?",
    "answers": 1,
    "content": "<p>In spring  if a bean implements <code>ApplicationContextAware</code>  then it is able to access the <code>applicationContext</code>. Therefore it is able to get other beans.\\ne.g. </p>\\n\\n<pre><code>public class SpringContextUtil implements ApplicationContextAware {\\nprivate static ApplicationContext applicationContext;     \\n\\npublic void setApplicationContext(ApplicationContext context) throws BeansException {\\n  applicationContext = context;\\n}\\n\\npublic static ApplicationContext getApplicationContext() {\\n  return applicationContext;\\n}\\n</code></pre>\\n\\n<p>}</p>\\n\\n<p>Then <code>SpringContextUtil.getApplicationContext.getBean(\\name\\\")</code> can get the bean \\\"name\\\".</p>\\n\\n<p>To do this  we should put this <code>SpringContextUtil</code> inside the <code>applications.xml</code>  e.g.</p>\\n\\n<pre><code>&lt;bean class=\\\"com.util.SpringContextUtil\\\" /&gt;\\n</code></pre>\\n\\n<p>Here the bean <code>SpringContextUtil</code> doesn't include the property <code>applicationContext</code>. I guess when spring bean initialize  this property is set. But how is this done? How does the method <code>setApplicationContext</code> get called?</p>\\n\"",
    "reco2": "Declare beans with identical properties",
    "reco3": "How to create bean of Java class ScheduledThreadPoolExecutor",
    "reco1": "If one bean is managed by Spring does this mean all created beans also have to be managed"
  },
  {
    "index": 27519,
    "votes": 7,
    "tags": [
      "java",
      "spring"
    ],
    "timestamp": 1400779192,
    "question": "Spring/Java error: namespace element &#39;annotation-config&#39; ... on JDK 1.5 and higher",
    "answers": 3,
    "content": "<p>I have Spring/Java App that is compiled with <strong>Compiler compliance level 1.5</strong>.</p>\\n\\n<p>I have a new Linux setup where I downloaded <strong>Apache Tomcat 8.0.8</strong>.</p>\\n\\n<p>I downloaded <strong>JDK 8u5</strong>.</p>\\n\\n<p>I set the path in bash as follows:</p>\\n\\n<pre><code>PATH=$PATH:$HOME/jdk1.8.0_05/bin\\nexport PATH\\n</code></pre>\\n\\n<p>Java -version reports:</p>\\n\\n<pre><code>java version \\1.8.0_05\\\"\\nJava(TM) SE Runtime Environment (build 1.8.0_05-b13)\\nJava HotSpot(TM) 64-Bit Server VM (build 25.5-b02  mixed mode)\\n</code></pre>\\n\\n<p>And set in setnenv.sh (for Tomcat):</p>\\n\\n<pre><code>JDK_HOME=/home/userid/jdk1.8.0_05\\n</code></pre>\\n\\n<p>When I deploy my WAR file I get below error.\\nI think Tomcat doesn't seem to use the Java I installed.\\nI have followed the setup instructions.\\nPS: I also tried JRE instead of JDK and same issue.</p>\\n\\n<p><strong>Thank you in advance \\nRobert</strong></p>\\n\\n<pre><code>22-May-2014 11:34:54.070 INFO [http-nio-8080-exec-4] org.apache.catalina.core.ApplicationContext.log Initializing Spring root WebApplicationContext\\n22-May-2014 11:34:54.512 SEVERE [http-nio-8080-exec-4] org.apache.catalina.core.StandardContext.listenerStart Exception sending context initialized event to listener instance of class org.springframework.web.context.ContextLoaderListener\\n org.springframework.beans.factory.BeanDefinitionStoreException: Unexpected exception parsing XML document from file [/home/userid/apache-tomcat-8.0.8/webapps/myApplication-QA/WEB-INF/classes/config/spring/securityContext.xml]; nested exception is **java.lang.IllegalStateException: Context namespace element 'annotation-config' and its parser class [org.springframework.context.annotation.AnnotationConfigBeanDefinitionParser] are only available on JDK 1.5 and higher**\\n    at org.springframework.beans.factory.xml.XmlBeanDefinitionReader.doLoadBeanDefinitions(XmlBeanDefinitionReader.java:420)\\n    at org.springframework.beans.factory.xml.XmlBeanDefinitionReader.loadBeanDefinitions(XmlBeanDefinitionReader.java:342)\\n    at org.springframework.beans.factory.xml.XmlBeanDefinitionReader.loadBeanDefinitions(XmlBeanDefinitionReader.java:310)\\n    at org.springframework.beans.factory.support.AbstractBeanDefinitionReader.loadBeanDefinitions(AbstractBeanDefinitionReader.java:143)\\n    at org.springframework.beans.factory.support.AbstractBeanDefinitionReader.loadBeanDefinitions(AbstractBeanDefinitionReader.java:178)\\n    at org.springframework.beans.factory.support.AbstractBeanDefinitionReader.loadBeanDefinitions(AbstractBeanDefinitionReader.java:149)\\n    at org.springframework.web.context.support.XmlWebApplicationContext.loadBeanDefinitions(XmlWebApplicationContext.java:124)\\n    at org.springframework.web.context.support.XmlWebApplicationContext.loadBeanDefinitions(XmlWebApplicationContext.java:92)\\n    at org.springframework.context.support.AbstractRefreshableApplicationContext.refreshBeanFactory(AbstractRefreshableApplicationContext.java:123)\\n    at org.springframework.context.support.AbstractApplicationContext.obtainFreshBeanFactory(AbstractApplicationContext.java:423)\\n    at org.springframework.context.support.AbstractApplicationContext.refresh(AbstractApplicationContext.java:353)\\n    at org.springframework.web.context.ContextLoader.createWebApplicationContext(ContextLoader.java:255)\\n    at org.springframework.web.context.ContextLoader.initWebApplicationContext(ContextLoader.java:199)\\n    at org.springframework.web.context.ContextLoaderListener.contextInitialized(ContextLoaderListener.java:45)\\n    at org.apache.catalina.core.StandardContext.listenerStart(StandardContext.java:4750)\\n    at org.apache.catalina.core.StandardContext.startInternal(StandardContext.java:5170)\\n    at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:150)\\n    at org.apache.catalina.manager.ManagerServlet.start(ManagerServlet.java:1270)\\n    at org.apache.catalina.manager.HTMLManagerServlet.start(HTMLManagerServlet.java:673)\\n    at org.apache.catalina.manager.HTMLManagerServlet.doPost(HTMLManagerServlet.java:221)\\n    at javax.servlet.http.HttpServlet.service(HttpServlet.java:644)\\n    at javax.servlet.http.HttpServlet.service(HttpServlet.java:725)\\n    at org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:301)\\n    at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206)\\n    at org.apache.catalina.filters.CsrfPreventionFilter.doFilter(CsrfPreventionFilter.java:213)\\n    at org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239)\\n    at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206)\\n    at org.apache.tomcat.websocket.server.WsFilter.doFilter(WsFilter.java:52)\\n    at org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239)\\n    at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206)\\n    at org.apache.catalina.filters.SetCharacterEncodingFilter.doFilter(SetCharacterEncodingFilter.java:108)\\n    at org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239)\\n    at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206)\\n    at org.apache.catalina.core.StandardWrapperValve.invoke(StandardWrapperValve.java:219)\\n    at org.apache.catalina.core.StandardContextValve.invoke(StandardContextValve.java:106)\\n    at org.apache.catalina.authenticator.AuthenticatorBase.invoke(AuthenticatorBase.java:615)\\n    at org.apache.catalina.core.StandardHostValve.invoke(StandardHostValve.java:136)\\n    at org.apache.catalina.valves.ErrorReportValve.invoke(ErrorReportValve.java:78)\\n    at org.apache.catalina.valves.AbstractAccessLogValve.invoke(AbstractAccessLogValve.java:610)\\n    at org.apache.catalina.core.StandardEngineValve.invoke(StandardEngineValve.java:88)\\n    at org.apache.catalina.connector.CoyoteAdapter.service(CoyoteAdapter.java:526)\\n    at org.apache.coyote.http11.AbstractHttp11Processor.process(AbstractHttp11Processor.java:1033)\\n    at org.apache.coyote.AbstractProtocol$AbstractConnectionHandler.process(AbstractProtocol.java:652)\\n    at org.apache.coyote.http11.Http11NioProtocol$Http11ConnectionHandler.process(Http11NioProtocol.java:222)\\n    at org.apache.tomcat.util.net.NioEndpoint$SocketProcessor.doRun(NioEndpoint.java:1566)\\n    at org.apache.tomcat.util.net.NioEndpoint$SocketProcessor.run(NioEndpoint.java:1523)\\n    at java.util.concurrent.ThreadPoolExecutor.runWorker(Unknown Source)\\n    at java.util.concurrent.ThreadPoolExecutor$Worker.run(Unknown Source)\\n    at org.apache.tomcat.util.threads.TaskThread$WrappingRunnable.run(TaskThread.java:61)\\n    at java.lang.Thread.run(Unknown Source)\\nCaused by: java.lang.IllegalStateException: Context namespace element 'annotation-config' and its parser class [org.springframework.context.annotation.AnnotationConfigBeanDefinitionParser] are only available on JDK 1.5 and higher\\n    at org.springframework.context.config.ContextNamespaceHandler$1.parse(ContextNamespaceHandler.java:65)\\n    at org.springframework.beans.factory.xml.NamespaceHandlerSupport.parse(NamespaceHandlerSupport.java:69)\\n    at org.springframework.beans.factory.xml.BeanDefinitionParserDelegate.parseCustomElement(BeanDefinitionParserDelegate.java:1253)\\n    at org.springframework.beans.factory.xml.BeanDefinitionParserDelegate.parseCustomElement(BeanDefinitionParserDelegate.java:1243)\\n    at org.springframework.beans.factory.xml.DefaultBeanDefinitionDocumentReader.parseBeanDefinitions(DefaultBeanDefinitionDocumentReader.java:135)\\n    at org.springframework.beans.factory.xml.DefaultBeanDefinitionDocumentReader.registerBeanDefinitions(DefaultBeanDefinitionDocumentReader.java:92)\\n    at org.springframework.beans.factory.xml.XmlBeanDefinitionReader.registerBeanDefinitions(XmlBeanDefinitionReader.java:507)\\n    at org.springframework.beans.factory.xml.XmlBeanDefinitionReader.doLoadBeanDefinitions(XmlBeanDefinitionReader.java:398)\\n    ... 49 more\\n\\n22-May-2014 11:34:54.518 INFO [http-nio-8080-exec-4] org.apache.catalina.core.ApplicationContext.log Closing Spring root WebApplicationContext\\n</code></pre>\\n\"",
    "reco2": "Can&#39;t run Spring 4 and Tomcat 8 with Java 8",
    "reco3": "How do I get an apache tomcat server running on eclipse",
    "reco1": "Having trouble starting tomcat with a different JAVA_HOME"
  },
  {
    "index": 62587,
    "votes": 7,
    "tags": [
      "java",
      "spring"
    ],
    "timestamp": 1396506500,
    "question": "How does util:list behave with scope=&quot;prototype&quot;?",
    "answers": 1,
    "content": "<p>If I use the following Spring XML config  what will be the result if I assign the resulting bean to multiple properties?</p>\\n\\n<pre><code>&lt;util:list id=\\myBeanId\\\" scope=\\\"prototype\\\"&gt;\\n  &lt;bean class=\\\"com.mypackage.MyTestBeanClass1\\\" /&gt;\\n  &lt;bean class=\\\"com.mypackage.MyTestBeanClass2\\\" /&gt;\\n&lt;/util:list&gt;\\n</code></pre>\\n\\n<p>As far as I can see  there are two possible outcomes:</p>\\n\\n<ul>\\n<li>Multiple lists are created  but the beans inside them are shared (because their scope defaults to singleton)</li>\\n<li>Multiple lists are created  and a new copy of each bean is created for each list instance</li>\\n</ul>\\n\\n<p>Also  what about this scenario?</p>\\n\\n<pre><code>&lt;bean id=\\\"referencedBean\\\" class=\\\"com.mypackage.MyTestBeanClass1\\\" /&gt;\\n&lt;util:list id=\\\"myBeanId\\\" scope=\\\"prototype\\\"&gt;\\n  &lt;ref bean=\\\"referencedBean\\\" /&gt;\\n  &lt;bean class=\\\"com.mypackage.MyTestBeanClass2\\\" /&gt;\\n&lt;/util:list&gt;\\n</code></pre>\\n\\n<p>This seems to offer additional possibilities:</p>\\n\\n<ul>\\n<li>The <code>referencedBean</code> remains a singleton  but multiple instances of <code>MyTestBeanClass2</code> are created.</li>\\n<li>Both <code>referencedBean</code> and <code>MyTestBeanClass2</code> are duplicated for each instance of the list created (this strikes me as unlikely  but still plausible).</li>\\n</ul>\\n\\n<p>I don't seem to be able to find any discussion of this in the spring docs.  In fact  as far as I can see  the existence of the scope property on util:list isn't even mentioned in the docs.  Have I missed it  or is this entirely undocumented?  If so can/should I rely on any particular behaviour?</p>\\n\"",
    "reco2": "Working with scoped beans when the scope is optional?",
    "reco3": "Will this prototype class be created once only by Spring containter?",
    "reco1": "Singleton class or instance in java"
  },
  {
    "index": 183664,
    "votes": 7,
    "tags": [
      "java",
      "spring"
    ],
    "timestamp": 1418684975,
    "question": "Spring ignoring @Qualifier in very simple program",
    "answers": 2,
    "content": "<p>I have Circle class:</p>\\n\\n<pre><code>public class Circle\\n{\\n    @Autowired\\n    @Qualifier(\\pointA\\\")\\n    private Point center;\\n\\n    public Point getCenter()\\n    {\\n        return center;\\n    }\\n    public void setCenter(Point center)\\n    {\\n        this.center = center;\\n    }\\n}\\n</code></pre>\\n\\n<p>point class:</p>\\n\\n<pre><code>public class Point\\n{\\n    private int x;\\n    private int y;\\n\\n    public int getX()\\n    {\\n        return x;\\n    }\\n    public void setX(int x)\\n    {\\n        this.x = x;\\n    }\\n    public int getY()\\n    {\\n        return y;\\n    }\\n    public void setY(int y)\\n    {\\n        this.y = y;\\n    }\\n}\\n</code></pre>\\n\\n<p>And my spring xml:</p>\\n\\n<pre><code>&lt;?xml version=\\\"1.0\\\" encoding=\\\"UTF-8\\\"?&gt;\\n&lt;beans xmlns=\\\"http://www.springframework.org/schema/beans\\\"\\n       xmlns:xsi=\\\"http://www.w3.org/2001/XMLSchema-instance\\\"\\n       xmlns:context=\\\"http://www.springframework.org/schema/context\\\"\\n       xsi:schemaLocation=\\\"http://www.springframework.org/schema/beans\\n        http://www.springframework.org/schema/beans/spring-beans.xsd\\n        http://www.springframework.org/schema/context\\n        http://www.springframework.org/schema/context/spring-context.xsd\\\"\\n        &gt;\\n\\n       &lt;bean id=\\\"pointA\\\"  name=\\\"pointA\\\" class=\\\"SpringTest.Point\\\"&gt;\\n            &lt;qualifier value=\\\"pointA\\\"/&gt;\\n            &lt;property name=\\\"x\\\" value=\\\"4\\\"/&gt;\\n            &lt;property name=\\\"y\\\" value=\\\"4\\\"/&gt;\\n       &lt;/bean&gt;\\n\\n       &lt;bean id=\\\"pointB\\\" name=\\\"pointB\\\" class=\\\"SpringTest.Point\\\"&gt;\\n              &lt;property name=\\\"x\\\" value=\\\"2\\\"/&gt;\\n              &lt;property name=\\\"y\\\" value=\\\"5\\\"/&gt;\\n       &lt;/bean&gt;\\n\\n       &lt;bean id=\\\"circle\\\" class=\\\"SpringTest.Circle\\\"&gt;\\n       &lt;/bean&gt;\\n\\n       &lt;bean class=\\\"org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor\\\" /&gt;\\n\\n&lt;/beans&gt;\\n</code></pre>\\n\\n<p>As far as I am concerned this should work like this:\\n1. Spring see @Autowire annotation\\n2. Spring realizes that there are many beans of Point type\\n3. Spring uses @Qualifier annotation to determine which bean to inject</p>\\n\\n<p>Unfortunaltely it is not working like that.\\nWhile executing:</p>\\n\\n<pre><code>AbstractApplicationContext abstractApplicationContext = new ClassPathXmlApplicationContext(\\\"spring.xml\\\");\\nBeanFactory beanFactory = abstractApplicationContext.getBeanFactory();\\n</code></pre>\\n\\n<p>I am getting an error:</p>\\n\\n<pre><code>org.springframework.beans.factory.BeanCreationException: Error creating bean with name 'circle': Injection of autowired dependencies failed; nested exception is org.springframework.beans.factory.BeanCreationException: Could not autowire field: private SpringTest.Point SpringTest.Circle.center; nested exception is org.springframework.beans.factory.NoUniqueBeanDefinitionException: No qualifying bean of type [SpringTest.Point] is defined: expected single matching bean but found 2: pointA pointB\\n</code></pre>\\n\\n<p>I am beginner at spring topic but I believe @Qualifier annotation should do the job and determine which bean to use.</p>\\n\\n<p>Startup log:\\n<a href=\\\"https://gist.github.com/mmajews/384207ee97b2cc8bd49a\\\" rel=\\\"nofollow\\\">https://gist.github.com/mmajews/384207ee97b2cc8bd49a</a></p>\\n\"",
    "reco2": "Why NoUniqueBeanDefinitionException: No qualifying bean of type is defined: expected single matching bean but found 2",
    "reco3": "PrintWriter object doesn&#39;t print all the lines in text document to out put file",
    "reco1": "Spring Javaconfig based autowire by name not working"
  },
  {
    "index": 101927,
    "votes": 6,
    "tags": [
      "java",
      "spring"
    ],
    "timestamp": 1392304457,
    "question": "Why does Spring 4 only allow one TaskScheduler in a context?",
    "answers": 1,
    "content": "<p>We have a Spring web application we're porting from Spring 3.2 to Spring 4.  Our application has several sub-contexts assembled into a single runtime context when the web application is started.</p>\\n\\n<p>We use separate TaskSchedulers in two of our sub-contexts.  With Spring 3.2 this works fine; when using Spring 4 we get an exception with the following message:</p>\\n\\n<pre><code>java.lang.IllegalStateException: More than one TaskScheduler and/or ScheduledExecutorService  exist within the context. Remove all but one of the beans; or implement the SchedulingConfigurer interface and call ScheduledTaskRegistrar#setScheduler explicitly within the configureTasks() callback. Found the following beans: [commonScheduler  communicationTaskScheduler]\\n        at org.springframework.scheduling.annotation.ScheduledAnnotationBeanPostProcessor.onApplicationEvent(ScheduledAnnotationBeanPostProcessor.java:289) ~[spring-context-4.0.1.RELEASE.jar:4.0.1.RELEASE]\\n        at org.springframework.scheduling.annotation.ScheduledAnnotationBeanPostProcessor.onApplicationEvent(ScheduledAnnotationBeanPostProcessor.java:72) ~[spring-context-4.0.1.RELEASE.jar:4.0.1.RELEASE]\\n        at org.springframework.context.event.SimpleApplicationEventMulticaster.multicastEvent(SimpleApplicationEventMulticaster.java:98) ~[spring-context-4.0.1.RELEASE.jar:4.0.1.RELEASE]\\n        at org.springframework.context.support.AbstractApplicationContext.publishEvent(AbstractApplicationContext.java:333) ~[spring-context-4.0.1.RELEASE.jar:4.0.1.RELEASE]\\n        at org.springframework.context.support.AbstractApplicationContext.finishRefresh(AbstractApplicationContext.java:776) ~[spring-context-4.0.1.RELEASE.jar:4.0.1.RELEASE]\\n        at org.springframework.context.support.AbstractApplicationContext.refresh(AbstractApplicationContext.java:485) ~[spring-context-4.0.1.RELEASE.jar:4.0.1.RELEASE]\\n        at org.springframework.web.context.ContextLoader.configureAndRefreshWebApplicationContext(ContextLoader.java:403) ~[spring-web-4.0.1.RELEASE.jar:4.0.1.RELEASE]\\n        at org.springframework.web.context.ContextLoader.initWebApplicationContext(ContextLoader.java:306) ~[spring-web-4.0.1.RELEASE.jar:4.0.1.RELEASE]\\n        at org.springframework.web.context.ContextLoaderListener.contextInitialized(ContextLoaderListener.java:106) ~[spring-web-4.0.1.RELEASE.jar:4.0.1.RELEASE]\\n        at org.apache.catalina.core.StandardContext.listenerStart(StandardContext.java:4961) ~[catalina.jar:7.0.50]\\n        at org.apache.catalina.core.StandardContext.startInternal(StandardContext.java:5455) ~[catalina.jar:7.0.50]\\n        at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:150) ~[catalina.jar:7.0.50]\\n        at org.apache.catalina.core.ContainerBase.addChildInternal(ContainerBase.java:901) ~[catalina.jar:7.0.50]\\n        at org.apache.catalina.core.ContainerBase.addChild(ContainerBase.java:877) ~[catalina.jar:7.0.50]\\n        at org.apache.catalina.core.StandardHost.addChild(StandardHost.java:634) ~[catalina.jar:7.0.50]\\n        at org.apache.catalina.startup.HostConfig.deployWAR(HostConfig.java:1074) ~[catalina.jar:7.0.26]\\n        at org.apache.catalina.startup.HostConfig$DeployWar.run(HostConfig.java:1858) ~[catalina.jar:7.0.26]\\n        at java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:471) ~[na:1.7.0_25]\\n        at java.util.concurrent.FutureTask$Sync.innerRun(FutureTask.java:334) ~[na:1.7.0_25]\\n        at java.util.concurrent.FutureTask.run(FutureTask.java:166) ~[na:1.7.0_25]\\n        at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1145) ~[na:1.7.0_25]\\n        at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:615) ~[na:1.7.0_25]\\n        at java.lang.Thread.run(Thread.java:724) ~[na:1.7.0_25]\\n</code></pre>\\n\\n<p>One scheduler is defined via:</p>\\n\\n<pre><code>&lt;?xml version=\\1.0\\\" encoding=\\\"UTF-8\\\"?&gt;\\n&lt;beans xmlns=\\\"http://www.springframework.org/schema/beans\\\"\\n    xmlns:xsi=\\\"http://www.w3.org/2001/XMLSchema-instance\\\" xmlns:task=\\\"http://www.springframework.org/schema/task\\\"\\n    xsi:schemaLocation=\\\"\\n    http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans-4.0.xsd\\n    http://www.springframework.org/schema/task http://www.springframework.org/schema/task/spring-task-4.0.xsd\\\"&gt;\\n\\n    &lt;!-- Enables annotation-driven task scheduling; detects @Scheduled- and \\n        @Async-annotated process methods to be invoked via proxy --&gt;\\n    &lt;task:annotation-driven mode=\\\"aspectj\\\" /&gt;\\n    &lt;task:scheduler id=\\\"commonScheduler\\\" pool-size=\\\"5\\\" /&gt;\\n\\n&lt;/beans&gt;\\n</code></pre>\\n\\n<p>The other scheduler is defined in (additional beans removed for clarity):</p>\\n\\n<pre><code>&lt;?xml version=\\\"1.0\\\" encoding=\\\"UTF-8\\\"?&gt;\\n&lt;beans xmlns=\\\"http://www.springframework.org/schema/beans\\\"\\n    xmlns:context=\\\"http://www.springframework.org/schema/context\\\"\\n    xmlns:xsi=\\\"http://www.w3.org/2001/XMLSchema-instance\\\" xmlns:tx=\\\"http://www.springframework.org/schema/tx\\\"\\n    xsi:schemaLocation=\\\"\\n    http://www.springframework.org/schema/tx http://www.springframework.org/schema/tx/spring-tx-4.0.xsd\\n    http://www.springframework.org/schema/context http://www.springframework.org/schema/context/spring-context-4.0.xsd\\n    http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans-4.0.xsd\\\"&gt;\\n\\n    &lt;context:spring-configured /&gt;\\n\\n    &lt;bean id=\\\"communicationExecutor\\\"\\n        class=\\\"org.springframework.scheduling.concurrent.ThreadPoolTaskExecutor\\\"&gt;\\n        &lt;property name=\\\"corePoolSize\\\" value=\\\"15\\\" /&gt;\\n        &lt;property name=\\\"maxPoolSize\\\" value=\\\"20\\\" /&gt;\\n        &lt;property name=\\\"queueCapacity\\\" value=\\\"20\\\" /&gt;\\n    &lt;/bean&gt;\\n    &lt;bean id=\\\"communicationTaskScheduler\\\"\\n        class=\\\"org.springframework.scheduling.concurrent.ConcurrentTaskScheduler\\\"&gt;\\n        &lt;property name=\\\"concurrentExecutor\\\" ref=\\\"communicationExecutor\\\" /&gt;\\n    &lt;/bean&gt;\\n\\n&lt;/beans&gt;\\n</code></pre>\\n\\n<p>The contexts are assembled at runtime using (additional contexts removed for clarity):</p>\\n\\n<pre><code>&lt;beans xmlns=\\\"http://www.springframework.org/schema/beans\\\"  xmlns:xsi=\\\"http://www.w3.org/2001/XMLSchema-instance\\\"\\n    xsi:schemaLocation=\\\"http://www.springframework.org/schema/beans\\n    http://www.springframework.org/schema/beans/spring-beans-4.0.xsd\\\"&gt;\\n\\n    &lt;import resource=\\\"classpath:spring/tasks-context.xml\\\" /&gt;\\n    &lt;import resource=\\\"classpath:spring/collectors-context.xml\\\" /&gt;\\n&lt;/beans&gt;\\n</code></pre>\\n\\n<p>Why does Spring 4 have this restriction?  How should one work around it?</p>\\n\"",
    "reco2": "PrintWriter object doesn&#39;t print all the lines in text document to out put file",
    "reco3": "Spring ApplicationListener for ContextRefreshEvent. How to invoke only once per Hierarchy?",
    "reco1": "@Autowired &amp; Spring context hierarchy"
  },
  {
    "index": 43791,
    "votes": 5,
    "tags": [
      "java",
      "spring"
    ],
    "timestamp": 1398584970,
    "question": "what is the difference between Spring and Spring MVC framework",
    "answers": 0,
    "content": "<p>I am new to Spring. Can any one let me know what is the difference between Spring and Spring MVC Framework ?</p>\\n",
    "reco2": "Spring annotations for GET requests",
    "reco3": "Spring and Spring MVC -- are they two different framework?",
    "reco1": "PrintWriter object doesn&#39;t print all the lines in text document to out put file"
  },
  {
    "index": 86595,
    "votes": 5,
    "tags": [
      "java",
      "spring"
    ],
    "timestamp": 1393953825,
    "question": "Why did Spring ignore my @DependsOn annotation?",
    "answers": 2,
    "content": "<p>I'm using Spring 3.1.3 for a webapp  using XML configuration with component scanning.</p>\\n\\n<p>I realized that one of the scanned components has to be initialized before several others.  On all the classes that need post-construct initialization  I have a @PostConstruct annotation on a method.</p>\\n\\n<p>To set up the dependency order  I changed '@Component' to '@Component(\\configData\\\")' on the class that needs to be post-constructed before the others.  I then added '@DependsOn(\\\"configData\\\")' just before each class definition that needs to be post-constructed AFTER the \\\"configData\\\" bean.</p>\\n\\n<p>From what I've read  this is all I need to enforce the dependency order.</p>\\n\\n<p>I then built everything  set my breakpoints  and started up the app.  I expected to hit the breakpoint in the \\\"configData\\\" bean before any of the dependent beans.  This isn't what happened.  The first breakpoint was in the \\\"init\\\" method of one of the dependent beans.</p>\\n\\n<p>I then changed my \\\"log4j.xml\\\" to set \\\"debug\\\" as the logging level for \\\"org.springframework\\\" and reran my test.  The breakpoint behavior was the same  and my logging didn't show any debug information about Spring initialization (I have debugging on for log4j initialization itself  so I confirmed that I had DEBUG set for \\\"org.springframework\\\").</p>\\n\\n<p>What might I be missing?</p>\\n\\n<p><strong>Update:</strong></p>\\n\\n<p>If it matters  here are a couple of skeleton examples of what I'm doing here.</p>\\n\\n<pre><code>@Component(\\\"configData\\\")\\npublic class ConfigData {\\n    ....\\n    @PostConstruct\\n    public void init() {\\n        ....\\n    }\\n}\\n\\n@Component\\n@DependsOn(\\\"configData\\\")\\npublic class ClassDependentOnConfigData extends BaseClass {\\n    ....\\n    @Override\\n    @PostConstruct\\n    public void init() {\\n        super.init();\\n        ....\\n    }\\n}\\n</code></pre>\\n\\n<p>To reiterate  what I'm finding at runtime is that the \\\"init()\\\" method in \\\"ClassDependentOnConfigData\\\" is being called by Spring before the \\\"init()\\\" method in \\\"ConfigData\\\".</p>\\n\\n<p>Note also that \\\"BaseClass\\\" has an \\\"@Autowired\\\" for \\\"ConfigData\\\".</p>\\n\"",
    "reco2": "Java Debugging Deployed Glassfish @PostConstruct Unable to Debug",
    "reco3": "spring framework stuck on debug log level",
    "reco1": "Spring: init-method  PostConstruct  afterPropertiesSet : when to use one over others?"
  },
  {
    "index": 97986,
    "votes": 5,
    "tags": [
      "java",
      "spring"
    ],
    "timestamp": 1392722199,
    "question": "Autowired bean injection in Spring controller",
    "answers": 2,
    "content": "<p>Not able to figure out  what's wrong. I keep getting the same error again and again. I have searched Google but failed to solve this issue. I was looking the same post over here try to solve but still the same.</p>\\n\\n<p><strong>JobsDAOImp.java</strong></p>\\n\\n<pre><code>public class JobsDAOImp implements JobsDAO {\\n\\n    @Autowired \\n    private SessionFactory sessionFactory;\\n        ..        \\n}\\n</code></pre>\\n\\n<p><strong>JobService.java</strong></p>\\n\\n<pre><code>public interface JobsService {\\n       ....\\n}\\n</code></pre>\\n\\n<p><strong>JobServiceImp.java</strong></p>\\n\\n<pre><code>@Service\\n@Transactional(readOnly=true)\\npublic class JobsServiceImp implements JobsService {\\n\\n    @Autowired private JobsDAOImp jobsDAOImp;\\n        ..\\n}\\n</code></pre>\\n\\n<p><strong>JobsController.java</strong></p>\\n\\n<pre><code>@Controller\\n@RequestMapping(value=\\/\\\")\\npublic class JobsController {\\n\\n    @Autowired\\n    private JobsService jobsService;\\n            ...\\n}\\n</code></pre>\\n\\n<p>spring.xml</p>\\n\\n<pre><code>&lt;?xml version=\\\"1.0\\\" encoding=\\\"UTF-8\\\"?&gt;\\n&lt;beans xmlns=\\\"http://www.springframework.org/schema/beans\\\"\\n       xmlns:xsi=\\\"http://www.w3.org/2001/XMLSchema-instance\\\"\\n       xmlns:context=\\\"http://www.springframework.org/schema/context\\\"\\n       xsi:schemaLocation=\\\"http://www.springframework.org/schema/beans \\n       http://www.springframework.org/schema/beans/spring-beans-3.0.xsd\\n       http://www.springframework.org/schema/context\\n       http://www.springframework.org/schema/context/spring-context-3.0.xsd\\\"&gt;\\n\\n        &lt;context:annotation-config/&gt;        \\n\\n        &lt;!-- DAO Implementations --&gt;\\n        &lt;bean id=\\\"usersImp\\\" class=\\\"org.delance.daoimplementation.UsersImp\\\" /&gt;\\n        &lt;bean id=\\\"jobsDAOImp\\\" class=\\\"org.delance.daoimplementation.JobsDAOImp\\\" /&gt;\\n\\n        &lt;!-- Service Implementations --&gt;\\n        &lt;bean id=\\\"jobsServiceImp\\\" class=\\\"org.delance.serviceimp.JobsServiceImp\\\" /&gt;  \\n\\n        &lt;bean id=\\\"dataSource\\\" class=\\\"${jdbc.dataSource}\\\" destroy-method=\\\"close\\\"&gt;\\n               &lt;property name=\\\"driverClass\\\" value=\\\"${jdbc.driverClass}\\\"/&gt;\\n               &lt;property name=\\\"jdbcUrl\\\" value=\\\"${jdbc.jdbcUrl}\\\"/&gt;\\n               &lt;property name=\\\"user\\\" value=\\\"${jdbc.user}\\\"/&gt;\\n               &lt;property name=\\\"password\\\" value=\\\"${jdbc.password}\\\"/&gt;\\n               &lt;property name=\\\"maxStatements\\\" value=\\\"${jdbc.maxStatements}\\\"/&gt;\\n\\n               &lt;property name=\\\"acquireIncrement\\\" value=\\\"${jdbc.acquireIncrement}\\\" /&gt;                   \\n\\n               &lt;property name=\\\"idleConnectionTestPeriod\\\" value=\\\"${jdbc.idleConnectionTestPeriod}\\\" /&gt;  \\n               &lt;property name=\\\"checkoutTimeout\\\" value=\\\"${jdbc.checkoutTimeout}\\\" /&gt; \\n               &lt;property name=\\\"unreturnedConnectionTimeout\\\" value=\\\"${jdbc.unreturnedConnectionTimeout}\\\" /&gt; \\n               &lt;property name=\\\"maxPoolSize\\\" value=\\\"${jdbc.maxPoolSize}\\\" /&gt;\\n               &lt;property name=\\\"minPoolSize\\\" value=\\\"${jdbc.minPoolSize}\\\" /&gt;\\n               &lt;property name=\\\"automaticTestTable\\\" value=\\\"${jdbc.automaticTestTable}\\\" /&gt; \\n               &lt;property name=\\\"testConnectionOnCheckin\\\" value=\\\"${jdbc.testConnectionOnCheckin}\\\" /&gt;                 \\n        &lt;/bean&gt;\\n\\n        &lt;bean id=\\\"sessionFactory\\\" class=\\\"org.springframework.orm.hibernate4.LocalSessionFactoryBean\\\" &gt;\\n               &lt;property name=\\\"dataSource\\\" ref=\\\"dataSource\\\"/&gt;\\n\\n               &lt;property name=\\\"packagesToScan\\\"&gt;\\n                            &lt;array&gt;\\n                               &lt;value&gt;org.delance.models&lt;/value&gt;\\n                            &lt;/array&gt;\\n               &lt;/property&gt;               \\n\\n               &lt;property name=\\\"hibernateProperties\\\"&gt;\\n                 &lt;value&gt;\\n                   hibernate.dialect = org.hibernate.dialect.MySQLDialect\\n                   hibernate.cache.provider_class = org.hibernate.cache.NoCacheProvider\\n                   hibernate.show_sql = true\\n                   hibernate.hbm2ddl.auto = create\\n                 &lt;/value&gt;\\n               &lt;/property&gt;               \\n\\n        &lt;/bean&gt;                \\n\\n        &lt;context:property-placeholder location=\\\"application.properties\\\" /&gt;\\n&lt;/beans&gt;    \\n</code></pre>\\n\\n<p>mvc-dispatcher-servlet.xml</p>\\n\\n<pre><code>&lt;?xml version=\\\"1.0\\\" encoding=\\\"UTF-8\\\"?&gt;\\n&lt;beans xmlns=\\\"http://www.springframework.org/schema/beans\\\"\\n    xmlns:context=\\\"http://www.springframework.org/schema/context\\\"\\n    xmlns:mvc=\\\"http://www.springframework.org/schema/mvc\\\" \\n        xmlns:xsi=\\\"http://www.w3.org/2001/XMLSchema-instance\\\"\\n    xsi:schemaLocation=\\\"\\n        http://www.springframework.org/schema/beans     \\n        http://www.springframework.org/schema/beans/spring-beans-3.0.xsd\\n        http://www.springframework.org/schema/context \\n        http://www.springframework.org/schema/context/spring-context-3.0.xsd\\n        http://www.springframework.org/schema/mvc\\n        http://www.springframework.org/schema/mvc/spring-mvc-3.0.xsd\\\"&gt;\\n\\n    &lt;mvc:annotation-driven /&gt;\\n\\n    &lt;context:component-scan base-package=\\\"org.delance\\\" /&gt;\\n\\n    &lt;bean id=\\\"multipartResolver\\\"\\n           class=\\\"org.springframework.web.multipart.commons.CommonsMultipartResolver\\\"/&gt;\\n\\n    &lt;mvc:resources mapping=\\\"/**\\\" location=\\\"/\\\" /&gt;            \\n\\n    &lt;bean class=\\\"org.springframework.web.servlet.mvc.annotation.AnnotationMethodHandlerAdapter\\\"&gt;\\n        &lt;property name=\\\"cacheSeconds\\\" value=\\\"0\\\" /&gt;\\n    &lt;/bean&gt;\\n\\n    &lt;bean\\n        class=\\\"org.springframework.web.servlet.view.InternalResourceViewResolver\\\"&gt;\\n        &lt;property name=\\\"prefix\\\"&gt;\\n            &lt;value&gt;/&lt;/value&gt;\\n        &lt;/property&gt;\\n        &lt;property name=\\\"suffix\\\"&gt;\\n            &lt;value&gt;.jsp&lt;/value&gt;\\n        &lt;/property&gt;\\n    &lt;/bean&gt;\\n\\n&lt;/beans&gt;\\n</code></pre>\\n\\n<p>getting this issue :-</p>\\n\\n<pre><code>    SEVERE: Context initialization failed\\norg.springframework.beans.factory.BeanCreationException: Error creating bean with name 'jobsController': Injection of autowired dependencies failed; nested exception is org.springframework.beans.factory.BeanCreationException: Could not autowire field: private org.delenace.service.JobsService org.delenace.controllers.JobsController.jobsService; nested exception is org.springframework.beans.factory.NoSuchBeanDefinitionException: No qualifying bean of type [org.delenace.service.JobsService] found for dependency: expected at least 1 bean which qualifies as autowire candidate for this dependency. Dependency annotations: {@org.springframework.beans.factory.annotation.Autowired(required=true)}\\n    at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor.postProcessPropertyValues(AutowiredAnnotationBeanPostProcessor.java:289)\\n    at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.populateBean(AbstractAutowireCapableBeanFactory.java:1146)\\n    at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:519)\\n    at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:458)\\n    at org.springframework.beans.factory.support.AbstractBeanFactory$1.getObject(AbstractBeanFactory.java:296)\\n    at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:223)\\n    at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:293)\\n    at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:194)\\n    at org.springframework.beans.factory.support.DefaultListableBeanFactory.preInstantiateSingletons(DefaultListableBeanFactory.java:628)\\n    at org.springframework.context.support.AbstractApplicationContext.finishBeanFactoryInitialization(AbstractApplicationContext.java:932)\\n    at org.springframework.context.support.AbstractApplicationContext.refresh(AbstractApplicationContext.java:479)\\n    at org.springframework.web.context.ContextLoader.configureAndRefreshWebApplicationContext(ContextLoader.java:410)\\n    at org.springframework.web.context.ContextLoader.initWebApplicationContext(ContextLoader.java:306)\\n    at org.springframework.web.context.ContextLoaderListener.contextInitialized(ContextLoaderListener.java:112)\\n    at org.apache.catalina.core.StandardContext.listenerStart(StandardContext.java:4939)\\n    at org.apache.catalina.core.StandardContext.startInternal(StandardContext.java:5434)\\n    at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:150)\\n    at org.apache.catalina.core.ContainerBase.addChildInternal(ContainerBase.java:901)\\n    at org.apache.catalina.core.ContainerBase.addChild(ContainerBase.java:877)\\n    at org.apache.catalina.core.StandardHost.addChild(StandardHost.java:633)\\n    at org.apache.catalina.startup.HostConfig.deployDescriptor(HostConfig.java:656)\\n    at org.apache.catalina.startup.HostConfig$DeployDescriptor.run(HostConfig.java:1635)\\n    at java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:471)\\n    at java.util.concurrent.FutureTask.run(FutureTask.java:262)\\n    at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1145)\\n    at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:615)\\n    at java.lang.Thread.run(Thread.java:744)\\nCaused by: org.springframework.beans.factory.BeanCreationException: Could not autowire field: private org.delenace.service.JobsService org.delenace.controllers.JobsController.jobsService; nested exception is org.springframework.beans.factory.NoSuchBeanDefinitionException: No qualifying bean of type [org.delenace.service.JobsService] found for dependency: expected at least 1 bean which qualifies as autowire candidate for this dependency. Dependency annotations: {@org.springframework.beans.factory.annotation.Autowired(required=true)}\\n    at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor$AutowiredFieldElement.inject(AutowiredAnnotationBeanPostProcessor.java:517)\\n    at org.springframework.beans.factory.annotation.InjectionMetadata.inject(InjectionMetadata.java:87)\\n    at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor.postProcessPropertyValues(AutowiredAnnotationBeanPostProcessor.java:286)\\n    ... 26 more\\nCaused by: org.springframework.beans.factory.NoSuchBeanDefinitionException: No qualifying bean of type [org.delenace.service.JobsService] found for dependency: expected at least 1 bean which qualifies as autowire candidate for this dependency. Dependency annotations: {@org.springframework.beans.factory.annotation.Autowired(required=true)}\\n    at org.springframework.beans.factory.support.DefaultListableBeanFactory.raiseNoSuchBeanDefinitionException(DefaultListableBeanFactory.java:988)\\n    at org.springframework.beans.factory.support.DefaultListableBeanFactory.doResolveDependency(DefaultListableBeanFactory.java:858)\\n    at org.springframework.beans.factory.support.DefaultListableBeanFactory.resolveDependency(DefaultListableBeanFactory.java:770)\\n    at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor$AutowiredFieldElement.inject(AutowiredAnnotationBeanPostProcessor.java:489)\\n    ... 28 more\\n\\nFeb 18  2014 5:01:17 PM org.apache.catalina.core.StandardContext listenerStart\\nSEVERE: Exception sending context initialized event to listener instance of class org.springframework.web.context.ContextLoaderListener\\norg.springframework.beans.factory.BeanCreationException: Error creating bean with name 'jobsController': Injection of autowired dependencies failed; nested exception is org.springframework.beans.factory.BeanCreationException: Could not autowire field: private org.delenace.service.JobsService org.delenace.controllers.JobsController.jobsService; nested exception is org.springframework.beans.factory.NoSuchBeanDefinitionException: No qualifying bean of type [org.delenace.service.JobsService] found for dependency: expected at least 1 bean which qualifies as autowire candidate for this dependency. Dependency annotations: {@org.springframework.beans.factory.annotation.Autowired(required=true)}\\n    at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor.postProcessPropertyValues(AutowiredAnnotationBeanPostProcessor.java:289)\\n    at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.populateBean(AbstractAutowireCapableBeanFactory.java:1146)\\n    at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:519)\\n    at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:458)\\n    at org.springframework.beans.factory.support.AbstractBeanFactory$1.getObject(AbstractBeanFactory.java:296)\\n    at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:223)\\n    at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:293)\\n    at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:194)\\n    at org.springframework.beans.factory.support.DefaultListableBeanFactory.preInstantiateSingletons(DefaultListableBeanFactory.java:628)\\n    at org.springframework.context.support.AbstractApplicationContext.finishBeanFactoryInitialization(AbstractApplicationContext.java:932)\\n    at org.springframework.context.support.AbstractApplicationContext.refresh(AbstractApplicationContext.java:479)\\n    at org.springframework.web.context.ContextLoader.configureAndRefreshWebApplicationContext(ContextLoader.java:410)\\n    at org.springframework.web.context.ContextLoader.initWebApplicationContext(ContextLoader.java:306)\\n    at org.springframework.web.context.ContextLoaderListener.contextInitialized(ContextLoaderListener.java:112)\\n    at org.apache.catalina.core.StandardContext.listenerStart(StandardContext.java:4939)\\n    at org.apache.catalina.core.StandardContext.startInternal(StandardContext.java:5434)\\n    at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:150)\\n    at org.apache.catalina.core.ContainerBase.addChildInternal(ContainerBase.java:901)\\n    at org.apache.catalina.core.ContainerBase.addChild(ContainerBase.java:877)\\n    at org.apache.catalina.core.StandardHost.addChild(StandardHost.java:633)\\n    at org.apache.catalina.startup.HostConfig.deployDescriptor(HostConfig.java:656)\\n    at org.apache.catalina.startup.HostConfig$DeployDescriptor.run(HostConfig.java:1635)\\n    at java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:471)\\n    at java.util.concurrent.FutureTask.run(FutureTask.java:262)\\n    at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1145)\\n    at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:615)\\n    at java.lang.Thread.run(Thread.java:744)\\nCaused by: org.springframework.beans.factory.BeanCreationException: Could not autowire field: private org.delenace.service.JobsService org.delenace.controllers.JobsController.jobsService; nested exception is org.springframework.beans.factory.NoSuchBeanDefinitionException: No qualifying bean of type [org.delenace.service.JobsService] found for dependency: expected at least 1 bean which qualifies as autowire candidate for this dependency. Dependency annotations: {@org.springframework.beans.factory.annotation.Autowired(required=true)}\\n    at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor$AutowiredFieldElement.inject(AutowiredAnnotationBeanPostProcessor.java:517)\\n    at org.springframework.beans.factory.annotation.InjectionMetadata.inject(InjectionMetadata.java:87)\\n    at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor.postProcessPropertyValues(AutowiredAnnotationBeanPostProcessor.java:286)\\n    ... 26 more\\nCaused by: org.springframework.beans.factory.NoSuchBeanDefinitionException: No qualifying bean of type [org.delenace.service.JobsService] found for dependency: expected at least 1 bean which qualifies as autowire candidate for this dependency. Dependency annotations: {@org.springframework.beans.factory.annotation.Autowired(required=true)}\\n    at org.springframework.beans.factory.support.DefaultListableBeanFactory.raiseNoSuchBeanDefinitionException(DefaultListableBeanFactory.java:988)\\n    at org.springframework.beans.factory.support.DefaultListableBeanFactory.doResolveDependency(DefaultListableBeanFactory.java:858)\\n    at org.springframework.beans.factory.support.DefaultListableBeanFactory.resolveDependency(DefaultListableBeanFactory.java:770)\\n    at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor$AutowiredFieldElement.inject(AutowiredAnnotationBeanPostProcessor.java:489)\\n    ... 28 more\\n</code></pre>\\n\"",
    "reco2": "Loading both mvc-dispatcher-servlet.xml and applicationContext.xml?",
    "reco3": "Server fails to start  Spring throws BeanDefinitionParsingException",
    "reco1": "I am getting &quot;java.lang.Exception: java.lang.IllegalStateException&quot; when i try to run my code"
  },
  {
    "index": 130189,
    "votes": 5,
    "tags": [
      "java",
      "spring"
    ],
    "timestamp": 1388710556,
    "question": "Spring configuration XML schema: with or without version?",
    "answers": 2,
    "content": "<p>I am new to Spring. One thing confuses me is that sometimes I see XML configuration files with versioned schemas  yet sometimes with non-versioned ones. For example  sometimes I see something like</p>\\n\\n<pre><code>&lt;?xml version=\\1.0\\\" encoding=\\\"UTF-8\\\"?&gt;\\n&lt;beans xmlns=\\\"http://www.springframework.org/schema/beans\\\"\\n       xmlns:xsi=\\\"http://www.w3.org/2001/XMLSchema-instance\\\"\\n       xmlns:context=\\\"http://www.springframework.org/schema/context\\\"\\n       xsi:schemaLocation=\\\"http://www.springframework.org/schema/beans\\n        http://www.springframework.org/schema/beans/spring-beans-4.0.xsd\\n        http://www.springframework.org/schema/context\\n        http://www.springframework.org/schema/context/spring-context-4.0.xsd\\\"&gt;\\n\\n    &lt;context:annotation-config/&gt;\\n\\n    &lt;context:component-scan base-package=\\\"base.package\\\"/&gt;\\n\\n&lt;/beans&gt;\\n</code></pre>\\n\\n<p>And sometimes like this:</p>\\n\\n<pre><code>&lt;?xml version=\\\"1.0\\\" encoding=\\\"UTF-8\\\"?&gt;\\n&lt;beans xmlns=\\\"http://www.springframework.org/schema/beans\\\"\\n       xmlns:xsi=\\\"http://www.w3.org/2001/XMLSchema-instance\\\"\\n       xmlns:context=\\\"http://www.springframework.org/schema/context\\\"\\n       xsi:schemaLocation=\\\"http://www.springframework.org/schema/beans\\n        http://www.springframework.org/schema/beans/spring-beans.xsd\\n        http://www.springframework.org/schema/context\\n        http://www.springframework.org/schema/context/spring-context.xsd\\\"&gt;\\n\\n    &lt;context:annotation-config/&gt;\\n\\n    &lt;context:component-scan base-package=\\\"base.package\\\"/&gt;\\n\\n&lt;/beans&gt;\\n</code></pre>\\n\\n<p>Note that the <code>spring-beans</code> and <code>spring-context</code> schemas are different in the two examples.</p>\\n\\n<p>So  my question is  which style would you use and why? In particular  will the versioned schema become unavailable in the future  and will the non-versioned schema keep compatible with a current application when Spring updates the schema? </p>\\n\\n<p>A side question is  where can I find a list of the versioned spring schemas?</p>\\n\\n<p>Many thanks!</p>\\n\"",
    "reco2": "Using Spring bean value in &lt;resources&gt; tag",
    "reco3": "NoClassDefFoundError: org/codehaus/jackson/Versioned using Jackson JSON parser",
    "reco1": "Spring JPA + dynamically switch the datasource between schemas in postgresql"
  },
  {
    "index": 25682,
    "votes": 4,
    "tags": [
      "java",
      "spring"
    ],
    "timestamp": 1401115346,
    "question": "Conditional Spring configuration",
    "answers": 3,
    "content": "<p>Is it possible to use conditional expressions in a Spring config?</p>\\n\\n<p>E.g. I'd like to define two different connectors like this:</p>\\n\\n<p>Connector 1:</p>\\n\\n<pre><code>&lt;spring:bean id=\\MyConnector\\\" class=\\\"org.test.provider.DBConnector\\\"&gt;\\n    &lt;spring:property name=\\\"host\\\" value=\\\"${my.config.host}\\\"/&gt;\\n    &lt;spring:property name=\\\"user\\\" value=\\\"${my.config.user}\\\"/&gt;\\n    &lt;spring:property name=\\\"password\\\" value=\\\"${my.config.password}\\\"/&gt;\\n&lt;/spring:bean&gt;\\n</code></pre>\\n\\n<p>Connector 2:</p>\\n\\n<pre><code>&lt;spring:bean id=\\\"MyConnector\\\" class=\\\"org.test.provider.FileSystemConnector\\\"&gt;\\n    &lt;spring:property name=\\\"path\\\" value=\\\"${my.config.path}\\\"/&gt;\\n&lt;/spring:bean&gt;\\n</code></pre>\\n\\n<p>Then  later  use one of those like this:</p>\\n\\n<pre><code>&lt;spring:bean id=\\\"LookupCommand\\\" class=\\\"org.test.lookup.LookupCommand\\\"\\n    scope=\\\"prototype\\\"&gt;\\n    &lt;spring:property name=\\\"connector\\\" ref=\\\"MyConnector\\\"/&gt;\\n&lt;/spring:bean&gt;\\n</code></pre>\\n\\n<p>Depending on  lets say  ${my.config.connectorType} from my .cfg file  I'd like to chose/activate one of those two:</p>\\n\\n<pre><code>if ${my.config.connectorType} == DB then\\n\\n    &lt;spring:bean id=\\\"MyConnector\\\" class=\\\"org.test.provider.DBConnector\\\"&gt;\\n        &lt;spring:property name=\\\"host\\\" value=\\\"${my.config.host}\\\"/&gt;\\n        &lt;spring:property name=\\\"user\\\" value=\\\"${my.config.user}\\\"/&gt;\\n        &lt;spring:property name=\\\"password\\\" value=\\\"${my.config.password}\\\"/&gt;\\n    &lt;/spring:bean&gt;\\n\\nelse\\n\\n    &lt;spring:bean id=\\\"MyConnector\\\" class=\\\"org.test.provider.FileSystemConnector\\\"&gt;\\n        &lt;spring:property name=\\\"path\\\" value=\\\"${my.config.path}\\\"/&gt;\\n    &lt;/spring:bean&gt;\\nend\\n...\\n&lt;spring:bean id=\\\"LookupCommand\\\" class=\\\"org.test.lookup.LookupCommand\\\"\\n    scope=\\\"prototype\\\"&gt;\\n    &lt;spring:property name=\\\"connector\\\" ref=\\\"MyConnector\\\"/&gt;\\n&lt;/spring:bean&gt;\\n</code></pre>\\n\"",
    "reco2": "Spring 4 - java configuration of xml configuration",
    "reco3": "Spring framework: Register conversion-service with java config",
    "reco1": "Conditional statements in Spring configuration"
  },
  {
    "index": 33049,
    "votes": 4,
    "tags": [
      "java",
      "spring"
    ],
    "timestamp": 1399984741,
    "question": "Spring: How to replace the Environment bean created in Application Context",
    "answers": 1,
    "content": "<p>I am looking to replace the Environment bean used by Spring with my own implementation. Is this bad-practice  and if not  how can I do this cleanly? Currently I have created a bean that implements the Environment interface and uses the existing Environment bean  but this means all the configuration code needing the Environment bean must now use my custom Environment bean. I would think it would be cleaner to replace Springs Environment bean with my own  then no configuration needing it would need to change. Currently the only way I can think to do this would be to either create my own ApplicationContext thus setting the environment to my own  or to have something be ApplicationContextAware and set the environment there. Both of these seem to be a bit hokey to me.</p>\\n\\n<p>Constraints:</p>\\n\\n<ul>\\n<li>I am using the latest version of Spring3.</li>\\n<li>I am using Java based configuration; not XML</li>\\n</ul>\\n\\n<p>Thank you.</p>\\n\\n<p><strong>Edit: Background</strong></p>\\n\\n<p>I suppose I should explain why I want to do this in case my thinking is flawed. I was avoid this in order to avoid the nonconstructive \\why would you want to do that?\\\" responses.</p>\\n\\n<p>The Spring Environment bean  when looking for property values  uses a set of property sources. A typical stack looks like this (but is not limited to):</p>\\n\\n<ul>\\n<li>JNDI</li>\\n<li>System Properties (set via -Dmyprop=foo)</li>\\n<li>Environment Variables</li>\\n<li>...</li>\\n</ul>\\n\\n<p>For security reason  it is necessary to encrypt some of these properties (e.g. database passwords). The go to solution is to use Jasypt for property encryption. However  the Spring/Jasypt only provide a means of inserting a new property source into the environment. So:</p>\\n\\n<ul>\\n<li>Property file with potentially encrypted values</li>\\n<li>JNDI</li>\\n<li>System Properties (set via -Dmyprop=foo)</li>\\n<li>Environment Variables</li>\\n<li>...</li>\\n</ul>\\n\\n<p>However  this is not ideal as this means that properties can only be stored in a single file to be maintained by the operations group or that properties would be spread out amongst property files  environment variables  etc. In addition  I feel that properties have the potential of being encrypted regardless of their property source.</p>\\n\\n<p>So this lead me to thinking that I either need to decrypt the properties in my code wherever I attempt to access them from the environment  or I need to create my own Environment bean that can do this for me.</p>\\n\\n<p>I'm welcome to hear <strong>constructive</strong> comments and alternatives.</p>\\n\\n<p><strong>EDIT: Adding solution based on answer from M. Deinum</strong> </p>\\n\\n<pre><code>public class EnvironmentBeanFactoryPostProcessor implements BeanFactoryPostProcessor {\\n\\n    private static final String CONFIGURATION_PROPERTY_PBE_ALGORITHM = \\\"PBE_ALGORITHM\\\";\\n    private static final String CONFIGURATION_PROPERTY_PBE_PASSWORD = \\\"PBE_PASSWORD\\\";\\n\\n    @Override\\n    public void postProcessBeanFactory(ConfigurableListableBeanFactory beanFactory) throws BeansException {\\n        StandardEnvironment environment = (StandardEnvironment) beanFactory.getBean(\\\"environment\\\");\\n\\n        if (environment != null) {\\n            StringEncryptor encryptor = this.getEncryptor(environment);\\n\\n            MutablePropertySources mutablePropertySources = environment.getPropertySources();\\n\\n            for (PropertySource&lt;?&gt; propertySource : mutablePropertySources) {\\n                mutablePropertySources.replace(\\n                        propertySource.getName()  \\n                        new EncryptablePropertySourcePropertySource(propertySource.getName()  propertySource  encryptor));\\n            }\\n        }\\n    }\\n\\n    private StringEncryptor getEncryptor(Environment environment) {\\n        StandardPBEStringEncryptor encryptor = new StandardPBEStringEncryptor();\\n\\n        String algorithm = environment.getProperty(CONFIGURATION_PROPERTY_PBE_ALGORITHM);\\n        if (algorithm != null) {\\n            encryptor.setAlgorithm(algorithm);\\n        }\\n\\n        String password = environment.getProperty(CONFIGURATION_PROPERTY_PBE_PASSWORD);\\n        if (password != null) {\\n            encryptor.setPassword(password);\\n        }\\n\\n        return encryptor;\\n    }\\n\\n    private class EncryptablePropertySourcePropertySource extends PropertySource&lt;PropertySource&lt;?&gt;&gt; {\\n\\n        private StringEncryptor stringEncryptor;\\n\\n        private TextEncryptor textEncryptor;\\n\\n        public EncryptablePropertySourcePropertySource(final String name  final PropertySource&lt;?&gt; propertySource  final StringEncryptor encryptor) {\\n            super(name  propertySource);\\n\\n            this.stringEncryptor = encryptor;\\n        }\\n\\n        public EncryptablePropertySourcePropertySource(final String name  final PropertySource&lt;?&gt; propertySource  final TextEncryptor encryptor) {\\n            super(name  propertySource);\\n\\n            this.textEncryptor = encryptor;\\n        }\\n\\n        @Override\\n        public Object getProperty(String name) {\\n            Object value = this.source.getProperty(name);\\n\\n            if (value != null &amp;&amp; value instanceof String) {\\n                value = this.decode((String) value);\\n            }\\n\\n            return value;\\n        }\\n\\n        private String decode(String encodedValue) {\\n            if (!PropertyValueEncryptionUtils.isEncryptedValue(encodedValue)) {\\n                return encodedValue;\\n            }\\n\\n            if (this.stringEncryptor != null) {\\n                return PropertyValueEncryptionUtils.decrypt(encodedValue  this.stringEncryptor);\\n\\n            }\\n\\n            if (this.textEncryptor != null) {\\n                return PropertyValueEncryptionUtils.decrypt(encodedValue  this.textEncryptor);\\n            }\\n\\n            throw new EncryptionOperationNotPossibleException(\\n                    \\\"Neither a string encryptor nor a text encryptor exist \\\"\\n                    + \\\"for this instance of EncryptableProperties. This is usually \\\" \\n                    + \\\"caused by the instance having been serialized and then \\\"\\n                    + \\\"de-serialized in a different classloader or virtual machine  \\\" \\n                    + \\\"which is an unsupported behaviour (as encryptors cannot be \\\"\\n                    + \\\"serialized themselves)\\\");\\n        }\\n\\n    }\\n}\\n</code></pre>\\n\"",
    "reco2": "Switching between property files dynamically by changing environment name in Spring",
    "reco3": "Can JAVA change environment variables?",
    "reco1": "Spring Web MVC Environment @Autowired To Get Only System Property throws NullPointerException"
  },
  {
    "index": 44460,
    "votes": 4,
    "tags": [
      "java",
      "spring"
    ],
    "timestamp": 1398446018,
    "question": "When to use Spring @ConfigurationCondition vs. @Condition?",
    "answers": 2,
    "content": "<p>Spring 4 has two new annotations <code>@Condition</code> and <code>@ConfigurationConditon</code> for optional controlling if a bean added to the spring application context or not. The Java doc dose not provide enough context / big picture to understand the use cases for <code>@ConfigurationCondition</code>. </p>\\n\\n<p>When should this <code>@ConfigurationCondition</code> be used vs. <code>@Condition</code>?</p>\\n\\n<pre><code>public interface ConfigurationCondition extends Condition {\\n\\n    /**\\n     * Returns the {@link ConfigurationPhase} in which the condition should be evaluated.\\n     */\\n    ConfigurationPhase getConfigurationPhase();\\n\\n    /**\\n     * The various configuration phases where the condition could be evaluated.\\n     */\\n    public static enum ConfigurationPhase {\\n\\n        /**\\n         * The {@link Condition} should be evaluated as a {@code @Configuration} class is\\n         * being parsed.\\n         *\\n         * &lt;p&gt;If the condition does not match at this point the {@code @Configuration}\\n         * class will not be added.\\n         */\\n        PARSE_CONFIGURATION \\n\\n        /**\\n         * The {@link Condition} should be evaluated when adding a regular (non\\n         * {@code @Configuration}) bean. The condition will not prevent\\n         * {@code @Configuration} classes from being added.\\n         *\\n         * &lt;p&gt;At the time that the condition is evaluated all {@code @Configuration}s\\n         * will have been parsed.\\n         */\\n        REGISTER_BEAN\\n    }\\n\\n}\\n</code></pre>\\n",
    "reco2": "Declare beans with identical properties",
    "reco3": "PrintWriter object doesn&#39;t print all the lines in text document to out put file",
    "reco1": "How to force the Spring Test Context Framework to Reinitalize Spring?"
  },
  {
    "index": 83251,
    "votes": 4,
    "tags": [
      "java",
      "spring"
    ],
    "timestamp": 1394345087,
    "question": "How to define a bean of String array in Spring (using XML configuration)",
    "answers": 3,
    "content": "<p>I am trying to define a Spring bean of type <code>String[]</code> and now able to find a way to do so. Sample program is shown below:</p>\\n\\n<pre><code>@Component(\\sampleClass\\\")\\npublic class SampleClass {\\n    @Value(\\\"#{someArrayId}\\\")\\n    private String[] someArray;\\n\\n    public void doWithArray() {\\n        System.out.println(Arrays.toString(someArray));\\n    }\\n}\\n</code></pre>\\n\\n<p><strong>Spring XML Configuration</strong></p>\\n\\n<pre><code>&lt;context:annotation-config /&gt;\\n&lt;context:component-scan base-package=\\\"com.demo.spring\\\" /&gt;\\n\\n&lt;util:list id=\\\"someArrayId\\\"&gt;\\n    &lt;array&gt;\\n        &lt;value&gt;Tiger&lt;/value&gt;\\n        &lt;value&gt;Lion&lt;/value&gt;\\n    &lt;/array&gt;\\n&lt;/util:list&gt;\\n</code></pre>\\n\\n<p>When I am running the program  I get following exception:</p>\\n\\n<pre><code>Exception in thread \\\"main\\\" org.springframework.beans.factory.BeanCreationException: Error creating bean with name 'sampleClass': Injection of autowired dependencies failed; nested exception is org.springframework.beans.factory.BeanCreationException: Could not autowire field: private java.lang.String[] com.demo.spring.SampleClass.someArray; nested exception is org.springframework.beans.ConversionNotSupportedException: Failed to convert value of type 'java.util.ArrayList' to required type 'java.lang.String[]'; nested exception is java.lang.IllegalStateException: Cannot convert value of type [java.lang.Object[]] to required type [java.lang.String]: no matching editors or conversion strategy found\\n</code></pre>\\n\\n<p>I kind of understand what Spring is complaining  but I don't know how to fix it.</p>\\n\\n<p>Appreciate if anyone can help.</p>\\n\\n<p>Thanks  NN</p>\\n\"",
    "reco2": "How to configure customEditors property of CustomEditorConfigurer in Spring 4.0.6",
    "reco3": "Declare beans with identical properties",
    "reco1": "PrintWriter object doesn&#39;t print all the lines in text document to out put file"
  },
  {
    "index": 96554,
    "votes": 4,
    "tags": [
      "java",
      "spring"
    ],
    "timestamp": 1392868812,
    "question": "How do I lazily register Spring &#39;bean definitions&#39; in order to improve startup time?",
    "answers": 1,
    "content": "<p>Our Java Web application loads with over 1000 plugins that are all registered by us as Spring beans using the ApplicationContext#registerBeanDefinition() method.  These beans often have other dependencies which we also register as spring beans using the same method (for a total of about 7 000 Spring bean definitions...not including our core application code).  </p>\\n\\n<p>The problem is that the startup time is long (approximately 6.5 minutes of just plugin bean definition loading).  We would prefer to spread this load time out over a much longer period while our app is actually processing other requests utilizing plugins that have already had their bean definitions registered.  Most of the plugins are seldom used.  Thus  we would really like to lazily register our bean definitions (<strong>this is different from lazy-init of singleton beans which we already do today</strong>). However  this seems costly with any existing Spring ApplicationContext that supports <em>'hot' refresh()</em> calls (as the Spring documentation refers to it).  </p>\\n\\n<p>The Spring ApplicationContext classes that support 'hot' refresh start by destroying all of the singleton beans.  Most of our plugins are singletons  so each call to refresh() would cause most of our plugins to be destroyed and then recreated...costly.  If we don't call refresh  then our newly loaded plugin beans will not be post-processed (e.g.  AOP  etc...).</p>\\n\\n<p>We can guarantee that when we are forced to load another plugin  we will also load any of its dependencies that are not already loaded.  So  we would never ben in a situation where a loaded bean definition is invalid.</p>\\n\\n<p>It seems to me that this calls for a new type of Spring ApplicationContext that supports 'hot' refresh  but only for the purpose of adding new bean definitions.  Preexisting bean definitions are not removed/reloaded  and not re-processed by BeanFactoryPostProcessors on subsequent refresh() calls  and pre-existing singletons are not destroyed!  </p>\\n\\n<p>Does this already exist?.  Is there a better solution that I'm overlooking?</p>\\n",
    "reco2": "get bean definitions in order they are defined",
    "reco3": "how to dynamically load configuraiton file in spring",
    "reco1": "If one bean is managed by Spring does this mean all created beans also have to be managed"
  },
  {
    "index": 120175,
    "votes": 4,
    "tags": [
      "java",
      "spring"
    ],
    "timestamp": 1390157716,
    "question": "Spring context dynamic change",
    "answers": 1,
    "content": "<p>I've read that dynamic bean definition change. I try it in a simple code example (see code below)  and I find it very attractive in situations where I don't want to stop server but add/change bean definition.</p>\\n\\n<p><em><strong>Questions:</em></strong> </p>\\n\\n<ol>\\n<li><em>Is it safe do to so (see code below)?</em></li>\\n<li><p><em>I've read that it is possible to achieve bean definition change in runtime with help of <code>StaticApplicationContex</code> or <code>BeanPostProcessor</code> or <code>BeanFactoryPostProcessor</code>? So what is the difference?</em></p>\\n\\n<pre><code>public class Main {\\nfinal static String header = \\&lt;?xml version=\\\\\\\"1.0\\\\\\\" encoding=\\\\\\\"UTF-8\\\\\\\"?&gt;\\\\n\\\" +\\n        \\\"&lt;beans xmlns=\\\\\\\"http://www.springframework.org/schema/beans\\\\\\\"\\\\n\\\" +\\n        \\\"       xmlns:xsi=\\\\\\\"http://www.w3.org/2001/XMLSchema-instance\\\\\\\"\\\\n\\\" +\\n        \\\"       xmlns:context=\\\\\\\"http://www.springframework.org/schema/context\\\\\\\"\\\\n\\\" +\\n        \\\"       xsi:schemaLocation=\\\\\\\"http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd http://www.springframework.org/schema/context http://www.springframework.org/schema/context/spring-context.xsd\\\\\\\"&gt;\\\\n\\\" +\\n        \\\"    &lt;context:annotation-config /&gt;\\\\n\\\" +\\n        \\\"    &lt;context:component-scan base-package=\\\\\\\"vbah\\\\\\\"/&gt;\\\";\\n\\nfinal static String contextA =\\n        \\\"&lt;bean id=\\\\\\\"test\\\\\\\" class=\\\\\\\"java.lang.String\\\\\\\"&gt;\\\\n\\\" +\\n                \\\"\\\\t\\\\t&lt;constructor-arg value=\\\\\\\"fromContextA\\\\\\\"/&gt;\\\\n\\\" +\\n                \\\"&lt;/bean&gt;&lt;/beans&gt;\\\";\\n\\nfinal static String contextB =\\n        \\\"&lt;bean id=\\\\\\\"test\\\\\\\" class=\\\\\\\"java.lang.String\\\\\\\"&gt;\\\\n\\\" +\\n                \\\"\\\\t\\\\t&lt;constructor-arg value=\\\\\\\"fromContextB\\\\\\\"/&gt;\\\\n\\\" +\\n                \\\"&lt;/bean&gt;&lt;/beans&gt;\\\";\\n\\npublic static void main(String[] args) throws IOException {\\n    //create a single context file\\n    final File contextFile = new File(\\\"src/resources/spring-config.xml\\\");\\n\\n    //write the first context into it\\n    FileUtils.writeStringToFile(contextFile  header + contextA);\\n\\n    //create a spring context\\n    FileSystemXmlApplicationContext context = new FileSystemXmlApplicationContext(\\n            new String[]{contextFile.getPath()}\\n    );\\n\\n    //echo \\\"fromContextA\\\"\\n    System.out.println(context.getBean(\\\"test\\\"));\\n\\n    //write the second context into it\\n    FileUtils.writeStringToFile(contextFile  header + contextB);\\n\\n    //refresh the context\\n    context.refresh();\\n\\n    //echo \\\"fromContextB\\\"\\n    System.out.println(context.getBean(\\\"test\\\"));\\n}\\n}\\n</code></pre></li>\\n</ol>\\n\\n<p><em><strong>EDIT:</em></strong></p>\\n\\n<p>Can you answer the questions below:</p>\\n\\n<ol>\\n<li>As I understand <code>BeanPostProcess</code> allow you to modify already existed bean instances at runtime by wrapping the object with proxy. Am I right?</li>\\n<li><p>AbstractApplicationContext#refresh() drop all singleton beans and recreate them. </p>\\n\\n<ul>\\n<li>But If I want to change the definition of  prototype/custom scoped bean?</li>\\n<li>If I've got two beans: A and B. A has reference to B. If I change the bean definition in such way that it doesn't contain definition of B. Than B instances will be destroyed  but new instances   won't be created. Than A will get a <code>null</code> dependency. Am I right?</li>\\n</ul></li>\\n<li><p><code>StaticApplicationContext</code> and <code>BeanFactoryPostProcessor</code> both allow me to change a bean definition in runtime. But what are the difference  pros/cons?</p></li>\\n<li><strong>[Main question]</strong> Why Spring has 3 mechanism to achieve the same goal. Can you make a brief compoarison (or usecases examples) between <code>AbstractApplicationContext#refresh()</code>  <code>StaticApplicationContext</code> and <code>BeanFactoryPostProcessor</code> please.</li>\\n</ol>\\n\"",
    "reco2": "Spring - Set properties on beans imported from a different context file",
    "reco3": "why does a void method without void in the head of the method definition not cause error?",
    "reco1": "Spring injection tricks"
  },
  {
    "index": 149710,
    "votes": 4,
    "tags": [
      "java",
      "spring"
    ],
    "timestamp": 1414119414,
    "question": "Spring: nested exception is java.lang.NoClassDefFoundError: org/aopalliance/aop/Advice",
    "answers": 6,
    "content": "<p><strong>Stack trace:</strong></p>\\n\\n<pre><code>Oct 24  2014 8:12:04 AM org.springframework.context.support.ClassPathXmlApplicationContext prepareRefresh\\nINFO: Refreshing org.springframework.context.support.ClassPathXmlApplicationContext@50df2e: startup date [Fri Oct 24 08:12:04 IST 2014]; root of context hierarchy\\nOct 24  2014 8:12:05 AM org.springframework.beans.factory.xml.XmlBeanDefinitionReader loadBeanDefinitions\\nINFO: Loading XML bean definitions from class path resource [knights-aop.xml]\\nException in thread \\main\\\" org.springframework.beans.factory.BeanDefinitionStoreException: Unexpected exception parsing XML document from class path resource [knights-aop.xml]; nested exception is java.lang.NoClassDefFoundError: org/aopalliance/aop/Advice\\n    at org.springframework.beans.factory.xml.XmlBeanDefinitionReader.doLoadBeanDefinitions(XmlBeanDefinitionReader.java:412)\\n    at org.springframework.beans.factory.xml.XmlBeanDefinitionReader.loadBeanDefinitions(XmlBeanDefinitionReader.java:334)\\n    at org.springframework.beans.factory.xml.XmlBeanDefinitionReader.loadBeanDefinitions(XmlBeanDefinitionReader.java:302)\\n    at org.springframework.beans.factory.support.AbstractBeanDefinitionReader.loadBeanDefinitions(AbstractBeanDefinitionReader.java:174)\\n    at org.springframework.beans.factory.support.AbstractBeanDefinitionReader.loadBeanDefinitions(AbstractBeanDefinitionReader.java:209)\\n    at org.springframework.beans.factory.support.AbstractBeanDefinitionReader.loadBeanDefinitions(AbstractBeanDefinitionReader.java:180)\\n    at org.springframework.beans.factory.support.AbstractBeanDefinitionReader.loadBeanDefinitions(AbstractBeanDefinitionReader.java:243)\\n    at org.springframework.context.support.AbstractXmlApplicationContext.loadBeanDefinitions(AbstractXmlApplicationContext.java:127)\\n    at org.springframework.context.support.AbstractXmlApplicationContext.loadBeanDefinitions(AbstractXmlApplicationContext.java:93)\\n    at org.springframework.context.support.AbstractRefreshableApplicationContext.refreshBeanFactory(AbstractRefreshableApplicationContext.java:130)\\n    at org.springframework.context.support.AbstractApplicationContext.obtainFreshBeanFactory(AbstractApplicationContext.java:537)\\n    at org.springframework.context.support.AbstractApplicationContext.refresh(AbstractApplicationContext.java:451)\\n    at org.springframework.context.support.ClassPathXmlApplicationContext.&lt;init&gt;(ClassPathXmlApplicationContext.java:139)\\n    at org.springframework.context.support.ClassPathXmlApplicationContext.&lt;init&gt;(ClassPathXmlApplicationContext.java:83)\\n    at com.java.spring.SpringDemo.main(SpringDemo.java:12)\\nCaused by: java.lang.NoClassDefFoundError: org/aopalliance/aop/Advice\\n    at org.springframework.aop.config.ConfigBeanDefinitionParser.getAdviceClass(ConfigBeanDefinitionParser.java:410)\\n    at org.springframework.aop.config.ConfigBeanDefinitionParser.createAdviceDefinition(ConfigBeanDefinitionParser.java:366)\\n    at org.springframework.aop.config.ConfigBeanDefinitionParser.parseAdvice(ConfigBeanDefinitionParser.java:332)\\n    at org.springframework.aop.config.ConfigBeanDefinitionParser.parseAspect(ConfigBeanDefinitionParser.java:227)\\n    at org.springframework.aop.config.ConfigBeanDefinitionParser.parse(ConfigBeanDefinitionParser.java:115)\\n    at org.springframework.beans.factory.xml.NamespaceHandlerSupport.parse(NamespaceHandlerSupport.java:73)\\n    at org.springframework.beans.factory.xml.BeanDefinitionParserDelegate.parseCustomElement(BeanDefinitionParserDelegate.java:1438)\\n    at org.springframework.beans.factory.xml.BeanDefinitionParserDelegate.parseCustomElement(BeanDefinitionParserDelegate.java:1428)\\n    at org.springframework.beans.factory.xml.DefaultBeanDefinitionDocumentReader.parseBeanDefinitions(DefaultBeanDefinitionDocumentReader.java:195)\\n    at org.springframework.beans.factory.xml.DefaultBeanDefinitionDocumentReader.doRegisterBeanDefinitions(DefaultBeanDefinitionDocumentReader.java:139)\\n    at org.springframework.beans.factory.xml.DefaultBeanDefinitionDocumentReader.registerBeanDefinitions(DefaultBeanDefinitionDocumentReader.java:108)\\n    at org.springframework.beans.factory.xml.XmlBeanDefinitionReader.registerBeanDefinitions(XmlBeanDefinitionReader.java:493)\\n    at org.springframework.beans.factory.xml.XmlBeanDefinitionReader.doLoadBeanDefinitions(XmlBeanDefinitionReader.java:390)\\n    ... 14 more\\n</code></pre>\\n\\n<p>config xml</p>\\n\\n<pre><code>&lt;?xml version=\\\"1.0\\\" encoding=\\\"UTF-8\\\"?&gt;\\n&lt;beans xmlns=\\\"http://www.springframework.org/schema/beans\\\"\\n xmlns:xsi=\\\"http://www.w3.org/2001/XMLSchema-instance\\\"\\n xmlns:aop=\\\"http://www.springframework.org/schema/aop\\\"\\n xsi:schemaLocation=\\\"http://www.springframework.org/schema/beans \\n    http://www.springframework.org/schema/beans/spring-beans-3.0.xsd\\n        http://www.springframework.org/schema/aop \\n    http://www.springframework.org/schema/aop/spring-aop-3.0.xsd\\\"&gt;\\n\\n  &lt;bean id=\\\"knight\\\" class=\\\"com.java.spring.BraveKnight\\\"&gt;\\n    &lt;constructor-arg ref=\\\"quest\\\" /&gt;\\n  &lt;/bean&gt;\\n\\n  &lt;bean id=\\\"quest\\\" class=\\\"com.java.spring.ResqueDamselQuest\\\" /&gt;\\n\\n  &lt;bean id=\\\"minstrel\\\" \\n     class=\\\"com.java.spring.Minstrel\\\" /&gt; &lt;!--&lt;co id=\\\"co_minstrel_bean\\\"/&gt;--&gt;\\n\\n  &lt;aop:config&gt;\\n    &lt;aop:aspect ref=\\\"minstrel\\\"&gt;\\n\\n      &lt;aop:pointcut id=\\\"embark\\\" \\n          expression=\\\"execution(* *.embarkOnQuest(..))\\\" /&gt; &lt;!--&lt;co id=\\\"co_define_pointcut\\\"/&gt;--&gt;\\n\\n      &lt;aop:before pointcut-ref=\\\"embark\\\"\\n                  method=\\\"singBeforeQuest\\\"/&gt;    &lt;!--&lt;co id=\\\"co_minstrel_before_advice\\\"/&gt;--&gt;\\n\\n      &lt;aop:after pointcut-ref=\\\"embark\\\"\\n                 method=\\\"singAfterQuest\\\"/&gt;     &lt;!--&lt;co id=\\\"co_minstrel_after_advice\\\"/&gt;--&gt;\\n\\n    &lt;/aop:aspect&gt;\\n  &lt;/aop:config&gt;\\n&lt;/beans&gt;\\n</code></pre>\\n\\n<p>My main class:</p>\\n\\n<pre><code>public class SpringDemo {\\n    public static void main(String[] args) {\\n        final ApplicationContext applicationContext = new ClassPathXmlApplicationContext(\\\"knights-aop.xml\\\");\\n        final Knight braveKnight = (Knight) applicationContext.getBean(\\\"knight\\\");\\n        braveKnight.embarkOnQuest();\\n    }\\n}\\n</code></pre>\\n\\n<p>I also tried adding: aopalliance.jar &amp; aopalliance-alpha1.jar individually and together but the error won't go away.</p>\\n\\n<p>There are similar questions here on SO: <a href=\\\"http://stackoverflow.com/q/16458816/768894\\\">spring nested exception is java.lang.NoClassDefFoundError: org/aopalliance/aop/Advice</a></p>\\n\\n<p><strong>###########EDIT###########Update: Other classes in the project##</strong><br>\\nMinstrel.java</p>\\n\\n<pre><code>package com.java.spring;\\n\\n    public class Minstrel {\\n        public void singBeforeQuest(){\\n            System.out.println(\\\"Fa la la Theknight is so brave!\\\");\\n        }\\n        public void singAfterQuest(){\\n            System.out.println(\\n                    \\\"Tee hee he The brave knight did embark on a quest!\\\");\\n        }\\n    }\\n</code></pre>\\n\\n<p>BraveKnight.java</p>\\n\\n<pre><code>package com.java.spring;\\n\\npublic class BraveKnight implements Knight {\\n    private Quest quest;\\n\\n    BraveKnight(Quest quest) {\\n        this.quest = quest;\\n    }\\n\\n    @Override\\n    public void embarkOnQuest() {\\n        quest.embark();\\n    }\\n}\\n</code></pre>\\n\\n<p>RescueDamselQuest.java</p>\\n\\n<pre><code>package com.java.spring;\\n\\n    public class RescueDamselQuest implements Quest {\\n\\n        @Override\\n        public void embark() {\\n            System.out.println(\\\"Damsel rescue quest is on.\\\");\\n        }\\n    }\\n</code></pre>\\n\\n<p><br>I am using Spring 3.2<br>\\n<strong>##################EDIT2##################</strong><br>I am not using Maven. Please don't provide Maven related solution unless Spring AOP is impossible without it.\\n<br><strong>Project Snap:</strong><br><img src=\\\"http://i.stack.imgur.com/UnZTU.jpg\\\" alt=\\\"enter image description here\\\">\\n<br>Inside SPRING LIBRARY I have all the jar that got downloaded with Spring. Is it possible that some spring specific jar conflicting with aopalliance jar?\\n<br><br><strong>If anyone has some similar &amp; simple working example without Maven  please provide it.</strong><br><br>\\nThanks<br>~Mohit</p>\\n\"",
    "reco2": "Spring AOP : How to fix this bug",
    "reco3": "Spring AOP gives IllegalArgumentException with Java 8",
    "reco1": "How to resolve java.lang.NoClassDefFoundError: org/aopalliance/aop/Advice error?"
  },
  {
    "index": 183464,
    "votes": 4,
    "tags": [
      "java",
      "spring"
    ],
    "timestamp": 1418722892,
    "question": "new ClassPathXmlApplicationContext() creating new set of beans",
    "answers": 1,
    "content": "<p>Does loading the application context in the following manner mean creating another context apart from the context created by a ContextLoader?</p>\\n\\n<p>I require the application context to be loaded for a non-bean class. </p>\\n\\n<pre><code>private static ApplicationContext applicationContext = new ClassPathXmlApplicationContext(\\n            \\channel-integration-context.xml\\\");\\n</code></pre>\\n\\n<p>It seems that it creates another bean context according to my observation. If so what is a better workaround.</p>\\n\\n<p>Please help.</p>\\n\"",
    "reco2": "Wrong spring application context loaded on test",
    "reco3": "get bean definitions without starting context",
    "reco1": "Can we get property of Sytem across different context"
  },
  {
    "index": 91456,
    "votes": 13,
    "tags": [
      "java",
      "swing"
    ],
    "timestamp": 1393474922,
    "question": "Drawing Rectangle in Java Shows Pixel Anomaly",
    "answers": 2,
    "content": "<p>I have a very simple java program that draws a rectangle but when I closely examine the rendered shape  I see two extra pixels that shouldn't be there ...</p>\\n\\n<p><img src=\\http://i.stack.imgur.com/yXuJy.png\\\" alt=\\\"enter image description here\\\">\\nYou can see one extra pixel at below left and one at below right.</p>\\n\\n<p>I am using Windows 7 Professional 64-BIT using JDK 1.8.0.   Here is the program ...</p>\\n\\n<pre><code>    import java.awt.Graphics;\\n    import java.io.IOException;\\n    import javax.swing.JFrame;\\n    import javax.swing.JPanel;\\n\\n    public class JavaBug {\\n\\n    public JavaBug() throws IOException {\\n        JFrame frame = new JFrame();        \\n        frame.add( new JPanel() {\\n        private static final long serialVersionUID = 1L;\\n\\n                public void paintComponent( Graphics g ) {\\n                    super.paintComponent(g);\\n                    g.drawRect(50  50  20  20); \\n                }\\n            });\\n\\n            frame.setSize(400  300);\\n            frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);\\n            frame.setVisible( true );\\n        }\\n\\n        public static void main(String [] args) throws IOException {\\n            new JavaBug();\\n        }\\n    }\\n</code></pre>\\n\"",
    "reco2": "drawing other pixels in java",
    "reco3": "Android round rectangle with 1 coloured corner",
    "reco1": "JAVA : how to add extra time for timestamp"
  },
  {
    "index": 203469,
    "votes": 6,
    "tags": [
      "java",
      "swing"
    ],
    "timestamp": 1406354933,
    "question": "GridBagLayout not aligning images properly",
    "answers": 1,
    "content": "<p>Initially I have a deck Image and a text \\Deck\\\" just below the image which looks fine</p>\\n\\n<p><img src=\\\"http://i.stack.imgur.com/fi2lD.png\\\" alt=\\\"pic1\\\">     </p>\\n\\n<pre><code>public class GuiTut extends JPanel { \\n   private GridBagConstraints c = new GridBagConstraints();\\n   private JLabel deckLabel = new JLabel();\\n\\n   public GuiTut() {\\n        setLayout(new GridBagLayout());  \\n\\n        try {\\n            deck = ImageIO.read(new File(\\\"resources/images/deck.jpg\\\"));  \\n        } catch (Exception e) {}   \\n\\n        c.gridx = 0;\\n        c.gridy = 0;\\n        JLabel deckPic = new JLabel(new ImageIcon(deck));    \\n        add(deckPic  c);\\n\\n        deckLabel.setText(\\\"Deck\\\");\\n        c.gridx = 0;\\n        c.gridy = 1;\\n        add(deckLabel  c);\\n}\\n</code></pre>\\n\\n<p>But after I add my <code>gridLayout</code> panel  my whole GUI design has been messed up. \\nAs you can see my deck image is not aligned properly with the first row of my gridLayout\\nand my text \\\"deck\\\" has been separated by a few wide space.</p>\\n\\n<p><img src=\\\"http://i.stack.imgur.com/0k0Wa.png\\\" alt=\\\"pic2\\\"></p>\\n\\n<pre><code>public class GuiTut extends JPanel { \\n   private GridBagConstraints c = new GridBagConstraints();\\n   private JLabel deckLabel = new JLabel();\\n   private JPanel gridLayoutPanel = new JPanel(new GridLayout(2  0));\\n   private JLabel[] label = new JLabel[14];\\n\\n   public GuiTut() {\\n        setLayout(new GridBagLayout());  \\n\\n        try {\\n            card = ImageIO.read(new File(\\\"resources/images/card.jpg\\\"));  \\n        } catch (Exception e) {} \\n\\n        for(int i = 0; i &lt; 14; i++) {   \\n            label[i] = new JLabel(new ImageIcon(card);\\n            gridLayoutPanel.add(label[i]);\\n        }\\n\\n        try {\\n            deck = ImageIO.read(new File(\\\"resources/images/deck.jpg\\\"));  \\n        } catch (Exception e) {}   \\n\\n        c.gridx = 0;\\n        c.gridy = 0;\\n        JLabel deckPic = new JLabel(new ImageIcon(deck));    \\n        add(deckPic  c);\\n\\n        deckLabel.setText(\\\"Deck\\\");\\n        c.gridx = 0;\\n        c.gridy = 1;\\n        add(deckLabel  c);\\n\\n        c.gridx = 1;\\n        c.gridy = 0;\\n        add(gridLayoutPanel  c);\\n}\\n</code></pre>\\n\\n<p>What I want is the deck image to be align with the first row of the <code>gridLayout</code> and the text <code>\\\"deck\\\"</code> just right below the deck image but I can't seem to get it.</p>\\n\"",
    "reco2": "Java shuffle card deck",
    "reco3": "Avoid class from adding new objects on ArrayList",
    "reco1": "Basic Poker Program - Printing Deck"
  },
  {
    "index": 77124,
    "votes": 5,
    "tags": [
      "java",
      "swing"
    ],
    "timestamp": 1394920923,
    "question": "set size of JPanel",
    "answers": 1,
    "content": "<p>i' m programming an application which works with swing components  i notice one thing on which i would an explanation \\ni have these classes:</p>\\n\\n<ol>\\n<li><p><strong>this enum on which i instantiate the gui dimension</strong></p>\\n\\n<pre><code>public  enum GuiDimension {\\n WIDTH(700)  HEIGHT(400);\\n private final int value;\\n     private GuiDimension(int value) {\\nthis.value = value;\\n     }\\n     public int getValue(){\\nreturn value;\\n }\\n}\\n</code></pre></li>\\n<li><p><strong>this class that starts the application</strong></p>\\n\\n<pre><code>private GamePanel gamePanel = new GamePanel();\\n  public static void main(String[] args) {\\n   new MainFrame();\\n}\\n   public MainFrame() {\\n    initGameFrame();\\n    }\\n\\n    private void initGameFrame() {\\n     setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);\\n     add(gamePanel);\\n     setResizable(false);\\n     setUndecorated(true);\\n     pack();\\n     setVisible(true);\\n     setLocationRelativeTo(null);\\n    }\\n}\\n</code></pre></li>\\n<li><p><strong>and this class that set the size of the panel</strong></p>\\n\\n<pre><code>public class GamePanel extends JPanel {\\n public GamePanel() {\\nsetPreferredSize(new Dimension(GuiDimension.WIDTH.getValue() GuiDimension.HEIGHT.getValue()));\\n\\n//it makes other stuff that are not of interest for this contest\\n     }\\n\\n }\\n</code></pre>\\n\\n<p>What I noticed is that  it is true that enums are not really integers but objects  but  when I return </p>\\n\\n<ul>\\n<li><p><code>GuiDimension.WIDTH.getValue()</code> </p></li>\\n<li><p><code>GuiDimension.HEIGHT.getValue()</code> </p></li>\\n</ul></li>\\n</ol>\\n\\n<p>they return  integers that can well be used for other purposes once it has been taken.</p>\\n\\n<p><strong>now if I insert this on</strong>:</p>\\n\\n<pre><code>SetSize (new Dimension (GuiDimension.WIDTH.getValue ()  GuiDimension.HEIGHT.getValue ())); \\n</code></pre>\\n\\n<p><strong>or</strong> </p>\\n\\n<pre><code>SetSize (GuiDimension.WIDTH.getValue ()  GuiDimension.HEIGHT.getValue ()); \\n</code></pre>\\n\\n<p><strong>instead of this which i inserted in the example</strong>  </p>\\n\\n<pre><code>setPreferredSize(new Dimension(GuiDimension.WIDTH.getValue() GuiDimension.HEIGHT.getValue()));\\n</code></pre>\\n\\n<p>the frame is displayed with wrong dimension  and I do not understand why. \\nIf <code>GuiDimension.WIDTH.getValue ()</code> and <code>GuiDimension.WIDTH.getValue ())</code> are correct for <code>setPreferredSize (...)</code>  </p>\\n\\n<p>why is not the same for <code>setSize (int int)</code> and for <code>setSize(Dimension)</code> ? </p>\\n\\n<p>when tested this simple code you can see that. </p>\\n",
    "reco2": "getting values from enum fields",
    "reco3": "How do I use dimensions?",
    "reco1": "Convert List of ArrayList of Objects into Object [][]"
  },
  {
    "index": 118721,
    "votes": 5,
    "tags": [
      "java",
      "swing"
    ],
    "timestamp": 1390344311,
    "question": "How to set the background image of a button in java swing",
    "answers": 3,
    "content": "<p>I want to change the background image of a JButton in swing <br>\\nThe method :\\n<em>Button.setIcon () </em><br>\\nSet\ufffds the icon only not the background \\nIs there a <strong>easy</strong> way to do that?</p>\\n",
    "reco2": "I am trying to set a background image in Eclipse using Java",
    "reco3": "Java Swing keep the button look&amp;feel but background color",
    "reco1": "Background image in java swing issue"
  },
  {
    "index": 111688,
    "votes": 4,
    "tags": [
      "java",
      "swing"
    ],
    "timestamp": 1419608843,
    "question": "Java drawing weird visual artifacts/bug",
    "answers": 1,
    "content": "<p>I am beginner in java programming. We were given a task  to do some algorithms. I got Sierpinski Triangle. I had an idea to create a 2D array and store the values  0 = white rectangle  1 = blue rectangle. I had big trouble to draw it (never had any experience with swing/awt). I finally did it but on the end of the drawing there is weird visual bug. It is not ending but the lines are still continuing.</p>\\n\\n<p>I have no idea why is it like that.</p>\\n\\n<p>Here is my code:</p>\\n\\n<p><code>Okno</code> class that extends <code>JPanel</code>:</p>\\n\\n<pre><code>/*\\n * To change this license header  choose License Headers in Project Properties.\\n * To change this template file  choose Tools | Templates\\n * and open the template in the editor.\\n */\\npackage newpackage;\\n\\nimport java.awt.Color;\\nimport java.awt.Graphics;\\nimport java.awt.Graphics2D;\\nimport java.util.Arrays;\\nimport javax.swing.JFrame;\\nimport javax.swing.JPanel;\\nimport javax.swing.SwingUtilities;\\n\\n/**\\n *\\n * @author Juraj\\n */\\nclass Okno extends JPanel {\\n\\n    // value = 1 is blue rectangle  value 0 = white rectangle\\n    public static int n = 500;\\n    public static int[][] tabulka = new int[n][n]; //creating 2D array\\n\\n    public static void inicializaciaTabulky(){\\n        for (int i = 0; i &lt; n; i++) { // initialization of 2D array (first column and first row = 1)\\n            tabulka[0][i] = 1;\\n            tabulka[i][0] = 1;\\n        }\\n    }\\n\\n    // filling the rest of the array; if the cell above and cell to the left are the same value  e.g.\\n    // value of 1 or 0  then it is 0  everything else is 1\\n    public static void doplnenieTabulky() {\\n        for (int i = 1; i &lt; n; i++) {\\n            for (int j = 1; j &lt; n; j++) {\\n                if (tabulka[i-1][j] == 1 &amp;&amp; tabulka[i][j-1] == 1 || \\n                    tabulka[i-1][j] == 0 &amp;&amp; tabulka[i][j-1] == 0) {\\n                    tabulka[i][j] = 0;\\n                } else {\\n                    tabulka[i][j] = 1;\\n                }\\n            }\\n        }\\n    }\\n\\n    // drawing rectangles; if the value is 1 = blue rectangle  value 0 = white rectangle\\n    private void vykreslenie(Graphics g){\\n        Graphics2D g2d = (Graphics2D) g;\\n\\n        for (int i = 0; i &lt; n; i++) {\\n            for (int j = 0; j &lt; n; j++) {\\n                switch(tabulka[i][j]) {\\n                    case 0: \\n                        g.setColor(Color.white);\\n                        g.drawRect(i  j  50  50);\\n                        break;\\n                    case 1: \\n                        g.setColor(Color.blue);\\n                        g.drawRect(i  j  50  50);\\n                        break;\\n                }\\n            }\\n        }\\n    }\\n\\n    @Override\\n    public void paintComponent(Graphics g) {\\n        super.paintComponent(g);\\n        vykreslenie(g);\\n    }\\n}\\n</code></pre>\\n\\n<p><code>Trojuholnik</code> class that extends <code>JFrame</code>:</p>\\n\\n<pre><code>public class Trojuholnik extends JFrame {  \\n    public Trojuholnik() {\\n        initUI();\\n    }\\n\\n    private void initUI() {\\n        setSize(800  600);\\n        setTitle(\\Sierpinski Triangle\\\");\\n        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);\\n        add(new Okno());\\n        setLocationRelativeTo(rootPane);\\n    }\\n\\n    public static void main(String[] args) {\\n        SwingUtilities.invokeLater(new Runnable() {\\n            @Override\\n            public void run() {\\n                Trojuholnik trojuholnik = new Trojuholnik();\\n                trojuholnik.setVisible(true);\\n                Okno.inicializaciaTabulky();\\n                Okno.doplnenieTabulky();\\n                System.out.println(Arrays.deepToString(Okno.tabulka));\\n            }\\n        });\\n    }\\n}\\n</code></pre>\\n\\n<p>The current result looks like this:</p>\\n\\n<p><img src=\\\"http://i.stack.imgur.com/s7l1R.png\\\" alt=\\\"result of code\\\"></p>\\n\"",
    "reco2": "How do I draw a rectangle every time I click on a JCheckBox?",
    "reco3": "How to use KeyListener with JFrame?",
    "reco1": "Moving Java Swing rectangle leaves rectangles behind"
  },
  {
    "index": 145140,
    "votes": 4,
    "tags": [
      "java",
      "swing"
    ],
    "timestamp": 1414762041,
    "question": "Different scrolling speeds on a JComponent using a single JScrollBar",
    "answers": 1,
    "content": "<p>Can I define different scrolling speeds on a JScrollBar?</p>\\n\\n<p>For example assume we have an image drawn with height 1000 that does not fit in my frame. Therefore I've created a default <code>JScrollBar</code> acting as expected  assuming a <code>viewport</code> of height 200:</p>\\n\\n<pre><code>[^]\\n(*) -&gt; The topmost pixel in the frame has height 0 of the image\\n |\\n |\\n |\\n |\\n[v]\\n\\n[^]\\n |\\n(*) -&gt; The topmost pixel in the frame has height 200 of the image\\n |\\n |\\n |\\n[v]\\n\\n[^]\\n |\\n |\\n(*) -&gt; The topmost pixel in the frame has height 400 of the image\\n |\\n |\\n[v]\\n</code></pre>\\n\\n<p>Now my question: Can I change this behavior? For example I'd like that it acts in the following way:</p>\\n\\n<pre><code>[^]\\n(*) -&gt; The topmost pixel in the frame has height 0 of the image!\\n |\\n |\\n |\\n |\\n[v]\\n\\n[^]\\n |\\n(*) -&gt; The topmost pixel in the frame has height 300 of the image!\\n |\\n |\\n |\\n[v]\\n\\n[^]\\n |\\n |\\n(*)  -&gt; The topmost pixel in the frame has height 650 of the image!\\n |\\n |\\n[v]\\n</code></pre>\\n\\n<p>The scrollbar should still look the same as before  but the individual scrolling speeds change depending on where the knob is on the scrollbar. Ideally I want to define some regions where the scrolling speed stays the same. This question may sounds weird but I need such a mechanism since I'm drawing the component of the <code>JScrollBar</code> dynamically and I don't know its exact size in advance. Can this behavior even be implemented in Swing?</p>\\n",
    "reco2": "JScrollPane not working while adding a panel to the tabbedpane",
    "reco3": "Android: Prevent Only Vertical Scrolling in WebView",
    "reco1": "Change JScrollBar Thumb Size?"
  },
  {
    "index": 155303,
    "votes": 4,
    "tags": [
      "java",
      "swing"
    ],
    "timestamp": 1413451166,
    "question": "Printing jTable content to one note using java",
    "answers": 3,
    "content": "<pre><code>PrinterJob job = PrinterJob.getPrinterJob();\\n    job.setJobName(\\jPanel2\\\");\\n    job.setPrintable(new Printable() {\\n        public int print(Graphics pg  PageFormat pf  int pageNum) {\\n            if (pageNum &gt; 0) {\\n                return Printable.NO_SUCH_PAGE;\\n            }\\n            Graphics2D g2 = (Graphics2D) pg;\\n            g2.translate(pf.getImageableX()  pf.getImageableY());\\n            jPanel2.paint(g2);`enter code here`\\n            return Printable.PAGE_EXISTS;\\n        }\\n    });\\n</code></pre>\\n\\n<p>I have used the above code to print the jPanel content. But i want to print the data present in jTable. How can i do that?</p>\\n\"",
    "reco2": "How to print out JPanel of Java Swing in Eclipse?",
    "reco3": "How to print a report in Java?",
    "reco1": "How to print a in content jlabel ? (Hard Copy)"
  },
  {
    "index": 199714,
    "votes": 4,
    "tags": [
      "java",
      "swing"
    ],
    "timestamp": 1406969426,
    "question": "confused with jpanel behaviour",
    "answers": 0,
    "content": "<p>i created a java swing frame and it contain a panel named anim.i use netbean ide for that.i have set it's width to 100 .i want to change it's width to 500 by clicking a jbutton.when i click it's width changed to 500 as i expect.but when i focus anywhere of my jframe  my jpanel width changed to it's initial size 100.this is my code.i want to know how can i change it's width to 500 without change to it's initial size.</p>\\n\\n<pre><code> anim.setSize(500  400);  \\n</code></pre>\\n\\n<p>this image shows my problem </p>\\n\\n<p><img src=\\http://i.stack.imgur.com/AWPM6.gif\\\" alt=\\\"enter image description here\\\"></p>\\n\"",
    "reco2": "Android get and set layout width",
    "reco3": "Java Swing - Button doesn&#39;t change size of the width",
    "reco1": "Fixed width Pane in Java"
  },
  {
    "index": 8984,
    "votes": 3,
    "tags": [
      "java",
      "swing"
    ],
    "timestamp": 1403518750,
    "question": "Converting a console app to a swing app",
    "answers": 1,
    "content": "<p>As a beginner java programmer I would like some help as to understanding the best way or technique for building a swing UI for my console app. The console app works well now I would like to convert it to a swing app. I would like to have a swing JTextArea in a JScrollPane that the user can edit to input their string then click a countwords button and get a out put Int .The code to my console app and my attempt to the swing app as well is below .I have spent quite a bit of time trying to research this but can't seem to get it right.I would greatly appreciate any help and advice...thanks in advanced!</p>\\n\\n<p>My console app :</p>\\n\\n<pre><code> import java.util.*;\\n public class WordCounter{\\n\\n public static void main(String args[])\\n    {\\n     // Create Scanner object\\n     Scanner s=new Scanner(System.in);\\n\\n    // Read a string\\n     String st=s.nextLine();\\n\\n     //Split string with space\\n     String words[]=st.trim().split(\\ \\\");\\n\\n     System.out.println(\\\"No. of words \\\"+words.length);\\n    }\\n  }\\n</code></pre>\\n\\n<p>My attempt at Swing :</p>\\n\\n<pre><code>import java.io.*;\\nimport java.awt.*;\\nimport java.awt.event.*;\\nimport javax.swing.*;\\nimport javax.swing.JTextArea;\\n\\nimport java.util.*;\\n\\nclass Countswords extends JPanel {\\n\\n    public Countswords() {\\n        myTextArea();\\n\\n    }\\n\\n    private void myTextArea() {\\n        this.setLayout(new BorderLayout());\\n        this.setPreferredSize(new Dimension(400  200));\\n\\n        JTextArea textArea = new JTextArea(5  40);\\n        JScrollPane scrollPane = new JScrollPane(textArea);\\n        // textArea.setEditable(true);\\n        JTextArea.setText(userInput);\\n\\n    }\\n\\n    public static void showFrame() {\\n        JPanel panel = new Countswords();\\n        panel.setOpaque(true);\\n\\n        JFrame frame = new JFrame(\\\"My Text Area\\\");\\n        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);\\n        frame.setContentPane(panel);\\n        frame.pack();\\n        frame.setVisible(true);\\n    }\\n\\n    public static void main(String args[]) {\\n        // Create Scanner object\\n        // Scanner s=new Scanner(System.in);\\n\\n        // Read a string\\n        // String st=s.nextLine();\\n\\n        // Split string with space\\n        // String words[]=st.trim().split(\\\" \\\");\\n\\n        // System.out.println(\\\"No. of words \\\"+words.length);\\n        SwingUtilities.invokeLater(new Runnable() {\\n\\n            public void run() {\\n                Countswords.showFrame();\\n            }\\n        });\\n    }\\n}\\n</code></pre>\\n\"",
    "reco2": "Swing apps doesn&#39;t run",
    "reco3": "Organizing code for different app types (console  web etc) which are using the same entities",
    "reco1": "mousepressed event is fired twice in java swing"
  },
  {
    "index": 13573,
    "votes": 3,
    "tags": [
      "java",
      "swing"
    ],
    "timestamp": 1402930205,
    "question": "Get KeyStroke for &quot;&lt;&quot; and &quot;&gt;&quot;",
    "answers": 1,
    "content": "<p>I would like to use keybinding for the <code>&lt;</code> &amp; <code>&gt;</code> keys and then use this on my JFrame.</p>\\n\\n<p>I am using the following code to try and get it for the &lt; key.</p>\\n\\n<pre><code>KeyStroke testStroke = KeyStroke.getKeyStroke(\\&lt;\\\"); \\nmainJFrame.getRootPane().getInputMap(JComponent.WHEN_IN_FOCUSED_WINDOW)\\n                        .put(testStroke  \\\"clickButton\\\");\\nmainJFrame.getRootPane().getActionMap().put(\\\"clickButton\\\"  new AbstractAction() {\\n        @Override\\n        public void actionPerformed(ActionEvent e) {\\n            System.out.println(\\\"PRESS!!!!\\\");\\n        }\\n});\\n</code></pre>\\n\\n<p>I am not able to get it to work. However it works good if i use a key like A </p>\\n\\n<pre><code>KeyStroke testStroke = KeyStroke.getKeyStroke(\\\"A\\\"); \\n</code></pre>\\n\\n<p>So i think is the KeyStroke that is wrong and the rest of the code is OK.</p>\\n\\n<p><strong>How do i get the keystroke for the the keys &lt; &amp; >?</strong> </p>\\n\"",
    "reco2": "Listening for a slash keystroke without knowing the modifier key in Swing",
    "reco3": "Capturing specific keystrokes in Java Swing",
    "reco1": "HashMap generics"
  },
  {
    "index": 55061,
    "votes": 3,
    "tags": [
      "java",
      "swing"
    ],
    "timestamp": 1397235403,
    "question": "Java - Calling methods in Swing whilst dealing with Inheritance and Interfaces",
    "answers": 2,
    "content": "<p>My problem is quite hard to word but here is the basic outline:</p>\\n\\n<p>I have an interface:</p>\\n\\n<pre><code>public interface TheInterface {\\n    /**\\n     * \\n     * Returns a string\\n     */\\n\\n    public String getStuff(); \\n\\n\\n\\n}\\n</code></pre>\\n\\n<p>I have an abstract class that implements this interface:</p>\\n\\n<pre><code>public abstract class GenericClass implements TheInterface {\\n\\n    public GenericClass() {\\n        // TODO Auto-generated constructor stub\\n    }\\n\\n\\n\\n    @Override\\n    public String getStuff() {\\n        return \\Random string\\\";\\n    }\\n\\n\\n}\\n</code></pre>\\n\\n<p>I then have a class that extends GenericClass</p>\\n\\n<pre><code>public class GUIClass extends GenericClass {\\n    private myFrame  myNewFrame;\\n    public GUIClass() {\\n        super();\\n        myNewFrame = new myFrame();\\n\\n    }\\n\\n}\\n</code></pre>\\n\\n<p>As you can see  the GenericClass has a frame:</p>\\n\\n<pre><code>import javax.swing.JFrame;\\n\\n\\npublic class myFrame extends JFrame {\\n\\n    private myPanel topPanel;\\n\\n    public myFrame() {\\n\\n        topPanel= new myPanel(); \\n        add(topPanel); \\n\\n         setSize(400 200); \\n         //setLocation(200 200); \\n         setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE); \\n         setTitle(\\\"Test Program\\\"); \\n         setVisible(true); \\n    }\\n\\n}\\n</code></pre>\\n\\n<p>And inside that frame is a panel which contains a label:</p>\\n\\n<p>import java.awt.GridLayout;\\nimport java.awt.Label;</p>\\n\\n<p>import javax.swing.JLabel;\\nimport javax.swing.JPanel;</p>\\n\\n<pre><code>public class myPanel extends JPanel {\\n\\n    private JLabel myLabel;\\n\\n    public myPanel() {\\n        setLayout(new GridLayout(0 2));\\n        add (new Label(\\\"This label should contain the content of getStuff(): \\\"));\\n        myLabel=new JLabel();\\n        add (myLabel);\\n    }\\n\\n}\\n</code></pre>\\n\\n<p>And what I want to do here is to call getStuff() from the GenericClass and have it displayed inside that label. However at the moment I have no access to it and it seems that my design is flawed. I would appreciate it if anyone could help to rearrange or change this so that it would be possible to call that method in the label in the most efficient way without multiple cases of the same code.</p>\\n\\n<p>Thanks.</p>\\n\"",
    "reco2": "How to check if lable is not empty?",
    "reco3": "Detect which JLabel is clicked",
    "reco1": "Java call super class constructor with generic class object"
  },
  {
    "index": 71369,
    "votes": 3,
    "tags": [
      "java",
      "swing"
    ],
    "timestamp": 1395642877,
    "question": "How to add JComponent into a JFrame with size and location specified?",
    "answers": 1,
    "content": "<p>I am trying to code in a way that when user clicks a button  a new row of jlabel and jtextfield will be added to the the gridlayout of the jframe. like this:</p>\\n\\n<blockquote>\\n  <p><img src=\\http://i.imgur.com/xDMLqpn.png\\\"></p>\\n</blockquote>\\n\\n<p>Let's say the JFrame is 800x600  and the height of each row is 50  after I reach the 13th line  I want to add in a vertical scrolling bar. But now I can't seem to add the components correctly as I wished  I have also tried other layouts and apparently not working out.</p>\\n\\n<pre><code>import javax.swing.*;\\n\\nimport java.awt.event.ActionEvent;\\nimport java.awt.event.ActionListener;\\nimport java.awt.*;\\n\\npublic class Testing extends JFrame implements ActionListener\\n{\\n   public static int x =0;\\n   JPanel panel;\\n\\n   public Testing()\\n   {\\n      super(\\\"Add component on JFrame at runtime\\\");\\n      setLayout(new BorderLayout());\\n      panel=new JPanel();\\n      panel.setPreferredSize(new Dimension(800 600));\\n      panel.setAutoscrolls(true);\\n      panel.setLayout(new GridLayout(0 2 0 20));\\n      add(panel BorderLayout.CENTER);\\n      JButton button=new JButton(\\\"CLICK HERE\\\");\\n      add(button BorderLayout.SOUTH);\\n\\n      button.addActionListener(this);\\n      setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);\\n      setSize(500 500);\\n      setVisible(true);\\n      pack();\\n   }\\n\\n   public void actionPerformed(ActionEvent evt)\\n   {\\n      JLabel jlbl1 = new JLabel(\\\"Row\\\"+x);\\n      JTextField jtf =new JTextField(10);\\n      jtf.setMaximumSize(new Dimension(400 50));\\n      jlbl1.setMaximumSize(new Dimension(400 50));\\n      panel.add(jlbl1);\\n      panel.add(jtf);\\n      panel.revalidate();\\n      x++;\\n\\n      validate();\\n   }\\n\\n   public static void main(String[]args)\\n   {\\n      Testing test=new Testing();\\n   }\\n}\\n</code></pre>\\n\\n<p>Edit: Thanks and Props to MadProgrammer for showing guidelines  this is what I wanted  just in case someone else face the same problem as I did:</p>\\n\\n<p>Thanks to MadProgrammer and Andrew Thompson for showing guidelines. After some tweaks  this is what I wanted.</p>\\n\\n<pre><code>import java.awt.BorderLayout;\\nimport java.awt.Dimension;\\nimport java.awt.EventQueue;\\nimport java.awt.GridBagConstraints;\\nimport java.awt.GridBagLayout;\\nimport java.awt.GridLayout;\\nimport java.awt.event.ActionEvent;\\nimport java.awt.event.ActionListener;\\n\\nimport javax.swing.JButton;\\nimport javax.swing.JFrame;\\nimport javax.swing.JLabel;\\nimport javax.swing.JPanel;\\nimport javax.swing.JScrollPane;\\nimport javax.swing.JTextField;\\nimport javax.swing.UIManager;\\nimport javax.swing.UnsupportedLookAndFeelException;\\n\\npublic class TableExample {\\n\\n    public static void main(String[] args) {\\n        new TableExample();\\n    }\\n\\n    public TableExample() {\\n        EventQueue.invokeLater(new Runnable() {\\n            @Override\\n            public void run() {\\n                try {\\n                    UIManager.setLookAndFeel(UIManager.getSystemLookAndFeelClassName());\\n                } catch (ClassNotFoundException | InstantiationException | IllegalAccessException | UnsupportedLookAndFeelException ex) {\\n                }\\n\\n                JFrame frame = new JFrame(\\\"Testing\\\");\\n                frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);\\n                frame.setLayout(new BorderLayout());\\n                frame.add(new TestPane());\\n                frame.pack();\\n                frame.setLocationRelativeTo(null);\\n                frame.setVisible(true);\\n            }\\n        });\\n    }\\n\\n    public class TestPane extends JPanel {\\n        public GridBagConstraints c = new GridBagConstraints();\\n\\n\\n        private JPanel fieldsPanel;\\n        private int row;\\n\\n        public TestPane() {\\n            c.gridx =0;\\n            c.gridy =0;\\n            c.fill = GridBagConstraints.NONE;\\n            setLayout(new BorderLayout());\\n\\n            fieldsPanel = new JPanel(new GridBagLayout());\\n\\n            add(new JScrollPane(fieldsPanel));\\n\\n            JButton btn = new JButton(\\\"Add\\\");\\n            btn.addActionListener(new ActionListener() {\\n                @Override\\n                public void actionPerformed(ActionEvent e) {\\n                    fieldsPanel.add(new JLabel(\\\"Row \\\" + (++row)) c);\\n                    c.gridx++;\\n                    fieldsPanel.add(new JTextField(10) c);\\n                    fieldsPanel.revalidate();\\n                    c.gridy++;\\n                    c.gridx--;\\n                }\\n            });\\n            add(btn  BorderLayout.SOUTH);\\n        }\\n\\n        @Override\\n        public Dimension getPreferredSize() {\\n            return new Dimension(200  200);\\n        }\\n    }\\n\\n}\\n</code></pre>\\n\"",
    "reco2": "Add and remove button dynamically in Swing frame",
    "reco3": "Java add space between component and frame",
    "reco1": "Editing the height of a specific row in GridLayout Java"
  },
  {
    "index": 95681,
    "votes": 3,
    "tags": [
      "java",
      "swing"
    ],
    "timestamp": 1392962155,
    "question": "JComboBox itemStateChanged event called twice at a time",
    "answers": 2,
    "content": "<pre><code>resultCombo = new JComboBox();\\nresultCombo.addItemListener(new ItemListener() {\\n    @Override\\n    public void itemStateChanged(ItemEvent ie) {\\n         sampleText=resultCombo.getSelectedItem().toString();\\n         System.out.println(\\SampleText : \\\"+sampleText);\\n    }\\n});\\n\\n\\noutput:\\nSampleText : selectedword\\nSampleText : selectedword\\n</code></pre>\\n\\n<p>Why this event is called twice when selecting item in combobox.?</p>\\n\"",
    "reco2": "How to get selected item from 2 separate comboboxes into 3rd combobox and also with itemstatechanged  in java?",
    "reco3": "How to make a specific combox like the one in web?",
    "reco1": "How do I refer to an item in a combobox in order to fire events based on that item?"
  },
  {
    "index": 117850,
    "votes": 3,
    "tags": [
      "java",
      "swing"
    ],
    "timestamp": 1390458672,
    "question": "JFrame size change unintentionally during runtime",
    "answers": 2,
    "content": "<p>I'm working on a complex java swing project.\\nduring initialization I set the frame size to 1280X1024.\\nsometimes when I launch my app the frame starts with the expected dimensions\\nother times the frame actual size is 1282X1053 (always this size).</p>\\n\\n<p>I have two question  while trying to pinpoint the source for this issue.</p>\\n\\n<p>1) is there a way to set a watch point when the frame size is changed?\\nI'm using eclipse  and when I tried to set a watch point  it breaks when every component I have changes size. this is unacceptable as I have too many components to manually follow.</p>\\n\\n<p>2) due to the fact that the issue doesn't reproduce every time  I'm worried that maybe somewhere in the code I access Java swing component outside the EDT. is there a way to verify that all the calls to all the swing components in my code are done from the EDT?</p>\\n\\n<p>EDIT:\\nthe below code is a sample of what I use.<br>\\nI can't attach the code to build the panels as it is too complex to fit here  </p>\\n\\n<p>EDIT 2: the code below works. the problem is happens because of the commented lines before calling setVisible</p>\\n\\n<pre><code>package com.earlysense.nursestation;\\n\\nimport java.awt.BorderLayout;\\nimport java.awt.Dimension;\\nimport java.lang.reflect.InvocationTargetException;\\nimport javax.swing.JFrame;\\nimport javax.swing.JLabel;\\nimport javax.swing.JPanel;\\nimport javax.swing.SwingUtilities;\\n\\npublic class MyFrame extends JFrame {\\n\\n    private JPanel west;\\n    private JPanel center;\\n\\n    /**\\n     * Initializes the panels\\n     */\\n    public void init() {\\n\\n        setLocation(0  0);\\n        setPreferredSize(new Dimension(1280  1024));\\n        setUndecorated(true); // The frame is fixed. It cannot be moved or resized.\\n        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);\\n\\n        JPanel p = new JPanel(new BorderLayout());\\n        west = new JPanel();\\n        west.add(new JLabel(\\west\\\"));\\n        center = new JPanel();\\n        center.add(new JLabel(\\\"center\\\"));\\n        p.add(BorderLayout.WEST  west);\\n        p.add(BorderLayout.CENTER  center);\\n        getContentPane().add(p);\\n    }\\n\\n    public static void main(String[] args) {\\n        try {\\n            SwingUtilities.invokeAndWait(new Runnable() {\\n                public void run() {\\n                    MyFrame frame = new MyFrame();\\n                    frame.init();\\n                    frame.pack();\\n                    // at this point frame.getSize() returns 1280X1024\\n                    // add components to west and center panel which depends on the frame size to set self size\\n                    frame.setVisible(true);\\n                    // at this point frame.getSize() sometimes returns 1282X1053\\n                }\\n            });\\n        } catch (InterruptedException e) {/* Do nothing */\\n\\n        } catch (InvocationTargetException e) {\\n            e.printStackTrace();\\n        }\\n    }\\n}\\n</code></pre>\\n\"",
    "reco2": "Resizable scrollpane to an awt frame",
    "reco3": "How can I make an image the same size as the panel?",
    "reco1": "Creating a visible frame in Java?"
  },
  {
    "index": 142715,
    "votes": 3,
    "tags": [
      "java",
      "swing"
    ],
    "timestamp": 1415160107,
    "question": "Customize detault html link color in java swing",
    "answers": 1,
    "content": "<p>Swing allows html in components like <code>JLabel</code>. <a href=\\http://docs.oracle.com/javase/tutorial/uiswing/components/html.html\\\" rel=\\\"nofollow\\\">This</a> document talks about this in detail. It also shows how the color of a specific text could be changed. </p>\\n\\n<p>I am working with an existing swing application with thousands of such components. I want to change the color of the link where ever it is used. Doing them one at a time would be very tedious. By default if a color is not specified swing seems to render them as blue. </p>\\n\\n<p>How can I change this default to something else ?</p>\\n\"",
    "reco2": "Changing color components in Java",
    "reco3": "SWT Item color after selection in the list",
    "reco1": "Change Background Color on JFrame in this context?"
  },
  {
    "index": 150774,
    "votes": 3,
    "tags": [
      "java",
      "swing"
    ],
    "timestamp": 1419171358,
    "question": "java swing error dialog box",
    "answers": 2,
    "content": "<p>I have a dialog box to be shown but it is giving compilation errors. The compilation errors are given in the last part.</p>\\n\\n<pre><code>import javax.swing.*;\\n\\nclass SwingDemo {\\n    SwingDemo() {\\n        JFrame jfrm = new JFrame(\\A Simple Swing Application\\\");\\n        jfrm.setSize(275  100);\\n        jfrm.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);\\n        JLabel jlab = new JLabel(\\\" Swing means powerful GUIs.\\\");\\n        jfrm.add(jlab);\\n        jfrm.setVisible(true);\\n    }\\n\\n    public static void main(String args[]) {\\n        public void run() {\\n            new SwingDemo();\\n        }\\n    }\\n}\\n</code></pre>\\n\\n<p>The errors are:</p>\\n\\n<pre><code>Multiple markers at this line\\n    - Syntax error on token \\\"void\\\"  @ expected\\n    - Syntax error  insert \\\"enum Identifier\\\" to complete EnumHeaderName\\n    - Syntax error  insert \\\"EnumBody\\\" to complete BlockStatements\\n</code></pre>\\n\"",
    "reco2": "Need clarification about compilation error and run-time error",
    "reco3": "displaiyng the data from my databse to my table",
    "reco1": "small java program to find average  i wrote  but i can not compile  my friends can."
  },
  {
    "index": 154585,
    "votes": 3,
    "tags": [
      "java",
      "swing"
    ],
    "timestamp": 1413541037,
    "question": "Customizing dynamically gene jFrame",
    "answers": 1,
    "content": "<p>How to customize <code>jFrame</code> and set font size for <code>jLabel</code> in it?</p>\\n\\n<pre><code>    final JFrame frame = new JFrame(\\Bill\\\");\\n    frame.setLayout(new GridLayout(0  1));\\n    try {\\n        String sql = \\\"SELECT * FROM order_detail\\\";\\n        rs = st.executeQuery(sql);\\n        while (rs.next()) {\\n            String printLbl = rs.getString(\\\"Prasada_Name\\\") + \\\"                      X                                     \\\" + rs.getInt(\\\"Quantity\\\") + \\\"             \\\" + rs.getInt(\\\"Prasada_Cost\\\");\\n            frame.add(new JLabel(printLbl));\\n            frame.validate();\\n            frame.repaint();\\n        }\\n        frame.add(new JLabel(jLabel82.getText()));\\n        frame.validate();\\n        frame.repaint();\\n    } catch (SQLException e) {\\n        System.out.println(e.getMessage());\\n    }\\n    frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);\\n    frame.setSize(700  400);\\n    frame.setVisible(true);\\n    PrinterJob job = PrinterJob.getPrinterJob();\\n    job.setJobName(\\\"frame\\\");\\n    job.setPrintable(new Printable() {\\n        public int print(Graphics pg  PageFormat pf  int pageNum) {\\n            if (pageNum &gt; 0) {\\n                return Printable.NO_SUCH_PAGE;\\n            }\\n\\n            Graphics2D g2 = (Graphics2D) pg;\\n            g2.translate(pf.getImageableX()  pf.getImageableY());\\n            frame.paint(g2);\\n            return Printable.PAGE_EXISTS;\\n        }\\n    });\\n    boolean ok = job.printDialog();\\n    if (ok) {\\n        try {\\n            job.print();\\n        } catch (PrinterException ex) {\\n\\n        }\\n    }\\n    frame.setVisible(false);\\n</code></pre>\\n\\n<p>I have created new <code>jFrame</code> and added bill in it using <code>jLabel</code>  now i want to customize it. How to do that?</p>\\n\"",
    "reco2": "Custom Jtable scrollbar",
    "reco3": "Jforum : Show customize exception message to user",
    "reco1": "Layout design Using Java code in Android"
  },
  {
    "index": 171674,
    "votes": 3,
    "tags": [
      "java",
      "swing"
    ],
    "timestamp": 1411037610,
    "question": "Block change action on swing controls",
    "answers": 1,
    "content": "<p>I have a form asking some details to a user. In top of that form  there are 2 controls : a JSpinner and a JToggleButton.</p>\\n\\n<p>If the user use the JSpinner  he can select from form number 1 to 4  if he clic on the JToggleButton  the spinner is disabled an the form number 0 is displayed (if this button is toggled back  the spinner is enabled back and the form load with the number in the spinner).</p>\\n\\n<p>So far no problems.</p>\\n\\n<p>But I would like now  to display a popup when a form is edited  not saved and that the user use one of the 2 controls discrebed.</p>\\n\\n<p>No problem for the popup  but I don't know how to undo modification on the control that fired the display of the popup.</p>\\n\\n<p>Because I am using ChangeListener for the spinner and ActionListener for the button  I am displaying the popup AFTER the modification of the control.</p>\\n\\n<p>In fact I am searching a way to be notified of an action on the controls but with the possibility to stop the modification (something like a notification listener where we need to return true or false to validate the modification).</p>\\n\\n<p>How would you do that ?</p>\\n\\n<p>Thanks.</p>\\n\\n<p>Here is a sample :</p>\\n\\n<pre><code>package test;\\n\\nimport java.awt.BorderLayout;\\nimport java.awt.GridBagConstraints;\\nimport java.awt.GridBagLayout;\\nimport java.awt.event.ActionEvent;\\nimport java.awt.event.ActionListener;\\nimport java.awt.event.KeyEvent;\\nimport java.awt.event.KeyListener;\\n\\nimport javax.swing.JFrame;\\nimport javax.swing.JLabel;\\nimport javax.swing.JOptionPane;\\nimport javax.swing.JPanel;\\nimport javax.swing.JSpinner;\\nimport javax.swing.JTextField;\\nimport javax.swing.JToggleButton;\\nimport javax.swing.SpinnerNumberModel;\\nimport javax.swing.event.ChangeEvent;\\nimport javax.swing.event.ChangeListener;\\n\\npublic class SwingTest extends JFrame\\n{\\n    private static final long   serialVersionUID    = 1L;\\n\\n    private JToggleButton       btnRecueilPermanent;\\n    private JSpinner            spinner;\\n    private JTextField          tf;\\n    private boolean             formChanged         = false;\\n\\n    public SwingTest()\\n    {\\n        super();\\n\\n        setLayout(new GridBagLayout());\\n        initComponents();\\n\\n        loadForm(1);\\n    }\\n\\n    private void initComponents()\\n    {\\n        JPanel panelGeneral = new JPanel();\\n        GridBagConstraints gbc_panelGeneral = new GridBagConstraints();\\n        gbc_panelGeneral.fill = GridBagConstraints.BOTH;\\n        gbc_panelGeneral.anchor = java.awt.GridBagConstraints.CENTER;\\n        gbc_panelGeneral.weightx = 100.0;\\n        gbc_panelGeneral.weighty = 100.0;\\n        gbc_panelGeneral.gridx = 0;\\n        gbc_panelGeneral.gridy = 0;\\n        add(panelGeneral  gbc_panelGeneral);\\n        panelGeneral.setLayout(new BorderLayout(0  0));\\n\\n        JPanel panelSelecteur = new JPanel();\\n        panelGeneral.add(panelSelecteur  BorderLayout.NORTH);\\n\\n        JLabel lblChoixDuFormulaire = new JLabel(\\Choose form :\\\");\\n        panelSelecteur.add(lblChoixDuFormulaire);\\n\\n        spinner = new JSpinner(new SpinnerNumberModel(1  1  4  1));\\n        spinner.addChangeListener(new ChangeListener()\\n        {\\n            public void stateChanged(final ChangeEvent e)\\n            {\\n                loadForm((Integer) spinner.getValue());\\n            }\\n        });\\n        panelSelecteur.add(spinner);\\n\\n        btnRecueilPermanent = new JToggleButton(\\\"Permanent form\\\");\\n        btnRecueilPermanent.addActionListener(new ActionListener()\\n        {\\n            public void actionPerformed(ActionEvent e)\\n            {\\n                if(btnRecueilPermanent.isSelected())\\n                {\\n                    loadForm(0);\\n                }\\n                else\\n                {\\n                    loadForm((Integer) spinner.getValue());\\n                }\\n            }\\n        });\\n        panelSelecteur.add(btnRecueilPermanent);\\n\\n        final JPanel formPanel = new JPanel();\\n        tf = new JTextField(20);\\n        tf.addKeyListener(new KeyListener()\\n        {\\n            @Override\\n            public void keyTyped(KeyEvent e)\\n            {\\n                formChanged = true;\\n            }\\n\\n            @Override\\n            public void keyPressed(KeyEvent e)\\n            {\\n            }\\n\\n            @Override\\n            public void keyReleased(KeyEvent e)\\n            {\\n            }\\n        });\\n        formPanel.add(tf);\\n        panelGeneral.add(formPanel  BorderLayout.CENTER);\\n    }\\n\\n    protected void loadForm(final int nbForm)\\n    {\\n        if(formChanged)\\n        {\\n            Object[] options =\\n            {\\n                \\\"Continue\\\"  \\\"Discard changes\\\"\\n            };\\n\\n            final int result = JOptionPane.showOptionDialog(this  \\\"You have unsaved modifivations\\\"  \\\"Beware !\\\"  JOptionPane.YES_NO_OPTION  JOptionPane.WARNING_MESSAGE  null  options  options[0]);\\n            if(result == 0)\\n            {\\n                // HERE WE DISCARD THE FORM CHANGE  BUT THE TOGGLEBUTTON or THE JSPINNER HAVED CHANGED\\n                return;\\n            }\\n        }\\n\\n        if(nbForm == 0)\\n        {\\n            btnRecueilPermanent.setText(\\\"Normal form\\\");\\n        }\\n        else\\n        {\\n            btnRecueilPermanent.setText(\\\"Permanent form\\\");\\n        }\\n\\n        tf.setText(String.valueOf(nbForm));\\n\\n        spinner.setEnabled(nbForm != 0);\\n\\n        formChanged = false;\\n    }\\n\\n    public static void main(String[] args)\\n    {\\n        final SwingTest jf = new SwingTest();\\n\\n        jf.pack();\\n        jf.setVisible(true);\\n    }\\n}\\n</code></pre>\\n\"",
    "reco2": "JSpinner with custom UI",
    "reco3": "Read spinner input",
    "reco1": "Cannot invoke findViewById(int) on the primitive type int"
  },
  {
    "index": 173869,
    "votes": 3,
    "tags": [
      "java",
      "swing"
    ],
    "timestamp": 1410886598,
    "question": "Can there be a HashMap with 3 different types in Java?",
    "answers": 4,
    "content": "<p>I have a <strong>HashMap</strong> like</p>\\n\\n<pre><code>Map&lt;String  JPanel&gt; MapItems = new HashMap&lt;String  JPanel&gt;();\\n</code></pre>\\n\\n<p>What if I want to put third value as well in a Map or List something like this</p>\\n\\n<pre><code>Map&lt;String  JPanel  JLabel&gt; MapItems = new HashMap&lt;String  JPanel  JLabel&gt;();\\n</code></pre>\\n\\n<p>it doesn't matter if I have to call with element position instead String Value so it isn't necessary to use Map only but if there is some other way around please tell me. I just want to put my <code>JPanel</code> and <code>JLabel</code> together.</p>\\n",
    "reco2": "How to pass HashMap value to list",
    "reco3": "Iterate and compare values in same map to find largest value and remove other from same map",
    "reco1": "Value in a map contains another map"
  },
  {
    "index": 84468,
    "votes": 6,
    "tags": [
      "java",
      "xml"
    ],
    "timestamp": 1394168360,
    "question": "Huge XML file to text files",
    "answers": 6,
    "content": "<p>I have a huge XML file(15 GB). I want to convert a 'text' tag in XML file to a single page.</p>\\n\\n<p>Sample XML file:</p>\\n\\n<pre><code>&lt;root&gt;\\n    &lt;page&gt;\\n        &lt;id&gt; 1 &lt;/id&gt;\\n        &lt;text&gt;\\n        .... 1000 to 50000 lines of text\\n        &lt;/text&gt;\\n    &lt;/page&gt;\\n    ... Like wise 2 Million `page` tags\\n&lt;/root&gt;\\n</code></pre>\\n\\n<p>I've initially used DOM parser  but it throws JAVA OUT OF MEMORY(Valid). Now  I've written JAVA code using STAX. It works good  but performance is really slow.</p>\\n\\n<p>This is the code I've written:</p>\\n\\n<pre><code> XMLEventReader xMLEventReader = XMLInputFactory.newInstance().createXMLEventReader(new FileInputStream(filePath));\\n    while(xMLEventReader.hasNext()){\\n      xmlEvent = xMLEventReader.nextEvent();\\n\\n    switch(xmlEvent.getEventType()){\\n    case XMLStreamConstants.START_ELEMENT:\\n    if( element == \\text\\\")\\n      isText    = true;\\n    break;\\n    case XMLStreamConstants.CHARACTERS:\\n      chars = (Characters) xmlEvent;\\n      if(! (chars.isWhiteSpace() || chars.isIgnorableWhiteSpace()))\\n               if(isText)\\n              pageContent += chars.getData() + '\\\\n';\\n      break;\\n    case XMLStreamConstants.END_ELEMENT:\\n      String elementEnd = (((EndElement) xmlEvent).getName()).getLocalPart();\\n      if( elementEnd == \\\"text\\\" )\\n      {\\n          createFile(id  pageContent);\\n          pageContent = \\\"\\\";\\n          isText = false;\\n      }\\n      break;\\n    }\\n}\\n</code></pre>\\n\\n<p>This code is working good.(Ignore about any minor errors). According to my understanding  XMLStreamConstants.CHARACTERS iterates for each and everyline of text tag. If TEXT tag has 10000 lines in it  XMLStreamConstants.CHARACTERS iterates for next 10000 lines. Is there any better way to improve the performance..?</p>\\n\"",
    "reco2": "XmlPullParser object doesnt read my second tag",
    "reco3": "How to get xml tag value using attribute value in java",
    "reco1": "Parse XML in Java and ignore a tag"
  },
  {
    "index": 120594,
    "votes": 5,
    "tags": [
      "java",
      "xml"
    ],
    "timestamp": 1390070652,
    "question": "How do I change the default logging in Java Transformer",
    "answers": 3,
    "content": "<p>I implemented the <a href=\\http://javakafunda.blogspot.com/2012/04/how-to-format-xml-string-in-java.html\\\">code</a> to enable me to print formatted XML</p>\\n\\n<pre><code>import java.io.StringReader;\\nimport java.io.StringWriter;\\nimport javax.xml.transform.ErrorListener;\\nimport javax.xml.transform.OutputKeys;\\nimport javax.xml.transform.Source;\\nimport javax.xml.transform.Transformer;\\nimport javax.xml.transform.TransformerException;\\nimport javax.xml.transform.TransformerFactory;\\nimport javax.xml.transform.stream.StreamResult;\\nimport javax.xml.transform.stream.StreamSource;\\n\\npublic class TransformThis implements ErrorListener {\\n\\n    public static void main(String[] args) throws java.lang.Exception {\\n\\n        TransformThis test = new TransformThis();\\n        String goodXML;\\n        String badXML;\\n\\n       goodXML = \\\"&lt;root&gt;&lt;level1&gt;WellFormed&lt;/level1&gt;&lt;/root&gt;\\\";\\n       System.out.println(test.prettyPrint(goodXML));\\n       badXML = \\\"&lt;root&gt;&lt;level1&gt;Not Well Formed&lt;/level1&gt;\\\";\\n       System.out.println(test.prettyPrint(badXML));\\n   }\\n\\n   public String prettyPrint(String xml) {\\n\\n       Source xmlInput = new StreamSource(new StringReader(xml));\\n       StringWriter stringWriter = new StringWriter();\\n       StreamResult xmlOutput = new StreamResult(stringWriter);\\n       TransformerFactory transformerFactory = TransformerFactory.newInstance();\\n       transformerFactory.setAttribute(\\\"indent-number\\\"  4);\\n\\n       try {\\n           Transformer transformer = transformerFactory.newTransformer();\\n           transformer.setErrorListener(this);\\n           transformer.setOutputProperty(OutputKeys.INDENT  \\\"yes\\\");\\n           transformer.setOutputProperty(OutputKeys.OMIT_XML_DECLARATION  \\\"yes\\\");\\n           transformer.transform(xmlInput  xmlOutput);\\n       } catch (Exception ex) {\\n           System.out.println(\\\"My message: \\\" + ex.getMessage());\\n       }\\n\\n       return xmlOutput.getWriter().toString();\\n   }\\n\\n\\n   @Override\\n   public void warning(TransformerException exception) throws TransformerException {\\n       //throw new UnsupportedOperationException(\\\"Not supported yet.\\\");\\n   }\\n\\n   @Override\\n   public void error(TransformerException exception) throws TransformerException {\\n      //throw new UnsupportedOperationException(\\\"Not supported yet.\\\");\\n   }\\n\\n   @Override\\n   public void fatalError(TransformerException exception) throws TransformerException {\\n       //throw new UnsupportedOperationException(\\\"Not supported yet.\\\");\\n   }\\n}\\n</code></pre>\\n\\n<p>When the XML is well formed  I get the following output - exactly what I want</p>\\n\\n<pre><code>&lt;root&gt;\\n    &lt;level1&gt;WellFormed&lt;/level1&gt;\\n&lt;/root&gt;\\n</code></pre>\\n\\n<p>If there is a problem with the XML I get the following output - fine  except for the [Fatal Error] output</p>\\n\\n<pre><code>[Fatal Error] :1:39: XML document structures must start and end within the same entity.\\nMy message: org.xml.sax.SAXParseException; lineNumber: 1; columnNumber: 39; XML document structures must start and end within the same entity.\\n&lt;root&gt;\\n   &lt;level1&gt;Not Well Formed&lt;/level1&gt;\\n</code></pre>\\n\\n<p>The transform function throws an exception as well as sends a [Fatal Error] to stderr/stdout.  Is there a way to prevent the [Fatal Error] log from appearing?                              </p>\\n\"",
    "reco2": "Android Development nullpointerexception fatal error doinbackground",
    "reco3": "How to avoid auto closing of XML tags after editing XML using transformers in java?",
    "reco1": "Java log levels - When to use What"
  },
  {
    "index": 8146,
    "votes": 3,
    "tags": [
      "java",
      "xml"
    ],
    "timestamp": 1403624288,
    "question": "Accessing attributes within an xml element in java",
    "answers": 4,
    "content": "<p>We have a directory that returns search results as an XML document. </p>\\n\\n<pre><code>&lt;directory.person&gt;\\n   &lt;person netid=\\\\\" pidm=\\\"\\\" student=\\\"\\\" affiliate=\\\"\\\"&gt;\\n      &lt;picture&gt;no&lt;/picture&gt;\\n      &lt;name&gt;...&lt;/name&gt;\\n   &lt;/person&gt;\\n</code></pre>\\n\\n<p>I'm trying to parse and read it in java using the following code:</p>\\n\\n<pre><code>    try{  \\n        DocumentBuilder db = DocumentBuilderFactory.newInstance().newDocumentBuilder();                                         \\n        InputSource is = new InputSource();\\n        is.setCharacterStream(new StringReader(xml));\\n        Document doc = db.parse(is);\\n        NodeList nodes = doc.getElementsByTagName(\\\"person\\\");\\n\\n        for(int i = 0;i &lt; nodes.getLength(); i++){  \\n            Element element = (Element) nodes.item(i);\\n            NodeList pidm = element.getElementsByTagName(\\\"@pidm\\\");\\n            Element line = (Element)pidm.item(0);\\n            value = getCharacterDataFromElement(line);\\n            if(value.compareTo(\\\"Dana\\\")==0 || value==\\\"Dana\\\")\\n                out.println(value);\\n        }\\n    }\\n    catch(Exception e){\\n        out.println(e);\\n    }\\n</code></pre>\\n\\n<p>The problem I'm having is with actually accessing that pidm variable in the second line of my \\\"for\\\" loop. I'm not sure how to do that. Basically  I need to output by pidm because that's the unique identifier for each person returned. I know that jstl would be easier  but the people over this don't want to do it that way.</p>\\n\"",
    "reco2": "Parse W3C Document after reading it using XMLStreamReader API",
    "reco3": "Parse XML containing namespace using JSTL",
    "reco1": "Broken for loop returning 4 results instead of 2"
  },
  {
    "index": 109163,
    "votes": 3,
    "tags": [
      "java",
      "xml"
    ],
    "timestamp": 1391432946,
    "question": "Deleting data in xml file not working correctly",
    "answers": 1,
    "content": "<p>I am developing a XML Editor and when user clicks delete on a type the application shall delete the whole type.\\nbut its not its only deleting the content but leaving the tags.</p>\\n\\n<pre><code>&lt;type&gt;\\n&lt;OBJECT_TYPE/&gt;\\n&lt;prop/&gt;\\n&lt;param/&gt;\\n&lt;param/&gt;\\n&lt;param/&gt;\\n&lt;param/&gt;\\n&lt;param/&gt;\\n&lt;param/&gt;\\n&lt;param/&gt;\\n&lt;param/&gt;\\n&lt;param/&gt;\\n&lt;param/&gt;\\n&lt;param/&gt;\\n&lt;param/&gt;\\n&lt;param/&gt;\\n&lt;param/&gt;\\n&lt;/type&gt;\\n&lt;type&gt;\\n&lt;OBJECT_TYPE/&gt;\\n&lt;prop/&gt;\\n&lt;param/&gt;\\n&lt;param/&gt;\\n&lt;param/&gt;\\n&lt;/type&gt;\\n&lt;type&gt;\\n&lt;OBJECT_TYPE/&gt;\\n&lt;prop/&gt;\\n&lt;param/&gt;\\n&lt;param/&gt;\\n&lt;/type&gt;\\n</code></pre>\\n\\n<p>So basiclly all the data is gone but its leaving this tags and I want to delte them aswell.\\nhow to do it?</p>\\n\\n<p>My code :</p>\\n\\n<pre><code>NodeList type = (NodeList) doc.getElementsByTagName(\\type\\\").item(x);\\n            System.out.println(\\\"type : \\\" + type);\\n\\n            for (int i = 0; i &lt; type.getLength(); i++) {\\n\\n                Node curNode = (Node) type.item(i);\\n                System.out.println(\\\" Node name : \\\" + curNode.getChildNodes());\\n                removeChilds(curNode);\\n\\n            }\\n\\n            // Save the new update\\n            save(doc);\\n\\npublic static void removeChilds(Node node) {\\n        while (node.hasChildNodes())\\n            node.removeChild(node.getFirstChild());\\n    }\\n</code></pre>\\n\"",
    "reco2": "How to write XML tags by using BufferedWriter",
    "reco3": "JPA - Assign different unique constrains for two subclass of a SINGLE_TABLE hierarchy abstract class",
    "reco1": "Find and Delete a Sub-String in Java"
  },
  {
    "index": 155103,
    "votes": 3,
    "tags": [
      "java",
      "xml"
    ],
    "timestamp": 1413469262,
    "question": "How can I parse broken XML files in Java?",
    "answers": 3,
    "content": "<p>I'm receiving XML files from an external source over which I have no control. Some of the XML files are broken. Specifically  towards the end of the file  some closing tags are missing. It goes something like this:</p>\\n\\n<pre><code>&lt;?xml version=\\1.0\\\" encoding=\\\"UTF-8\\\" ?&gt;\\n&lt;a&gt;\\n  &lt;b&gt;\\n    &lt;c/&gt;\\n  &lt;/b&gt;\\n  &lt;b&gt;\\n    &lt;c/&gt;\\n&lt;/a&gt;\\n</code></pre>\\n\\n<p>I think our system will be fine if we simply ignore the elements that don't have a matching closing tag.</p>\\n\\n<p>What library can I use to parse what I can from such XML files?</p>\\n\"",
    "reco2": "Split String by XML tags in Java",
    "reco3": "XML validation in Java - extra closing tag &gt;",
    "reco1": "How to handle SaxParserException in java"
  },
  {
    "index": 194119,
    "votes": 3,
    "tags": [
      "java",
      "xml"
    ],
    "timestamp": 1418623876,
    "question": "XML add data to ArrayList&lt;String&gt;",
    "answers": 2,
    "content": "<p>I am parsing some xml and now I am trying to get the text values of some of the nodes. Here is the xml </p>\\n\\n<pre><code>&lt;menu&gt;\\n&lt;day name=\\monday\\\"&gt;\\n    &lt;meal name=\\\"BREAKFAST\\\"&gt;\\n        &lt;counter name=\\\"Bread\\\"&gt;\\n           &lt;dish&gt;\\n               &lt;name&gt;Plain Bagel&lt;/name&gt;\\n           &lt;/dish&gt;\\n        &lt;counter/&gt;\\n    &lt;meal/&gt;\\n&lt;day/&gt;\\n&lt;day name=\\\"tuesday\\\"&gt;\\n    &lt;meal name=\\\"LUNCH\\\"&gt;\\n        &lt;counter name=\\\"Other\\\"&gt;\\n           &lt;dish&gt;\\n               &lt;name&gt;Cheese Bagel&lt;/name&gt;\\n           &lt;/dish&gt;\\n        &lt;counter/&gt;\\n    &lt;meal/&gt;\\n&lt;day/&gt;\\n</code></pre>\\n\\n<p></p>\\n\\n<p>And now I am using XMLPullParser and its working except in the get text area.</p>\\n\\n<p>So in the case to get text I have this:</p>\\n\\n<pre><code>case XmlResourceParser.TEXT:\\n            itemsArray.add(xmlData.getText());\\n             Log.i(TAG  \\\"a\\\"+xmlData.getText()+\\\"b\\\");\\n      break;\\n</code></pre>\\n\\n<p>So it is adding the items Plain Bagel and Cheese Bagel great  but then in the onProgressUpdate method  when I log the result I see this:</p>\\n\\n<pre><code>[\\n \\n \\n  Plain Bagel \\n \\n \\n  Cheese Bagel]\\n</code></pre>\\n\\n<p>I though these were just \\\\n characters  So I tried this but I still got the same result.</p>\\n\\n<pre><code>if (!xmlData.getText().equals(\\\"\\\\n\\\")) {...\\n</code></pre>\\n\\n<p>So how can I get rid of these empty lines or whatever they are?</p>\\n\\n<p>Thanks for the help in advance.</p>\\n\\n<p>When I Log this </p>\\n\\n<pre><code>Log.i(TAG  xmlData.getText().length() + \\\"\\\");\\nLog.i(TAG  xmlData.getText());\\n</code></pre>\\n\\n<p>I Get this as a result</p>\\n\\n<pre><code>4\\n12-15 06:28:58.868    5849-5880/com.spencer.ueat I/DiningItemsActivity? [ 12-15 06:28:58.868  5849: 5880 I/DiningItemsActivity ]\\n    5\\n12-15 06:28:58.868    5849-5880/com.spencer.ueat I/DiningItemsActivity? [ 12-15 06:28:58.868  5849: 5880 I/DiningItemsActivity ]\\n    1\\n12-15 06:28:58.868    5849-5880/com.spencer.ueat I/DiningItemsActivity? [ 12-15 06:28:58.868  5849: 5880 I/DiningItemsActivity ]\\n    34\\n12-15 06:28:58.869    5849-5880/com.spencer.ueat I/DiningItemsActivity? Vegetable Samosa with Yogurt Sauce\\n12-15 06:28:58.869    5849-5880/com.spencer.ueat I/DiningItemsActivity? 5\\n</code></pre>\\n\\n<p>Confuses me??</p>\\n\"",
    "reco2": "How to ignore tags while reading text from XML?",
    "reco3": "Regular Expression Split XML in Java",
    "reco1": "parse an object that contains xml data"
  },
  {
    "index": 41674,
    "votes": 2,
    "tags": [
      "java",
      "xml"
    ],
    "timestamp": 1398855897,
    "question": "Java Cannot make xml from bytes",
    "answers": 1,
    "content": "<p>I have to make xml document on client side  convert it to byte array and do the reverse sequence on server side.</p>\\n\\n<p>My xml is:</p>\\n\\n<pre><code>&lt;?xml version=\\1.0\\\" encoding=\\\"UTF-8\\\" standalone=\\\"no\\\"?&gt;\\n&lt;dirStruct&gt;\\n&lt;file modified=\\\"1398855221782\\\" name=\\\"sharedFolder\\\\hey.txt\\\"/&gt;\\n&lt;/dirStruct&gt;\\n</code></pre>\\n\\n<p>... verified with online xml validators  no errors found.</p>\\n\\n<p>Get it on server side:</p>\\n\\n<pre><code>byte[] msg = new byte[5000]; // buffer is large enough  so it isn't problem.\\nin.read(msg);\\nDocumentBuilderFactory docFactory = DocumentBuilderFactory.newInstance();\\nDocumentBuilder docBuilder = docFactory.newDocumentBuilder();\\nDocument doc = docBuilder.parse(new ByteArrayInputStream(msg)); // Here's i get an exeption\\n</code></pre>\\n\\n<p>... input data isn't null  verified up.</p>\\n\\n<p>Exception is:</p>\\n\\n<pre><code>[Fatal Error] :1:138: Content is not allowed in trailing section.\\norg.xml.sax.SAXParseException; lineNumber: 1; columnNumber: 138; Content is not allowed in trailing section.\\n</code></pre>\\n\\n<p>Where's im wrong?</p>\\n\\n<p>====================================</p>\\n\\n<p>Client side:</p>\\n\\n<pre><code>DocumentBuilderFactory docFactory = DocumentBuilderFactory.newInstance();\\nDocumentBuilder docBuilder = docFactory.newDocumentBuilder();\\nDocument doc = docBuilder.newDocument();\\nElement root = doc.createElement(\\\"dirStruct\\\");\\ndoc.appendChild(root);\\n\\nElement node = doc.createElement(\\\"file\\\");\\nnode.setAttribute(\\\"name\\\"  file.toString());\\nnode.setAttribute(\\\"modified\\\"  Long.toString(file.lastModified()));\\nroot.appendChild(node);\\n\\nTransformerFactory transformerFactory = TransformerFactory.newInstance();\\nTransformer transformer = transformerFactory.newTransformer();\\nDOMSource source = new DOMSource(doc);\\nStreamResult result = new StreamResult(stream);\\ntransformer.transform(source  result);\\n</code></pre>\\n\\n<p>... stream is <code>ByteArrayOutputStream</code>. </p>\\n\\n<p>If i will change <code>stream</code> to <code>System.out</code>  i will get correct result too.</p>\\n\\n<p>To byte array is just <code>data = stream.toByteArray();</code></p>\\n\"",
    "reco2": "read value inside the tag of xml. want to obtain the value of &lt;step num=&quot;1&quot;&gt; I get null when i try reading it. using DOM parser to read",
    "reco3": "Java Server/Client socket stops responding",
    "reco1": "&quot;Invalid byte 1 of 1-byte UTF-8 sequence&quot; occurs when posting xml in .jar but not in eclpise"
  },
  {
    "index": 46247,
    "votes": 2,
    "tags": [
      "java",
      "xml"
    ],
    "timestamp": 1398362578,
    "question": "Java parse large XML document",
    "answers": 2,
    "content": "<p>I'm trying to parse  and replace values in a large xml file  ~45MB each. The Way I do this is:</p>\\n\\n<pre><code>private void replaceData(File xmlFile  File out)\\n{\\n    DocumentBuilderFactory df = DocumentBuilderFactory.newInstance();\\n    DocumentBuilder db = df.newDocumentBuilder();\\n    Document xmlDoc = db.parse(xmlFile);\\n    xmlDoc.getDocumentElement().normalize();\\n\\n    Node allData = xmlDoc.getElementsByTagName(\\Data\\\").item(0);\\n    Element ctrlData = getSubElement(allData  \\\"ctrlData\\\");\\n    NodeList subData = ctrlData.getElementsByTagName(\\\"SubData\\\");\\n\\n    int len = subData.getLength();\\n\\n    for (int logIndex = 0; logIndex &lt; len; logIndex++) {\\n\\n        Node log = subData.item(logIndex);\\n        Element info = getSubElement(log  \\\"info\\\");\\n        Element value = getSubElement(info  \\\"dailyInfo\\\");\\n        Node valueNode = value.getElementsByTagName(\\\"value\\\").item(0);\\n        valueNode.setTextContent(\\\"blah\\\");               \\n    }\\n\\n    TransformerFactory tf = TransformerFactory.newInstance();\\n    Transformer t = tf.newTransformer();\\n    DOMSource s = new DOMSource(xmlDoc);\\n    StreamResult r = new StreamResult(out);\\n    t.transform(s  r);\\n\\n    } catch (TransformerException | ParserConfigurationException | SAXException | IOException e) {\\n         throw e;\\n    }\\n}\\n\\nprivate static Element getSubElement(Node node  String elementName)\\n{\\n        return (Element)((Element)node).getElementsByTagName(elementName).item(0);\\n}\\n</code></pre>\\n\\n<p>I notice that as I am further along the for loop the longer it takes  and for an average of 100k node's it takes over 2 hours  while if I just break out smaller chunks by hand of 1k  it will take ~10s. Is there something that is inefficient with the way that this document is being parsed?</p>\\n\\n<p>----EDIT----</p>\\n\\n<p>Based on comments and answers to this  I switched over to using Sax and XmlStreamWriter. Reference/example here: <a href=\\\"http://www.mkyong.com/java/how-to-read-xml-file-in-java-sax-parser/\\\" rel=\\\"nofollow\\\">http://www.mkyong.com/java/how-to-read-xml-file-in-java-sax-parser/</a></p>\\n\\n<p>After moving to using SAX   memory usage for the replaceData function does not expand to size of XML file  and XML file processing time went to ~18 seconds on average.</p>\\n\"",
    "reco2": "Exception in thread &quot;main&quot; java.net.MalformedURLException: unknown protocol: c",
    "reco3": "SAX Parser not accepting the returned XML data",
    "reco1": "How to check if xml tag has attributes using SAX Parser in Java?"
  },
  {
    "index": 94451,
    "votes": 2,
    "tags": [
      "java",
      "xml"
    ],
    "timestamp": 1393120029,
    "question": "Parsing xml file contents without knowing xml file structure",
    "answers": 1,
    "content": "<p>I've been working on learning some new tech using java to parse files and for the msot part it's going well. However  I'm at a lost as to how I could parse an xml file to where the structure is not known upon receipt. Lots of examples of how to do so if you know the structure (getElementByTagName seems to be the way to go)  but no dynamic options  at least not that I've found.</p>\\n\\n<p>So the tl;dr version of this question  how can I parse an xml file where I cannot rely on knowing it's structure?</p>\\n",
    "reco2": "Read C static structure in java",
    "reco3": "Retrieving a data from Parse",
    "reco1": "how to parse more than one attributes with Irule"
  },
  {
    "index": 99400,
    "votes": 2,
    "tags": [
      "java",
      "xml"
    ],
    "timestamp": 1392535504,
    "question": "Prevent transformer.transform( source  result ) from escaping special character",
    "answers": 0,
    "content": "<p>I'm updating node and text content of the xml using DOM parser. To save that DOM parser I'm using transformer.transform method. \\nBelow is the sample code.</p>\\n\\n<pre><code>String xmlText = \\&lt;uc&gt;abcd&gt;&lt;name&gt;mine&lt;/name&gt;efgh\\\\netg&lt;tag&gt;sd&lt;/tag&gt;&lt;/uc&gt;\\\";\\n        DocumentBuilderFactory documentBuilderFactory = DocumentBuilderFactory.newInstance();\\n        DocumentBuilder documentBuilder = documentBuilderFactory.newDocumentBuilder();\\n        InputSource inStream = new InputSource();\\n        inStream.setCharacterStream(new StringReader(xmlText));\\n        Document document = documentBuilder.parse(inStream);\\n        Node node = document.getDocumentElement();      \\n        node.normalize();\\n        NodeList childNodes = node.getChildNodes();\\n        for(int i=0; i&lt;childNodes.getLength(); i++) {\\n            if(childNodes.item(i).getNodeType() == Node.TEXT_NODE) {\\n                System.out.println(childNodes.item(i).getTextContent());\\n                childNodes.item(i).setTextContent(\\\"123&gt;\\\");\\n            }\\n        }\\n        TransformerFactory tFactory = TransformerFactory.newInstance();\\n        Transformer transformer = tFactory.newTransformer();\\n        transformer.setOutputProperty(OutputKeys.OMIT_XML_DECLARATION  \\\"yes\\\");\\n        transformer.setOutputProperty(OutputKeys.ENCODING  \\\"US-ASCII\\\");\\n        transformer.setOutputProperty(OutputKeys.INDENT  \\\"yes\\\");\\n        DOMSource source = new DOMSource( document );\\n        OutputStream xml = new ByteArrayOutputStream();\\n        StreamResult result = new StreamResult( xml  );\\n\\n        transformer.transform( source  result );\\n        String formattedXml = xml.toString();\\n        System.out.println(formattedXml);\\n</code></pre>\\n\\n<p>Since my updated document is having text content like \\\">\\\"  transformer.transform method is changing it to &amp;g t;\\nIs there a way to get the output without escaping special characters. \\nI can't use other parser because of some project constraints.\\nI can't use StringEscapeUtils.unescapeXml(). The reason is xml can have &amp;g t;. If i use this utility method  &amp;g t; which was originally present in the xml will also get changed.\\nSo i want a mechanism which will not escape any special character.</p>\\n\"",
    "reco2": "Escape XML special characters on node name",
    "reco3": "Is it possible for javax.xml.transform.Transformer.transform method to write an incomplete/invalid XML doc without throwing an Exception",
    "reco1": "Converting a org.w3c.dom.Document in Java to String using Transformer"
  },
  {
    "index": 119601,
    "votes": 2,
    "tags": [
      "java",
      "xml"
    ],
    "timestamp": 1390237688,
    "question": "Append nodes into existing XML File with java",
    "answers": 4,
    "content": "<p>Hi im looking for a solution to append nodes from java into an existing xml file.\\nWhat i got is an xml file like this</p>\\n\\n<pre><code>&lt;data&gt;\\n&lt;people&gt;\\n    &lt;person&gt;\\n        &lt;firstName&gt;Frank&lt;/firstName&gt;\\n        &lt;lastName&gt;Erb&lt;/lastName&gt;\\n        &lt;access&gt;true&lt;/access&gt;\\n        &lt;images&gt;\\n            &lt;img&gt;hm001.jpg&lt;/img&gt;\\n        &lt;/images&gt;\\n    &lt;/person&gt;\\n    &lt;person&gt;\\n        &lt;firstName&gt;Hans&lt;/firstName&gt;\\n        &lt;lastName&gt;Mustermann&lt;/lastName&gt;\\n        &lt;access&gt;true&lt;/access&gt;\\n        &lt;images&gt;\\n            &lt;img&gt;hm001.jpg&lt;/img&gt;\\n        &lt;/images&gt;\\n    &lt;/person&gt;\\n    &lt;person&gt;\\n        &lt;firstName&gt;Thomas&lt;/firstName&gt;\\n        &lt;lastName&gt;Tester&lt;/lastName&gt;\\n        &lt;access&gt;false&lt;/access&gt;\\n        &lt;images&gt;\\n            &lt;img&gt;tt001.jpg&lt;/img&gt;\\n        &lt;/images&gt;\\n    &lt;/person&gt;\\n&lt;/people&gt;\\n &lt;/data&gt;\\n</code></pre>\\n\\n<p>what i whant to  add is a person node with its elements inside the people element. My big problem is the data node which is root node. If it would be the Person node as root I could solve it. But I can't manage to get the person nodes under the people node.</p>\\n\\n<pre><code>           &lt;person&gt;\\n        &lt;firstName&gt;Tom&lt;/firstName&gt;\\n        &lt;lastName&gt;Hanks&lt;/lastName&gt;\\n        &lt;access&gt;false&lt;/access&gt;\\n        &lt;images&gt;\\n            &lt;img&gt;tt001.jpg&lt;/img&gt;\\n        &lt;/images&gt;\\n    &lt;/person&gt;\\n</code></pre>\\n\\n<p>thanks for your help!</p>\\n\\n<p>my java code looks as far like this</p>\\n\\n<pre><code>Element root = document.getDocumentElement();\\n\\n\\n// Root Element\\nElement rootElement = document.getDocumentElement();\\n\\nCollection&lt;Server&gt; svr = new ArrayList&lt;Server&gt;();\\nsvr.add(new Server());\\n\\nfor (Server i : svr) {\\n    // server elements\\n\\n    Element server = document.createElement(\\people\\\");\\n    rootElement.appendChild(server);\\n    //rootElement.appendChild(server);\\n\\n    Element name = document.createElement(\\\"person\\\");\\n    server.appendChild(name);\\n\\n    Element firstName = document.createElement(\\\"firstName\\\");\\n    firstName.appendChild(document.createTextNode(i.getFirstName()));\\n    server.appendChild(firstName);\\n    name.appendChild(firstName);\\n\\n    Element port = document.createElement(\\\"lastName\\\");\\n    port.appendChild(document.createTextNode(i.getLastName()));\\n    server.appendChild(port); \\n    name.appendChild(port);\\n\\n    Element access = document.createElement(\\\"access\\\");\\n    access.appendChild(document.createTextNode(i.getAccess()));\\n    server.appendChild(access); \\n    name.appendChild(access);\\n\\n    String imageName = Main.randomImgNr+\\\"\\\";\\n    Element images = document.createElement(\\\"images\\\");\\n    //images.appendChild(document.createTextNode(i.getAccess()));\\n    Element img = document.createElement(\\\"img\\\");\\n    img.appendChild(document.createTextNode(imageName));//i.getImage()));\\n    images.appendChild(img);            \\n\\n    server.appendChild(images);\\n    name.appendChild(images);\\n    root.appendChild(server);\\n</code></pre>\\n\"",
    "reco2": "xml node deletion not working properly in java using dom parser?",
    "reco3": "Primefaces Tree top parent node not selected when childs is selected",
    "reco1": "How to freeze current viewport in JTree within JScrollPane?"
  },
  {
    "index": 126762,
    "votes": 2,
    "tags": [
      "java",
      "xml"
    ],
    "timestamp": 1389267516,
    "question": "how do we send null values to a db using xml?",
    "answers": 1,
    "content": "<p>I'm trying to pass null values to a db through xml.</p>\\n\\n<pre><code>            &lt;parameter&gt;\\n                &lt;key&gt;email&lt;/key&gt;\\n                &lt;value&gt;tester@memoir-systems.com&lt;/value&gt;\\n            &lt;/parameter&gt;\\n            &lt;parameter&gt;\\n                &lt;key&gt;password&lt;/key&gt;\\n                &lt;value&gt;&lt;/value&gt;\\n            &lt;/parameter&gt;\\n            &lt;parameter&gt;\\n                &lt;key&gt;Customer&lt;/key&gt;\\n                &lt;value/&gt;\\n            &lt;/parameter&gt;\\n            &lt;parameter&gt;\\n                &lt;key&gt;Address&lt;/key&gt;\\n                &lt;value xmlns:xsi=\\http://www.w3.org/2001/XMLSchema\\\" xsi:nil=\\\"true\\\"/&gt;\\n            &lt;/parameter&gt;\\n</code></pre>\\n\\n<p>I've tried all this but it is taking it as a empty string with length zero and not as a null .</p>\\n\\n<pre><code>my xsd is\\n\\n&lt;xs:schema attributeFormDefault=\\\"unqualified\\\" elementFormDefault=\\\"qualified\\\" xmlns:xs=\\\"http://www.w3.org/2001/XMLSchema\\\"&gt;\\n  &lt;xs:element name=\\\"document\\\"&gt;\\n    &lt;xs:complexType&gt;\\n      &lt;xs:sequence&gt;\\n        &lt;xs:element name=\\\"testCaseData\\\" maxOccurs=\\\"unbounded\\\" minOccurs=\\\"0\\\"&gt;\\n          &lt;xs:complexType&gt;\\n            &lt;xs:sequence&gt;\\n              &lt;xs:element type=\\\"xs:long\\\" name=\\\"id\\\" minOccurs=\\\"0\\\"/&gt;     \\n              &lt;xs:element type=\\\"xs:string\\\" name=\\\"testCaseName\\\"/&gt;\\n              &lt;xs:element type=\\\"xs:string\\\" name=\\\"expectedResult\\\"/&gt;\\n              &lt;xs:element name=\\\"parameter\\\" maxOccurs=\\\"unbounded\\\" minOccurs=\\\"0\\\"&gt;\\n                &lt;xs:complexType&gt;\\n                  &lt;xs:sequence&gt;\\n                    &lt;xs:element type=\\\"xs:string\\\" name=\\\"key\\\"/&gt;\\n                    &lt;xs:element name=\\\"value\\\"  maxOccurs=\\\"unbounded\\\" minOccurs=\\\"0\\\" nillable=\\\"true\\\"/&gt;\\n                  &lt;/xs:sequence&gt;\\n                &lt;/xs:complexType&gt;\\n              &lt;/xs:element&gt;\\n            &lt;/xs:sequence&gt;\\n          &lt;/xs:complexType&gt;\\n        &lt;/xs:element&gt;\\n      &lt;/xs:sequence&gt;\\n    &lt;/xs:complexType&gt;\\n  &lt;/xs:element&gt;\\n&lt;/xs:schema&gt;\\n</code></pre>\\n\\n<p>Can anyone please help me fix this?</p>\\n\"",
    "reco2": "What does resultSet.getString() return for null value",
    "reco3": "parsing xml string in java",
    "reco1": "Why the results are strange when using CopyOnWriteArrayList?"
  },
  {
    "index": 156456,
    "votes": 2,
    "tags": [
      "java",
      "xml"
    ],
    "timestamp": 1413297461,
    "question": "why &amp; becomes &amp;amp:amp; and how to solve this in XML?",
    "answers": 2,
    "content": "<p>I am using below tag to query the item from DB. The item presents in DB but not showing up because <code>A&amp;M</code> became as <code>A&amp;amp;amp;M</code> instead of <code>A&amp;amp;M</code>. How to solve this? </p>\\n\\n<pre><code>&lt;TEA&gt;2720A 100 STATE A&amp;amp;amp;M RD VRAD&lt;/TEA&gt;\\n</code></pre>\\n\\n<p>A backend java code queries the item from DB like 'select * from aa where tea=2720A 100 STATE A&amp;amp;M RD VRAD' and returns no record but it is present in DB like A&amp;M. This is the exact issue  how to solve this? </p>\\n",
    "reco2": "R Errors In Eclipse",
    "reco3": "How to print out specific parts of a string",
    "reco1": "JDBC returns an empty ResultSet (rs.isBeforeFirst() == true) although the table isn&#39;t empty"
  },
  {
    "index": 164027,
    "votes": 2,
    "tags": [
      "java",
      "xml"
    ],
    "timestamp": 1412233374,
    "question": "How to un-pretty print XML",
    "answers": 1,
    "content": "<p>I would like my XML to be not-pretty printed  i.e. all on one line  no spaces between elements. e.g.</p>\\n\\n<pre><code>&lt;element&gt;value&lt;/element&gt;&lt;element&gt;&lt;nested&gt;value&lt;/nested&gt;&lt;/element&gt;\\n</code></pre>\\n\\n<p>(Exception handling removed)</p>\\n\\n<pre><code>public String transform(Document doc) {\\n\\n    javax.xml.transform.Transformer transformer = TransformerFactory.newInstance().newTransformer();\\n    transformer.setOutputProperty(OutputKeys.ENCODING  \\UTF-8\\\");\\n    transformer.setOutputProperty(OutputKeys.INDENT  \\\"no\\\");\\n    transformer.setOutputProperty(OutputKeys.OMIT_XML_DECLARATION  \\\"yes\\\");\\n\\n    DOMSource source = new DOMSource(doc);\\n    transformer.transform(source  new StreamResult(stringWriter));\\n    String result = stringWriter.toString();\\n\\n    return result;\\n}\\n</code></pre>\\n\\n<p>Even with <code>OutputKeys.INDENT</code> as <code>no</code>  I am still getting pretty-printed XML when my input is created from pretty-printed XML.</p>\\n\\n<p>I looked at <a href=\\\"http://stackoverflow.com/questions/8476318/how-to-unformat-xml-file\\\">How to unformat xml file</a>  but I cannot just strip newlines and whitespaces from my XML  as my data may contain them. I don't really want to parse the string and format it myself  but I can't think of any other solution.</p>\\n\\n<p>I am being passed the <code>Document</code> object  so I cannot modify the DocumentBuilder (as seen here <a href=\\\"http://stackoverflow.com/a/15462951/3887715\\\">http://stackoverflow.com/a/15462951/3887715</a>). I could use the StringBuilder solution (<a href=\\\"http://stackoverflow.com/a/13163891/3887715\\\">http://stackoverflow.com/a/13163891/3887715</a>)  but I am concerned that any comments will be merged if they span multiple lines.</p>\\n\\n<p>However  this is mostly used for logging purposes  so lacking any other solution  I think the StringBuilder one is the cleanest.</p>\\n\"",
    "reco2": "Pretty printed JSON inside an XML",
    "reco3": "I would like to create XML file using java",
    "reco1": "read value inside the tag of xml. want to obtain the value of &lt;step num=&quot;1&quot;&gt; I get null when i try reading it. using DOM parser to read"
  },
  {
    "index": 202879,
    "votes": 2,
    "tags": [
      "java",
      "xml"
    ],
    "timestamp": 1406512670,
    "question": "MalformedByteSequenceException Invalid byte 1 of 1-byte UTF-8 sequence",
    "answers": 1,
    "content": "<p>I am coding an <em>XML</em> parser class and when I run it sometimes it works fine but another time it doesn't work and throws this exception:</p>\\n\\n<blockquote>\\n  <p>MalformedByteSequenceException Invalid byte 1 of 1-byte UTF-8 sequence</p>\\n</blockquote>\\n\\n<p>Can anyone provide some information as to why?</p>\\n\\n<p>Here is my code:</p>\\n\\n<pre><code>package TRT;\\n\\n\\n\\nimport java.math.BigInteger;\\nimport java.net.URL;\\nimport java.net.URLConnection;\\n\\nimport javax.xml.parsers.DocumentBuilder;\\nimport javax.xml.parsers.DocumentBuilderFactory;\\n\\nimport org.w3c.dom.Document;\\nimport org.w3c.dom.Element;\\nimport org.w3c.dom.Node;\\nimport org.w3c.dom.NodeList;\\n\\npublic class Gundem {\\n\\n\\n    public static void main(String[] args) {\\n        // TODO Auto-generated method stub\\n\\n        Gundem gundem=new Gundem();\\n        try {\\n            URL url=new URL(\\http://www.trt.net.tr/rss/gundem.rss\\\");\\n            URLConnection connection=url.openConnection();\\n\\n            DocumentBuilderFactory builderFactory=DocumentBuilderFactory.newInstance();\\n            DocumentBuilder docBuilder=builderFactory.newDocumentBuilder();\\n            Document document=docBuilder.parse(connection.getInputStream());\\n\\n            Element element=document.getDocumentElement();\\n\\n            Node node=(Node)element.getChildNodes();\\n            System.out.println(node.getNodeName());\\n\\n\\n            NodeList nodeList=node.getChildNodes();\\n            Node channelNode=(Node)nodeList.item(0);\\n            System.out.println(channelNode.getNodeName());\\n\\n            NodeList childNodeListOfChannelNode=channelNode.getChildNodes();\\n\\n            for(int i=0;i&lt;childNodeListOfChannelNode.getLength();i++){\\n                Node childNodesOfChannelNode=(Node)childNodeListOfChannelNode.item(i);\\n                System.out.println(childNodesOfChannelNode.getNodeName());\\n\\n                if(childNodesOfChannelNode.getNodeName().equals(Constants.ITEM)){\\n                    Item item=new Item();\\n                    NodeList itemList=childNodesOfChannelNode.getChildNodes();\\n                    for(int j=0;j&lt;itemList.getLength();j++){\\n                        Node childNodeOfItem=itemList.item(j);\\n                        if(childNodeOfItem.getNodeName().equals(Constants.TITLE)){\\n                            item.setTitle(childNodeOfItem.getTextContent());\\n                            System.out.println(item.getTitle());\\n                            System.out.println(gundem.dumpingInputAsHex(item.getTitle()));\\n                        }\\n                        else       if(childNodeOfItem.getNodeName().equals(Constants.DESCRIPTION)){\\n                            item.setDescription(childNodeOfItem.getTextContent());\\n                            System.out.println(item.getDescription());\\n                        }\\n\\n                    }\\n\\n                }\\n\\n            }\\n\\n        } catch (Exception e) {\\n            // TODO Auto-generated catch block\\n            e.printStackTrace();\\n        }\\n\\n\\n\\n        System.exit(0);  // this line is for solving that problem; JDWP Unable to get JNI 1.2 environment  jvm-&gt;GetEnv() return code = -2\\n\\n\\n        }\\n\\n    public String dumpingInputAsHex(String input){\\n        return String.format(\\\"%40x\\\" new BigInteger(1 input.getBytes()));\\n    }\\n\\n}\\n</code></pre>\\n\"",
    "reco2": "How to store encrypted value (for ex- &#240;&#231;M&#184;&#189;&#167;J&#183;h&#176;P&#165;\\\\&#171;ah&#230;\ufffdi&#187;U&#231;&#185;&amp;&gt;9&#243;?) in a node of xml file",
    "reco3": "Convert a java string to an xml that contains valid utf-8 characters",
    "reco1": "&quot;Invalid byte 1 of 1-byte UTF-8 sequence&quot; occurs when posting xml in .jar but not in eclpise"
  },
  {
    "index": 9097,
    "votes": 1,
    "tags": [
      "java",
      "xml"
    ],
    "timestamp": 1403508024,
    "question": "How to get xml tag value using attribute value in java",
    "answers": 1,
    "content": "<p>How to get XML tag value using attribute value in java?</p>\\n\\n<p>The format of XML is:</p>\\n\\n<pre><code>&lt;str name=\\Total Requests made to DataSource\\\"&gt;0&lt;/str&gt; \\n&lt;str name=\\\"Total Rows Fetched\\\"&gt;0&lt;/str&gt;\\n</code></pre>\\n\\n<p>Say for eg: I need to get tag value <code>0</code> using <code>Total Requests made to DataSource</code> value.</p>\\n\"",
    "reco2": "Modify the text content of XML tag",
    "reco3": "I want to change value of XML tag in java",
    "reco1": "Java SAX parse XML file"
  },
  {
    "index": 14832,
    "votes": 1,
    "tags": [
      "java",
      "xml"
    ],
    "timestamp": 1402661153,
    "question": "Modify the text content of XML tag",
    "answers": 1,
    "content": "<p>How can I insert a new tag for each word from the text content of a tag?</p>\\n\\n<p>If i have a xml like:</p>\\n\\n<pre><code>&lt;root&gt;\\n  &lt;el&gt; Text content for tag \\n &lt;/el&gt;\\n&lt;/root&gt;\\n</code></pre>\\n\\n<p>I want the output to be: </p>\\n\\n<pre><code>  &lt;root&gt;\\n   &lt;el&gt; &lt;new&gt;Text&lt;/new&gt; &lt;new&gt;content&lt;/new&gt; &lt;new&gt;for&lt;/new&gt; &lt;new&gt;tag&lt;/new&gt;\\n   &lt;/el&gt;\\n  &lt;/root&gt;\\n</code></pre>\\n\\n<p>Any idea?</p>\\n",
    "reco2": "Java SAX parse XML file",
    "reco3": "Parse XML in Java and ignore a tag",
    "reco1": "How to get xml tag value using attribute value in java"
  },
  {
    "index": 16360,
    "votes": 1,
    "tags": [
      "java",
      "xml"
    ],
    "timestamp": 1402455410,
    "question": "Conversion of a small XML containfg different data values to POJO",
    "answers": 2,
    "content": "<p>I am currently writing a parser for a simple XML. The XML at its longest contains 18 lines. I am trying to parse it and convert it to a POJO. I know that I can use JAXB or similar libraries  but I felt that considering the size of the XML  that would be an overkill. Also  this is an exercise to think beyond libraries.</p>\\n\\n<p>An example XML would be:</p>\\n\\n<pre><code>&lt;machineinfo&gt;\\n    &lt;processorCount&gt;4&lt;/processorCount&gt;\\n    &lt;boughtDate&gt;2014-06-09 23:17:49.0&lt;/boughtDate&gt;\\n    &lt;installationStatus&gt;COMPLETE&lt;/installationStatus&gt;\\n    &lt;machineType&gt;BASIC&lt;/machineType&gt;\\n    &lt;osVersion&gt;1849AB48DOED&lt;/osVersion&gt;\\n    &lt;serverName&gt;fjv920dk&lt;/serverName&gt;\\n    &lt;machineStatus&gt;UP&lt;/machineStatus&gt;\\n    &lt;statusPay1&gt;NA&lt;/statusPay1&gt;\\n    &lt;statusPay2&gt;NA&lt;/statusPay2&gt;\\n    &lt;errorCode&gt;NO_ERROR&lt;/errorCode&gt;\\n    &lt;exceptionCode&gt;0&lt;/exceptionCode&gt;\\n    &lt;isCloneable&gt;true&lt;/isCloneable&gt;\\n    &lt;latestVersion&gt;1849AB48DOED&lt;/latestVersion&gt;\\n    &lt;mastermachineName/&gt;\\n    &lt;podName&gt;8D2&lt;/podName&gt;\\n    &lt;machineName&gt;machine2&lt;/machineName&gt;\\n&lt;/machineinfo&gt;\\n</code></pre>\\n\\n<p>My core conversion logic is as follows:</p>\\n\\n<pre><code>if (tagName.equalsIgnoreCase(\\processorCount\\\")) {\\n    machineInfo.setProcessorCount(new Integer(data).intValue());\\n} else if (tagName.equalsIgnoreCase(\\\"boughtDate\\\")) {\\n    DateTimeFormatter formatter = DateTimeFormat.forPattern(\\\"yyyy-MM-dd HH:mm:ss.SSS\\\");\\n    DateTime dt = formatter.parseDateTime(data);\\n    machineInfo.setBoughtDate(dt);\\n} else if (tagName.equalsIgnoreCase(\\\"installationStatus\\\") {\\n    machineInfo.setInstallationStatus(InstallationStatus.valueOf(data));\\n} else if (tagName.equalsIgnoreCase(\\\"installationStatus\\\") {\\n    machineInfo.setInstallationStatus(InstallationStatus.valueOf(data));\\n}\\n</code></pre>\\n\\n<p>As you can see  this leads to multiple <code>if</code> conditions. I tried simplifying that by using a <code>Map</code> as follows:</p>\\n\\n<pre><code>Map &lt;String  Object&gt; map = new HashMap&lt;String  Object&gt;();\\nmap.put(\\\"machineName\\\"  data);\\nmap.put(\\\"machineType\\\"  data);\\nString mapValue = (String) map.get(tagName);\\n</code></pre>\\n\\n<p>But how do I determine which setter in <code>machineInfo</code> should be invoked? </p>\\n\"",
    "reco2": "create xml from java object using JAXB",
    "reco3": "How Do I Handle Org.Apache.Axiom.Om.Omexception: Com.Ctc.Wstx.Exc.Wstxunexpectedcharexception: Illegal Character ((Ctrl-Char  Code 25))",
    "reco1": "read value inside the tag of xml. want to obtain the value of &lt;step num=&quot;1&quot;&gt; I get null when i try reading it. using DOM parser to read"
  },
  {
    "index": 17482,
    "votes": 1,
    "tags": [
      "java",
      "xml"
    ],
    "timestamp": 1402299920,
    "question": "How to find the line number in XML string whern element value is provided?",
    "answers": 3,
    "content": "<p>I want to get the line nimber from the dynamix XML string when the node value is passed. For example  if I give the input as \\RSS Tutorial\\\" the output should return the line number as 9. How to achieve this in java?</p>\\n\\n<p>The sample XML is given below</p>\\n\\n<pre><code>    &lt;?xml version=\\\"1.0\\\" encoding=\\\"UTF-8\\\" ?&gt;\\n&lt;rss version=\\\"2.0\\\"&gt;\\n\\n&lt;channel&gt;\\n  &lt;title&gt;W3Schools Home Page&lt;/title&gt;\\n  &lt;link&gt;http://www.w3schools.com&lt;/link&gt;\\n  &lt;description&gt;Free web building tutorials&lt;/description&gt;\\n  &lt;item&gt;\\n    &lt;title&gt;RSS Tutorial&lt;/title&gt;\\n    &lt;link&gt;http://www.w3schools.com/rss&lt;/link&gt;\\n    &lt;description&gt;New RSS tutorial on W3Schools&lt;/description&gt;\\n  &lt;/item&gt;\\n  &lt;item&gt;\\n    &lt;title&gt;XML Tutorial&lt;/title&gt;\\n    &lt;link&gt;http://www.w3schools.com/xml&lt;/link&gt;\\n    &lt;description&gt;New XML tutorial on W3Schools&lt;/description&gt;\\n  &lt;/item&gt;\\n&lt;/channel&gt;\\n\\n&lt;/rss&gt;\\n</code></pre>\\n\"",
    "reco2": "Use XML parser for rss XML text file which is store in Edit Text field",
    "reco3": "Add new parent Node for XML existing nodes",
    "reco1": "read value inside the tag of xml. want to obtain the value of &lt;step num=&quot;1&quot;&gt; I get null when i try reading it. using DOM parser to read"
  }
];
