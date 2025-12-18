// Forum interactivity
document.addEventListener('DOMContentLoaded', function() {
    // Option buttons interaction
    const optionButtons = document.querySelectorAll('.option-button, .club-button');
    
    optionButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Visual feedback on click
            this.classList.add('bg-blue-50', 'border-blue-300');
            
            setTimeout(() => {
                this.classList.remove('bg-blue-50', 'border-blue-300');
            }, 300);
        });
    });
    
    // Search input functionality
    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
        searchInput.addEventListener('focus', function() {
            this.parentElement.classList.add('ring-2', 'ring-blue-500');
        });
        
        searchInput.addEventListener('blur', function() {
            this.parentElement.classList.remove('ring-2', 'ring-blue-500');
        });
    }
    
    // Like button functionality
    const likeButtons = document.querySelectorAll('.fa-thumbs-up');
    likeButtons.forEach(thumbIcon => {
        const button = thumbIcon.parentElement;
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            const icon = this.querySelector('i.fa-thumbs-up');
            const countSpan = this.querySelector('span');
            
            if (icon && countSpan) {
                if (icon.classList.contains('far')) {
                    // Like
                    icon.classList.remove('far');
                    icon.classList.add('fas', 'text-blue-600');
                    let count = parseInt(countSpan.textContent);
                    countSpan.textContent = count + 1;
                } else {
                    // Unlike
                    icon.classList.remove('fas', 'text-blue-600');
                    icon.classList.add('far');
                    let count = parseInt(countSpan.textContent);
                    countSpan.textContent = count - 1;
                }
            }
        });
    });
    
    // Share advice button
    const shareAdviceBtn = document.querySelector('.btn-share-advice');
    if (shareAdviceBtn) {
        shareAdviceBtn.addEventListener('click', function() {
            alert('Share advice form will open here!');
            // Here you can add modal or navigate to a form page
        });
    }
    
    // Comment button functionality
    const commentButtons = document.querySelectorAll('.fa-comment');
    commentButtons.forEach(commentIcon => {
        const button = commentIcon.parentElement;
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            console.log('Comment section will open');
            // Add comment section logic here
        });
    });
    
    // Share button functionality
    const shareButtons = document.querySelectorAll('.fa-share');
    shareButtons.forEach(shareIcon => {
        const button = shareIcon.parentElement;
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            
            // Simple share functionality
            if (navigator.share) {
                navigator.share({
                    title: 'EduLink Forum Post',
                    text: 'Check out this post on EduLink',
                    url: window.location.href
                }).catch(err => console.log('Error sharing:', err));
            } else {
                // Fallback: copy link
                navigator.clipboard.writeText(window.location.href);
                alert('Link copied to clipboard!');
            }
        });
    });
    
    // View count animation (optional)
    const viewButtons = document.querySelectorAll('.fa-eye');
    viewButtons.forEach(eyeIcon => {
        const button = eyeIcon.parentElement;
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            // Could show detailed analytics
            console.log('View statistics');
        });
    });
});