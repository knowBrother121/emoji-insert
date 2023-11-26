window.addEventListener('load', function () {
        var display_style = 'height:100px; width:200px; padding: 5px;';//显示样式
    var hide_style = 'height:0px; width:0px; padding: 0px;';//隐藏样式
        var emoji_panel = document.getElementById('emoji');//emoji容器
        // var emoji_btn = document.getElementById('emoji_btn');//emoji按钮
        var emoji_elements = document.getElementsByClassName('emoji-element');//emoji元素集合
        var emoji_isOpen = false;//emoji容器打开状态
        var text = document.getElementById('text');//文本输入
        //emoji表情数据（可根据需要自己增加或减少）
        var emojiList = [
            "&#x1F600;",
            "&#x1F601;",
            "&#x1F602;",
            "&#x1F603;",
            "&#x1F604;",
            "&#x1F605;",
            "&#x1F606;",
            "&#x1F607;",
            "&#x1F608;",
            "&#x1F609;",
            "&#x1F60A;",
            "&#x1F60B;",
            "&#x1F60C;",
            "&#x1F60D;",
            "&#x1F60E;",
            "&#x1F60F;",
            "&#x1F610;",
            "&#x1F611;",
            "&#x1F612;",
            "&#x1F613;",
            "&#x1F614;",
            "&#x1F615;",
            "&#x1F616;",
            "&#x1F617;",
            "&#x1F618;",
            "&#x1F619;",
            "&#x1F61A;",
            "&#x1F61B;",
            "&#x1F61C;",
            "&#x1F61D;",
            "&#x1F61E;",
            "&#x1F61F;",
            "&#x1F620;",
            "&#x1F620;",
            "&#x1F621;",
            "&#x1F622;",
            "&#x1F623;",
            "&#x1F624;",
            "&#x1F625;",
            "&#x1F626;",
            "&#x1F627;",
            "&#x1F628;",
            "&#x1F629;",
            "&#x1F62A;",
            "&#x1F62B;",
            "&#x1F62C;",
            "&#x1F62D;",
            "&#x1F62E;",
            "&#x1F62F;",
            "&#x1F630;",
            "&#x1F631;",
            "&#x1F632;",
            "&#x1F633;",
            "&#x1F634;",
            "&#x1F635;",
            "&#x1F636;",
            "&#x1F637;",
            "&#x1F641;",
            "&#x1F642;",
            "&#x1F643;",
            "&#x1F644;",
            "&#x1F910;",
            "&#x1F911;",
            "&#x1F912;",
            "&#x1F913;",
            "&#x1F914;",
            "&#x1F915;",
            "&#x1F920;",
            "&#x1F921;",
            "&#x1F922;",
            "&#x1F923;",
            "&#x1F924;",
            "&#x1F925;",
            "&#x1F927;",
            "&#x1F928;",
            "&#x1F929;",
            "&#x1F92A;",
            "&#x1F92B;",
            "&#x1F92C;",
            "&#x1F92D;",
            "&#x1F92E;",
            "&#x1F92F;",
            "&#x1F9D0;"
        ]
        var emoji_content = '';//emoji列表内容
        for (var i = 0; i < emojiList.length; i++) {
            emoji_content += '<span class="emoji-element">' + emojiList[i] + '</span>';
        }
        emoji_panel.innerHTML = emoji_content;

        //打开emoji面板
        function OpenEmojiPanel() {
            emoji_panel.style.cssText = display_style;
            emoji_isOpen = true;
            text.focus();
        }

        //隐藏emoji面板
        function HideEmojiPanel() {
            emoji_panel.style.cssText = hide_style;
            emoji_isOpen = false;
        }

        //点击页面其他地方隐藏emoji面板或打开emoji面板
        document.addEventListener('click', function (event) {
            var elem = event.target;
            if (elem.classList.contains('emoji-container') || elem.closest('.emoji-container')) {
                if (event.target.id == 'emoji_btn') {
                    if (emoji_isOpen) {
                        HideEmojiPanel();
                    } else {
                        OpenEmojiPanel();
                    }
                } else {
                    OpenEmojiPanel();
                }
            } else {
                HideEmojiPanel();
            }
        });

        //为每个emoji元素绑定点击事件（点击后加入文本框）
        for (let i = 0; i < emoji_elements.length; i++) {
            emoji_elements[i].onclick = function (e) {
                let item = e.target;
                let inputList = text.value.split(''); //将输入框内容切成数组
                let selectLength = text.selectionEnd - text.selectionStart;// 获取选中文字的长度
                let cursor_index = text.selectionEnd - selectLength + item.innerHTML.length;//保存下一个输入位置防止重置
                inputList.splice(text.selectionStart, selectLength, item.innerHTML);// 将要插入/替换的文字插入/替换
                let inputValue = inputList.join('');// 把数组重新转换为字符串并赋值
                text.value = inputValue;
                text.focus();
                text.setSelectionRange(cursor_index, cursor_index);
            }
        }
    });