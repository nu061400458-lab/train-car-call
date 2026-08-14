/* ========================================
   のりものをよぼう！
   JavaScript
======================================== */


/* ========================================
   HTML要素を取得
======================================== */

const homeScreen =
    document.getElementById("homeScreen");

const gameScreen =
    document.getElementById("gameScreen");


const homeButton =
    document.getElementById("homeButton");


const actionButton =
    document.getElementById("actionButton");


const message =
    document.getElementById("message");


const gameTitle =
    document.getElementById("gameTitle");


const vehicle =
    document.getElementById("vehicle");


const sceneBackground =
    document.getElementById("sceneBackground");


const trainVehicle =
    document.getElementById("trainVehicle");


const policeVehicle =
    document.getElementById("policeVehicle");


const ambulanceVehicle =
    document.getElementById("ambulanceVehicle");


const fireVehicle =
    document.getElementById("fireVehicle");


/* ========================================
   現在選択している乗り物
======================================== */

let currentVehicle = "train";


/* ========================================
   ゲームの状態

   waiting
   ↓
   よぶ前

   coming
   ↓
   乗り物がやってくる

   arrived
   ↓
   到着

   going
   ↓
   出発
======================================== */

let gameState = "waiting";



/* ========================================
   乗り物の設定
======================================== */

const vehicleSettings = {

    train: {

        title: "🚃 でんしゃをよぼう！",

        callButton: "🚃 でんしゃをよぶ！",

        arriveMessage:
            "でんしゃが きたよ！",

        arrivedMessage:
            "でんしゃが とうちゃくしたよ！",

        goMessage:
            "しゅっぱーつ！",

        runningButton:
            "🚃 はしっているよ！"

    },


    police: {

        title: "🚓 パトカーをよぼう！",

        callButton: "🚓 パトカーをよぶ！",

        arriveMessage:
            "パトカーが きたよ！",

        arrivedMessage:
            "パトカーが とうちゃくしたよ！",

        goMessage:
            "いそいで しゅっぱつ！",

        runningButton:
            "🚓 はしっているよ！"

    },


    ambulance: {

        title: "🚑 きゅうきゅうしゃをよぼう！",

        callButton:
            "🚑 きゅうきゅうしゃをよぶ！",

        arriveMessage:
            "きゅうきゅうしゃが きたよ！",

        arrivedMessage:
            "きゅうきゅうしゃが とうちゃくしたよ！",

        goMessage:
            "しゅっぱつ！",

        runningButton:
            "🚑 はしっているよ！"

    },


    fire: {

        title: "🚒 しょうぼうしゃをよぼう！",

        callButton:
            "🚒 しょうぼうしゃをよぶ！",

        arriveMessage:
            "しょうぼうしゃが きたよ！",

        arrivedMessage:
            "しょうぼうしゃが とうちゃくしたよ！",

        goMessage:
            "しゅっぱつ！",

        runningButton:
            "🚒 はしっているよ！"

    }

};



/* ========================================
   ホーム画面の乗り物ボタン
======================================== */

const vehicleButtons =
    document.querySelectorAll(".vehicle-button");


vehicleButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        /* 選択した乗り物を取得 */

        const selectedVehicle =
            button.dataset.vehicle;


        /* ゲームを開始 */

        startGame(selectedVehicle);

    });

});



/* ========================================
   ゲームを開始する
======================================== */

function startGame(vehicleType) {

    /* 現在の乗り物を変更 */

    currentVehicle = vehicleType;


    /* ゲーム状態をリセット */

    gameState = "waiting";


    /* ホーム画面を隠す */

    homeScreen.classList.add("hidden");


    /* ゲーム画面を表示 */

    gameScreen.classList.remove("hidden");


    /* 選択した乗り物を表示 */

    showSelectedVehicle(vehicleType);


    /* タイトルを変更 */

    gameTitle.textContent =
        vehicleSettings[vehicleType].title;


    /* メッセージを変更 */

    message.textContent =
        getCallMessage(vehicleType);


    /* ボタンを変更 */

    actionButton.textContent =
        vehicleSettings[vehicleType].callButton;


    /* ボタンを有効化 */

    actionButton.disabled = false;


    /* 電車なら線路、車なら道路 */

    if (vehicleType === "train") {

        sceneBackground.classList.add(
            "train-mode"
        );

        sceneBackground.classList.remove(
            "car-mode"
        );

    } else {

        sceneBackground.classList.add(
            "car-mode"
        );

        sceneBackground.classList.remove(
            "train-mode"
        );

    }


    /* 電車を画面左に戻す */

    resetVehiclePosition();

}



/* ========================================
   「よんでみよう」のメッセージ
======================================== */

