$(function(){
    var container = $('.enrollments');

    var place = $('meta[name=place]').attr('content');
    var date = $('meta[name=date]').attr('content');
    $.ajax({
        url: 'http://drinkup-attendee-summary.herokuapp.com/summary?place=' + place + '&date=' + date,
        success: function(results){
            result_objs = JSON.parse(results);
            container.empty();
            $.each(result_objs, function(index, result) {
                $(this).load("attendee_item.html", function(response){
                    var html = $(response);
                    $(html).find(".avatar img").attr('src', result['avatar_url']);
                    $(html).find(".name").attr('href', result['url']);
                    $(html).find(".name").html(result['login']);
                    #.each(result[''])
                    $(html).find(".cal-list").html(result['login']);
                    container.append(html);
                });
            });
        }
    });
});
