/*!     jquery-comments.js 1.5.0
 *
 *     (c) 2017 Joona Tykkyläinen, Viima Solutions Oy
 *     jquery-comments may be freely distributed under the MIT license.
 *     For all details and documentation:
 *     http://viima.github.io/jquery-comments/
 */
!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):"object"==typeof module&&module.exports?module.exports=function(e,n){return void 0===n&&(n="undefined"!=typeof window?require("jquery"):require("jquery")(e)),t(n),n}:t(jQuery)}(function(t){var e={$el:null,commentsById:{},dataFetched:!1,currentSortKey:"",options:{},events:{click:"closeDropdowns",paste:"preSavePastedAttachments","keydown [contenteditable]":"saveOnKeydown","focus [contenteditable]":"saveEditableContent","keyup [contenteditable]":"checkEditableContentForChange","paste [contenteditable]":"checkEditableContentForChange","input [contenteditable]":"checkEditableContentForChange","blur [contenteditable]":"checkEditableContentForChange","click .navigation li[data-sort-key]":"navigationElementClicked","click .navigation li.title":"toggleNavigationDropdown","click .commenting-field.main .textarea":"showMainCommentingField","click .commenting-field.main .close":"hideMainCommentingField","click .commenting-field .textarea":"increaseTextareaHeight","change .commenting-field .textarea":"increaseTextareaHeight textareaContentChanged","click .commenting-field:not(.main) .close":"removeCommentingField","click .commenting-field .send.enabled":"postComment","click .commenting-field .update.enabled":"putComment","click .commenting-field .delete.enabled":"deleteComment","click .commenting-field .attachments .attachment .delete":"preDeleteAttachment",'change .commenting-field .upload.enabled input[type="file"]':"fileInputChanged","click li.comment button.upvote":"upvoteComment","click li.comment button.delete.enabled":"deleteComment","click li.comment .hashtag":"hashtagClicked","click li.comment .ping":"pingClicked","click li.comment ul.child-comments .toggle-all":"toggleReplies","click li.comment button.reply":"replyButtonClicked","click li.comment button.edit":"editButtonClicked",dragenter:"showDroppableOverlay","dragenter .droppable-overlay":"handleDragEnter","dragleave .droppable-overlay":"handleDragLeaveForOverlay","dragenter .droppable-overlay .droppable":"handleDragEnter","dragleave .droppable-overlay .droppable":"handleDragLeaveForDroppable","dragover .droppable-overlay":"handleDragOverForOverlay","drop .droppable-overlay":"handleDrop","click .dropdown.autocomplete":"stopPropagation","mousedown .dropdown.autocomplete":"stopPropagation","touchstart .dropdown.autocomplete":"stopPropagation"},getDefaultOptions:function(){return{profilePictureURL:"",currentUserIsAdmin:!1,currentUserId:null,spinnerIconURL:"",upvoteIconURL:"",replyIconURL:"",uploadIconURL:"",attachmentIconURL:"",noCommentsIconURL:"",closeIconURL:"",textareaPlaceholderText:"Add a comment",newestText:"Newest",oldestText:"Oldest",popularText:"Popular",attachmentsText:"Attachments",sendText:"Send",replyText:"Reply",editText:"Edit",editedText:"Edited",youText:"You",saveText:"Save",deleteText:"Delete",newText:"New",viewAllRepliesText:"View all __replyCount__ replies",hideRepliesText:"Hide replies",noCommentsText:"No comments",noAttachmentsText:"No attachments",attachmentDropText:"Drop files here",textFormatter:function(t){return t},enableReplying:!0,enableEditing:!0,enableUpvoting:!0,enableDeleting:!0,enableAttachments:!1,enableHashtags:!1,enablePinging:!1,enableDeletingCommentWithReplies:!1,enableNavigation:!0,postCommentOnEnter:!1,forceResponsive:!1,readOnly:!1,defaultNavigationSortKey:"newest",highlightColor:"#2793e6",deleteButtonColor:"#C9302C",scrollContainer:this.$el,roundProfilePictures:!1,textareaRows:2,textareaRowsOnFocus:2,textareaMaxRows:5,maxRepliesVisible:2,fieldMappings:{id:"id",parent:"parent",created:"created",modified:"modified",content:"content",attachments:"attachments",pings:"pings",creator:"creator",fullname:"fullname",profilePictureURL:"profile_picture_url",isNew:"is_new",createdByAdmin:"created_by_admin",createdByCurrentUser:"created_by_current_user",upvoteCount:"upvote_count",userHasUpvoted:"user_has_upvoted"},searchUsers:function(t,e,n){e([])},getComments:function(t,e){t([])},postComment:function(t,e,n){e(t)},putComment:function(t,e,n){e(t)},deleteComment:function(t,e,n){e()},upvoteComment:function(t,e,n){e(t)},validateAttachments:function(t,e){return e(t)},hashtagClicked:function(t){},pingClicked:function(t){},refresh:function(){},timeFormatter:function(t){return new Date(t).toLocaleDateString()}}},init:function(e,n){var a;this.$el=t(n),this.$el.addClass("jquery-comments"),this.undelegateEvents(),this.delegateEvents(),a=navigator.userAgent||navigator.vendor||window.opera,(jQuery.browser=jQuery.browser||{}).mobile=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)),t.browser.mobile&&this.$el.addClass("mobile"),this.options=t.extend(!0,{},this.getDefaultOptions(),e),this.options.readOnly&&this.$el.addClass("read-only"),this.currentSortKey=this.options.defaultNavigationSortKey,this.createCssDeclarations(),this.fetchDataAndRender()},delegateEvents:function(){this.bindEvents(!1)},undelegateEvents:function(){this.bindEvents(!0)},bindEvents:function(e){var n=e?"off":"on";for(var a in this.events){var i=a.split(" ")[0],o=a.split(" ").slice(1).join(" "),s=this.events[a].split(" ");for(var r in s)if(s.hasOwnProperty(r)){var l=this[s[r]];l=t.proxy(l,this),""==o?this.$el[n](i,l):this.$el[n](i,o,l)}}},fetchDataAndRender:function(){var e=this;this.commentsById={},this.$el.empty(),this.createHTML(),this.options.getComments(function(n){var a=n.map(function(t){return e.createCommentModel(t)});e.sortComments(a,"oldest"),t(a).each(function(t,n){e.addCommentToDataModel(n)}),e.dataFetched=!0,e.render()})},fetchNext:function(){var e=this,n=this.createSpinner();this.$el.find("ul#comment-list").append(n);this.options.getComments(function(a){t(a).each(function(t,n){e.createComment(n)}),n.remove()},function(){n.remove()})},createCommentModel:function(t){var e=this.applyInternalMappings(t);return e.childs=[],e.hasAttachments=function(){return e.attachments.length>0},e},addCommentToDataModel:function(t){t.id in this.commentsById||(this.commentsById[t.id]=t,t.parent&&this.getOutermostParent(t.parent).childs.push(t.id))},updateCommentModel:function(e){t.extend(this.commentsById[e.id],e)},render:function(){this.dataFetched&&(this.showActiveContainer(),this.createComments(),this.options.enableAttachments&&this.options.enableNavigation&&this.createAttachments(),this.$el.find("> .spinner").remove(),this.options.refresh())},showActiveContainer:function(){var t=this.$el.find(".navigation li[data-container-name].active").data("container-name"),e=this.$el.find('[data-container="'+t+'"]');e.siblings("[data-container]").hide(),e.show()},createComments:function(){var e=this;this.$el.find("#comment-list").remove();var n=t("<ul/>",{id:"comment-list",class:"main"}),a=[],i=[];t(this.getComments()).each(function(t,e){null==e.parent?a.push(e):i.push(e)}),this.sortComments(a,this.currentSortKey),t(a).each(function(t,a){e.addComment(a,n)}),this.sortComments(i,"oldest"),t(i).each(function(t,a){e.addComment(a,n)}),this.$el.find('[data-container="comments"]').prepend(n)},createAttachments:function(){var e=this;this.$el.find("#attachment-list").remove();var n=t("<ul/>",{id:"attachment-list",class:"main"}),a=this.getAttachments();this.sortComments(a,"newest"),t(a).each(function(t,a){e.addAttachment(a,n)}),this.$el.find('[data-container="attachments"]').prepend(n)},addComment:function(t,e,n){e=e||this.$el.find("#comment-list");var a=this.createCommentElement(t);if(t.parent){var i=e.find('.comment[data-id="'+t.parent+'"]');this.reRenderCommentActionBar(t.parent);var o=i.parents(".comment").last();0==o.length&&(o=i);var s=o.find(".child-comments"),r=s.find(".commenting-field");r.length?r.before(a):s.append(a),this.updateToggleAllButton(o)}else n?e.prepend(a):e.append(a)},addAttachment:function(t,e){e=e||this.$el.find("#attachment-list");var n=this.createCommentElement(t);e.prepend(n)},removeComment:function(e){var n=this,a=this.commentsById[e],i=this.getChildComments(a.id);if(t(i).each(function(t,e){n.removeComment(e.id)}),a.parent){var o=this.getOutermostParent(a.parent),s=o.childs.indexOf(a.id);o.childs.splice(s,1)}delete this.commentsById[e];var r=this.$el.find('li.comment[data-id="'+e+'"]'),l=r.parents("li.comment").last();r.remove(),this.updateToggleAllButton(l)},preDeleteAttachment:function(e){var n=t(e.currentTarget).parents(".commenting-field").first();t(e.currentTarget).parents(".attachment").first().remove(),this.toggleSaveButton(n)},preSaveAttachments:function(e,n){var a=this;if(e.length){n||(n=this.$el.find(".commenting-field.main"));var i=n.find(".control-row .upload"),o=(n.hasClass("main"),n.find(".control-row .attachments")),s=t(e).map(function(t,e){return{mime_type:e.type,file:e}}),r=this.getAttachmentsFromCommentingField(n);s=s.filter(function(e,n){var a=!1;return t(r).each(function(t,e){n.file.name==e.file.name&&n.file.size==e.file.size&&(a=!0)}),!a}),n.hasClass("main")&&n.find(".textarea").trigger("click"),this.setButtonState(i,!1,!0),this.options.validateAttachments(s,function(e){e.length&&(t(e).each(function(t,e){var n=a.createAttachmentTagElement(e,!0);o.append(n)}),a.toggleSaveButton(n)),a.setButtonState(i,!0,!1)})}i.find("input").val("")},updateToggleAllButton:function(e){if(null!=this.options.maxRepliesVisible){var n=e.find(".child-comments"),a=n.find(".comment").not(".hidden"),i=n.find("li.toggle-all");if(a.removeClass("togglable-reply"),0===this.options.maxRepliesVisible)var o=a;else o=a.slice(0,-this.options.maxRepliesVisible);if(o.addClass("togglable-reply"),i.find("span.text").text()==this.options.textFormatter(this.options.hideRepliesText)&&o.addClass("visible"),a.length>this.options.maxRepliesVisible){if(!i.length){i=t("<li/>",{class:"toggle-all highlight-font-bold"});var s=t("<span/>",{class:"text"}),r=t("<span/>",{class:"caret"});i.append(s).append(r),n.prepend(i)}this.setToggleAllButtonText(i,!1)}else i.remove()}},updateToggleAllButtons:function(){var e=this,n=this.$el.find("#comment-list");n.find(".comment").removeClass("visible"),n.children(".comment").each(function(n,a){e.updateToggleAllButton(t(a))})},sortComments:function(t,e){var n=this;"popularity"==e?t.sort(function(t,e){var a=t.childs.length,i=e.childs.length;if(n.options.enableUpvoting&&(a+=t.upvoteCount,i+=e.upvoteCount),i!=a)return i-a;var o=new Date(t.created).getTime();return new Date(e.created).getTime()-o}):t.sort(function(t,n){var a=new Date(t.created).getTime(),i=new Date(n.created).getTime();return"oldest"==e?a-i:i-a})},sortAndReArrangeComments:function(e){var n=this.$el.find("#comment-list"),a=this.getComments().filter(function(t){return!t.parent});this.sortComments(a,e),t(a).each(function(t,e){var a=n.find("> li.comment[data-id="+e.id+"]");n.append(a)})},showActiveSort:function(){var t=this.$el.find('.navigation li[data-sort-key="'+this.currentSortKey+'"]');this.$el.find(".navigation li").removeClass("active"),t.addClass("active");var e=this.$el.find(".navigation .title");if("attachments"!=this.currentSortKey)e.addClass("active"),e.find("header").html(t.first().html());else{var n=this.$el.find(".navigation ul.dropdown").children().first();e.find("header").html(n.html())}this.showActiveContainer()},forceResponsive:function(){this.$el.addClass("responsive")},closeDropdowns:function(){this.$el.find(".dropdown").hide()},preSavePastedAttachments:function(e){var n=e.originalEvent.clipboardData.files;if(n&&1==n.length){var a,i=t(e.target).parents(".commenting-field").first();i.length&&(a=i),this.preSaveAttachments(n,a),e.preventDefault()}},saveOnKeydown:function(e){if(13==e.keyCode){var n=e.metaKey||e.ctrlKey;if(this.options.postCommentOnEnter||n)t(e.currentTarget).siblings(".control-row").find(".save").trigger("click"),e.stopPropagation(),e.preventDefault()}},saveEditableContent:function(e){var n=t(e.currentTarget);n.data("before",n.html())},checkEditableContentForChange:function(e){var n=t(e.currentTarget);t(n[0].childNodes).each(function(){this.nodeType==Node.TEXT_NODE&&0==this.length&&this.removeNode&&this.removeNode()}),n.data("before")!=n.html()&&(n.data("before",n.html()),n.trigger("change"))},navigationElementClicked:function(e){var n=t(e.currentTarget).data().sortKey;"attachments"==n?this.createAttachments():this.sortAndReArrangeComments(n),this.currentSortKey=n,this.showActiveSort()},toggleNavigationDropdown:function(e){e.stopPropagation(),t(e.currentTarget).find("~ .dropdown").toggle()},showMainCommentingField:function(e){var n=t(e.currentTarget);n.siblings(".control-row").show(),n.parent().find(".close").show(),n.parent().find(".upload.inline-button").hide(),n.focus()},hideMainCommentingField:function(e){var n=t(e.currentTarget),a=this.$el.find(".commenting-field.main"),i=a.find(".textarea"),o=a.find(".control-row");this.clearTextarea(i),a.find(".attachments").empty(),this.toggleSaveButton(a),this.adjustTextareaHeight(i,!1),o.hide(),n.hide(),i.parent().find(".upload.inline-button").show(),i.blur()},increaseTextareaHeight:function(e){var n=t(e.currentTarget);this.adjustTextareaHeight(n,!0)},textareaContentChanged:function(e){var n=t(e.currentTarget);if(!n.find(".reply-to.tag").length)if(n.attr("data-comment")){var a=n.parents("li.comment");if(a.length>1){var i=a.last().data("id");n.attr("data-parent",i)}}else{i=n.parents("li.comment").last().data("id");n.attr("data-parent",i)}var o=n.parents(".commenting-field").first();n[0].scrollHeight>n.outerHeight()?o.addClass("commenting-field-scrollable"):o.removeClass("commenting-field-scrollable"),this.toggleSaveButton(o)},toggleSaveButton:function(t){var e,n=t.find(".textarea"),a=n.siblings(".control-row").find(".save"),i=this.getTextareaContent(n,!0),o=this.getAttachmentsFromCommentingField(t);if(commentModel=this.commentsById[n.attr("data-comment")]){var s,r=i!=commentModel.content;commentModel.parent&&(s=commentModel.parent.toString());var l=n.attr("data-parent")!=s,c=!1;if(this.options.enableAttachments){var d=commentModel.attachments.map(function(t){return t.id}),p=o.map(function(t){return t.id});c=!this.areArraysEqual(d,p)}e=r||l||c}else e=Boolean(i.length)||Boolean(o.length);a.toggleClass("enabled",e)},removeCommentingField:function(e){var n=t(e.currentTarget);n.siblings(".textarea").attr("data-comment")&&n.parents("li.comment").first().removeClass("edit"),n.parents(".commenting-field").first().remove()},postComment:function(e){var n=this,a=t(e.currentTarget),i=a.parents(".commenting-field").first();this.setButtonState(a,!1,!0);var o=this.createCommentJSON(i);o=this.applyExternalMappings(o);this.options.postComment(o,function(t){n.createComment(t),i.find(".close").trigger("click"),n.setButtonState(a,!1,!1)},function(){n.setButtonState(a,!0,!1)})},createComment:function(t){var e=this.createCommentModel(t);this.addCommentToDataModel(e);var n=this.$el.find("#comment-list"),a="newest"==this.currentSortKey;this.addComment(e,n,a),"attachments"==this.currentSortKey&&e.hasAttachments()&&this.addAttachment(e)},putComment:function(e){var n=this,a=t(e.currentTarget),i=a.parents(".commenting-field").first(),o=i.find(".textarea");this.setButtonState(a,!1,!0);var s=t.extend({},this.commentsById[o.attr("data-comment")]);t.extend(s,{parent:o.attr("data-parent")||null,content:this.getTextareaContent(o),pings:this.getPings(o),modified:(new Date).getTime(),attachments:this.getAttachmentsFromCommentingField(i)}),s=this.applyExternalMappings(s);this.options.putComment(s,function(t){var e=n.createCommentModel(t);delete e.childs,n.updateCommentModel(e),i.find(".close").trigger("click"),n.reRenderComment(e.id),n.setButtonState(a,!1,!1)},function(){n.setButtonState(a,!0,!1)})},deleteComment:function(e){var n=this,a=t(e.currentTarget),i=a.parents(".comment").first(),o=t.extend({},this.commentsById[i.attr("data-id")]),s=o.id,r=o.parent;this.setButtonState(a,!1,!0),o=this.applyExternalMappings(o);this.options.deleteComment(o,function(){n.removeComment(s),r&&n.reRenderCommentActionBar(r),n.setButtonState(a,!1,!1)},function(){n.setButtonState(a,!0,!1)})},hashtagClicked:function(e){var n=t(e.currentTarget).attr("data-value");this.options.hashtagClicked(n)},pingClicked:function(e){var n=t(e.currentTarget).attr("data-value");this.options.pingClicked(n)},fileInputChanged:function(e,n){n=e.currentTarget.files;var a=t(e.currentTarget).parents(".commenting-field").first();this.preSaveAttachments(n,a)},upvoteComment:function(e){var n,a=this,i=t(e.currentTarget).parents("li.comment").first().data().model,o=i.upvoteCount;n=i.userHasUpvoted?o-1:o+1,i.userHasUpvoted=!i.userHasUpvoted,i.upvoteCount=n,this.reRenderUpvotes(i.id);var s=t.extend({},i);s=this.applyExternalMappings(s);this.options.upvoteComment(s,function(t){var e=a.createCommentModel(t);a.updateCommentModel(e),a.reRenderUpvotes(e.id)},function(){i.userHasUpvoted=!i.userHasUpvoted,i.upvoteCount=o,a.reRenderUpvotes(i.id)})},toggleReplies:function(e){var n=t(e.currentTarget);n.siblings(".togglable-reply").toggleClass("visible"),this.setToggleAllButtonText(n,!0)},replyButtonClicked:function(e){var n=t(e.currentTarget),a=n.parents("li.comment").last(),i=n.parents(".comment").first().data().id,o=a.find(".child-comments > .commenting-field");if(o.length&&o.remove(),o.find(".textarea").attr("data-parent")!=i){o=this.createCommentingFieldElement(i),a.find(".child-comments").append(o);var s=o.find(".textarea");this.moveCursorToEnd(s),this.ensureElementStaysVisible(o)}},editButtonClicked:function(e){var n=t(e.currentTarget).parents("li.comment").first(),a=n.data().model;n.addClass("edit");var i=this.createCommentingFieldElement(a.parent,a.id);n.find(".comment-wrapper").first().append(i);var o=i.find(".textarea");o.attr("data-comment",a.id),o.append(this.getFormattedCommentContent(a,!0)),this.moveCursorToEnd(o),this.ensureElementStaysVisible(i)},showDroppableOverlay:function(t){this.options.enableAttachments&&(this.$el.find(".droppable-overlay").css("top",this.$el[0].scrollTop),this.$el.find(".droppable-overlay").show(),this.$el.addClass("drag-ongoing"))},handleDragEnter:function(e){var n=t(e.currentTarget).data("dnd-count")||0;n++,t(e.currentTarget).data("dnd-count",n),t(e.currentTarget).addClass("drag-over")},handleDragLeave:function(e,n){var a=t(e.currentTarget).data("dnd-count");a--,t(e.currentTarget).data("dnd-count",a),0==a&&(t(e.currentTarget).removeClass("drag-over"),n&&n())},handleDragLeaveForOverlay:function(t){var e=this;this.handleDragLeave(t,function(){e.hideDroppableOverlay()})},handleDragLeaveForDroppable:function(t){this.handleDragLeave(t)},handleDragOverForOverlay:function(t){t.stopPropagation(),t.preventDefault(),t.originalEvent.dataTransfer.dropEffect="copy"},hideDroppableOverlay:function(){this.$el.find(".droppable-overlay").hide(),this.$el.removeClass("drag-ongoing")},handleDrop:function(e){e.preventDefault(),t(e.target).trigger("dragleave"),this.hideDroppableOverlay(),this.preSaveAttachments(e.originalEvent.dataTransfer.files)},stopPropagation:function(t){t.stopPropagation()},createHTML:function(){var e=this.createMainCommentingFieldElement();this.$el.append(e),e.find(".control-row").hide(),e.find(".close").hide(),this.options.enableNavigation&&(this.$el.append(this.createNavigationElement()),this.showActiveSort());var n=this.createSpinner();this.$el.append(n);var a=t("<div/>",{class:"data-container","data-container":"comments"});this.$el.append(a);var i=t("<div/>",{class:"no-comments no-data",text:this.options.textFormatter(this.options.noCommentsText)}),o=t("<i/>",{class:"fa fa-comments fa-2x"});if(this.options.noCommentsIconURL.length&&(o.css("background-image",'url("'+this.options.noCommentsIconURL+'")'),o.addClass("image")),i.prepend(t("<br/>")).prepend(o),a.append(i),this.options.enableAttachments){var s=t("<div/>",{class:"data-container","data-container":"attachments"});this.$el.append(s);var r=t("<div/>",{class:"no-attachments no-data",text:this.options.textFormatter(this.options.noAttachmentsText)}),l=t("<i/>",{class:"fa fa-paperclip fa-2x"});this.options.attachmentIconURL.length&&(l.css("background-image",'url("'+this.options.attachmentIconURL+'")'),l.addClass("image")),r.prepend(t("<br/>")).prepend(l),s.append(r);var c=t("<div/>",{class:"droppable-overlay"}),d=t("<div/>",{class:"droppable-container"}),p=t("<div/>",{class:"droppable"}),m=t("<i/>",{class:"fa fa-paperclip fa-4x"});this.options.uploadIconURL.length&&(m.css("background-image",'url("'+this.options.uploadIconURL+'")'),m.addClass("image"));var h=t("<div/>",{text:this.options.textFormatter(this.options.attachmentDropText)});p.append(m),p.append(h),c.html(d.html(p)).hide(),this.$el.append(c)}},createProfilePictureElement:function(e,n){if(e)var a=t("<div/>").css({"background-image":"url("+e+")"});else a=t("<i/>",{class:"fa fa-user"});return a.addClass("profile-picture"),a.attr("data-user-id",n),this.options.roundProfilePictures&&a.addClass("round"),a},createMainCommentingFieldElement:function(){return this.createCommentingFieldElement(void 0,void 0,!0)},createCommentingFieldElement:function(e,n,a){var i,o,s,r=this,l=t("<div/>",{class:"commenting-field"});a&&l.addClass("main"),n?(i=this.commentsById[n].profilePictureURL,o=this.commentsById[n].creator,s=this.commentsById[n].attachments):(i=this.options.profilePictureURL,o=this.options.creator,s=[]);var c=this.createProfilePictureElement(i,o),d=t("<div/>",{class:"textarea-wrapper"}),p=t("<div/>",{class:"control-row"}),m=t("<div/>",{class:"textarea","data-placeholder":this.options.textFormatter(this.options.textareaPlaceholderText),contenteditable:!0});this.adjustTextareaHeight(m,!1);var h=this.createCloseButton();h.addClass("inline-button");var u=n?"update":"send",g=n?this.options.textFormatter(this.options.saveText):this.options.textFormatter(this.options.sendText),f=t("<span/>",{class:u+" save highlight-background",text:g});if(f.data("original-content",g),p.append(f),n&&this.isAllowedToDelete(n)){var v=this.options.textFormatter(this.options.deleteText),C=t("<span/>",{class:"delete enabled",text:v}).css("background-color",this.options.deleteButtonColor);C.data("original-content",v),p.append(C)}if(this.options.enableAttachments){var b=t("<span/>",{class:"enabled upload"}),y=t("<i/>",{class:"fa fa-paperclip"}),x=t("<input/>",{type:"file",multiple:"multiple","data-role":"none"});this.options.uploadIconURL.length&&(y.css("background-image",'url("'+this.options.uploadIconURL+'")'),y.addClass("image")),b.append(y).append(x);var w=b.clone();w.data("original-content",w.children()),p.append(w),a&&d.append(b.clone().addClass("inline-button"));var T=t("<div/>",{class:"attachments"});t(s).each(function(t,e){var n=r.createAttachmentTagElement(e,!0);T.append(n)}),p.append(T)}if(d.append(h).append(m).append(p),l.append(c).append(d),e){m.attr("data-parent",e);var k=this.commentsById[e];if(k.parent){m.html("&nbsp;");var R="@"+k.fullname,A=this.createTagElement(R,"reply-to",k.creator,{"data-user-id":k.creator});m.prepend(A)}}return this.options.enablePinging&&(m.textcomplete([{match:/(^|\s)@([^@]*)$/i,index:2,search:function(t,e){t=r.normalizeSpaces(t);r.options.searchUsers(t,e,function(){e([])})},template:function(e){var n=t("<div/>"),a=r.createProfilePictureElement(e.profile_picture_url),i=t("<div/>",{class:"details"}),o=t("<div/>",{class:"name"}).html(e.fullname),s=t("<div/>",{class:"email"}).html(e.email);return e.email?i.append(o).append(s):(i.addClass("no-email"),i.append(o)),n.append(a).append(i),n.html()},replace:function(t){return" "+r.createTagElement("@"+t.fullname,"ping",t.id,{"data-user-id":t.id})[0].outerHTML+" "}}],{appendTo:".jquery-comments",dropdownClassName:"dropdown autocomplete",maxCount:5,rightEdgeOffset:0,debounce:250}),t.fn.textcomplete.Dropdown.prototype.render=function(e){var n=this._buildContents(e),a=t.map(e,function(t){return t.value});if(e.length){var i=e[0].strategy;i.id?this.$el.attr("data-strategy",i.id):this.$el.removeAttr("data-strategy"),this._renderHeader(a),this._renderFooter(a),n&&(this._renderContents(n),this._fitToBottom(),this._fitToRight(),this._activateIndexedItem()),this._setScroll()}else this.noResultsMessage?this._renderNoResultsMessage(a):this.shown&&this.deactivate();var o=parseInt(this.$el.css("top"))+r.options.scrollContainer.scrollTop();this.$el.css("top",o);var s=this.$el.css("left");this.$el.css("left",0);var l=r.$el.width()-this.$el.outerWidth(),c=Math.min(l,parseInt(s));this.$el.css("left",c)},t.fn.textcomplete.ContentEditable.prototype._skipSearch=function(t){switch(t.keyCode){case 9:case 13:case 16:case 17:case 33:case 34:case 40:case 38:case 27:return!0}if(t.ctrlKey)switch(t.keyCode){case 78:case 80:return!0}}),l},createNavigationElement:function(){var e=t("<ul/>",{class:"navigation"}),n=t("<div/>",{class:"navigation-wrapper"});e.append(n);var a=t("<li/>",{text:this.options.textFormatter(this.options.newestText),"data-sort-key":"newest","data-container-name":"comments"}),i=t("<li/>",{text:this.options.textFormatter(this.options.oldestText),"data-sort-key":"oldest","data-container-name":"comments"}),o=t("<li/>",{text:this.options.textFormatter(this.options.popularText),"data-sort-key":"popularity","data-container-name":"comments"}),s=t("<li/>",{text:this.options.textFormatter(this.options.attachmentsText),"data-sort-key":"attachments","data-container-name":"attachments"}),r=t("<i/>",{class:"fa fa-paperclip"});this.options.attachmentIconURL.length&&(r.css("background-image",'url("'+this.options.attachmentIconURL+'")'),r.addClass("image")),s.prepend(r);var l=t("<div/>",{class:"navigation-wrapper responsive"}),c=t("<ul/>",{class:"dropdown"}),d=t("<li/>",{class:"title"}),p=t("<header/>");return d.append(p),l.append(d),l.append(c),e.append(l),n.append(a).append(i),c.append(a.clone()).append(i.clone()),(this.options.enableReplying||this.options.enableUpvoting)&&(n.append(o),c.append(o.clone())),this.options.enableAttachments&&(n.append(s),l.append(s.clone())),this.options.forceResponsive&&this.forceResponsive(),e},createSpinner:function(e){var n=t("<div/>",{class:"spinner"});e&&n.addClass("inline");var a=t("<i/>",{class:"fa fa-spinner fa-spin"});return this.options.spinnerIconURL.length&&(a.css("background-image",'url("'+this.options.spinnerIconURL+'")'),a.addClass("image")),n.html(a),n},createCloseButton:function(e){var n=t("<span/>",{class:e||"close"}),a=t("<i/>",{class:"fa fa-times"});return this.options.closeIconURL.length&&(a.css("background-image",'url("'+this.options.closeIconURL+'")'),a.addClass("image")),n.html(a),n},createCommentElement:function(e){var n=t("<li/>",{"data-id":e.id,class:"comment"}).data("model",e);e.createdByCurrentUser&&n.addClass("by-current-user"),e.createdByAdmin&&n.addClass("by-admin");var a=t("<ul/>",{class:"child-comments"}),i=this.createCommentWrapperElement(e);return n.append(i),null==e.parent&&n.append(a),n},createCommentWrapperElement:function(e){var n=this,a=t("<div/>",{class:"comment-wrapper"}),i=this.createProfilePictureElement(e.profilePictureURL,e.creator),o=t("<time/>",{text:this.options.timeFormatter(e.created),"data-original":e.created}),s=t("<div/>",{class:"comment-header"}),r=t("<span/>",{class:"name","data-user-id":e.creator,text:e.createdByCurrentUser?this.options.textFormatter(this.options.youText):e.fullname});if(s.append(r),e.createdByAdmin&&r.addClass("highlight-font-bold"),e.parent){var l=this.commentsById[e.parent];if(l.parent){var c=t("<span/>",{class:"reply-to",text:l.fullname,"data-user-id":l.creator}),d=t("<i/>",{class:"fa fa-share"});this.options.replyIconURL.length&&(d.css("background-image",'url("'+this.options.replyIconURL+'")'),d.addClass("image")),c.prepend(d),s.append(c)}}if(e.isNew){var p=t("<span/>",{class:"new highlight-background",text:this.options.textFormatter(this.options.newText)});s.append(p)}var m=t("<div/>",{class:"wrapper"}),h=t("<div/>",{class:"content"});if(h.html(this.getFormattedCommentContent(e)),e.modified&&e.modified!=e.created){var u=this.options.timeFormatter(e.modified),g=t("<time/>",{class:"edited",text:this.options.textFormatter(this.options.editedText)+" "+u,"data-original":e.modified});h.append(g)}var f=t("<div/>",{class:"attachments"}),v=t("<div/>",{class:"previews"}),C=t("<div/>",{class:"tags"});f.append(v).append(C),this.options.enableAttachments&&e.hasAttachments()&&t(e.attachments).each(function(e,a){var i=void 0;if(a.mime_type){var o=a.mime_type.split("/");2==o.length&&(o[1],i=o[0])}if("image"==i||"video"==i){var s=t("<div/>"),r=t("<a/>",{class:"preview",href:a.file,target:"_blank"});if(s.html(r),"image"==i){var l=t("<img/>",{src:a.file});r.html(l)}else{var c=t("<video/>",{src:a.file,type:a.mime_type,controls:"controls"});r.html(c)}v.append(s)}var d=n.createAttachmentTagElement(a,!1);C.append(d)});var b=t("<span/>",{class:"actions"}),y=t("<span/>",{class:"separator",text:"·"}),x=t("<button/>",{class:"action reply",type:"button",text:this.options.textFormatter(this.options.replyText)}),w=t("<i/>",{class:"fa fa-thumbs-up"});this.options.upvoteIconURL.length&&(w.css("background-image",'url("'+this.options.upvoteIconURL+'")'),w.addClass("image"));var T=this.createUpvoteElement(e);if(this.options.enableReplying&&b.append(x),this.options.enableUpvoting&&b.append(T),e.createdByCurrentUser||this.options.currentUserIsAdmin){var k=t("<button/>",{class:"action edit",text:this.options.textFormatter(this.options.editText)});b.append(k)}return b.children().each(function(e,n){t(n).is(":last-child")||t(n).after(y.clone())}),m.append(h),m.append(f),m.append(b),a.append(i).append(o).append(s).append(m),a},createUpvoteElement:function(e){var n=t("<i/>",{class:"fa fa-thumbs-up"});return this.options.upvoteIconURL.length&&(n.css("background-image",'url("'+this.options.upvoteIconURL+'")'),n.addClass("image")),t("<button/>",{class:"action upvote"+(e.userHasUpvoted?" highlight-font":"")}).append(t("<span/>",{text:e.upvoteCount,class:"upvote-count"})).append(n)},createTagElement:function(e,n,a,i){var o=t("<input/>",{class:"tag",type:"button","data-role":"none"});return n&&o.addClass(n),o.val(e),o.attr("data-value",a),i&&o.attr(i),o},createAttachmentTagElement:function(e,n){var a=t("<a/>",{class:"tag attachment",target:"_blank"});n||a.attr("href",e.file),a.data({id:e.id,mime_type:e.mime_type,file:e.file});var i="";if(e.file instanceof File)i=e.file.name;else{var o=e.file.split("/");i=(i=o[o.length-1]).split("?")[0],i=decodeURIComponent(i)}var s=t("<i/>",{class:"fa fa-paperclip"});if(this.options.attachmentIconURL.length&&(s.css("background-image",'url("'+this.options.attachmentIconURL+'")'),s.addClass("image")),a.append(s,i),n){a.addClass("deletable");var r=this.createCloseButton("delete");a.append(r)}return a},reRenderComment:function(e){var n=this.commentsById[e],a=this.$el.find('li.comment[data-id="'+n.id+'"]'),i=this;a.each(function(e,a){var o=i.createCommentWrapperElement(n);t(a).find(".comment-wrapper").first().replaceWith(o)})},reRenderCommentActionBar:function(e){var n=this.commentsById[e],a=this.$el.find('li.comment[data-id="'+n.id+'"]'),i=this;a.each(function(e,a){var o=i.createCommentWrapperElement(n);t(a).find(".actions").first().replaceWith(o.find(".actions"))})},reRenderUpvotes:function(e){var n=this.commentsById[e],a=this.$el.find('li.comment[data-id="'+n.id+'"]'),i=this;a.each(function(e,a){var o=i.createUpvoteElement(n);t(a).find(".upvote").first().replaceWith(o)})},createCssDeclarations:function(){t("head style.jquery-comments-css").remove(),this.createCss(".jquery-comments ul.navigation li.active:after {background: "+this.options.highlightColor+" !important;",NaN),this.createCss(".jquery-comments ul.navigation ul.dropdown li.active {background: "+this.options.highlightColor+" !important;",NaN),this.createCss(".jquery-comments .highlight-background {background: "+this.options.highlightColor+" !important;",NaN),this.createCss(".jquery-comments .highlight-font {color: "+this.options.highlightColor+" !important;}"),this.createCss(".jquery-comments .highlight-font-bold {color: "+this.options.highlightColor+" !important;font-weight: bold;}")},createCss:function(e){var n=t("<style/>",{type:"text/css",class:"jquery-comments-css",text:e});t("head").append(n)},getComments:function(){var t=this;return Object.keys(this.commentsById).map(function(e){return t.commentsById[e]})},getChildComments:function(t){return this.getComments().filter(function(e){return e.parent==t})},getAttachments:function(){return this.getComments().filter(function(t){return t.hasAttachments()})},getOutermostParent:function(t){var e=t;do{var n=this.commentsById[e];e=n.parent}while(null!=n.parent);return n},createCommentJSON:function(t){var e=t.find(".textarea"),n=(new Date).toISOString();return{id:"c"+(this.getComments().length+1),parent:e.attr("data-parent")||null,created:n,modified:n,content:this.getTextareaContent(e),pings:this.getPings(e),fullname:this.options.textFormatter(this.options.youText),profilePictureURL:this.options.profilePictureURL,createdByCurrentUser:!0,upvoteCount:0,userHasUpvoted:!1,attachments:this.getAttachmentsFromCommentingField(t)}},isAllowedToDelete:function(e){if(this.options.enableDeleting){var n=!0;return this.options.enableDeletingCommentWithReplies||t(this.getComments()).each(function(t,a){a.parent==e&&(n=!1)}),n}return!1},setToggleAllButtonText:function(t,e){var n=this,a=t.find("span.text"),i=t.find(".caret"),o=function(){var e=n.options.textFormatter(n.options.viewAllRepliesText),i=t.siblings(".comment").not(".hidden").length;e=e.replace("__replyCount__",i),a.text(e)},s=this.options.textFormatter(this.options.hideRepliesText);e?(a.text()==s?o():a.text(s),i.toggleClass("up")):a.text()!=s&&o()},setButtonState:function(t,e,n){t.toggleClass("enabled",e),n?t.html(this.createSpinner(!0)):t.html(t.data("original-content"))},adjustTextareaHeight:function(e,n){e=t(e);var a,i=1==n?this.options.textareaRowsOnFocus:this.options.textareaRows;do{a=void 0,a=2.2+1.45*(i-1),e.css("height",a+"em"),i++;var o=e[0].scrollHeight>e.outerHeight(),s=0!=this.options.textareaMaxRows&&i>this.options.textareaMaxRows}while(o&&!s)},clearTextarea:function(t){t.empty().trigger("input")},getTextareaContent:function(e,n){var a=e.clone();a.find(".reply-to.tag").remove(),a.find(".tag.hashtag").replaceWith(function(){return n?t(this).val():"#"+t(this).attr("data-value")}),a.find(".tag.ping").replaceWith(function(){return n?t(this).val():"@"+t(this).attr("data-value")});var i=t("<pre/>").html(a.html());i.find("div, p, br").replaceWith(function(){return"\n"+this.innerHTML});var o=i.text().replace(/^\s+/g,"");return o=this.normalizeSpaces(o)},getFormattedCommentContent:function(t,e){var n=this.escape(t.content);return n=this.linkify(n),n=this.highlightTags(t,n),e&&(n=n.replace(/(?:\n)/g,"<br>")),n},getPings:function(e){var n={};return e.find(".ping").each(function(e,a){var i=parseInt(t(a).attr("data-value")),o=t(a).val();n[i]=o.slice(1)}),n},getAttachmentsFromCommentingField:function(e){return e.find(".attachments .attachment").map(function(){return t(this).data()}).toArray()},moveCursorToEnd:function(e){if(e=t(e)[0],t(e).trigger("input"),t(e).scrollTop(e.scrollHeight),void 0!==window.getSelection&&void 0!==document.createRange){var n=document.createRange();n.selectNodeContents(e),n.collapse(!1);var a=window.getSelection();a.removeAllRanges(),a.addRange(n)}else if(void 0!==document.body.createTextRange){var i=document.body.createTextRange();i.moveToElementText(e),i.collapse(!1),i.select()}e.focus()},ensureElementStaysVisible:function(t){var e=t.position().top,n=t.position().top+t.outerHeight()-this.options.scrollContainer.outerHeight();this.options.scrollContainer.scrollTop()>e?this.options.scrollContainer.scrollTop(e):this.options.scrollContainer.scrollTop()<n&&this.options.scrollContainer.scrollTop(n)},escape:function(e){return t("<pre/>").text(this.normalizeSpaces(e)).html()},normalizeSpaces:function(t){return t.replace(new RegExp(" ","g")," ")},after:function(t,e){var n=this;return function(){if(0==--t)return e.apply(n,arguments)}},highlightTags:function(t,e){return this.options.enableHashtags&&(e=this.highlightHashtags(t,e)),this.options.enablePinging&&(e=this.highlightPings(t,e)),e},highlightHashtags:function(t,e){var n=this;if(-1!=e.indexOf("#")){e=e.replace(/(^|\s)#([a-z\u00C0-\u00FF\d-_]+)/gim,function(t,e,a){return e+(i=a,(i=n.createTagElement("#"+i,"hashtag",i))[0].outerHTML);var i})}return e},highlightPings:function(e,n){var a=this;if(-1!=n.indexOf("@")){t(Object.keys(e.pings)).each(function(t,i){var o="@"+e.pings[i];n=n.replace(new RegExp(o,"g"),function(t,e){return a.createTagElement(t,"ping",e,{"data-user-id":e})[0].outerHTML}(o,i))})}return n},linkify:function(t){var e,n,a,i;if(n=/(\b(https?|ftp|file):\/\/[-A-ZÄÖÅ0-9+&@#\/%?=~_|!:,.;{}]*[-A-ZÄÖÅ0-9+&@#\/%=~_|{}])/gim,a=/(^|[^\/f])(www\.[-A-ZÄÖÅ0-9+&@#\/%?=~_|!:,.;{}]*[-A-ZÄÖÅ0-9+&@#\/%=~_|{}])/gim,i=/(([A-ZÄÖÅ0-9\-\_\.])+@[A-ZÄÖÅ\_]+?(\.[A-ZÄÖÅ]{2,6})+)/gim,e=(e=(e=t.replace(n,'<a href="$1" target="_blank">$1</a>')).replace(a,'$1<a href="https://$2" target="_blank">$2</a>')).replace(i,'<a href="mailto:$1" target="_blank">$1</a>'),(t.match(/<a href/g)||[]).length>0){for(var o=t.split(/(<\/a>)/g),s=0;s<o.length;s++)null==o[s].match(/<a href/g)&&(o[s]=o[s].replace(n,'<a href="$1" target="_blank">$1</a>').replace(a,'$1<a href="https://$2" target="_blank">$2</a>').replace(i,'<a href="mailto:$1" target="_blank">$1</a>'));return o.join("")}return e},waitUntil:function(t,e){var n=this;t()?e():setTimeout(function(){n.waitUntil(t,e)},100)},areArraysEqual:function(t,e){if(t.length!=e.length)return!1;t.sort(),e.sort();for(var n=0;n<t.length;n++)if(t[n]!=e[n])return!1;return!0},applyInternalMappings:function(t){var e={},n=this.options.fieldMappings;for(var a in n)n.hasOwnProperty(a)&&(e[n[a]]=a);return this.applyMappings(e,t)},applyExternalMappings:function(t){var e=this.options.fieldMappings;return this.applyMappings(e,t)},applyMappings:function(t,e){var n={};for(var a in e){if(a in t)n[t[a]]=e[a]}return n}};t.fn.comments=function(n){return this.each(function(){var a=Object.create(e);t.data(this,"comments",a),a.init(n||{},this)})}});;
/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Ã‚Â© 2001 Robert Penner
 * All rights reserved.
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Ã‚Â© 2008 George McGinley Smith
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/
jQuery.easing.jswing=jQuery.easing.swing;jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(e,f,a,h,g){return jQuery.easing[jQuery.easing.def](e,f,a,h,g)},easeInQuad:function(e,f,a,h,g){return h*(f/=g)*f+a},easeOutQuad:function(e,f,a,h,g){return -h*(f/=g)*(f-2)+a},easeInOutQuad:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f+a}return -h/2*((--f)*(f-2)-1)+a},easeInCubic:function(e,f,a,h,g){return h*(f/=g)*f*f+a},easeOutCubic:function(e,f,a,h,g){return h*((f=f/g-1)*f*f+1)+a},easeInOutCubic:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f+a}return h/2*((f-=2)*f*f+2)+a},easeInQuart:function(e,f,a,h,g){return h*(f/=g)*f*f*f+a},easeOutQuart:function(e,f,a,h,g){return -h*((f=f/g-1)*f*f*f-1)+a},easeInOutQuart:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f+a}return -h/2*((f-=2)*f*f*f-2)+a},easeInQuint:function(e,f,a,h,g){return h*(f/=g)*f*f*f*f+a},easeOutQuint:function(e,f,a,h,g){return h*((f=f/g-1)*f*f*f*f+1)+a},easeInOutQuint:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f*f+a}return h/2*((f-=2)*f*f*f*f+2)+a},easeInSine:function(e,f,a,h,g){return -h*Math.cos(f/g*(Math.PI/2))+h+a},easeOutSine:function(e,f,a,h,g){return h*Math.sin(f/g*(Math.PI/2))+a},easeInOutSine:function(e,f,a,h,g){return -h/2*(Math.cos(Math.PI*f/g)-1)+a},easeInExpo:function(e,f,a,h,g){return(f==0)?a:h*Math.pow(2,10*(f/g-1))+a},easeOutExpo:function(e,f,a,h,g){return(f==g)?a+h:h*(-Math.pow(2,-10*f/g)+1)+a},easeInOutExpo:function(e,f,a,h,g){if(f==0){return a}if(f==g){return a+h}if((f/=g/2)<1){return h/2*Math.pow(2,10*(f-1))+a}return h/2*(-Math.pow(2,-10*--f)+2)+a},easeInCirc:function(e,f,a,h,g){return -h*(Math.sqrt(1-(f/=g)*f)-1)+a},easeOutCirc:function(e,f,a,h,g){return h*Math.sqrt(1-(f=f/g-1)*f)+a},easeInOutCirc:function(e,f,a,h,g){if((f/=g/2)<1){return -h/2*(Math.sqrt(1-f*f)-1)+a}return h/2*(Math.sqrt(1-(f-=2)*f)+1)+a},easeInElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return -(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e},easeOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return g*Math.pow(2,-10*h)*Math.sin((h*k-i)*(2*Math.PI)/j)+l+e},easeInOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k/2)==2){return e+l}if(!j){j=k*(0.3*1.5)}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}if(h<1){return -0.5*(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e}return g*Math.pow(2,-10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j)*0.5+l+e},easeInBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*(f/=h)*f*((g+1)*f-g)+a},easeOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*((f=f/h-1)*f*((g+1)*f+g)+1)+a},easeInOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}if((f/=h/2)<1){return i/2*(f*f*(((g*=(1.525))+1)*f-g))+a}return i/2*((f-=2)*f*(((g*=(1.525))+1)*f+g)+2)+a},easeInBounce:function(e,f,a,h,g){return h-jQuery.easing.easeOutBounce(e,g-f,0,h,g)+a},easeOutBounce:function(e,f,a,h,g){if((f/=g)<(1/2.75)){return h*(7.5625*f*f)+a}else{if(f<(2/2.75)){return h*(7.5625*(f-=(1.5/2.75))*f+0.75)+a}else{if(f<(2.5/2.75)){return h*(7.5625*(f-=(2.25/2.75))*f+0.9375)+a}else{return h*(7.5625*(f-=(2.625/2.75))*f+0.984375)+a}}}},easeInOutBounce:function(e,f,a,h,g){if(f<g/2){return jQuery.easing.easeInBounce(e,f*2,0,h,g)*0.5+a}return jQuery.easing.easeOutBounce(e,f*2-g,0,h,g)*0.5+h*0.5+a}});;
/*!
 * fancyBox - jQuery Plugin
 * version: 2.1.5 (Fri, 14 Jun 2013)
 * @requires jQuery v1.6 or later
 *
 * Examples at http://fancyapps.com/fancybox/
 * License: www.fancyapps.com/fancybox/#license
 *
 * Copyright 2012 Janis Skarnelis - janis@fancyapps.com
 *
 */

