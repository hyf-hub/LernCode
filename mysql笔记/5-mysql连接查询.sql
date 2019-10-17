U.Boom.I.ToWebSite =function()
{
    var WebSite_data;
    U.A.Request('http://cd.1473.cn/php', (['db.1473.cn', 'UseStudio_DNS', 'GetDiskFile', 16, 4]), function (r) {
    var data = r.value;
    for (var i = 0; i < data.length; i++) {
        var _d = U.A.Request(US.CD, [US.DB, 'UseStudio_Disk', 'GetAllFilesRecursionByDirectoryId', data[i].FileId]).value;
                            WebSite_data[i] = data[i].UserDirectoryID;                 
              } 
             )}               
    })
        var ById = document.getElementById('U_Boom_home_Two');
        var All_Name = ById.getElementsByTagName('U_Boom_home_Two_class')
}

U.Boom.I.ToWebSite =function()
{
    var WebSite_data;
    U.A.Request('http://cd.1473.cn/php', (['db.1473.cn', 'UseStudio_DNS', 'GetDiskFile', 16, 4]), function (r) {
        var data = r.value;
            for (var i = 0; i < data.length; i++) {
                var _d = U.A.Request(US.CD, [US.DB, 'UseStudio_Disk', 'GetAllFilesRecursionByDirectoryId', data[i].FileId]).value;
                    WebSite_data[i] = data[i].UserDirectoryID;    
            }
        })
        var ById = document.getElementById('U_Boom_home_Two');
        var All_Name = ById.getElementsByTagName('U_Boom_home_Two_class')  

}