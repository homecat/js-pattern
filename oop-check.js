var Account = function(
	member_name, 
	member_qq, 
	member_phone, 
	member_weixin, 
	member_status, 
	member_from, 
	member_channel, 
	member_info
	){
	this.member_name    = member_name;
	this.member_qq      = member_qq;
	this.member_phone   = member_phone;
	this.member_weixin  = member_weixin;
	this.member_status  = member_status;
	this.member_from    = member_from;
	this.member_channel = member_channel;
	this.member_info    = member_info;
};

Account.prototype = {
	//判断是否空
	IsEmpty:function(item){
		if(!item) return '必填';
	},
	//比较是否已经存在
	IsExists:function(item){
		var res = $.post('ajax.php', {item:item} function(data){res = data});
		if(!res) return '已存在';
	},
	//显示已存在qq/phone关联信息
	getIsExistsInfo:function(id){
		var information = false;
		if(this.sales_man)        information += this.sales_man;
		if(this.real_account)     information += this.real_account;
		if(this.create_time)      information += this.create_time;
		else if(this.update_time) information += this.update_time;
		return information;
	},
 	checkPhone:function(phone) {
	    var message = '';
	    var myreg = /^(((13[0-9]{1})|(14[0-9]{1})|(17[0-9]{1})|(15[0-3]{1})|(15[5-9]{1})|(18[0-3]{1})|(18[5-9]{1}))+\d{8})$/;
	    if (phone.length != 11) message = '位数不对';
	    else if (!myreg.test(phone)) message = "无效";
	    return message;
	},
	checkQQ:function(qq) {
	    var message = false;
	    var myreg = /(\d)$/;
	    if (!myreg.test(qq)) message = "无效";
	    return message;
	}
}


