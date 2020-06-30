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
                        console.log(elm.pic);
                        let pic = JSON.parse(elm.pic);
                        console.log(pic);
                        temp += `<li class="item">
                            <a href="${baseUrl}/src/html/product.html?id=${elm.id}">
                                <div class="p-pic">
                                    <img src="${baseUrl}/src/${pic[0].src}" alt="${baseUrl}/src/${pic[0].title}">
                                </div>
                                <div class="p-title">
                                    ${elm.title}
                                </div>
                                <div class="p-price"><span class="yuan">￥</span>${elm.price}</div>
                            </a>
                        </li>`;
                    });

                    $('.list').html(temp);

                }
            });
        }
    }
});