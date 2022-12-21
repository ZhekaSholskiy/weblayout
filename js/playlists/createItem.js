// создаем одну карточку на основе принятых данных

export function createItem(groupLanguage, previewSrc, groupTitle, groupSongs, ul) {
  const li = document.createElement('li');
  li.classList.add('playlists__music-groups-item');

    const preview = document.createElement('div');
    preview.classList.add('music-group-item__preview');
    li.append(preview);

      const previewLanguage = document.createElement('span');
      previewLanguage.classList.add('group-language', `${groupLanguage}`)
      preview.append(previewLanguage);

      const previewImg = document.createElement('img');
      previewImg.setAttribute('src', previewSrc);
      previewImg.setAttribute('alt', "фото исполнителя");
      preview.append(previewImg);

    const descr = document.createElement('div')
    descr.classList.add('music-group-item__descr');
    li.append(descr);

      const title = document.createElement('h3');
      title.classList.add('music-group-item__title');
      title.textContent = groupTitle;
      descr.append(title);

      const songs = document.createElement('p');
      songs.classList.add('music-group-item__songs');
      songs.textContent = groupSongs;
      descr.append(songs);

  ul.append(li);
}
