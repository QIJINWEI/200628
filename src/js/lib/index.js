let baseUrl = "http://localhost/vmall.com"; // 基础路径 必须是绝对路径

define(['jquery'], function($) {
    return {
        render: function() {
            $.ajax({
                type: "get",
                url: `${baseUrl}/interface/getall.php`,
                dataType: "json",
                success: function(res) {
                    console.log(res);
                    let temp = '';
                    res.forEach(elm => {
                        // console.log(elm.pic);
                        // console.log(elm.pic);
                        let pic = JSON.parse(elm.pic);
                        console.log(pic);
                        temp += `<li>
                        <a href="${baseUrl}/src/html/details.html?id=${elm.id}" target="_blank">
                        <div class="phone01">
                            <img src="${baseUrl}/src${pic[0].src}" alt="${baseUrl}/src${pic[0].title}">
                        </div>
                        <p>${elm.title}</p>
                        <p>${elm.activity}</p>
                        <p>${elm.price}</p>
                        </a>
                    </li>`;
                    });

                    $('.salepic_ul').html(temp);

                }
            });
        },

    }
});