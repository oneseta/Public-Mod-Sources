//ProgressDialogを表示するテンプレ
//インターネット接続や、処理の長いコードの前に使用してください
//editProgress("テキスト");でダイアログのテキストを更新、delProgress();でダイアログ消去を行います

//いろいろ定義する部分(Modの先頭に)
var getAct=com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
var modname="";//Mod名をいれてください
var ProgressDialog=android.app.ProgressDialog;
var pd;

function editProgress(t){
	getAct.runOnUiThread(
	new java.lang.Runnable({run:function(){
		try{
			pd.setMessage(t);
		}catch(e){
			report(e);
			}
		}})
	);
}
function delProgress(){
	getAct.runOnUiThread(
	new java.lang.Runnable({run:function(){
		try{
			pd.hide();
		}catch(e){
			report(e);
			}
		}})
	);
}

//表示部分(処理前に)
getAct.runOnUiThread(
	new java.lang.Runnable({run:function(){
		try{
			pd=ProgressDialog(getAct);
			pd.setTitle(modname);
			pd.setProgressStyle(ProgressDialog.STYLE_SPINNER);
			pd.show();
		}catch(e){
			report(e);
		}
	}})
);