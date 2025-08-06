<?php
$page = $page ?? 'Home';
if ($page === 'History') {
    $navbar = [
        ['title' => 'Home', 'link' => '/'],
        ['title' => 'Join', 'link' => '/#join'],
        ['title' => 'History', 'link' => '/history/#title'],
        ['title' => 'Tickets', 'link' => '/#tickets'],
        ['title' => 'FAQ', 'link' => '/#faq'],
        ['title' => 'Contact', 'link' => '/#contact'],
    ];
} elseif ($page === 'Join') {
    $navbar = [
        ['title' => 'Home', 'link' => '/'],
        ['title' => 'Join', 'link' => '/join/#title'],
        ['title' => 'History', 'link' => '/#history'],
        ['title' => 'Tickets', 'link' => '/#tickets'],
        ['title' => 'FAQ', 'link' => '/#faq'],
        ['title' => 'Contact', 'link' => '/#contact'],
    ];
} else {
    $navbar = [
        ['title' => 'About', 'link' => '/#about'],
        ['title' => 'Join', 'link' => '/#join'],
        ['title' => 'Tickets', 'link' => '/#tickets'],
        ['title' => 'DVDs', 'link' => '/#merch'],
        ['title' => 'FAQ', 'link' => '/#faq'],
        ['title' => 'Contact', 'link' => '/#contact'],
    ];
}
?>
<header id="header">
    <div class="extender"></div>
    <a class="branding" href="/#billboard">
        <img draggable="false" src="/assets/images/branding/AGS_transparent.png" alt="Albury Gang Show Logo">
        <h1>Albury Gang Show</h1>
    </a>
    <input type="checkbox" id="cascade-toggle" />
    <label class="cascade-graphic" for="cascade-toggle"><span class="cascade-segment"></span></label>
    <nav id="navbar">
        <?php foreach ($navbar as $item): ?>
            <a href="<?= htmlspecialchars($item['link']) ?>"><?= htmlspecialchars($item['title']) ?></a>
        <?php endforeach; ?>
    </nav>
    <label class="cascade-outside" for="cascade-toggle"></label>
</header>