function getCallMessage(vehicleType) {

    if (vehicleType === "train") {

        return "でんしゃを よんでみよう！";

    }

    if (vehicleType === "police") {

        return "パトカーを よんでみよう！";

    }

    if (vehicleType === "ambulance") {

        return "きゅうきゅうしゃを よんでみよう！";

    }

    if (vehicleType === "fire") {

        return "しょうぼうしゃを よんでみよう！";

    }

}



/* ========================================
   選択した乗り物だけ表示
======================================== */

function showSelectedVehicle(vehicleType) {

    /* いったん全部非表示 */

    trainVehicle.style.display = "none";

    policeVehicle.style.display = "none";

    ambulanceVehicle.style.display = "none";

    fireVehicle.style.display = "none";


    /* 選択したものだけ表示 */

    if (vehicleType === "train") {

        trainVehicle.style.display = "block";

    }

    if (vehicleType === "police") {

        policeVehicle.style.display = "block";

    }

    if (vehicleType === "ambulance") {

        ambulanceVehicle.style.display = "block";

    }

    if (vehicleType === "fire") {

        fireVehicle.style.display = "block";

    }

}



/* ========================================
   電車・車を初期位置に戻す
======================================== */

function resetVehiclePosition() {

    vehicle.classList.remove("coming");

    vehicle.classList.remove("going");


    /* アニメーションをリセットする */

    void vehicle.offsetWidth;


    vehicle.style.left = "-270px";

}



/* ========================================
   操作ボタン
======================================== */

actionButton.addEventListener(
    "click",
    function () {


        /* ====================================
           ① 乗り物を呼ぶ
        ==================================== */

        if (gameState === "waiting") {

            gameState = "coming";


            /* メッセージ */

            message.textContent =
                vehicleSettings[
                    currentVehicle
                ].arriveMessage;


            /* ボタン */

            actionButton.textContent =
                "🚃 まっててね！";


            /* ボタンを一時的に無効 */

            actionButton.disabled = true;


            /* アニメーションをリセット */

            vehicle.classList.remove("coming");

            vehicle.classList.remove("going");

            void vehicle.offsetWidth;


            /* 乗り物がやってくる */

            vehicle.classList.add("coming");


            /* ====================================
               2.5秒後に到着
            ==================================== */

            setTimeout(function () {

                gameState = "arrived";


                message.textContent =
                    vehicleSettings[
                        currentVehicle
                    ].arrivedMessage;


                actionButton.textContent =
                    getDepartureButtonText(
                        currentVehicle
                    );


                actionButton.disabled = false;


            }, 2500);

        }



        /* ====================================
           ② 乗り物を出発させる
        ==================================== */

        else if (gameState === "arrived") {

            gameState = "going";


            /* メッセージ */

            message.textContent =
                vehicleSettings[
                    currentVehicle
                ].goMessage;


            /* ボタン */

            actionButton.textContent =
                vehicleSettings[
                    currentVehicle
                ].runningButton;


            /* ボタンを無効 */

            actionButton.disabled = true;


            /* アニメーション */

            vehicle.classList.remove("coming");

            void vehicle.offsetWidth;

            vehicle.classList.add("going");


            /* ====================================
               2.5秒後
            ==================================== */

            setTimeout(function () {

                gameState = "waiting";


                /* 初期メッセージ */

                message.textContent =
                    getCallMessage(
                        currentVehicle
                    );


                /* ボタン */

                actionButton.textContent =
                    vehicleSettings[
                        currentVehicle
                    ].callButton;


                actionButton.disabled = false;


                /* 乗り物を左へ戻す */

                vehicle.classList.remove("going");

                vehicle.style.left = "-270px";


            }, 2500);

        }

    }
);



/* ========================================
   出発ボタンの文字
======================================== */

function getDepartureButtonText(vehicleType) {

    if (vehicleType === "train") {

        return "🚃 しゅっぱつ！";

    }

    if (vehicleType === "police") {

        return "🚓 しゅっぱつ！";

    }

    if (vehicleType === "ambulance") {

        return "🚑 しゅっぱつ！";

    }

    if (vehicleType === "fire") {

        return "🚒 しゅっぱつ！";

    }

}



/* ========================================
   ホームへ戻る
======================================== */

homeButton.addEventListener(
    "click",
    function () {

        /* ゲーム状態をリセット */

        gameState = "waiting";


        /* アニメーションを停止 */

        vehicle.classList.remove("coming");

        vehicle.classList.remove("going");


        /* ホーム画面を表示 */

        gameScreen.classList.add("hidden");

        homeScreen.classList.remove("hidden");


        /* 電車を初期位置に戻す */

        vehicle.style.left = "-270px";


        /* ボタンを有効化 */

        actionButton.disabled = false;

    }
);