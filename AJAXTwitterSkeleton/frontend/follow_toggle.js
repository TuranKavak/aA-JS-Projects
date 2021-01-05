const APIUtil = require('./api_util');

class FollowToggle {
    constructor(el, options) {
        this.$el = $(el);
        this.userId = this.$el.data('user-id') || options.userId;
        this.followState = this.$el.data('initial-follow-state') || options.followState;

        this.render();
        this.$el.on('click', this.handleClick.bind(this));

    }

    handleClick(event) {

        // Make a $.ajax request to POST / users /: id / follow
        // if we are not following the user(check followState),
        //     else, it should make a DELETE request.
        // On success of the POST / DELETE, we should toggle the followState and re - render.
        const followToggle = this;
        event.preventDefault();

        if (this.followState === 'followed') {
            this.followState = 'unfollowing';
            this.render();
            // APIUtil
            APIUtil.unfollowUser(this.userId).then(() => {
                followToggle.followState = 'unfollowed';
                followToggle.render();
            });
        } else if (this.followState === 'unfollowed') {
            this.followState = 'following';
            this.render();
            // APIUtil
            APIUtil.followUser(this.userId).then(() => {
                followToggle.followState = 'followed';
                followToggle.render();
            });
        }
    }

    render() {

        switch (this.followState) {
            case "unfollowed":
                this.$el.html("Follow!");
                this.$el.prop('disabled', false);
                break;
            case "followed":
                this.$el.html("Unfollow!");
                this.$el.prop('disabled', false);
                break;
            case 'following':
                this.$el.prop('disabled', true);
                this.$el.html('Following...');
                break;
            case 'unfollowing':
                this.$el.prop('disabled', true);
                this.$el.html('Unfollowing...');
                break;
        }
    }
}

module.exports = FollowToggle;