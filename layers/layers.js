var wms_layers = [];


        var lyr_Positronretina_0 = new ol.layer.Tile({
            'title': 'Positron (retina)',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}@2x.png'
            })
        });
var format_Denpasar_1 = new ol.format.GeoJSON();
var features_Denpasar_1 = format_Denpasar_1.readFeatures(json_Denpasar_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Denpasar_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Denpasar_1.addFeatures(features_Denpasar_1);
var lyr_Denpasar_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Denpasar_1, 
                style: style_Denpasar_1,
                popuplayertitle: "Denpasar",
                interactive: true,
    title: 'Denpasar<br />\
    <img src="styles/legend/Denpasar_1_0.png" /> Denpasar Barat<br />\
    <img src="styles/legend/Denpasar_1_1.png" /> Denpasar Selatan<br />\
    <img src="styles/legend/Denpasar_1_2.png" /> Denpasar Timur<br />\
    <img src="styles/legend/Denpasar_1_3.png" /> Denpasar Utara<br />'
        });
var format_TerminaldiDenpasar_2 = new ol.format.GeoJSON();
var features_TerminaldiDenpasar_2 = format_TerminaldiDenpasar_2.readFeatures(json_TerminaldiDenpasar_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TerminaldiDenpasar_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TerminaldiDenpasar_2.addFeatures(features_TerminaldiDenpasar_2);
var lyr_TerminaldiDenpasar_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TerminaldiDenpasar_2, 
                style: style_TerminaldiDenpasar_2,
                popuplayertitle: "Terminal di Denpasar",
                interactive: true,
    title: 'Terminal di Denpasar<br />\
    <img src="styles/legend/TerminaldiDenpasar_2_0.png" /> Kreneng<br />\
    <img src="styles/legend/TerminaldiDenpasar_2_1.png" /> Tegal sari<br />\
    <img src="styles/legend/TerminaldiDenpasar_2_2.png" /> Ubung<br />\
    <img src="styles/legend/TerminaldiDenpasar_2_3.png" /> Wangaya<br />'
        });

lyr_Positronretina_0.setVisible(true);lyr_Denpasar_1.setVisible(true);lyr_TerminaldiDenpasar_2.setVisible(true);
var layersList = [lyr_Positronretina_0,lyr_Denpasar_1,lyr_TerminaldiDenpasar_2];
lyr_Denpasar_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Desa_Lurah': 'Desa_Lurah', 'Kecamatan': 'Kecamatan', 'Kota': 'Kota', 'Luas_m2': 'Luas_m2', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Sumber': 'Sumber', });
lyr_TerminaldiDenpasar_2.set('fieldAliases', {'fid': 'fid', 'Nama': 'Nama', 'Alamat': 'Alamat', 'Jenis Data': 'Jenis Data', 'foto': 'foto', });
lyr_Denpasar_1.set('fieldImages', {'OBJECTID': 'Range', 'Desa_Lurah': 'TextEdit', 'Kecamatan': 'TextEdit', 'Kota': 'TextEdit', 'Luas_m2': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Sumber': 'TextEdit', });
lyr_TerminaldiDenpasar_2.set('fieldImages', {'fid': 'TextEdit', 'Nama': 'TextEdit', 'Alamat': 'TextEdit', 'Jenis Data': 'TextEdit', 'foto': 'ExternalResource', });
lyr_Denpasar_1.set('fieldLabels', {'OBJECTID': 'hidden field', 'Desa_Lurah': 'hidden field', 'Kecamatan': 'inline label - always visible', 'Kota': 'inline label - always visible', 'Luas_m2': 'inline label - always visible', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'Sumber': 'hidden field', });
lyr_TerminaldiDenpasar_2.set('fieldLabels', {'fid': 'hidden field', 'Nama': 'inline label - always visible', 'Alamat': 'inline label - always visible', 'Jenis Data': 'inline label - always visible', 'foto': 'no label', });
lyr_TerminaldiDenpasar_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});