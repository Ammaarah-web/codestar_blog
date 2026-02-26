const editButtons = document.getElementsByClassName("btn-edit");
const deleteButtons = document.getElementsByClassName("btn-delete");
const commentText = document.getElementById("id_body");
const commentForm = document.getElementById("commentForm");
const submitButton = document.getElementById("submitButton");
const deleteModal = new bootstrap.Modal(document.getElementById("deleteModal"));
const deleteConfirm = document.getElementById("deleteConfirm");

if (editButtons.length && commentText && commentForm && submitButton) {
	for (const button of editButtons) {
		button.addEventListener("click", () => {
			const commentId = button.getAttribute("comment_id");
			const commentContent = document.getElementById(
				`comment${commentId}`
			).innerText;

			commentText.value = commentContent;
			submitButton.innerText = "Update";

			const postPath = window.location.pathname.replace(/\/$/, "");
			commentForm.setAttribute(
				"action",
				`${postPath}/edit_comment/${commentId}`
			);
		});
	}
}

if (deleteButtons.length && deleteConfirm) {
	for (const button of deleteButtons) {
		button.addEventListener("click", (e) => {
			const commentId = e.target.getAttribute("comment_id");
			const deleteUrl = `delete_comment/${commentId}`;

			deleteConfirm.setAttribute("href", deleteUrl);
			deleteModal.show();
		});
	}
}
