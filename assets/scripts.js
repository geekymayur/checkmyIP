
var button = document.getElementById('mybtn');
var ipv4 = document.getElementById('ipv4');
var ipv6 = document.getElementById('ipv6');

// details target
var ipaddress = document.getElementById('ipaddress');
var ipstatus = document.getElementById('status');
var country = document.getElementById('country');
var countryCode = document.getElementById('countryCode');
var region = document.getElementById('region');
var regionName = document.getElementById('regionName');
var city = document.getElementById('city');
var zip = document.getElementById('zip');
var lati = document.getElementById('lati');
var long = document.getElementById('long');
var timeZone = document.getElementById('timeZone');
var isp = document.getElementById('isp');
var org = document.getElementById('org');
var conn = document.getElementById('conn');
var showMap = document.getElementById('showMap');
var displayBoard = document.getElementById('displayBoard');

$(displayBoard).hide();

var getIp = async (event) => {
    try {
        // get ipv4
        var ipv4url = 'https://api.ipify.org?format=json';
        var ipv4Res = await fetch(ipv4url);
        var ipv4data = await ipv4Res.json();
        console.log(ipv4data.ip);
        ipv4.innerHTML = 'IPv4 : ' + ipv4data.ip;

        // get ipv6
        var ipv6url = 'https://api64.ipify.org?format=json';
        var ipv6Res = await fetch(ipv6url);
        var ipv6data = await ipv6Res.json();
        console.log(ipv6data.ip);
        ipv6.innerHTML = 'IPv6 : ' + ipv6data.ip;

        // get ip details
        var ipdetails = `http://ip-api.com/json/${ipv4data.ip}`
        var ipdetailsRes = await fetch(ipdetails);
        var ipdetailData = await ipdetailsRes.json();
        console.log(ipdetailData);


        // send to page
        ipaddress.innerHTML = ipdetailData.query;
        ipstatus.innerHTML = ipdetailData.status;
        country.innerHTML = ipdetailData.country;
        countryCode.innerHTML = ipdetailData.countryCode;
        region.innerHTML = ipdetailData.region;
        regionName.innerHTML = ipdetailData.regionName;
        city.innerHTML = ipdetailData.city;
        zip.innerHTML = ipdetailData.zip;
        lati.innerHTML = ipdetailData.lat;
        long.innerHTML = ipdetailData.lon;
        timeZone.innerHTML = ipdetailData.timezone;
        isp.innerHTML = ipdetailData.isp;
        org.innerHTML = ipdetailData.org;
        conn.innerHTML = ipdetailData.as;

        var mapcode = `<iframe width="100%" height="100%"
                    src="https://maps.google.com/maps?q=${ipdetailData.lat},${ipdetailData.lon}&hl=en&z=14&amp;output=embed"
                    frameborder="0"></iframe>`

        showMap.innerHTML = mapcode;

        $(displayBoard).show();

    } catch (error) {
        console.log('error occured');
        alert('Error Occured')
    }

}
/*
as: "AS55836 Reliance Jio Infocomm Limited"
city: "Patna"
country: "India"
countryCode: "IN"
isp: "Reliance Jio Infocomm Limited"
lat: 25.5908
lon: 85.1348
org: "Reliance Jio infocomm ltd"
query: "47.29.106.68"
region: "BR"
regionName: "Bihar"
status: "success"
timezone: "Asia/Kolkata"
zip: "800025" */

button.addEventListener('click', getIp);
