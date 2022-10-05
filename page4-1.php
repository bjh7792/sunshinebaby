<?php include 'sub-header.php' ?>
<h2 class="sub-title"><span data-title="온라인문의">온라인문의</span></h2>
<section class="page4-1">
  <form>
    <fieldset class="input-field">
      <div>
        <label for="id1">성명</label>
        <input id="id1" type="text">
      </div>
      <div>
        <label for="id2">전화번호</label>
        <input id="id2" type="tel">
      </div>
      <div>
        <label for="id3">이메일</label>
        <input id="id3" type="email">
      </div>
      <div>
        <label for="id4">제목</label>
        <input id="id4" type="text">
      </div>
      <div>
        <label for="id5">설명</label>
        <textarea id="id5"></textarea>
      </div>
      <div>
        <label for="id6">첨부파일</label>
        <input id="id6" type="file">
      </div>
    </fieldset>
    <fieldset class="submit-field">
      <button type="submit">확인</button>
      <button type="reset">취소</button>
    </fieldset>
  </form>
</section>
<?php include 'sub-footer.php' ?>