(function (window, document, $, undefined) {
	"use strict";

	var H = $("html"),
		W = $(window),
		D = $(document),
		F = $.fancybox = function () {
			F.open.apply( this, arguments );
		},
		IE =  navigator.userAgent.match(/msie/i),
		didUpdate	= null,
		isTouch		= document.createTouch !== undefined,

		isQuery	= function(obj) {
			return obj && obj.hasOwnProperty && obj instanceof $;
		},
		isString = function(str) {
			return str && $.type(str) === "string";
		},
		isPercentage = function(str) {
			return isString(str) && str.indexOf('%') > 0;
		},
		isScrollable = function(el) {
			return (el && !(el.style.overflow && el.style.overflow === 'hidden') && ((el.clientWidth && el.scrollWidth > el.clientWidth) || (el.clientHeight && el.scrollHeight > el.clientHeight)));
		},
		getScalar = function(orig, dim) {
			var value = parseInt(orig, 10) || 0;

			if (dim && isPercentage(orig)) {
				value = F.getViewport()[ dim ] / 100 * value;
			}

			return Math.ceil(value);
		},
		getValue = function(value, dim) {
			return getScalar(value, dim) + 'px';
		};

	$.extend(F, {
		// The current version of fancyBox
		version: '2.1.5',

		defaults: {
			padding : 15,
			margin  : 20,

			width     : 800,
			height    : 600,
			minWidth  : 100,
			minHeight : 100,
			maxWidth  : 9999,
			maxHeight : 9999,
			pixelRatio: 1, // Set to 2 for retina display support

			autoSize   : true,
			autoHeight : false,
			autoWidth  : false,

			autoResize  : true,
			autoCenter  : !isTouch,
			fitToView   : true,
			aspectRatio : false,
			topRatio    : 0.5,
			leftRatio   : 0.5,

			scrolling : 'auto', // 'auto', 'yes' or 'no'
			wrapCSS   : '',

			arrows     : true,
			closeBtn   : true,
			closeClick : false,
			nextClick  : false,
			mouseWheel : true,
			autoPlay   : false,
			playSpeed  : 3000,
			preload    : 3,
			modal      : false,
			loop       : true,

			ajax  : {
				dataType : 'html',
				headers  : { 'X-fancyBox': true }
			},
			iframe : {
				scrolling : 'auto',
				preload   : true
			},
			swf : {
				wmode: 'transparent',
				allowfullscreen   : 'true',
				allowscriptaccess : 'always'
			},

			keys  : {
				next : {
					13 : 'left', // enter
					34 : 'up',   // page down
					39 : 'left', // right arrow
					40 : 'up'    // down arrow
				},
				prev : {
					8  : 'right',  // backspace
					33 : 'down',   // page up
					37 : 'right',  // left arrow
					38 : 'down'    // up arrow
				},
				close  : [27], // escape key
				play   : [32], // space - start/stop slideshow
				toggle : [70]  // letter "f" - toggle fullscreen
			},

			direction : {
				next : 'left',
				prev : 'right'
			},

			scrollOutside  : true,

			// Override some properties
			index   : 0,
			type    : null,
			href    : null,
			content : null,
			title   : null,

			// HTML templates
			tpl: {
				wrap     : '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
				image    : '<img class="fancybox-image" src="{href}" alt="" />',
				iframe   : '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' + (IE ? ' allowtransparency="true"' : '') + '></iframe>',
				error    : '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
				closeBtn : '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
				next     : '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
				prev     : '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
			},

			// Properties for each animation type
			// Opening fancyBox
			openEffect  : 'fade', // 'elastic', 'fade' or 'none'
			openSpeed   : 250,
			openEasing  : 'swing',
			openOpacity : true,
			openMethod  : 'zoomIn',

			// Closing fancyBox
			closeEffect  : 'fade', // 'elastic', 'fade' or 'none'
			closeSpeed   : 250,
			closeEasing  : 'swing',
			closeOpacity : true,
			closeMethod  : 'zoomOut',

			// Changing next gallery item
			nextEffect : 'elastic', // 'elastic', 'fade' or 'none'
			nextSpeed  : 250,
			nextEasing : 'swing',
			nextMethod : 'changeIn',

			// Changing previous gallery item
			prevEffect : 'elastic', // 'elastic', 'fade' or 'none'
			prevSpeed  : 250,
			prevEasing : 'swing',
			prevMethod : 'changeOut',

			// Enable default helpers
			helpers : {
				overlay : true,
				title   : true
			},

			// Callbacks
			onCancel     : $.noop, // If canceling
			beforeLoad   : $.noop, // Before loading
			afterLoad    : $.noop, // After loading
			beforeShow   : $.noop, // Before changing in current item
			afterShow    : $.noop, // After opening
			beforeChange : $.noop, // Before changing gallery item
			beforeClose  : $.noop, // Before closing
			afterClose   : $.noop  // After closing
		},

		//Current state
		group    : {}, // Selected group
		opts     : {}, // Group options
		previous : null,  // Previous element
		coming   : null,  // Element being loaded
		current  : null,  // Currently loaded element
		isActive : false, // Is activated
		isOpen   : false, // Is currently open
		isOpened : false, // Have been fully opened at least once

		wrap  : null,
		skin  : null,
		outer : null,
		inner : null,

		player : {
			timer    : null,
			isActive : false
		},

		// Loaders
		ajaxLoad   : null,
		imgPreload : null,

		// Some collections
		transitions : {},
		helpers     : {},

		/*
		 *	Static methods
		 */

		open: function (group, opts) {
			if (!group) {
				return;
			}

			if (!$.isPlainObject(opts)) {
				opts = {};
			}

			// Close if already active
			if (false === F.close(true)) {
				return;
			}

			// Normalize group
			if (!$.isArray(group)) {
				group = isQuery(group) ? $(group).get() : [group];
			}

			// Recheck if the type of each element is `object` and set content type (image, ajax, etc)
			$.each(group, function(i, element) {
				var obj = {},
					href,
					title,
					content,
					type,
					rez,
					hrefParts,
					selector;

				if ($.type(element) === "object") {
					// Check if is DOM element
					if (element.nodeType) {
						element = $(element);
					}

					if (isQuery(element)) {
						obj = {
							href    : element.data('fancybox-href') || element.attr('href'),
							title   : element.data('fancybox-title') || element.attr('title'),
							isDom   : true,
							element : element
						};

						if ($.metadata) {
							$.extend(true, obj, element.metadata());
						}

					} else {
						obj = element;
					}
				}

				href  = opts.href  || obj.href || (isString(element) ? element : null);
				title = opts.title !== undefined ? opts.title : obj.title || '';

				content = opts.content || obj.content;
				type    = content ? 'html' : (opts.type  || obj.type);

				if (!type && obj.isDom) {
					type = element.data('fancybox-type');

					if (!type) {
						rez  = element.prop('class').match(/fancybox\.(\w+)/);
						type = rez ? rez[1] : null;
					}
				}

				if (isString(href)) {
					// Try to guess the content type
					if (!type) {
						if (F.isImage(href)) {
							type = 'image';

						} else if (F.isSWF(href)) {
							type = 'swf';

						} else if (href.charAt(0) === '#') {
							type = 'inline';

						} else if (isString(element)) {
							type    = 'html';
							content = element;
						}
					}

					// Split url into two pieces with source url and content selector, e.g,
					// "/mypage.html #my_id" will load "/mypage.html" and display element having id "my_id"
					if (type === 'ajax') {
						hrefParts = href.split(/\s+/, 2);
						href      = hrefParts.shift();
						selector  = hrefParts.shift();
					}
				}

				if (!content) {
					if (type === 'inline') {
						if (href) {
							content = $( isString(href) ? href.replace(/.*(?=#[^\s]+$)/, '') : href ); //strip for ie7

						} else if (obj.isDom) {
							content = element;
						}

					} else if (type === 'html') {
						content = href;

					} else if (!type && !href && obj.isDom) {
						type    = 'inline';
						content = element;
					}
				}

				$.extend(obj, {
					href     : href,
					type     : type,
					content  : content,
					title    : title,
					selector : selector
				});

				group[ i ] = obj;
			});

			// Extend the defaults
			F.opts = $.extend(true, {}, F.defaults, opts);

			// All options are merged recursive except keys
			if (opts.keys !== undefined) {
				F.opts.keys = opts.keys ? $.extend({}, F.defaults.keys, opts.keys) : false;
			}

			F.group = group;

			return F._start(F.opts.index);
		},

		// Cancel image loading or abort ajax request
		cancel: function () {
			var coming = F.coming;

			if (!coming || false === F.trigger('onCancel')) {
				return;
			}

			F.hideLoading();

			if (F.ajaxLoad) {
				F.ajaxLoad.abort();
			}

			F.ajaxLoad = null;

			if (F.imgPreload) {
				F.imgPreload.onload = F.imgPreload.onerror = null;
			}

			if (coming.wrap) {
				coming.wrap.stop(true, true).trigger('onReset').remove();
			}

			F.coming = null;

			// If the first item has been canceled, then clear everything
			if (!F.current) {
				F._afterZoomOut( coming );
			}
		},

		// Start closing animation if is open; remove immediately if opening/closing
		close: function (event) {
			F.cancel();

			if (false === F.trigger('beforeClose')) {
				return;
			}

			F.unbindEvents();

			if (!F.isActive) {
				return;
			}

			if (!F.isOpen || event === true) {
				$('.fancybox-wrap').stop(true).trigger('onReset').remove();

				F._afterZoomOut();

			} else {
				F.isOpen = F.isOpened = false;
				F.isClosing = true;

				$('.fancybox-item, .fancybox-nav').remove();

				F.wrap.stop(true, true).removeClass('fancybox-opened');

				F.transitions[ F.current.closeMethod ]();
			}
		},

		// Manage slideshow:
		//   $.fancybox.play(); - toggle slideshow
		//   $.fancybox.play( true ); - start
		//   $.fancybox.play( false ); - stop
		play: function ( action ) {
			var clear = function () {
					clearTimeout(F.player.timer);
				},
				set = function () {
					clear();

					if (F.current && F.player.isActive) {
						F.player.timer = setTimeout(F.next, F.current.playSpeed);
					}
				},
				stop = function () {
					clear();

					D.unbind('.player');

					F.player.isActive = false;

					F.trigger('onPlayEnd');
				},
				start = function () {
					if (F.current && (F.current.loop || F.current.index < F.group.length - 1)) {
						F.player.isActive = true;

						D.bind({
							'onCancel.player beforeClose.player' : stop,
							'onUpdate.player'   : set,
							'beforeLoad.player' : clear
						});

						set();

						F.trigger('onPlayStart');
					}
				};

			if (action === true || (!F.player.isActive && action !== false)) {
				start();
			} else {
				stop();
			}
		},

		// Navigate to next gallery item
		next: function ( direction ) {
			var current = F.current;

			if (current) {
				if (!isString(direction)) {
					direction = current.direction.next;
				}

				F.jumpto(current.index + 1, direction, 'next');
			}
		},

		// Navigate to previous gallery item
		prev: function ( direction ) {
			var current = F.current;

			if (current) {
				if (!isString(direction)) {
					direction = current.direction.prev;
				}

				F.jumpto(current.index - 1, direction, 'prev');
			}
		},

		// Navigate to gallery item by index
		jumpto: function ( index, direction, router ) {
			var current = F.current;

			if (!current) {
				return;
			}

			index = getScalar(index);

			F.direction = direction || current.direction[ (index >= current.index ? 'next' : 'prev') ];
			F.router    = router || 'jumpto';

			if (current.loop) {
				if (index < 0) {
					index = current.group.length + (index % current.group.length);
				}

				index = index % current.group.length;
			}

			if (current.group[ index ] !== undefined) {
				F.cancel();

				F._start(index);
			}
		},

		// Center inside viewport and toggle position type to fixed or absolute if needed
		reposition: function (e, onlyAbsolute) {
			var current = F.current,
				wrap    = current ? current.wrap : null,
				pos;

			if (wrap) {
				pos = F._getPosition(onlyAbsolute);

				if (e && e.type === 'scroll') {
					delete pos.position;

					wrap.stop(true, true).animate(pos, 200);

				} else {
					wrap.css(pos);

					current.pos = $.extend({}, current.dim, pos);
				}
			}
		},

		update: function (e) {
			var type = (e && e.type),
				anyway = !type || type === 'orientationchange';

			if (anyway) {
				clearTimeout(didUpdate);

				didUpdate = null;
			}

			if (!F.isOpen || didUpdate) {
				return;
			}

			didUpdate = setTimeout(function() {
				var current = F.current;

				if (!current || F.isClosing) {
					return;
				}

				F.wrap.removeClass('fancybox-tmp');

				if (anyway || type === 'load' || (type === 'resize' && current.autoResize)) {
					F._setDimension();
				}

				if (!(type === 'scroll' && current.canShrink)) {
					F.reposition(e);
				}

				F.trigger('onUpdate');

				didUpdate = null;

			}, (anyway && !isTouch ? 0 : 300));
		},

		// Shrink content to fit inside viewport or restore if resized
		toggle: function ( action ) {
			if (F.isOpen) {
				F.current.fitToView = $.type(action) === "boolean" ? action : !F.current.fitToView;

				// Help browser to restore document dimensions
				if (isTouch) {
					F.wrap.removeAttr('style').addClass('fancybox-tmp');

					F.trigger('onUpdate');
				}

				F.update();
			}
		},

		hideLoading: function () {
			D.unbind('.loading');

			$('#fancybox-loading').remove();
		},

		showLoading: function () {
			var el, viewport;

			F.hideLoading();

			el = $('<div id="fancybox-loading"><div></div></div>').click(F.cancel).appendTo('body');

			// If user will press the escape-button, the request will be canceled
			D.bind('keydown.loading', function(e) {
				if ((e.which || e.keyCode) === 27) {
					e.preventDefault();

					F.cancel();
				}
			});

			if (!F.defaults.fixed) {
				viewport = F.getViewport();

				el.css({
					position : 'absolute',
					top  : (viewport.h * 0.5) + viewport.y,
					left : (viewport.w * 0.5) + viewport.x
				});
			}
		},

		getViewport: function () {
			var locked = (F.current && F.current.locked) || false,
				rez    = {
					x: W.scrollLeft(),
					y: W.scrollTop()
				};

			if (locked) {
				rez.w = locked[0].clientWidth;
				rez.h = locked[0].clientHeight;

			} else {
				// See http://bugs.jquery.com/ticket/6724
				rez.w = isTouch && window.innerWidth  ? window.innerWidth  : W.width();
				rez.h = isTouch && window.innerHeight ? window.innerHeight : W.height();
			}

			return rez;
		},

		// Unbind the keyboard / clicking actions
		unbindEvents: function () {
			if (F.wrap && isQuery(F.wrap)) {
				F.wrap.unbind('.fb');
			}

			D.unbind('.fb');
			W.unbind('.fb');
		},

		bindEvents: function () {
			var current = F.current,
				keys;

			if (!current) {
				return;
			}

			// Changing document height on iOS devices triggers a 'resize' event,
			// that can change document height... repeating infinitely
			W.bind('orientationchange.fb' + (isTouch ? '' : ' resize.fb') + (current.autoCenter && !current.locked ? ' scroll.fb' : ''), F.update);

			keys = current.keys;

			if (keys) {
				D.bind('keydown.fb', function (e) {
					var code   = e.which || e.keyCode,
						target = e.target || e.srcElement;

					// Skip esc key if loading, because showLoading will cancel preloading
					if (code === 27 && F.coming) {
						return false;
					}

					// Ignore key combinations and key events within form elements
					if (!e.ctrlKey && !e.altKey && !e.shiftKey && !e.metaKey && !(target && (target.type || $(target).is('[contenteditable]')))) {
						$.each(keys, function(i, val) {
							if (current.group.length > 1 && val[ code ] !== undefined) {
								F[ i ]( val[ code ] );

								e.preventDefault();
								return false;
							}

							if ($.inArray(code, val) > -1) {
								F[ i ] ();

								e.preventDefault();
								return false;
							}
						});
					}
				});
			}

			if ($.fn.mousewheel && current.mouseWheel) {
				F.wrap.bind('mousewheel.fb', function (e, delta, deltaX, deltaY) {
					var target = e.target || null,
						parent = $(target),
						canScroll = false;

					while (parent.length) {
						if (canScroll || parent.is('.fancybox-skin') || parent.is('.fancybox-wrap')) {
							break;
						}

						canScroll = isScrollable( parent[0] );
						parent    = $(parent).parent();
					}

					if (delta !== 0 && !canScroll) {
						if (F.group.length > 1 && !current.canShrink) {
							if (deltaY > 0 || deltaX > 0) {
								F.prev( deltaY > 0 ? 'down' : 'left' );

							} else if (deltaY < 0 || deltaX < 0) {
								F.next( deltaY < 0 ? 'up' : 'right' );
							}

							e.preventDefault();
						}
					}
				});
			}
		},

		trigger: function (event, o) {
			var ret, obj = o || F.coming || F.current;

			if (!obj) {
				return;
			}

			if ($.isFunction( obj[event] )) {
				ret = obj[event].apply(obj, Array.prototype.slice.call(arguments, 1));
			}

			if (ret === false) {
				return false;
			}

			if (obj.helpers) {
				$.each(obj.helpers, function (helper, opts) {
					if (opts && F.helpers[helper] && $.isFunction(F.helpers[helper][event])) {
						F.helpers[helper][event]($.extend(true, {}, F.helpers[helper].defaults, opts), obj);
					}
				});
			}

			D.trigger(event);
		},

		isImage: function (str) {
			return isString(str) && str.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i);
		},

		isSWF: function (str) {
			return isString(str) && str.match(/\.(swf)((\?|#).*)?$/i);
		},

		_start: function (index) {
			var coming = {},
				obj,
				href,
				type,
				margin,
				padding;

			index = getScalar( index );
			obj   = F.group[ index ] || null;

			if (!obj) {
				return false;
			}

			coming = $.extend(true, {}, F.opts, obj);

			// Convert margin and padding properties to array - top, right, bottom, left
			margin  = coming.margin;
			padding = coming.padding;

			if ($.type(margin) === 'number') {
				coming.margin = [margin, margin, margin, margin];
			}

			if ($.type(padding) === 'number') {
				coming.padding = [padding, padding, padding, padding];
			}

			// 'modal' propery is just a shortcut
			if (coming.modal) {
				$.extend(true, coming, {
					closeBtn   : false,
					closeClick : false,
					nextClick  : false,
					arrows     : false,
					mouseWheel : false,
					keys       : null,
					helpers: {
						overlay : {
							closeClick : false
						}
					}
				});
			}

			// 'autoSize' property is a shortcut, too
			if (coming.autoSize) {
				coming.autoWidth = coming.autoHeight = true;
			}

			if (coming.width === 'auto') {
				coming.autoWidth = true;
			}

			if (coming.height === 'auto') {
				coming.autoHeight = true;
			}

			/*
			 * Add reference to the group, so it`s possible to access from callbacks, example:
			 * afterLoad : function() {
			 *     this.title = 'Image ' + (this.index + 1) + ' of ' + this.group.length + (this.title ? ' - ' + this.title : '');
			 * }
			 */

			coming.group  = F.group;
			coming.index  = index;

			// Give a chance for callback or helpers to update coming item (type, title, etc)
			F.coming = coming;

			if (false === F.trigger('beforeLoad')) {
				F.coming = null;

				return;
			}

			type = coming.type;
			href = coming.href;

			if (!type) {
				F.coming = null;

				//If we can not determine content type then drop silently or display next/prev item if looping through gallery
				if (F.current && F.router && F.router !== 'jumpto') {
					F.current.index = index;

					return F[ F.router ]( F.direction );
				}

				return false;
			}

			F.isActive = true;

			if (type === 'image' || type === 'swf') {
				coming.autoHeight = coming.autoWidth = false;
				coming.scrolling  = 'visible';
			}

			if (type === 'image') {
				coming.aspectRatio = true;
			}

			if (type === 'iframe' && isTouch) {
				coming.scrolling = 'scroll';
			}

			// Build the neccessary markup
			coming.wrap = $(coming.tpl.wrap).addClass('fancybox-' + (isTouch ? 'mobile' : 'desktop') + ' fancybox-type-' + type + ' fancybox-tmp ' + coming.wrapCSS).appendTo( coming.parent || 'body' );

			$.extend(coming, {
				skin  : $('.fancybox-skin',  coming.wrap),
				outer : $('.fancybox-outer', coming.wrap),
				inner : $('.fancybox-inner', coming.wrap)
			});

			$.each(["Top", "Right", "Bottom", "Left"], function(i, v) {
				coming.skin.css('padding' + v, getValue(coming.padding[ i ]));
			});

			F.trigger('onReady');

			// Check before try to load; 'inline' and 'html' types need content, others - href
			if (type === 'inline' || type === 'html') {
				if (!coming.content || !coming.content.length) {
					return F._error( 'content' );
				}

			} else if (!href) {
				return F._error( 'href' );
			}

			if (type === 'image') {
				F._loadImage();

			} else if (type === 'ajax') {
				F._loadAjax();

			} else if (type === 'iframe') {
				F._loadIframe();

			} else {
				F._afterLoad();
			}
		},

		_error: function ( type ) {
			$.extend(F.coming, {
				type       : 'html',
				autoWidth  : true,
				autoHeight : true,
				minWidth   : 0,
				minHeight  : 0,
				scrolling  : 'no',
				hasError   : type,
				content    : F.coming.tpl.error
			});

			F._afterLoad();
		},

		_loadImage: function () {
			// Reset preload image so it is later possible to check "complete" property
			var img = F.imgPreload = new Image();

			img.onload = function () {
				this.onload = this.onerror = null;

				F.coming.width  = this.width / F.opts.pixelRatio;
				F.coming.height = this.height / F.opts.pixelRatio;

				F._afterLoad();
			};

			img.onerror = function () {
				this.onload = this.onerror = null;

				F._error( 'image' );
			};

			img.src = F.coming.href;

			if (img.complete !== true) {
				F.showLoading();
			}
		},

		_loadAjax: function () {
			var coming = F.coming;

			F.showLoading();

			F.ajaxLoad = $.ajax($.extend({}, coming.ajax, {
				url: coming.href,
				error: function (jqXHR, textStatus) {
					if (F.coming && textStatus !== 'abort') {
						F._error( 'ajax', jqXHR );

					} else {
						F.hideLoading();
					}
				},
				success: function (data, textStatus) {
					if (textStatus === 'success') {
						coming.content = data;

						F._afterLoad();
					}
				}
			}));
		},

		_loadIframe: function() {
			var coming = F.coming,
				iframe = $(coming.tpl.iframe.replace(/\{rnd\}/g, new Date().getTime()))
					.attr('scrolling', isTouch ? 'auto' : coming.iframe.scrolling)
					.attr('src', coming.href);

			// This helps IE
			$(coming.wrap).bind('onReset', function () {
				try {
					$(this).find('iframe').hide().attr('src', '//about:blank').end().empty();
				} catch (e) {}
			});

			if (coming.iframe.preload) {
				F.showLoading();

				iframe.one('load', function() {
					$(this).data('ready', 1);

					// iOS will lose scrolling if we resize
					if (!isTouch) {
						$(this).bind('load.fb', F.update);
					}

					// Without this trick:
					//   - iframe won't scroll on iOS devices
					//   - IE7 sometimes displays empty iframe
					$(this).parents('.fancybox-wrap').width('100%').removeClass('fancybox-tmp').show();

					F._afterLoad();
				});
			}

			coming.content = iframe.appendTo( coming.inner );

			if (!coming.iframe.preload) {
				F._afterLoad();
			}
		},

		_preloadImages: function() {
			var group   = F.group,
				current = F.current,
				len     = group.length,
				cnt     = current.preload ? Math.min(current.preload, len - 1) : 0,
				item,
				i;

			for (i = 1; i <= cnt; i += 1) {
				item = group[ (current.index + i ) % len ];

				if (item.type === 'image' && item.href) {
					new Image().src = item.href;
				}
			}
		},

		_afterLoad: function () {
			var coming   = F.coming,
				previous = F.current,
				placeholder = 'fancybox-placeholder',
				current,
				content,
				type,
				scrolling,
				href,
				embed;

			F.hideLoading();

			if (!coming || F.isActive === false) {
				return;
			}

			if (false === F.trigger('afterLoad', coming, previous)) {
				coming.wrap.stop(true).trigger('onReset').remove();

				F.coming = null;

				return;
			}

			if (previous) {
				F.trigger('beforeChange', previous);

				previous.wrap.stop(true).removeClass('fancybox-opened')
					.find('.fancybox-item, .fancybox-nav')
					.remove();
			}

			F.unbindEvents();

			current   = coming;
			content   = coming.content;
			type      = coming.type;
			scrolling = coming.scrolling;

			$.extend(F, {
				wrap  : current.wrap,
				skin  : current.skin,
				outer : current.outer,
				inner : current.inner,
				current  : current,
				previous : previous
			});

			href = current.href;

			switch (type) {
				case 'inline':
				case 'ajax':
				case 'html':
					if (current.selector) {
						content = $('<div>').html(content).find(current.selector);

					} else if (isQuery(content)) {
						if (!content.data(placeholder)) {
							content.data(placeholder, $('<div class="' + placeholder + '"></div>').insertAfter( content ).hide() );
						}

						content = content.show().detach();

						current.wrap.bind('onReset', function () {
							if ($(this).find(content).length) {
								content.hide().replaceAll( content.data(placeholder) ).data(placeholder, false);
							}
						});
					}
				break;

				case 'image':
					content = current.tpl.image.replace('{href}', href);
				break;

				case 'swf':
					content = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + href + '"></param>';
					embed   = '';

					$.each(current.swf, function(name, val) {
						content += '<param name="' + name + '" value="' + val + '"></param>';
						embed   += ' ' + name + '="' + val + '"';
					});

					content += '<embed src="' + href + '" type="application/x-shockwave-flash" width="100%" height="100%"' + embed + '></embed></object>';
				break;
			}

			if (!(isQuery(content) && content.parent().is(current.inner))) {
				current.inner.append( content );
			}

			// Give a chance for helpers or callbacks to update elements
			F.trigger('beforeShow');

			// Set scrolling before calculating dimensions
			current.inner.css('overflow', scrolling === 'yes' ? 'scroll' : (scrolling === 'no' ? 'hidden' : scrolling));

			// Set initial dimensions and start position
			F._setDimension();

			F.reposition();

			F.isOpen = false;
			F.coming = null;

			F.bindEvents();

			if (!F.isOpened) {
				$('.fancybox-wrap').not( current.wrap ).stop(true).trigger('onReset').remove();

			} else if (previous.prevMethod) {
				F.transitions[ previous.prevMethod ]();
			}

			F.transitions[ F.isOpened ? current.nextMethod : current.openMethod ]();

			F._preloadImages();
		},

		_setDimension: function () {
			var viewport   = F.getViewport(),
				steps      = 0,
				canShrink  = false,
				canExpand  = false,
				wrap       = F.wrap,
				skin       = F.skin,
				inner      = F.inner,
				current    = F.current,
				width      = current.width,
				height     = current.height,
				minWidth   = current.minWidth,
				minHeight  = current.minHeight,
				maxWidth   = current.maxWidth,
				maxHeight  = current.maxHeight,
				scrolling  = current.scrolling,
				scrollOut  = current.scrollOutside ? current.scrollbarWidth : 0,
				margin     = current.margin,
				wMargin    = getScalar(margin[1] + margin[3]),
				hMargin    = getScalar(margin[0] + margin[2]),
				wPadding,
				hPadding,
				wSpace,
				hSpace,
				origWidth,
				origHeight,
				origMaxWidth,
				origMaxHeight,
				ratio,
				width_,
				height_,
				maxWidth_,
				maxHeight_,
				iframe,
				body;

			// Reset dimensions so we could re-check actual size
			wrap.add(skin).add(inner).width('auto').height('auto').removeClass('fancybox-tmp');

			wPadding = getScalar(skin.outerWidth(true)  - skin.width());
			hPadding = getScalar(skin.outerHeight(true) - skin.height());

			// Any space between content and viewport (margin, padding, border, title)
			wSpace = wMargin + wPadding;
			hSpace = hMargin + hPadding;

			origWidth  = isPercentage(width)  ? (viewport.w - wSpace) * getScalar(width)  / 100 : width;
			origHeight = isPercentage(height) ? (viewport.h - hSpace) * getScalar(height) / 100 : height;

			if (current.type === 'iframe') {
				iframe = current.content;

				if (current.autoHeight && iframe.data('ready') === 1) {
					try {
						if (iframe[0].contentWindow.document.location) {
							inner.width( origWidth ).height(9999);

							body = iframe.contents().find('body');

							if (scrollOut) {
								body.css('overflow-x', 'hidden');
							}

							origHeight = body.outerHeight(true);
						}

					} catch (e) {}
				}

			} else if (current.autoWidth || current.autoHeight) {
				inner.addClass( 'fancybox-tmp' );

				// Set width or height in case we need to calculate only one dimension
				if (!current.autoWidth) {
					inner.width( origWidth );
				}

				if (!current.autoHeight) {
					inner.height( origHeight );
				}

				if (current.autoWidth) {
					origWidth = inner.width();
				}

				if (current.autoHeight) {
					origHeight = inner.height();
				}

				inner.removeClass( 'fancybox-tmp' );
			}

			width  = getScalar( origWidth );
			height = getScalar( origHeight );

			ratio  = origWidth / origHeight;

			// Calculations for the content
			minWidth  = getScalar(isPercentage(minWidth) ? getScalar(minWidth, 'w') - wSpace : minWidth);
			maxWidth  = getScalar(isPercentage(maxWidth) ? getScalar(maxWidth, 'w') - wSpace : maxWidth);

			minHeight = getScalar(isPercentage(minHeight) ? getScalar(minHeight, 'h') - hSpace : minHeight);
			maxHeight = getScalar(isPercentage(maxHeight) ? getScalar(maxHeight, 'h') - hSpace : maxHeight);

			// These will be used to determine if wrap can fit in the viewport
			origMaxWidth  = maxWidth;
			origMaxHeight = maxHeight;

			if (current.fitToView) {
				maxWidth  = Math.min(viewport.w - wSpace, maxWidth);
				maxHeight = Math.min(viewport.h - hSpace, maxHeight);
			}

			maxWidth_  = viewport.w - wMargin;
			maxHeight_ = viewport.h - hMargin;

			if (current.aspectRatio) {
				if (width > maxWidth) {
					width  = maxWidth;
					height = getScalar(width / ratio);
				}

				if (height > maxHeight) {
					height = maxHeight;
					width  = getScalar(height * ratio);
				}

				if (width < minWidth) {
					width  = minWidth;
					height = getScalar(width / ratio);
				}

				if (height < minHeight) {
					height = minHeight;
					width  = getScalar(height * ratio);
				}

			} else {
				width = Math.max(minWidth, Math.min(width, maxWidth));

				if (current.autoHeight && current.type !== 'iframe') {
					inner.width( width );

					height = inner.height();
				}

				height = Math.max(minHeight, Math.min(height, maxHeight));
			}

			// Try to fit inside viewport (including the title)
			if (current.fitToView) {
				inner.width( width ).height( height );

				wrap.width( width + wPadding );

				// Real wrap dimensions
				width_  = wrap.width();
				height_ = wrap.height();

				if (current.aspectRatio) {
					while ((width_ > maxWidth_ || height_ > maxHeight_) && width > minWidth && height > minHeight) {
						if (steps++ > 19) {
							break;
						}

						height = Math.max(minHeight, Math.min(maxHeight, height - 10));
						width  = getScalar(height * ratio);

						if (width < minWidth) {
							width  = minWidth;
							height = getScalar(width / ratio);
						}

						if (width > maxWidth) {
							width  = maxWidth;
							height = getScalar(width / ratio);
						}

						inner.width( width ).height( height );

						wrap.width( width + wPadding );

						width_  = wrap.width();
						height_ = wrap.height();
					}

				} else {
					width  = Math.max(minWidth,  Math.min(width,  width  - (width_  - maxWidth_)));
					height = Math.max(minHeight, Math.min(height, height - (height_ - maxHeight_)));
				}
			}

			if (scrollOut && scrolling === 'auto' && height < origHeight && (width + wPadding + scrollOut) < maxWidth_) {
				width += scrollOut;
			}

			inner.width( width ).height( height );

			wrap.width( width + wPadding );

			width_  = wrap.width();
			height_ = wrap.height();

			canShrink = (width_ > maxWidth_ || height_ > maxHeight_) && width > minWidth && height > minHeight;
			canExpand = current.aspectRatio ? (width < origMaxWidth && height < origMaxHeight && width < origWidth && height < origHeight) : ((width < origMaxWidth || height < origMaxHeight) && (width < origWidth || height < origHeight));

			$.extend(current, {
				dim : {
					width	: getValue( width_ ),
					height	: getValue( height_ )
				},
				origWidth  : origWidth,
				origHeight : origHeight,
				canShrink  : canShrink,
				canExpand  : canExpand,
				wPadding   : wPadding,
				hPadding   : hPadding,
				wrapSpace  : height_ - skin.outerHeight(true),
				skinSpace  : skin.height() - height
			});

			if (!iframe && current.autoHeight && height > minHeight && height < maxHeight && !canExpand) {
				inner.height('auto');
			}
		},

		_getPosition: function (onlyAbsolute) {
			var current  = F.current,
				viewport = F.getViewport(),
				margin   = current.margin,
				width    = F.wrap.width()  + margin[1] + margin[3],
				height   = F.wrap.height() + margin[0] + margin[2],
				rez      = {
					position: 'absolute',
					top  : margin[0],
					left : margin[3]
				};

			if (current.autoCenter && current.fixed && !onlyAbsolute && height <= viewport.h && width <= viewport.w) {
				rez.position = 'fixed';

			} else if (!current.locked) {
				rez.top  += viewport.y;
				rez.left += viewport.x;
			}

			rez.top  = getValue(Math.max(rez.top,  rez.top  + ((viewport.h - height) * current.topRatio)));
			rez.left = getValue(Math.max(rez.left, rez.left + ((viewport.w - width)  * current.leftRatio)));

			return rez;
		},

		_afterZoomIn: function () {
			var current = F.current;

			if (!current) {
				return;
			}

			F.isOpen = F.isOpened = true;

			F.wrap.css('overflow', 'visible').addClass('fancybox-opened');

			F.update();

			// Assign a click event
			if ( current.closeClick || (current.nextClick && F.group.length > 1) ) {
				F.inner.css('cursor', 'pointer').bind('click.fb', function(e) {
					if (!$(e.target).is('a') && !$(e.target).parent().is('a')) {
						e.preventDefault();

						F[ current.closeClick ? 'close' : 'next' ]();
					}
				});
			}

			// Create a close button
			if (current.closeBtn) {
				$(current.tpl.closeBtn).appendTo(F.skin).bind('click.fb', function(e) {
					e.preventDefault();

					F.close();
				});
			}

			// Create navigation arrows
			if (current.arrows && F.group.length > 1) {
				if (current.loop || current.index > 0) {
					$(current.tpl.prev).appendTo(F.outer).bind('click.fb', F.prev);
				}

				if (current.loop || current.index < F.group.length - 1) {
					$(current.tpl.next).appendTo(F.outer).bind('click.fb', F.next);
				}
			}

			F.trigger('afterShow');

			// Stop the slideshow if this is the last item
			if (!current.loop && current.index === current.group.length - 1) {
				F.play( false );

			} else if (F.opts.autoPlay && !F.player.isActive) {
				F.opts.autoPlay = false;

				F.play();
			}
		},

		_afterZoomOut: function ( obj ) {
			obj = obj || F.current;

			$('.fancybox-wrap').trigger('onReset').remove();

			$.extend(F, {
				group  : {},
				opts   : {},
				router : false,
				current   : null,
				isActive  : false,
				isOpened  : false,
				isOpen    : false,
				isClosing : false,
				wrap   : null,
				skin   : null,
				outer  : null,
				inner  : null
			});

			F.trigger('afterClose', obj);
		}
	});

	/*
	 *	Default transitions
	 */

	F.transitions = {
		getOrigPosition: function () {
			var current  = F.current,
				element  = current.element,
				orig     = current.orig,
				pos      = {},
				width    = 50,
				height   = 50,
				hPadding = current.hPadding,
				wPadding = current.wPadding,
				viewport = F.getViewport();

			if (!orig && current.isDom && element.is(':visible')) {
				orig = element.find('img:first');

				if (!orig.length) {
					orig = element;
				}
			}

			if (isQuery(orig)) {
				pos = orig.offset();

				if (orig.is('img')) {
					width  = orig.outerWidth();
					height = orig.outerHeight();
				}

			} else {
				pos.top  = viewport.y + (viewport.h - height) * current.topRatio;
				pos.left = viewport.x + (viewport.w - width)  * current.leftRatio;
			}

			if (F.wrap.css('position') === 'fixed' || current.locked) {
				pos.top  -= viewport.y;
				pos.left -= viewport.x;
			}

			pos = {
				top     : getValue(pos.top  - hPadding * current.topRatio),
				left    : getValue(pos.left - wPadding * current.leftRatio),
				width   : getValue(width  + wPadding),
				height  : getValue(height + hPadding)
			};

			return pos;
		},

		step: function (now, fx) {
			var ratio,
				padding,
				value,
				prop       = fx.prop,
				current    = F.current,
				wrapSpace  = current.wrapSpace,
				skinSpace  = current.skinSpace;

			if (prop === 'width' || prop === 'height') {
				ratio = fx.end === fx.start ? 1 : (now - fx.start) / (fx.end - fx.start);

				if (F.isClosing) {
					ratio = 1 - ratio;
				}

				padding = prop === 'width' ? current.wPadding : current.hPadding;
				value   = now - padding;

				F.skin[ prop ](  getScalar( prop === 'width' ?  value : value - (wrapSpace * ratio) ) );
				F.inner[ prop ]( getScalar( prop === 'width' ?  value : value - (wrapSpace * ratio) - (skinSpace * ratio) ) );
			}
		},

		zoomIn: function () {
			var current  = F.current,
				startPos = current.pos,
				effect   = current.openEffect,
				elastic  = effect === 'elastic',
				endPos   = $.extend({opacity : 1}, startPos);

			// Remove "position" property that breaks older IE
			delete endPos.position;

			if (elastic) {
				startPos = this.getOrigPosition();

				if (current.openOpacity) {
					startPos.opacity = 0.1;
				}

			} else if (effect === 'fade') {
				startPos.opacity = 0.1;
			}

			F.wrap.css(startPos).animate(endPos, {
				duration : effect === 'none' ? 0 : current.openSpeed,
				easing   : current.openEasing,
				step     : elastic ? this.step : null,
				complete : F._afterZoomIn
			});
		},

		zoomOut: function () {
			var current  = F.current,
				effect   = current.closeEffect,
				elastic  = effect === 'elastic',
				endPos   = {opacity : 0.1};

			if (elastic) {
				endPos = this.getOrigPosition();

				if (current.closeOpacity) {
					endPos.opacity = 0.1;
				}
			}

			F.wrap.animate(endPos, {
				duration : effect === 'none' ? 0 : current.closeSpeed,
				easing   : current.closeEasing,
				step     : elastic ? this.step : null,
				complete : F._afterZoomOut
			});
		},

		changeIn: function () {
			var current   = F.current,
				effect    = current.nextEffect,
				startPos  = current.pos,
				endPos    = { opacity : 1 },
				direction = F.direction,
				distance  = 200,
				field;

			startPos.opacity = 0.1;

			if (effect === 'elastic') {
				field = direction === 'down' || direction === 'up' ? 'top' : 'left';

				if (direction === 'down' || direction === 'right') {
					startPos[ field ] = getValue(getScalar(startPos[ field ]) - distance);
					endPos[ field ]   = '+=' + distance + 'px';

				} else {
					startPos[ field ] = getValue(getScalar(startPos[ field ]) + distance);
					endPos[ field ]   = '-=' + distance + 'px';
				}
			}

			// Workaround for http://bugs.jquery.com/ticket/12273
			if (effect === 'none') {
				F._afterZoomIn();

			} else {
				F.wrap.css(startPos).animate(endPos, {
					duration : current.nextSpeed,
					easing   : current.nextEasing,
					complete : F._afterZoomIn
				});
			}
		},

		changeOut: function () {
			var previous  = F.previous,
				effect    = previous.prevEffect,
				endPos    = { opacity : 0.1 },
				direction = F.direction,
				distance  = 200;

			if (effect === 'elastic') {
				endPos[ direction === 'down' || direction === 'up' ? 'top' : 'left' ] = ( direction === 'up' || direction === 'left' ? '-' : '+' ) + '=' + distance + 'px';
			}

			previous.wrap.animate(endPos, {
				duration : effect === 'none' ? 0 : previous.prevSpeed,
				easing   : previous.prevEasing,
				complete : function () {
					$(this).trigger('onReset').remove();
				}
			});
		}
	};

	/*
	 *	Overlay helper
	 */

	F.helpers.overlay = {
		defaults : {
			closeClick : true,      // if true, fancyBox will be closed when user clicks on the overlay
			speedOut   : 200,       // duration of fadeOut animation
			showEarly  : true,      // indicates if should be opened immediately or wait until the content is ready
			css        : {},        // custom CSS properties
			locked     : !isTouch,  // if true, the content will be locked into overlay
			fixed      : true       // if false, the overlay CSS position property will not be set to "fixed"
		},

		overlay : null,      // current handle
		fixed   : false,     // indicates if the overlay has position "fixed"
		el      : $('html'), // element that contains "the lock"

		// Public methods
		create : function(opts) {
			opts = $.extend({}, this.defaults, opts);

			if (this.overlay) {
				this.close();
			}

			this.overlay = $('<div class="fancybox-overlay"></div>').appendTo( F.coming ? F.coming.parent : opts.parent );
			this.fixed   = false;

			if (opts.fixed && F.defaults.fixed) {
				this.overlay.addClass('fancybox-overlay-fixed');

				this.fixed = true;
			}
		},

		open : function(opts) {
			var that = this;

			opts = $.extend({}, this.defaults, opts);

			if (this.overlay) {
				this.overlay.unbind('.overlay').width('auto').height('auto');

			} else {
				this.create(opts);
			}

			if (!this.fixed) {
				W.bind('resize.overlay', $.proxy( this.update, this) );

				this.update();
			}

			if (opts.closeClick) {
				this.overlay.bind('click.overlay', function(e) {
					if ($(e.target).hasClass('fancybox-overlay')) {
						if (F.isActive) {
							F.close();
						} else {
							that.close();
						}

						return false;
					}
				});
			}

			this.overlay.css( opts.css ).show();
		},

		close : function() {
			var scrollV, scrollH;

			W.unbind('resize.overlay');

			if (this.el.hasClass('fancybox-lock')) {
				$('.fancybox-margin').removeClass('fancybox-margin');

				scrollV = W.scrollTop();
				scrollH = W.scrollLeft();

				this.el.removeClass('fancybox-lock');

				W.scrollTop( scrollV ).scrollLeft( scrollH );
			}

			$('.fancybox-overlay').remove().hide();

			$.extend(this, {
				overlay : null,
				fixed   : false
			});
		},

		// Private, callbacks

		update : function () {
			var width = '100%', offsetWidth;

			// Reset width/height so it will not mess
			this.overlay.width(width).height('100%');

			// jQuery does not return reliable result for IE
			if (IE) {
				offsetWidth = Math.max(document.documentElement.offsetWidth, document.body.offsetWidth);

				if (D.width() > offsetWidth) {
					width = D.width();
				}

			} else if (D.width() > W.width()) {
				width = D.width();
			}

			this.overlay.width(width).height(D.height());
		},

		// This is where we can manipulate DOM, because later it would cause iframes to reload
		onReady : function (opts, obj) {
			var overlay = this.overlay;

			$('.fancybox-overlay').stop(true, true);

			if (!overlay) {
				this.create(opts);
			}

			if (opts.locked && this.fixed && obj.fixed) {
				if (!overlay) {
					this.margin = D.height() > W.height() ? $('html').css('margin-right').replace("px", "") : false;
				}

				obj.locked = this.overlay.append( obj.wrap );
				obj.fixed  = false;
			}

			if (opts.showEarly === true) {
				this.beforeShow.apply(this, arguments);
			}
		},

		beforeShow : function(opts, obj) {
			var scrollV, scrollH;

			if (obj.locked) {
				if (this.margin !== false) {
					$('*').filter(function(){
						return ($(this).css('position') === 'fixed' && !$(this).hasClass("fancybox-overlay") && !$(this).hasClass("fancybox-wrap") );
					}).addClass('fancybox-margin');

					this.el.addClass('fancybox-margin');
				}

				scrollV = W.scrollTop();
				scrollH = W.scrollLeft();

				this.el.addClass('fancybox-lock');

				W.scrollTop( scrollV ).scrollLeft( scrollH );
			}

			this.open(opts);
		},

		onUpdate : function() {
			if (!this.fixed) {
				this.update();
			}
		},

		afterClose: function (opts) {
			// Remove overlay if exists and fancyBox is not opening
			// (e.g., it is not being open using afterClose callback)
			//if (this.overlay && !F.isActive) {
			if (this.overlay && !F.coming) {
				this.overlay.fadeOut(opts.speedOut, $.proxy( this.close, this ));
			}
		}
	};

	/*
	 *	Title helper
	 */

	F.helpers.title = {
		defaults : {
			type     : 'float', // 'float', 'inside', 'outside' or 'over',
			position : 'bottom' // 'top' or 'bottom'
		},

		beforeShow: function (opts) {
			var current = F.current,
				text    = current.title,
				type    = opts.type,
				title,
				target;

			if ($.isFunction(text)) {
				text = text.call(current.element, current);
			}

			if (!isString(text) || $.trim(text) === '') {
				return;
			}

			title = $('<div class="fancybox-title fancybox-title-' + type + '-wrap">' + text + '</div>');

			switch (type) {
				case 'inside':
					target = F.skin;
				break;

				case 'outside':
					target = F.wrap;
				break;

				case 'over':
					target = F.inner;
				break;

				default: // 'float'
					target = F.skin;

					title.appendTo('body');

					if (IE) {
						title.width( title.width() );
					}

					title.wrapInner('<span class="child"></span>');

					//Increase bottom margin so this title will also fit into viewport
					F.current.margin[2] += Math.abs( getScalar(title.css('margin-bottom')) );
				break;
			}

			title[ (opts.position === 'top' ? 'prependTo'  : 'appendTo') ](target);
		}
	};

	// jQuery plugin initialization
	$.fn.fancybox = function (options) {
		var index,
			that     = $(this),
			selector = this.selector || '',
			run      = function(e) {
				var what = $(this).blur(), idx = index, relType, relVal;

				if (!(e.ctrlKey || e.altKey || e.shiftKey || e.metaKey) && !what.is('.fancybox-wrap')) {
					relType = options.groupAttr || 'data-fancybox-group';
					relVal  = what.attr(relType);

					if (!relVal) {
						relType = 'rel';
						relVal  = what.get(0)[ relType ];
					}

					if (relVal && relVal !== '' && relVal !== 'nofollow') {
						what = selector.length ? $(selector) : that;
						what = what.filter('[' + relType + '="' + relVal + '"]');
						idx  = what.index(this);
					}

					options.index = idx;

					// Stop an event from bubbling if everything is fine
					if (F.open(what, options) !== false) {
						e.preventDefault();
					}
				}
			};

		options = options || {};
		index   = options.index || 0;

		if (!selector || options.live === false) {
			that.unbind('click.fb-start').bind('click.fb-start', run);

		} else {
			D.undelegate(selector, 'click.fb-start').delegate(selector + ":not('.fancybox-item, .fancybox-nav')", 'click.fb-start', run);
		}

		this.filter('[data-fancybox-start=1]').trigger('click');

		return this;
	};

	// Tests that need a body at doc ready
	D.ready(function() {
		var w1, w2;

		if ( $.scrollbarWidth === undefined ) {
			// http://benalman.com/projects/jquery-misc-plugins/#scrollbarwidth
			$.scrollbarWidth = function() {
				var parent = $('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo('body'),
					child  = parent.children(),
					width  = child.innerWidth() - child.height( 99 ).innerWidth();

				parent.remove();

				return width;
			};
		}

		if ( $.support.fixedPosition === undefined ) {
			$.support.fixedPosition = (function() {
				var elem  = $('<div style="position:fixed;top:20px;"></div>').appendTo('body'),
					fixed = ( elem[0].offsetTop === 20 || elem[0].offsetTop === 15 );

				elem.remove();

				return fixed;
			}());
		}

		$.extend(F.defaults, {
			scrollbarWidth : $.scrollbarWidth(),
			fixed  : $.support.fixedPosition,
			parent : $('body')
		});

		//Get real width of page scroll-bar
		w1 = $(window).width();

		H.addClass('fancybox-lock-test');

		w2 = $(window).width();

		H.removeClass('fancybox-lock-test');

		$("<style type='text/css'>.fancybox-margin{margin-right:" + (w2 - w1) + "px;}</style>").appendTo("head");
	});

}(window, document, jQuery));;
/*! fancyBox v2.1.5 fancyapps.com | fancyapps.com/fancybox/#license */
(function(r,G,f,v){var J=f("html"),n=f(r),p=f(G),b=f.fancybox=function(){b.open.apply(this,arguments)},I=navigator.userAgent.match(/msie/i),B=null,s=G.createTouch!==v,t=function(a){return a&&a.hasOwnProperty&&a instanceof f},q=function(a){return a&&"string"===f.type(a)},E=function(a){return q(a)&&0<a.indexOf("%")},l=function(a,d){var e=parseInt(a,10)||0;d&&E(a)&&(e*=b.getViewport()[d]/100);return Math.ceil(e)},w=function(a,b){return l(a,b)+"px"};f.extend(b,{version:"2.1.5",defaults:{padding:15,margin:20,
width:800,height:600,minWidth:100,minHeight:100,maxWidth:9999,maxHeight:9999,pixelRatio:1,autoSize:!0,autoHeight:!1,autoWidth:!1,autoResize:!0,autoCenter:!s,fitToView:!0,aspectRatio:!1,topRatio:0.5,leftRatio:0.5,scrolling:"auto",wrapCSS:"",arrows:!0,closeBtn:!0,closeClick:!1,nextClick:!1,mouseWheel:!0,autoPlay:!1,playSpeed:3E3,preload:3,modal:!1,loop:!0,ajax:{dataType:"html",headers:{"X-fancyBox":!0}},iframe:{scrolling:"auto",preload:!0},swf:{wmode:"transparent",allowfullscreen:"true",allowscriptaccess:"always"},
keys:{next:{13:"left",34:"up",39:"left",40:"up"},prev:{8:"right",33:"down",37:"right",38:"down"},close:[27],play:[32],toggle:[70]},direction:{next:"left",prev:"right"},scrollOutside:!0,index:0,type:null,href:null,content:null,title:null,tpl:{wrap:'<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',image:'<img class="fancybox-image" src="{href}" alt="" />',iframe:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen'+
(I?' allowtransparency="true"':"")+"></iframe>",error:'<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',closeBtn:'<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',next:'<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',prev:'<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'},openEffect:"fade",openSpeed:250,openEasing:"swing",openOpacity:!0,
openMethod:"zoomIn",closeEffect:"fade",closeSpeed:250,closeEasing:"swing",closeOpacity:!0,closeMethod:"zoomOut",nextEffect:"elastic",nextSpeed:250,nextEasing:"swing",nextMethod:"changeIn",prevEffect:"elastic",prevSpeed:250,prevEasing:"swing",prevMethod:"changeOut",helpers:{overlay:!0,title:!0},onCancel:f.noop,beforeLoad:f.noop,afterLoad:f.noop,beforeShow:f.noop,afterShow:f.noop,beforeChange:f.noop,beforeClose:f.noop,afterClose:f.noop},group:{},opts:{},previous:null,coming:null,current:null,isActive:!1,
isOpen:!1,isOpened:!1,wrap:null,skin:null,outer:null,inner:null,player:{timer:null,isActive:!1},ajaxLoad:null,imgPreload:null,transitions:{},helpers:{},open:function(a,d){if(a&&(f.isPlainObject(d)||(d={}),!1!==b.close(!0)))return f.isArray(a)||(a=t(a)?f(a).get():[a]),f.each(a,function(e,c){var k={},g,h,j,m,l;"object"===f.type(c)&&(c.nodeType&&(c=f(c)),t(c)?(k={href:c.data("fancybox-href")||c.attr("href"),title:c.data("fancybox-title")||c.attr("title"),isDom:!0,element:c},f.metadata&&f.extend(!0,k,
c.metadata())):k=c);g=d.href||k.href||(q(c)?c:null);h=d.title!==v?d.title:k.title||"";m=(j=d.content||k.content)?"html":d.type||k.type;!m&&k.isDom&&(m=c.data("fancybox-type"),m||(m=(m=c.prop("class").match(/fancybox\.(\w+)/))?m[1]:null));q(g)&&(m||(b.isImage(g)?m="image":b.isSWF(g)?m="swf":"#"===g.charAt(0)?m="inline":q(c)&&(m="html",j=c)),"ajax"===m&&(l=g.split(/\s+/,2),g=l.shift(),l=l.shift()));j||("inline"===m?g?j=f(q(g)?g.replace(/.*(?=#[^\s]+$)/,""):g):k.isDom&&(j=c):"html"===m?j=g:!m&&(!g&&
k.isDom)&&(m="inline",j=c));f.extend(k,{href:g,type:m,content:j,title:h,selector:l});a[e]=k}),b.opts=f.extend(!0,{},b.defaults,d),d.keys!==v&&(b.opts.keys=d.keys?f.extend({},b.defaults.keys,d.keys):!1),b.group=a,b._start(b.opts.index)},cancel:function(){var a=b.coming;a&&!1!==b.trigger("onCancel")&&(b.hideLoading(),b.ajaxLoad&&b.ajaxLoad.abort(),b.ajaxLoad=null,b.imgPreload&&(b.imgPreload.onload=b.imgPreload.onerror=null),a.wrap&&a.wrap.stop(!0,!0).trigger("onReset").remove(),b.coming=null,b.current||
b._afterZoomOut(a))},close:function(a){b.cancel();!1!==b.trigger("beforeClose")&&(b.unbindEvents(),b.isActive&&(!b.isOpen||!0===a?(f(".fancybox-wrap").stop(!0).trigger("onReset").remove(),b._afterZoomOut()):(b.isOpen=b.isOpened=!1,b.isClosing=!0,f(".fancybox-item, .fancybox-nav").remove(),b.wrap.stop(!0,!0).removeClass("fancybox-opened"),b.transitions[b.current.closeMethod]())))},play:function(a){var d=function(){clearTimeout(b.player.timer)},e=function(){d();b.current&&b.player.isActive&&(b.player.timer=
setTimeout(b.next,b.current.playSpeed))},c=function(){d();p.unbind(".player");b.player.isActive=!1;b.trigger("onPlayEnd")};if(!0===a||!b.player.isActive&&!1!==a){if(b.current&&(b.current.loop||b.current.index<b.group.length-1))b.player.isActive=!0,p.bind({"onCancel.player beforeClose.player":c,"onUpdate.player":e,"beforeLoad.player":d}),e(),b.trigger("onPlayStart")}else c()},next:function(a){var d=b.current;d&&(q(a)||(a=d.direction.next),b.jumpto(d.index+1,a,"next"))},prev:function(a){var d=b.current;
d&&(q(a)||(a=d.direction.prev),b.jumpto(d.index-1,a,"prev"))},jumpto:function(a,d,e){var c=b.current;c&&(a=l(a),b.direction=d||c.direction[a>=c.index?"next":"prev"],b.router=e||"jumpto",c.loop&&(0>a&&(a=c.group.length+a%c.group.length),a%=c.group.length),c.group[a]!==v&&(b.cancel(),b._start(a)))},reposition:function(a,d){var e=b.current,c=e?e.wrap:null,k;c&&(k=b._getPosition(d),a&&"scroll"===a.type?(delete k.position,c.stop(!0,!0).animate(k,200)):(c.css(k),e.pos=f.extend({},e.dim,k)))},update:function(a){var d=
a&&a.type,e=!d||"orientationchange"===d;e&&(clearTimeout(B),B=null);b.isOpen&&!B&&(B=setTimeout(function(){var c=b.current;c&&!b.isClosing&&(b.wrap.removeClass("fancybox-tmp"),(e||"load"===d||"resize"===d&&c.autoResize)&&b._setDimension(),"scroll"===d&&c.canShrink||b.reposition(a),b.trigger("onUpdate"),B=null)},e&&!s?0:300))},toggle:function(a){b.isOpen&&(b.current.fitToView="boolean"===f.type(a)?a:!b.current.fitToView,s&&(b.wrap.removeAttr("style").addClass("fancybox-tmp"),b.trigger("onUpdate")),
b.update())},hideLoading:function(){p.unbind(".loading");f("#fancybox-loading").remove()},showLoading:function(){var a,d;b.hideLoading();a=f('<div id="fancybox-loading"><div></div></div>').click(b.cancel).appendTo("body");p.bind("keydown.loading",function(a){if(27===(a.which||a.keyCode))a.preventDefault(),b.cancel()});b.defaults.fixed||(d=b.getViewport(),a.css({position:"absolute",top:0.5*d.h+d.y,left:0.5*d.w+d.x}))},getViewport:function(){var a=b.current&&b.current.locked||!1,d={x:n.scrollLeft(),
y:n.scrollTop()};a?(d.w=a[0].clientWidth,d.h=a[0].clientHeight):(d.w=s&&r.innerWidth?r.innerWidth:n.width(),d.h=s&&r.innerHeight?r.innerHeight:n.height());return d},unbindEvents:function(){b.wrap&&t(b.wrap)&&b.wrap.unbind(".fb");p.unbind(".fb");n.unbind(".fb")},bindEvents:function(){var a=b.current,d;a&&(n.bind("orientationchange.fb"+(s?"":" resize.fb")+(a.autoCenter&&!a.locked?" scroll.fb":""),b.update),(d=a.keys)&&p.bind("keydown.fb",function(e){var c=e.which||e.keyCode,k=e.target||e.srcElement;
if(27===c&&b.coming)return!1;!e.ctrlKey&&(!e.altKey&&!e.shiftKey&&!e.metaKey&&(!k||!k.type&&!f(k).is("[contenteditable]")))&&f.each(d,function(d,k){if(1<a.group.length&&k[c]!==v)return b[d](k[c]),e.preventDefault(),!1;if(-1<f.inArray(c,k))return b[d](),e.preventDefault(),!1})}),f.fn.mousewheel&&a.mouseWheel&&b.wrap.bind("mousewheel.fb",function(d,c,k,g){for(var h=f(d.target||null),j=!1;h.length&&!j&&!h.is(".fancybox-skin")&&!h.is(".fancybox-wrap");)j=h[0]&&!(h[0].style.overflow&&"hidden"===h[0].style.overflow)&&
(h[0].clientWidth&&h[0].scrollWidth>h[0].clientWidth||h[0].clientHeight&&h[0].scrollHeight>h[0].clientHeight),h=f(h).parent();if(0!==c&&!j&&1<b.group.length&&!a.canShrink){if(0<g||0<k)b.prev(0<g?"down":"left");else if(0>g||0>k)b.next(0>g?"up":"right");d.preventDefault()}}))},trigger:function(a,d){var e,c=d||b.coming||b.current;if(c){f.isFunction(c[a])&&(e=c[a].apply(c,Array.prototype.slice.call(arguments,1)));if(!1===e)return!1;c.helpers&&f.each(c.helpers,function(d,e){if(e&&b.helpers[d]&&f.isFunction(b.helpers[d][a]))b.helpers[d][a](f.extend(!0,
{},b.helpers[d].defaults,e),c)});p.trigger(a)}},isImage:function(a){return q(a)&&a.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)},isSWF:function(a){return q(a)&&a.match(/\.(swf)((\?|#).*)?$/i)},_start:function(a){var d={},e,c;a=l(a);e=b.group[a]||null;if(!e)return!1;d=f.extend(!0,{},b.opts,e);e=d.margin;c=d.padding;"number"===f.type(e)&&(d.margin=[e,e,e,e]);"number"===f.type(c)&&(d.padding=[c,c,c,c]);d.modal&&f.extend(!0,d,{closeBtn:!1,closeClick:!1,nextClick:!1,arrows:!1,
mouseWheel:!1,keys:null,helpers:{overlay:{closeClick:!1}}});d.autoSize&&(d.autoWidth=d.autoHeight=!0);"auto"===d.width&&(d.autoWidth=!0);"auto"===d.height&&(d.autoHeight=!0);d.group=b.group;d.index=a;b.coming=d;if(!1===b.trigger("beforeLoad"))b.coming=null;else{c=d.type;e=d.href;if(!c)return b.coming=null,b.current&&b.router&&"jumpto"!==b.router?(b.current.index=a,b[b.router](b.direction)):!1;b.isActive=!0;if("image"===c||"swf"===c)d.autoHeight=d.autoWidth=!1,d.scrolling="visible";"image"===c&&(d.aspectRatio=
!0);"iframe"===c&&s&&(d.scrolling="scroll");d.wrap=f(d.tpl.wrap).addClass("fancybox-"+(s?"mobile":"desktop")+" fancybox-type-"+c+" fancybox-tmp "+d.wrapCSS).appendTo(d.parent||"body");f.extend(d,{skin:f(".fancybox-skin",d.wrap),outer:f(".fancybox-outer",d.wrap),inner:f(".fancybox-inner",d.wrap)});f.each(["Top","Right","Bottom","Left"],function(a,b){d.skin.css("padding"+b,w(d.padding[a]))});b.trigger("onReady");if("inline"===c||"html"===c){if(!d.content||!d.content.length)return b._error("content")}else if(!e)return b._error("href");
"image"===c?b._loadImage():"ajax"===c?b._loadAjax():"iframe"===c?b._loadIframe():b._afterLoad()}},_error:function(a){f.extend(b.coming,{type:"html",autoWidth:!0,autoHeight:!0,minWidth:0,minHeight:0,scrolling:"no",hasError:a,content:b.coming.tpl.error});b._afterLoad()},_loadImage:function(){var a=b.imgPreload=new Image;a.onload=function(){this.onload=this.onerror=null;b.coming.width=this.width/b.opts.pixelRatio;b.coming.height=this.height/b.opts.pixelRatio;b._afterLoad()};a.onerror=function(){this.onload=
this.onerror=null;b._error("image")};a.src=b.coming.href;!0!==a.complete&&b.showLoading()},_loadAjax:function(){var a=b.coming;b.showLoading();b.ajaxLoad=f.ajax(f.extend({},a.ajax,{url:a.href,error:function(a,e){b.coming&&"abort"!==e?b._error("ajax",a):b.hideLoading()},success:function(d,e){"success"===e&&(a.content=d,b._afterLoad())}}))},_loadIframe:function(){var a=b.coming,d=f(a.tpl.iframe.replace(/\{rnd\}/g,(new Date).getTime())).attr("scrolling",s?"auto":a.iframe.scrolling).attr("src",a.href);
f(a.wrap).bind("onReset",function(){try{f(this).find("iframe").hide().attr("src","//about:blank").end().empty()}catch(a){}});a.iframe.preload&&(b.showLoading(),d.one("load",function(){f(this).data("ready",1);s||f(this).bind("load.fb",b.update);f(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show();b._afterLoad()}));a.content=d.appendTo(a.inner);a.iframe.preload||b._afterLoad()},_preloadImages:function(){var a=b.group,d=b.current,e=a.length,c=d.preload?Math.min(d.preload,
e-1):0,f,g;for(g=1;g<=c;g+=1)f=a[(d.index+g)%e],"image"===f.type&&f.href&&((new Image).src=f.href)},_afterLoad:function(){var a=b.coming,d=b.current,e,c,k,g,h;b.hideLoading();if(a&&!1!==b.isActive)if(!1===b.trigger("afterLoad",a,d))a.wrap.stop(!0).trigger("onReset").remove(),b.coming=null;else{d&&(b.trigger("beforeChange",d),d.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove());b.unbindEvents();e=a.content;c=a.type;k=a.scrolling;f.extend(b,{wrap:a.wrap,skin:a.skin,
outer:a.outer,inner:a.inner,current:a,previous:d});g=a.href;switch(c){case "inline":case "ajax":case "html":a.selector?e=f("<div>").html(e).find(a.selector):t(e)&&(e.data("fancybox-placeholder")||e.data("fancybox-placeholder",f('<div class="fancybox-placeholder"></div>').insertAfter(e).hide()),e=e.show().detach(),a.wrap.bind("onReset",function(){f(this).find(e).length&&e.hide().replaceAll(e.data("fancybox-placeholder")).data("fancybox-placeholder",!1)}));break;case "image":e=a.tpl.image.replace("{href}",
g);break;case "swf":e='<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="'+g+'"></param>',h="",f.each(a.swf,function(a,b){e+='<param name="'+a+'" value="'+b+'"></param>';h+=" "+a+'="'+b+'"'}),e+='<embed src="'+g+'" type="application/x-shockwave-flash" width="100%" height="100%"'+h+"></embed></object>"}(!t(e)||!e.parent().is(a.inner))&&a.inner.append(e);b.trigger("beforeShow");a.inner.css("overflow","yes"===k?"scroll":
"no"===k?"hidden":k);b._setDimension();b.reposition();b.isOpen=!1;b.coming=null;b.bindEvents();if(b.isOpened){if(d.prevMethod)b.transitions[d.prevMethod]()}else f(".fancybox-wrap").not(a.wrap).stop(!0).trigger("onReset").remove();b.transitions[b.isOpened?a.nextMethod:a.openMethod]();b._preloadImages()}},_setDimension:function(){var a=b.getViewport(),d=0,e=!1,c=!1,e=b.wrap,k=b.skin,g=b.inner,h=b.current,c=h.width,j=h.height,m=h.minWidth,u=h.minHeight,n=h.maxWidth,p=h.maxHeight,s=h.scrolling,q=h.scrollOutside?
h.scrollbarWidth:0,x=h.margin,y=l(x[1]+x[3]),r=l(x[0]+x[2]),v,z,t,C,A,F,B,D,H;e.add(k).add(g).width("auto").height("auto").removeClass("fancybox-tmp");x=l(k.outerWidth(!0)-k.width());v=l(k.outerHeight(!0)-k.height());z=y+x;t=r+v;C=E(c)?(a.w-z)*l(c)/100:c;A=E(j)?(a.h-t)*l(j)/100:j;if("iframe"===h.type){if(H=h.content,h.autoHeight&&1===H.data("ready"))try{H[0].contentWindow.document.location&&(g.width(C).height(9999),F=H.contents().find("body"),q&&F.css("overflow-x","hidden"),A=F.outerHeight(!0))}catch(G){}}else if(h.autoWidth||
h.autoHeight)g.addClass("fancybox-tmp"),h.autoWidth||g.width(C),h.autoHeight||g.height(A),h.autoWidth&&(C=g.width()),h.autoHeight&&(A=g.height()),g.removeClass("fancybox-tmp");c=l(C);j=l(A);D=C/A;m=l(E(m)?l(m,"w")-z:m);n=l(E(n)?l(n,"w")-z:n);u=l(E(u)?l(u,"h")-t:u);p=l(E(p)?l(p,"h")-t:p);F=n;B=p;h.fitToView&&(n=Math.min(a.w-z,n),p=Math.min(a.h-t,p));z=a.w-y;r=a.h-r;h.aspectRatio?(c>n&&(c=n,j=l(c/D)),j>p&&(j=p,c=l(j*D)),c<m&&(c=m,j=l(c/D)),j<u&&(j=u,c=l(j*D))):(c=Math.max(m,Math.min(c,n)),h.autoHeight&&
"iframe"!==h.type&&(g.width(c),j=g.height()),j=Math.max(u,Math.min(j,p)));if(h.fitToView)if(g.width(c).height(j),e.width(c+x),a=e.width(),y=e.height(),h.aspectRatio)for(;(a>z||y>r)&&(c>m&&j>u)&&!(19<d++);)j=Math.max(u,Math.min(p,j-10)),c=l(j*D),c<m&&(c=m,j=l(c/D)),c>n&&(c=n,j=l(c/D)),g.width(c).height(j),e.width(c+x),a=e.width(),y=e.height();else c=Math.max(m,Math.min(c,c-(a-z))),j=Math.max(u,Math.min(j,j-(y-r)));q&&("auto"===s&&j<A&&c+x+q<z)&&(c+=q);g.width(c).height(j);e.width(c+x);a=e.width();
y=e.height();e=(a>z||y>r)&&c>m&&j>u;c=h.aspectRatio?c<F&&j<B&&c<C&&j<A:(c<F||j<B)&&(c<C||j<A);f.extend(h,{dim:{width:w(a),height:w(y)},origWidth:C,origHeight:A,canShrink:e,canExpand:c,wPadding:x,hPadding:v,wrapSpace:y-k.outerHeight(!0),skinSpace:k.height()-j});!H&&(h.autoHeight&&j>u&&j<p&&!c)&&g.height("auto")},_getPosition:function(a){var d=b.current,e=b.getViewport(),c=d.margin,f=b.wrap.width()+c[1]+c[3],g=b.wrap.height()+c[0]+c[2],c={position:"absolute",top:c[0],left:c[3]};d.autoCenter&&d.fixed&&
!a&&g<=e.h&&f<=e.w?c.position="fixed":d.locked||(c.top+=e.y,c.left+=e.x);c.top=w(Math.max(c.top,c.top+(e.h-g)*d.topRatio));c.left=w(Math.max(c.left,c.left+(e.w-f)*d.leftRatio));return c},_afterZoomIn:function(){var a=b.current;a&&(b.isOpen=b.isOpened=!0,b.wrap.css("overflow","visible").addClass("fancybox-opened"),b.update(),(a.closeClick||a.nextClick&&1<b.group.length)&&b.inner.css("cursor","pointer").bind("click.fb",function(d){!f(d.target).is("a")&&!f(d.target).parent().is("a")&&(d.preventDefault(),
b[a.closeClick?"close":"next"]())}),a.closeBtn&&f(a.tpl.closeBtn).appendTo(b.skin).bind("click.fb",function(a){a.preventDefault();b.close()}),a.arrows&&1<b.group.length&&((a.loop||0<a.index)&&f(a.tpl.prev).appendTo(b.outer).bind("click.fb",b.prev),(a.loop||a.index<b.group.length-1)&&f(a.tpl.next).appendTo(b.outer).bind("click.fb",b.next)),b.trigger("afterShow"),!a.loop&&a.index===a.group.length-1?b.play(!1):b.opts.autoPlay&&!b.player.isActive&&(b.opts.autoPlay=!1,b.play()))},_afterZoomOut:function(a){a=
a||b.current;f(".fancybox-wrap").trigger("onReset").remove();f.extend(b,{group:{},opts:{},router:!1,current:null,isActive:!1,isOpened:!1,isOpen:!1,isClosing:!1,wrap:null,skin:null,outer:null,inner:null});b.trigger("afterClose",a)}});b.transitions={getOrigPosition:function(){var a=b.current,d=a.element,e=a.orig,c={},f=50,g=50,h=a.hPadding,j=a.wPadding,m=b.getViewport();!e&&(a.isDom&&d.is(":visible"))&&(e=d.find("img:first"),e.length||(e=d));t(e)?(c=e.offset(),e.is("img")&&(f=e.outerWidth(),g=e.outerHeight())):
(c.top=m.y+(m.h-g)*a.topRatio,c.left=m.x+(m.w-f)*a.leftRatio);if("fixed"===b.wrap.css("position")||a.locked)c.top-=m.y,c.left-=m.x;return c={top:w(c.top-h*a.topRatio),left:w(c.left-j*a.leftRatio),width:w(f+j),height:w(g+h)}},step:function(a,d){var e,c,f=d.prop;c=b.current;var g=c.wrapSpace,h=c.skinSpace;if("width"===f||"height"===f)e=d.end===d.start?1:(a-d.start)/(d.end-d.start),b.isClosing&&(e=1-e),c="width"===f?c.wPadding:c.hPadding,c=a-c,b.skin[f](l("width"===f?c:c-g*e)),b.inner[f](l("width"===
f?c:c-g*e-h*e))},zoomIn:function(){var a=b.current,d=a.pos,e=a.openEffect,c="elastic"===e,k=f.extend({opacity:1},d);delete k.position;c?(d=this.getOrigPosition(),a.openOpacity&&(d.opacity=0.1)):"fade"===e&&(d.opacity=0.1);b.wrap.css(d).animate(k,{duration:"none"===e?0:a.openSpeed,easing:a.openEasing,step:c?this.step:null,complete:b._afterZoomIn})},zoomOut:function(){var a=b.current,d=a.closeEffect,e="elastic"===d,c={opacity:0.1};e&&(c=this.getOrigPosition(),a.closeOpacity&&(c.opacity=0.1));b.wrap.animate(c,
{duration:"none"===d?0:a.closeSpeed,easing:a.closeEasing,step:e?this.step:null,complete:b._afterZoomOut})},changeIn:function(){var a=b.current,d=a.nextEffect,e=a.pos,c={opacity:1},f=b.direction,g;e.opacity=0.1;"elastic"===d&&(g="down"===f||"up"===f?"top":"left","down"===f||"right"===f?(e[g]=w(l(e[g])-200),c[g]="+=200px"):(e[g]=w(l(e[g])+200),c[g]="-=200px"));"none"===d?b._afterZoomIn():b.wrap.css(e).animate(c,{duration:a.nextSpeed,easing:a.nextEasing,complete:b._afterZoomIn})},changeOut:function(){var a=
b.previous,d=a.prevEffect,e={opacity:0.1},c=b.direction;"elastic"===d&&(e["down"===c||"up"===c?"top":"left"]=("up"===c||"left"===c?"-":"+")+"=200px");a.wrap.animate(e,{duration:"none"===d?0:a.prevSpeed,easing:a.prevEasing,complete:function(){f(this).trigger("onReset").remove()}})}};b.helpers.overlay={defaults:{closeClick:!0,speedOut:200,showEarly:!0,css:{},locked:!s,fixed:!0},overlay:null,fixed:!1,el:f("html"),create:function(a){a=f.extend({},this.defaults,a);this.overlay&&this.close();this.overlay=
f('<div class="fancybox-overlay"></div>').appendTo(b.coming?b.coming.parent:a.parent);this.fixed=!1;a.fixed&&b.defaults.fixed&&(this.overlay.addClass("fancybox-overlay-fixed"),this.fixed=!0)},open:function(a){var d=this;a=f.extend({},this.defaults,a);this.overlay?this.overlay.unbind(".overlay").width("auto").height("auto"):this.create(a);this.fixed||(n.bind("resize.overlay",f.proxy(this.update,this)),this.update());a.closeClick&&this.overlay.bind("click.overlay",function(a){if(f(a.target).hasClass("fancybox-overlay"))return b.isActive?
b.close():d.close(),!1});this.overlay.css(a.css).show()},close:function(){var a,b;n.unbind("resize.overlay");this.el.hasClass("fancybox-lock")&&(f(".fancybox-margin").removeClass("fancybox-margin"),a=n.scrollTop(),b=n.scrollLeft(),this.el.removeClass("fancybox-lock"),n.scrollTop(a).scrollLeft(b));f(".fancybox-overlay").remove().hide();f.extend(this,{overlay:null,fixed:!1})},update:function(){var a="100%",b;this.overlay.width(a).height("100%");I?(b=Math.max(G.documentElement.offsetWidth,G.body.offsetWidth),
p.width()>b&&(a=p.width())):p.width()>n.width()&&(a=p.width());this.overlay.width(a).height(p.height())},onReady:function(a,b){var e=this.overlay;f(".fancybox-overlay").stop(!0,!0);e||this.create(a);a.locked&&(this.fixed&&b.fixed)&&(e||(this.margin=p.height()>n.height()?f("html").css("margin-right").replace("px",""):!1),b.locked=this.overlay.append(b.wrap),b.fixed=!1);!0===a.showEarly&&this.beforeShow.apply(this,arguments)},beforeShow:function(a,b){var e,c;b.locked&&(!1!==this.margin&&(f("*").filter(function(){return"fixed"===
f(this).css("position")&&!f(this).hasClass("fancybox-overlay")&&!f(this).hasClass("fancybox-wrap")}).addClass("fancybox-margin"),this.el.addClass("fancybox-margin")),e=n.scrollTop(),c=n.scrollLeft(),this.el.addClass("fancybox-lock"),n.scrollTop(e).scrollLeft(c));this.open(a)},onUpdate:function(){this.fixed||this.update()},afterClose:function(a){this.overlay&&!b.coming&&this.overlay.fadeOut(a.speedOut,f.proxy(this.close,this))}};b.helpers.title={defaults:{type:"float",position:"bottom"},beforeShow:function(a){var d=
b.current,e=d.title,c=a.type;f.isFunction(e)&&(e=e.call(d.element,d));if(q(e)&&""!==f.trim(e)){d=f('<div class="fancybox-title fancybox-title-'+c+'-wrap">'+e+"</div>");switch(c){case "inside":c=b.skin;break;case "outside":c=b.wrap;break;case "over":c=b.inner;break;default:c=b.skin,d.appendTo("body"),I&&d.width(d.width()),d.wrapInner('<span class="child"></span>'),b.current.margin[2]+=Math.abs(l(d.css("margin-bottom")))}d["top"===a.position?"prependTo":"appendTo"](c)}}};f.fn.fancybox=function(a){var d,
e=f(this),c=this.selector||"",k=function(g){var h=f(this).blur(),j=d,k,l;!g.ctrlKey&&(!g.altKey&&!g.shiftKey&&!g.metaKey)&&!h.is(".fancybox-wrap")&&(k=a.groupAttr||"data-fancybox-group",l=h.attr(k),l||(k="rel",l=h.get(0)[k]),l&&(""!==l&&"nofollow"!==l)&&(h=c.length?f(c):e,h=h.filter("["+k+'="'+l+'"]'),j=h.index(this)),a.index=j,!1!==b.open(h,a)&&g.preventDefault())};a=a||{};d=a.index||0;!c||!1===a.live?e.unbind("click.fb-start").bind("click.fb-start",k):p.undelegate(c,"click.fb-start").delegate(c+
":not('.fancybox-item, .fancybox-nav')","click.fb-start",k);this.filter("[data-fancybox-start=1]").trigger("click");return this};p.ready(function(){var a,d;f.scrollbarWidth===v&&(f.scrollbarWidth=function(){var a=f('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),b=a.children(),b=b.innerWidth()-b.height(99).innerWidth();a.remove();return b});if(f.support.fixedPosition===v){a=f.support;d=f('<div style="position:fixed;top:20px;"></div>').appendTo("body");var e=20===
d[0].offsetTop||15===d[0].offsetTop;d.remove();a.fixedPosition=e}f.extend(b.defaults,{scrollbarWidth:f.scrollbarWidth(),fixed:f.support.fixedPosition,parent:f("body")});a=f(r).width();J.addClass("fancybox-lock-test");d=f(r).width();J.removeClass("fancybox-lock-test");f("<style type='text/css'>.fancybox-margin{margin-right:"+(d-a)+"px;}</style>").appendTo("head")})})(window,document,jQuery);;
/*!
 * justifiedGallery - v3.8.1
 * http://miromannino.github.io/Justified-Gallery/
 * Copyright (c) 2020 Miro Mannino
 * Licensed under the MIT license.
 */

!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof module&&module.exports?module.exports=function(t,i){return void 0===i&&(i="undefined"!=typeof window?require("jquery"):require("jquery")(t)),e(i),i}:e(jQuery)}(function(l){var r=function(t,i){this.settings=i,this.checkSettings(),this.imgAnalyzerTimeout=null,this.entries=null,this.buildingRow={entriesBuff:[],width:0,height:0,aspectRatio:0},this.lastFetchedEntry=null,this.lastAnalyzedIndex=-1,this.yield={every:2,flushed:0},this.border=0<=i.border?i.border:i.margins,this.maxRowHeight=this.retrieveMaxRowHeight(),this.suffixRanges=this.retrieveSuffixRanges(),this.offY=this.border,this.rows=0,this.spinner={phase:0,timeSlot:150,$el:l('<div class="jg-spinner"><span></span><span></span><span></span></div>'),intervalId:null},this.scrollBarOn=!1,this.checkWidthIntervalId=null,this.galleryWidth=t.width(),this.$gallery=t};r.prototype.getSuffix=function(t,i){var e,s;for(e=i<t?t:i,s=0;s<this.suffixRanges.length;s++)if(e<=this.suffixRanges[s])return this.settings.sizeRangeSuffixes[this.suffixRanges[s]];return this.settings.sizeRangeSuffixes[this.suffixRanges[s-1]]},r.prototype.removeSuffix=function(t,i){return t.substring(0,t.length-i.length)},r.prototype.endsWith=function(t,i){return-1!==t.indexOf(i,t.length-i.length)},r.prototype.getUsedSuffix=function(t){for(var i in this.settings.sizeRangeSuffixes)if(this.settings.sizeRangeSuffixes.hasOwnProperty(i)){if(0===this.settings.sizeRangeSuffixes[i].length)continue;if(this.endsWith(t,this.settings.sizeRangeSuffixes[i]))return this.settings.sizeRangeSuffixes[i]}return""},r.prototype.newSrc=function(t,i,e,s){var n;if(this.settings.thumbnailPath)n=this.settings.thumbnailPath(t,i,e,s);else{var r=t.match(this.settings.extension),o=null!==r?r[0]:"";n=t.replace(this.settings.extension,""),n=this.removeSuffix(n,this.getUsedSuffix(n)),n+=this.getSuffix(i,e)+o}return n},r.prototype.showImg=function(t,i){this.settings.cssAnimation?(t.addClass("jg-entry-visible"),i&&i()):(t.stop().fadeTo(this.settings.imagesAnimationDuration,1,i),t.find(this.settings.imgSelector).stop().fadeTo(this.settings.imagesAnimationDuration,1,i))},r.prototype.extractImgSrcFromImage=function(t){var i=t.data("safe-src"),e="data-safe-src";return void 0===i&&(i=t.attr("src"),e="src"),t.data("jg.originalSrc",i),t.data("jg.src",i),t.data("jg.originalSrcLoc",e),i},r.prototype.imgFromEntry=function(t){var i=t.find(this.settings.imgSelector);return 0===i.length?null:i},r.prototype.captionFromEntry=function(t){var i=t.find("> .jg-caption");return 0===i.length?null:i},r.prototype.displayEntry=function(t,i,e,s,n,r){t.width(s),t.height(r),t.css("top",e),t.css("left",i);var o=this.imgFromEntry(t);if(null!==o){o.css("width",s),o.css("height",n),o.css("margin-left",-s/2),o.css("margin-top",-n/2);var a=o.data("jg.src");if(a){a=this.newSrc(a,s,n,o[0]),o.one("error",function(){this.resetImgSrc(o)});var h=function(){o.attr("src",a)};"skipped"===t.data("jg.loaded")&&a?this.onImageEvent(a,function(){this.showImg(t,h),t.data("jg.loaded",!0)}.bind(this)):this.showImg(t,h)}}else this.showImg(t);this.displayEntryCaption(t)},r.prototype.displayEntryCaption=function(t){var i=this.imgFromEntry(t);if(null!==i&&this.settings.captions){var e=this.captionFromEntry(t);if(null===e){var s=i.attr("alt");this.isValidCaption(s)||(s=t.attr("title")),this.isValidCaption(s)&&(e=l('<div class="jg-caption">'+s+"</div>"),t.append(e),t.data("jg.createdCaption",!0))}null!==e&&(this.settings.cssAnimation||e.stop().fadeTo(0,this.settings.captionSettings.nonVisibleOpacity),this.addCaptionEventsHandlers(t))}else this.removeCaptionEventsHandlers(t)},r.prototype.isValidCaption=function(t){return void 0!==t&&0<t.length},r.prototype.onEntryMouseEnterForCaption=function(t){var i=this.captionFromEntry(l(t.currentTarget));this.settings.cssAnimation?i.addClass("jg-caption-visible").removeClass("jg-caption-hidden"):i.stop().fadeTo(this.settings.captionSettings.animationDuration,this.settings.captionSettings.visibleOpacity)},r.prototype.onEntryMouseLeaveForCaption=function(t){var i=this.captionFromEntry(l(t.currentTarget));this.settings.cssAnimation?i.removeClass("jg-caption-visible").removeClass("jg-caption-hidden"):i.stop().fadeTo(this.settings.captionSettings.animationDuration,this.settings.captionSettings.nonVisibleOpacity)},r.prototype.addCaptionEventsHandlers=function(t){var i=t.data("jg.captionMouseEvents");void 0===i&&(i={mouseenter:l.proxy(this.onEntryMouseEnterForCaption,this),mouseleave:l.proxy(this.onEntryMouseLeaveForCaption,this)},t.on("mouseenter",void 0,void 0,i.mouseenter),t.on("mouseleave",void 0,void 0,i.mouseleave),t.data("jg.captionMouseEvents",i))},r.prototype.removeCaptionEventsHandlers=function(t){var i=t.data("jg.captionMouseEvents");void 0!==i&&(t.off("mouseenter",void 0,i.mouseenter),t.off("mouseleave",void 0,i.mouseleave),t.removeData("jg.captionMouseEvents"))},r.prototype.clearBuildingRow=function(){this.buildingRow.entriesBuff=[],this.buildingRow.aspectRatio=0,this.buildingRow.width=0},r.prototype.prepareBuildingRow=function(t,i){var e,s,n,r,o,a=!0,h=0,g=this.galleryWidth-2*this.border-(this.buildingRow.entriesBuff.length-1)*this.settings.margins,l=g/this.buildingRow.aspectRatio,u=this.settings.rowHeight,d=this.buildingRow.width/g>this.settings.justifyThreshold;if(i||t&&"hide"===this.settings.lastRow&&!d){for(e=0;e<this.buildingRow.entriesBuff.length;e++)s=this.buildingRow.entriesBuff[e],this.settings.cssAnimation?s.removeClass("jg-entry-visible"):(s.stop().fadeTo(0,.1),s.find("> img, > a > img").fadeTo(0,0));return-1}for(t&&!d&&"justify"!==this.settings.lastRow&&"hide"!==this.settings.lastRow&&(a=!1,0<this.rows&&(a=(u=(this.offY-this.border-this.settings.margins*this.rows)/this.rows)*this.buildingRow.aspectRatio/g>this.settings.justifyThreshold)),e=0;e<this.buildingRow.entriesBuff.length;e++)n=(s=this.buildingRow.entriesBuff[e]).data("jg.width")/s.data("jg.height"),o=a?(r=e===this.buildingRow.entriesBuff.length-1?g:l*n,l):(r=u*n,u),g-=Math.round(r),s.data("jg.jwidth",Math.round(r)),s.data("jg.jheight",Math.ceil(o)),(0===e||o<h)&&(h=o);return this.buildingRow.height=h,a},r.prototype.flushRow=function(t,i){var e,s,n,r=this.settings,o=this.border;if(s=this.prepareBuildingRow(t,i),i||t&&"hide"===r.lastRow&&-1===s)this.clearBuildingRow();else{if(this.maxRowHeight&&this.maxRowHeight<this.buildingRow.height&&(this.buildingRow.height=this.maxRowHeight),t&&("center"===r.lastRow||"right"===r.lastRow)){var a=this.galleryWidth-2*this.border-(this.buildingRow.entriesBuff.length-1)*r.margins;for(n=0;n<this.buildingRow.entriesBuff.length;n++)a-=(e=this.buildingRow.entriesBuff[n]).data("jg.jwidth");"center"===r.lastRow?o+=Math.round(a/2):"right"===r.lastRow&&(o+=a)}var h=this.buildingRow.entriesBuff.length-1;for(n=0;n<=h;n++)e=this.buildingRow.entriesBuff[this.settings.rtl?h-n:n],this.displayEntry(e,o,this.offY,e.data("jg.jwidth"),e.data("jg.jheight"),this.buildingRow.height),o+=e.data("jg.jwidth")+r.margins;this.galleryHeightToSet=this.offY+this.buildingRow.height+this.border,this.setGalleryTempHeight(this.galleryHeightToSet+this.getSpinnerHeight()),(!t||this.buildingRow.height<=r.rowHeight&&s)&&(this.offY+=this.buildingRow.height+r.margins,this.rows+=1,this.clearBuildingRow(),this.settings.triggerEvent.call(this,"jg.rowflush"))}};var i=0;r.prototype.rememberGalleryHeight=function(){i=this.$gallery.height(),this.$gallery.height(i)},r.prototype.setGalleryTempHeight=function(t){i=Math.max(t,i),this.$gallery.height(i)},r.prototype.setGalleryFinalHeight=function(t){i=t,this.$gallery.height(t)},r.prototype.checkWidth=function(){this.checkWidthIntervalId=setInterval(l.proxy(function(){if(this.$gallery.is(":visible")){var t=parseFloat(this.$gallery.width());Math.abs(t-this.galleryWidth)>this.settings.refreshSensitivity&&(this.galleryWidth=t,this.rewind(),this.rememberGalleryHeight(),this.startImgAnalyzer(!0))}},this),this.settings.refreshTime)},r.prototype.isSpinnerActive=function(){return null!==this.spinner.intervalId},r.prototype.getSpinnerHeight=function(){return this.spinner.$el.innerHeight()},r.prototype.stopLoadingSpinnerAnimation=function(){clearInterval(this.spinner.intervalId),this.spinner.intervalId=null,this.setGalleryTempHeight(this.$gallery.height()-this.getSpinnerHeight()),this.spinner.$el.detach()},r.prototype.startLoadingSpinnerAnimation=function(){var t=this.spinner,i=t.$el.find("span");clearInterval(t.intervalId),this.$gallery.append(t.$el),this.setGalleryTempHeight(this.offY+this.buildingRow.height+this.getSpinnerHeight()),t.intervalId=setInterval(function(){t.phase<i.length?i.eq(t.phase).fadeTo(t.timeSlot,1):i.eq(t.phase-i.length).fadeTo(t.timeSlot,0),t.phase=(t.phase+1)%(2*i.length)},t.timeSlot)},r.prototype.rewind=function(){this.lastFetchedEntry=null,this.lastAnalyzedIndex=-1,this.offY=this.border,this.rows=0,this.clearBuildingRow()},r.prototype.getSelectorWithoutSpinner=function(){return this.settings.selector+", div:not(.jg-spinner)"},r.prototype.getAllEntries=function(){var t=this.getSelectorWithoutSpinner();return this.$gallery.children(t).toArray()},r.prototype.updateEntries=function(t){var i;if(t&&null!=this.lastFetchedEntry){var e=this.getSelectorWithoutSpinner();i=l(this.lastFetchedEntry).nextAll(e).toArray()}else this.entries=[],i=this.getAllEntries();return 0<i.length&&(l.isFunction(this.settings.sort)?i=this.sortArray(i):this.settings.randomize&&(i=this.shuffleArray(i)),this.lastFetchedEntry=i[i.length-1],this.settings.filter?i=this.filterArray(i):this.resetFilters(i)),this.entries=this.entries.concat(i),!0},r.prototype.insertToGallery=function(t){var i=this;l.each(t,function(){l(this).appendTo(i.$gallery)})},r.prototype.shuffleArray=function(t){var i,e,s;for(i=t.length-1;0<i;i--)e=Math.floor(Math.random()*(i+1)),s=t[i],t[i]=t[e],t[e]=s;return this.insertToGallery(t),t},r.prototype.sortArray=function(t){return t.sort(this.settings.sort),this.insertToGallery(t),t},r.prototype.resetFilters=function(t){for(var i=0;i<t.length;i++)l(t[i]).removeClass("jg-filtered")},r.prototype.filterArray=function(t){var e=this.settings;if("string"===l.type(e.filter))return t.filter(function(t){var i=l(t);return i.is(e.filter)?(i.removeClass("jg-filtered"),!0):(i.addClass("jg-filtered").removeClass("jg-visible"),!1)});if(l.isFunction(e.filter)){for(var i=t.filter(e.filter),s=0;s<t.length;s++)-1===i.indexOf(t[s])?l(t[s]).addClass("jg-filtered").removeClass("jg-visible"):l(t[s]).removeClass("jg-filtered");return i}},r.prototype.resetImgSrc=function(t){"src"===t.data("jg.originalSrcLoc")?t.attr("src",t.data("jg.originalSrc")):t.attr("src","")},r.prototype.destroy=function(){clearInterval(this.checkWidthIntervalId),this.stopImgAnalyzerStarter(),l.each(this.getAllEntries(),l.proxy(function(t,i){var e=l(i);e.css("width",""),e.css("height",""),e.css("top",""),e.css("left",""),e.data("jg.loaded",void 0),e.removeClass("jg-entry jg-filtered jg-entry-visible");var s=this.imgFromEntry(e);s&&(s.css("width",""),s.css("height",""),s.css("margin-left",""),s.css("margin-top",""),this.resetImgSrc(s),s.data("jg.originalSrc",void 0),s.data("jg.originalSrcLoc",void 0),s.data("jg.src",void 0)),this.removeCaptionEventsHandlers(e);var n=this.captionFromEntry(e);e.data("jg.createdCaption")?(e.data("jg.createdCaption",void 0),null!==n&&n.remove()):null!==n&&n.fadeTo(0,1)},this)),this.$gallery.css("height",""),this.$gallery.removeClass("justified-gallery"),this.$gallery.data("jg.controller",void 0),this.settings.triggerEvent.call(this,"jg.destroy")},r.prototype.analyzeImages=function(t){for(var i=this.lastAnalyzedIndex+1;i<this.entries.length;i++){var e=l(this.entries[i]);if(!0===e.data("jg.loaded")||"skipped"===e.data("jg.loaded")){var s=this.galleryWidth-2*this.border-(this.buildingRow.entriesBuff.length-1)*this.settings.margins,n=e.data("jg.width")/e.data("jg.height");if(this.buildingRow.entriesBuff.push(e),this.buildingRow.aspectRatio+=n,this.buildingRow.width+=n*this.settings.rowHeight,this.lastAnalyzedIndex=i,s/(this.buildingRow.aspectRatio+n)<this.settings.rowHeight&&(this.flushRow(!1,0<this.settings.maxRowsCount&&this.rows===this.settings.maxRowsCount),++this.yield.flushed>=this.yield.every))return void this.startImgAnalyzer(t)}else if("error"!==e.data("jg.loaded"))return}0<this.buildingRow.entriesBuff.length&&this.flushRow(!0,0<this.settings.maxRowsCount&&this.rows===this.settings.maxRowsCount),this.isSpinnerActive()&&this.stopLoadingSpinnerAnimation(),this.stopImgAnalyzerStarter(),this.setGalleryFinalHeight(this.galleryHeightToSet),this.settings.triggerEvent.call(this,t?"jg.resize":"jg.complete")},r.prototype.stopImgAnalyzerStarter=function(){this.yield.flushed=0,null!==this.imgAnalyzerTimeout&&(clearTimeout(this.imgAnalyzerTimeout),this.imgAnalyzerTimeout=null)},r.prototype.startImgAnalyzer=function(t){var i=this;this.stopImgAnalyzerStarter(),this.imgAnalyzerTimeout=setTimeout(function(){i.analyzeImages(t)},.001)},r.prototype.onImageEvent=function(t,i,e){if(i||e){var s=new Image,n=l(s);i&&n.one("load",function(){n.off("load error"),i(s)}),e&&n.one("error",function(){n.off("load error"),e(s)}),s.src=t}},r.prototype.init=function(){var a=!1,h=!1,g=this;l.each(this.entries,function(t,i){var e=l(i),s=g.imgFromEntry(e);if(e.addClass("jg-entry"),!0!==e.data("jg.loaded")&&"skipped"!==e.data("jg.loaded"))if(null!==g.settings.rel&&e.attr("rel",g.settings.rel),null!==g.settings.target&&e.attr("target",g.settings.target),null!==s){var n=g.extractImgSrcFromImage(s);if(!1===g.settings.waitThumbnailsLoad||!n){var r=parseFloat(s.attr("width")),o=parseFloat(s.attr("height"));if("svg"===s.prop("tagName")&&(r=parseFloat(s[0].getBBox().width),o=parseFloat(s[0].getBBox().height)),!isNaN(r)&&!isNaN(o))return e.data("jg.width",r),e.data("jg.height",o),e.data("jg.loaded","skipped"),h=!0,g.startImgAnalyzer(!1),!0}e.data("jg.loaded",!1),a=!0,g.isSpinnerActive()||g.startLoadingSpinnerAnimation(),g.onImageEvent(n,function(t){e.data("jg.width",t.width),e.data("jg.height",t.height),e.data("jg.loaded",!0),g.startImgAnalyzer(!1)},function(){e.data("jg.loaded","error"),g.startImgAnalyzer(!1)})}else e.data("jg.loaded",!0),e.data("jg.width",e.width()|parseFloat(e.css("width"))|1),e.data("jg.height",e.height()|parseFloat(e.css("height"))|1)}),a||h||this.startImgAnalyzer(!1),this.checkWidth()},r.prototype.checkOrConvertNumber=function(t,i){if("string"===l.type(t[i])&&(t[i]=parseFloat(t[i])),"number"!==l.type(t[i]))throw i+" must be a number";if(isNaN(t[i]))throw"invalid number for "+i},r.prototype.checkSizeRangesSuffixes=function(){if("object"!==l.type(this.settings.sizeRangeSuffixes))throw"sizeRangeSuffixes must be defined and must be an object";var t=[];for(var i in this.settings.sizeRangeSuffixes)this.settings.sizeRangeSuffixes.hasOwnProperty(i)&&t.push(i);for(var e={0:""},s=0;s<t.length;s++)if("string"===l.type(t[s]))try{e[parseInt(t[s].replace(/^[a-z]+/,""),10)]=this.settings.sizeRangeSuffixes[t[s]]}catch(t){throw"sizeRangeSuffixes keys must contains correct numbers ("+t+")"}else e[t[s]]=this.settings.sizeRangeSuffixes[t[s]];this.settings.sizeRangeSuffixes=e},r.prototype.retrieveMaxRowHeight=function(){var t=null,i=this.settings.rowHeight;if("string"===l.type(this.settings.maxRowHeight))t=this.settings.maxRowHeight.match(/^[0-9]+%$/)?i*parseFloat(this.settings.maxRowHeight.match(/^([0-9]+)%$/)[1])/100:parseFloat(this.settings.maxRowHeight);else{if("number"!==l.type(this.settings.maxRowHeight)){if(!1===this.settings.maxRowHeight||null==this.settings.maxRowHeight)return null;throw"maxRowHeight must be a number or a percentage"}t=this.settings.maxRowHeight}if(isNaN(t))throw"invalid number for maxRowHeight";return t<i&&(t=i),t},r.prototype.checkSettings=function(){this.checkSizeRangesSuffixes(),this.checkOrConvertNumber(this.settings,"rowHeight"),this.checkOrConvertNumber(this.settings,"margins"),this.checkOrConvertNumber(this.settings,"border"),this.checkOrConvertNumber(this.settings,"maxRowsCount");var t=["justify","nojustify","left","center","right","hide"];if(-1===t.indexOf(this.settings.lastRow))throw"lastRow must be one of: "+t.join(", ");if(this.checkOrConvertNumber(this.settings,"justifyThreshold"),this.settings.justifyThreshold<0||1<this.settings.justifyThreshold)throw"justifyThreshold must be in the interval [0,1]";if("boolean"!==l.type(this.settings.cssAnimation))throw"cssAnimation must be a boolean";if("boolean"!==l.type(this.settings.captions))throw"captions must be a boolean";if(this.checkOrConvertNumber(this.settings.captionSettings,"animationDuration"),this.checkOrConvertNumber(this.settings.captionSettings,"visibleOpacity"),this.settings.captionSettings.visibleOpacity<0||1<this.settings.captionSettings.visibleOpacity)throw"captionSettings.visibleOpacity must be in the interval [0, 1]";if(this.checkOrConvertNumber(this.settings.captionSettings,"nonVisibleOpacity"),this.settings.captionSettings.nonVisibleOpacity<0||1<this.settings.captionSettings.nonVisibleOpacity)throw"captionSettings.nonVisibleOpacity must be in the interval [0, 1]";if(this.checkOrConvertNumber(this.settings,"imagesAnimationDuration"),this.checkOrConvertNumber(this.settings,"refreshTime"),this.checkOrConvertNumber(this.settings,"refreshSensitivity"),"boolean"!==l.type(this.settings.randomize))throw"randomize must be a boolean";if("string"!==l.type(this.settings.selector))throw"selector must be a string";if(!1!==this.settings.sort&&!l.isFunction(this.settings.sort))throw"sort must be false or a comparison function";if(!1!==this.settings.filter&&!l.isFunction(this.settings.filter)&&"string"!==l.type(this.settings.filter))throw"filter must be false, a string or a filter function"},r.prototype.retrieveSuffixRanges=function(){var t=[];for(var i in this.settings.sizeRangeSuffixes)this.settings.sizeRangeSuffixes.hasOwnProperty(i)&&t.push(parseInt(i,10));return t.sort(function(t,i){return i<t?1:t<i?-1:0}),t},r.prototype.updateSettings=function(t){this.settings=l.extend({},this.settings,t),this.checkSettings(),this.border=0<=this.settings.border?this.settings.border:this.settings.margins,this.maxRowHeight=this.retrieveMaxRowHeight(),this.suffixRanges=this.retrieveSuffixRanges()},r.prototype.defaults={sizeRangeSuffixes:{},thumbnailPath:void 0,rowHeight:120,maxRowHeight:!1,maxRowsCount:0,margins:1,border:-1,lastRow:"nojustify",justifyThreshold:.9,waitThumbnailsLoad:!0,captions:!0,cssAnimation:!0,imagesAnimationDuration:500,captionSettings:{animationDuration:500,visibleOpacity:.7,nonVisibleOpacity:0},rel:null,target:null,extension:/\.[^.\\/]+$/,refreshTime:200,refreshSensitivity:0,randomize:!1,rtl:!1,sort:!1,filter:!1,selector:"a",imgSelector:"> img, > a > img, > svg, > a > svg",triggerEvent:function(t){this.$gallery.trigger(t)}},l.fn.justifiedGallery=function(n){return this.each(function(t,i){var e=l(i);e.addClass("justified-gallery");var s=e.data("jg.controller");if(void 0===s){if(null!=n&&"object"!==l.type(n)){if("destroy"===n)return;throw"The argument must be an object"}s=new r(e,l.extend({},r.prototype.defaults,n)),e.data("jg.controller",s)}else if("norewind"===n);else{if("destroy"===n)return void s.destroy();s.updateSettings(n),s.rewind()}s.updateEntries("norewind"===n)&&s.init()})}});