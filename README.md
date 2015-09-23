# Public Mod Sources

ここにアップロードされているソースコードはBlockLauncherにて使用できるテンプレートや自分の作成したModです

**利用する際は、コメントにて**
`//Author:わんせた(ONESETA)  Twitter:@ars42525`
**と明記してください**

テンプレートの場合、コメント(//)が入っている場所でコードを区切っても構いません
その場合、全ての区切った箇所の先頭に、
`//Author:わんせた(ONESETA)  Twitter:@ars42525`
を追加しなければなりません

例  
    //Author:わんせた(ONESETA)  Twitter:@ars42525  
    var getAct=com.mojang.minecraftpe.MainActivity.currentMainActivity.get();  
    var modname="";  
    var ProgressDialog=android.app.ProgressDialog;  
    function newLevel(){  
    //Author:わんせた(ONESETA)  Twitter:@ars42525  
    getAct.runOnUiThread(  
    new java.lang.Runnable({run:function(){  
    try{  
    var pd=ProgressDialog(getAct);  
    pd.setTitle(modname);  
    pd.setProgressStyle(ProgressDialog.STYLE_SPINNER);  
    pd.show();  
    }catch(e){  
    report(e);  
    }  
    }})  
    );  
    }
