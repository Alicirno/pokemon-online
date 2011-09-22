var sources = {};

sources[FieldData.Rain] = "BattleDataQML/Weather/Rain.qml";
sources[FieldData.Hail] = "BattleDataQML/Weather/Hail.qml";
sources[FieldData.SandStorm] = "BattleDataQML/Weather/Sand.qml";

function trigger(weatherScene, weather) {
    if (weather in sources) {
        weatherScene.source = sources[weather];
        weatherScene.item.start();
    }
}
