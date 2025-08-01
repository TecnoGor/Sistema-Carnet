PGDMP  6    -                }            sicven    16.4    16.4 2    �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    57358    sicven    DATABASE     y   CREATE DATABASE sicven WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Spain.1252';
    DROP DATABASE sicven;
                postgres    false            �            1259    73749    gerencia_color    TABLE     �   CREATE TABLE public.gerencia_color (
    id integer NOT NULL,
    codger character varying(100),
    color character varying(50)
);
 "   DROP TABLE public.gerencia_color;
       public         heap    postgres    false            �            1259    73748    gerencia_color_id_seq    SEQUENCE     �   CREATE SEQUENCE public.gerencia_color_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public.gerencia_color_id_seq;
       public          postgres    false    227            �           0    0    gerencia_color_id_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public.gerencia_color_id_seq OWNED BY public.gerencia_color.id;
          public          postgres    false    226            �            1259    65550 	   invitados    TABLE     i  CREATE TABLE public.invitados (
    id integer NOT NULL,
    firstnameinv character varying(100) NOT NULL,
    secondnameinv character varying(100) NOT NULL,
    cedinv integer NOT NULL,
    dir text,
    mail character varying(80) NOT NULL,
    tel character varying(50) NOT NULL,
    origin character varying(100) NOT NULL,
    foto character varying(100)
);
    DROP TABLE public.invitados;
       public         heap    postgres    false            �            1259    65555    invitados_id_seq    SEQUENCE     �   CREATE SEQUENCE public.invitados_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.invitados_id_seq;
       public          postgres    false    215            �           0    0    invitados_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.invitados_id_seq OWNED BY public.invitados.id;
          public          postgres    false    216            �            1259    65556    modules    TABLE     h   CREATE TABLE public.modules (
    id integer NOT NULL,
    namemodule character varying(50) NOT NULL
);
    DROP TABLE public.modules;
       public         heap    postgres    false            �            1259    65559    modules_id_seq    SEQUENCE     �   CREATE SEQUENCE public.modules_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.modules_id_seq;
       public          postgres    false    217            �           0    0    modules_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.modules_id_seq OWNED BY public.modules.id;
          public          postgres    false    218            �            1259    65560    personal    TABLE     t   CREATE TABLE public.personal (
    id integer NOT NULL,
    codpersonal integer NOT NULL,
    foto text NOT NULL
);
    DROP TABLE public.personal;
       public         heap    postgres    false            �            1259    65565    personal_id_seq    SEQUENCE     �   CREATE SEQUENCE public.personal_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.personal_id_seq;
       public          postgres    false    219            �           0    0    personal_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.personal_id_seq OWNED BY public.personal.id;
          public          postgres    false    220            �            1259    65566    roles    TABLE     �   CREATE TABLE public.roles (
    id integer NOT NULL,
    namerole character varying(50) NOT NULL,
    asocmodules character varying(100) NOT NULL
);
    DROP TABLE public.roles;
       public         heap    postgres    false            �            1259    65569    roles_id_seq    SEQUENCE     �   CREATE SEQUENCE public.roles_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.roles_id_seq;
       public          postgres    false    221            �           0    0    roles_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.roles_id_seq OWNED BY public.roles.id;
          public          postgres    false    222            �            1259    73743    srh_gerencia    TABLE     �   CREATE TABLE public.srh_gerencia (
    codemp character(4) NOT NULL,
    codger character(10) NOT NULL,
    denger character(254)
);
     DROP TABLE public.srh_gerencia;
       public         heap    postgres    false            �            1259    65570    users    TABLE     �  CREATE TABLE public.users (
    id integer NOT NULL,
    firstname character varying(100) NOT NULL,
    secondname character varying(100) NOT NULL,
    ci integer NOT NULL,
    mail character varying(100) NOT NULL,
    phone character varying(30),
    username character varying(35) NOT NULL,
    password character varying(257) NOT NULL,
    status boolean NOT NULL,
    rol integer NOT NULL,
    datesign timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    lastlog date
);
    DROP TABLE public.users;
       public         heap    postgres    false            �            1259    65576    users_id_seq    SEQUENCE     �   CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public          postgres    false    223            �           0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public          postgres    false    224            -           2604    73752    gerencia_color id    DEFAULT     v   ALTER TABLE ONLY public.gerencia_color ALTER COLUMN id SET DEFAULT nextval('public.gerencia_color_id_seq'::regclass);
 @   ALTER TABLE public.gerencia_color ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    226    227    227            '           2604    65577    invitados id    DEFAULT     l   ALTER TABLE ONLY public.invitados ALTER COLUMN id SET DEFAULT nextval('public.invitados_id_seq'::regclass);
 ;   ALTER TABLE public.invitados ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    216    215            (           2604    65578 
   modules id    DEFAULT     h   ALTER TABLE ONLY public.modules ALTER COLUMN id SET DEFAULT nextval('public.modules_id_seq'::regclass);
 9   ALTER TABLE public.modules ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    218    217            )           2604    65579    personal id    DEFAULT     j   ALTER TABLE ONLY public.personal ALTER COLUMN id SET DEFAULT nextval('public.personal_id_seq'::regclass);
 :   ALTER TABLE public.personal ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    220    219            *           2604    65580    roles id    DEFAULT     d   ALTER TABLE ONLY public.roles ALTER COLUMN id SET DEFAULT nextval('public.roles_id_seq'::regclass);
 7   ALTER TABLE public.roles ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    222    221            +           2604    65581    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    224    223            �          0    73749    gerencia_color 
   TABLE DATA           ;   COPY public.gerencia_color (id, codger, color) FROM stdin;
    public          postgres    false    227   �5       �          0    65550 	   invitados 
   TABLE DATA           j   COPY public.invitados (id, firstnameinv, secondnameinv, cedinv, dir, mail, tel, origin, foto) FROM stdin;
    public          postgres    false    215   �6       �          0    65556    modules 
   TABLE DATA           1   COPY public.modules (id, namemodule) FROM stdin;
    public          postgres    false    217   �6       �          0    65560    personal 
   TABLE DATA           9   COPY public.personal (id, codpersonal, foto) FROM stdin;
    public          postgres    false    219   �6       �          0    65566    roles 
   TABLE DATA           :   COPY public.roles (id, namerole, asocmodules) FROM stdin;
    public          postgres    false    221   �[       �          0    73743    srh_gerencia 
   TABLE DATA           >   COPY public.srh_gerencia (codemp, codger, denger) FROM stdin;
    public          postgres    false    225   �[       �          0    65570    users 
   TABLE DATA              COPY public.users (id, firstname, secondname, ci, mail, phone, username, password, status, rol, datesign, lastlog) FROM stdin;
    public          postgres    false    223   �a       �           0    0    gerencia_color_id_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public.gerencia_color_id_seq', 19, true);
          public          postgres    false    226            �           0    0    invitados_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.invitados_id_seq', 1, false);
          public          postgres    false    216            �           0    0    modules_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.modules_id_seq', 1, false);
          public          postgres    false    218            �           0    0    personal_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.personal_id_seq', 17, true);
          public          postgres    false    220            �           0    0    roles_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.roles_id_seq', 4, true);
          public          postgres    false    222            �           0    0    users_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.users_id_seq', 1, true);
          public          postgres    false    224            3           2606    81937    personal codpersonal_unico 
   CONSTRAINT     \   ALTER TABLE ONLY public.personal
    ADD CONSTRAINT codpersonal_unico UNIQUE (codpersonal);
 D   ALTER TABLE ONLY public.personal DROP CONSTRAINT codpersonal_unico;
       public            postgres    false    219            =           2606    73754 "   gerencia_color gerencia_color_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public.gerencia_color
    ADD CONSTRAINT gerencia_color_pkey PRIMARY KEY (id);
 L   ALTER TABLE ONLY public.gerencia_color DROP CONSTRAINT gerencia_color_pkey;
       public            postgres    false    227            /           2606    65583    invitados invitados_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.invitados
    ADD CONSTRAINT invitados_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.invitados DROP CONSTRAINT invitados_pkey;
       public            postgres    false    215            1           2606    65585    modules modules_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.modules
    ADD CONSTRAINT modules_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.modules DROP CONSTRAINT modules_pkey;
       public            postgres    false    217            5           2606    65587    personal personal_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.personal
    ADD CONSTRAINT personal_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.personal DROP CONSTRAINT personal_pkey;
       public            postgres    false    219            ;           2606    73747    srh_gerencia pk_srh_gerencia 
   CONSTRAINT     f   ALTER TABLE ONLY public.srh_gerencia
    ADD CONSTRAINT pk_srh_gerencia PRIMARY KEY (codemp, codger);
 F   ALTER TABLE ONLY public.srh_gerencia DROP CONSTRAINT pk_srh_gerencia;
       public            postgres    false    225    225            7           2606    65589    roles roles_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.roles
    ADD CONSTRAINT roles_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.roles DROP CONSTRAINT roles_pkey;
       public            postgres    false    221            9           2606    65591    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    223            �   �   x�=�;�1��5�W��؄��-m4�h½�9�NF�P��
T����I���������	54�ڹ�Ӂ�s'���Ғ:���pp׮"40���9M��uE,2�����[[�߲c;遂�������q=!�(��TRG�)>s��fc=Մ��?�u�k�J?D�q�-+      �      x������ � �      �      x������ � �      �      x���G���%���+T��I1ڢ����{[��^��}�y�1!M�6�x��*�I$��s� �
S$�!Կ�ɖ�͐T��E��ɯ ���[c��bũ���7��2<�U���>�Y׃b�����V�d�d��n���~�s�X�a�Hoo{��*[Q�d�g�;6�}��}��4����G�82�?Oԟ/ιC�O�&�%�3�G^�;��G��;���y���߁���������o�K��$��	�_[*���/=�q��_Z��|e��3~�J��|�`���vJ���[�OO����Gb���׆�FJ��A��W����U�_ۏ�O��'}Gl���nr����}6·H����������=!cғ=���˰��r�fw�3Z�N���a.�OA�d_��S���_�9u�e�»A�O�a+��ٕ�U��ٝ�3��U?�;;�w�����`s��
�l�<�w߶��g��U���6�?:�����w�ǰ#��������%� e3�_����>?���{V<kw,s��C��g�s�"[��?���߃��$��ۮn?/Q�8S*2��g.�:���Gi��:��퓝��(��~��?��������5��-2�|�l�gY�e_M
�ݰ���_����O��;O�:��u��M+>�(5j|ߔ.ރ���F���S)��||׼����m��5��_A䒊�-��Z�;�OH�6����Fy���g��:��n��*�űv~vF���L��b1��J!A��
��9N�V�`C��h�`������� ��<.#�|�)PXjA<���60��p�
A���BU|�����~��L��&校������΅.)z��c�Bz�݂ƨQas��\��"�2M�<��L���
�O3ws�Ne�p݀U�s]��'@|&uN�q�g^v�@a��L&YbB#_�G��k�=R�ۗW0�U����By,�º1�g#�K�1�g�)Dg�GvmNoMlf�1EЏ��hi	m�YѠ��H��w3�\a-��ó�k��ĥ����B�����DXӋ���Y�9�s�]; ]�����R���Η��f?XT���6cJ���N2��-��Al�N$�m�����VM�r[��A�Ӊ4%�b�yZ���9qz;̺��Jx�Ћ�"�nd("�R��9D%|*C��@�]'��`%G�8�d���.�O��+�k�U%�p[WN$;�/�i���dݞC^��I�a��ZImk�2>��/��Z'Y��9�Y�ѩۙ�M�X���DQ�"�a�\�N+Y�ElN���\��c�+���!���+*a���Ĳ��{��z�2�ɟ�EgO�X��y�ۻ`�`�̙A������(��~"�z�Y�8U<�=Q��'m�g�d�Ѭ�� ��G�m��&��@��3�1��LR�)!^G��r|l�K�Y�&$h%,��u�`)�ڄ�e`ce'���в��b!����'t�UT
Ԡ�Y�6=Z�_���b�k�h<>�Y�W%�9	���>���k�,Ylq��Is�?�0F�jQ���XY��B�4����cG~����̐1�'{4rnZ��w�a4Fa��*���)�/�ZI�E�vm���X�Dd�C�m���)�����9���;�^锯�u_�YRZ����Gjk~W�"U+S��n3���͋~EV��_VZH���v�!�c�^�\\���5�m���|���ɷ��A��%�ն9��p�5/@��I��q�R֫?r'��ȚV1�"VK�~�e�� �n���F����2X~���گ���ܑ��Ǳ��m�B�ob�_oè3 r}C�h��8#��� .N/0�bTa��
5Zq����ŕ�2��JL	�3G���J��{,QZ�⏷�Кy#Āz�4��>p���_� ����7e��ݼ���XF�"��A8:�~��i(G�^,).����GH����=��7�Լ�-�͂m+����H��`�d�f>=�MF���bEVb����~}�g����OY஥�-���]�6�a�>��ORA�K�-�w���,>�|�����22�cA�%g�s�w�;��	��>@��;�>IX�X:](��l*^�Z�@$�ԝ��s	S���/��.I#�>l�������7�R_p?�)�ݛv'1H]�K��T����t�3���5R a�x�M�ĺ�������E�Na@��<jC���T�L~��u7�����m\gҠ!�q4����-��G��	�2zi� /���2w;�'0����|qD���ywܲ(=:Q�����P��%'\ J��+��ҵCE�:�Q;p���+�߃�>�u�����N�b.�+�V)U�aؖB��� ~ϓ�2��d�Ȟ癩28֏��`q��a�!��}�d��HQQ|�rU�I`u>������k��9�mp�"���35�&&j����@wjo{M�8���##NPL�!�Oy��;������5>֚��r}���d.��&���t���/�3����i`n@���z�]�ndAX��,�=:�
_}��oP�.'�%��Pad�Y���`P�Ʌp��b�(���tel^eg@�T/�=�l�^��d}e��t��<[7_�i��#b���iYos�u�h�$���(��Q��Fd6�DvQP`t��-��+D�i��"Q]qΛ|�jc�9�iy�Ve��e�3?+S�"ڼ\C����}*E������Ȋ�:2nܲ�ݢ�a_���gM�]߹������/=��ƍZ�sA;���՘npmFn����|��x��CH	Z0�r�X�_LQ�p�K�s�(�'��eR��,�Z��Z�9M:���l�$�=kf��Dr#^ cМCh���ۮ8��k{�&�Ioz$pk���X%ڄ�!���p��h&W�����?5� 7=>��Ħ+`�������/�7߮<>�����%Z�ټB�z�ʢ0/K�u�A������B*g��{<��S�޴�y��2�����D�[$Y6�˃ ��G�s�����e8�н� ��$��i�W$ ˞��n����Ǟ�������e�B� HF<~K#i�+���ym��=H%WW[oZ��3׍d���C�:�Xw8��
�,�� ��KQ��(jE�V�.I'��kV�B�Ϊ:l:����.�P'y�,xr?U�܁r3����^Ԉ�%�+g��f���.*j��(�dI�l>֓4�.� ��F3J+���L���&8\���Lh�v3�>J�Y�c�\-�(V�o�,`Fjz�=������>� �[`���?�%bl��{vD|Sn���،�&�!a�,�ibX�.�����������?5�4a��E	"��o�c���8��$�XӿbM��5��kbOF`�/�1���	�?ǚx������Ě�kW�}X�W�W�)����:���O:���sY�~��'��0�I�+�I�x#|�Ȫ]���+C������_28B+��-�r��M��D��@���s�%�0���G�u��)�@)���#rS�X"n9�zk��\�Y��9��9����L`d�"���fg��͗b�+�� {"q}K�p���|���(�<G���7������:��0����a/��_EA�X�x"Ռ޺�_���2>>�w�
��[�w{��xq�(,V7e`X�뜃׀�Eɧ����/-��H~������P�2
d["�%��*���9�4���)@��X�a���]Lm�i��;C����~�kM�o�+���XAtlQ�:��C��J[����Q �J���JW`�0��렁WU�Y�s���ɺa �E�4�y��bA{O��ڍ�$���%���e����}/�g�'�(�MIF�$��s�/n0�À٦�T^�!�j׼̥I��o��cV��_|d^�]�q���3��
U}��H"i��Ƶ.�lAC���p$��%f���⫊%�yZ��H���>�+0���K�x��嫠E}}��j3v����<K^T��A{/9�����VA�*��nϷ͖J���:�ַ6��r�3a��Ȳ��y�u�p��"ɳ����
�@K;�Rlx��bӐM�̚� ��u��v�v�hv�    7*�y�� ���ͨ�F���lk��g�YÔ��"[���H��� �yS�"�vBd�O��h�Z=�,^�;(�ٻT6&/͊0����w+|b:I:�ϐ��UZS����)�W����U�]���gl#'r<�.-LP̠<�D�+"�n����B�S,��m�g0k1A��Xڍ�[|q�ºva;���ӣx��;l�.����䔣	d�Π�;T+)��eA�&ը�Mn���������zrS����up��/Bjň�*WT��q�R:J�q�!g���R+�C�ng ѣ�M�+�Q:w"_����~"A@����'y�`�%����Y��v3`�-���-vJ���)21;c�G�Ϧ�|DK�b\�����4f�i��p�7�7��3⩃�O�+ �	h��x��/��Q6Xp�����a�zr7�Z���������� Oc�z=��}���@m5�n�U���+	���%�K�Y���k�HO�L��mb�,D���%%97�~��HP�^7���)Js�"=���non� �nR�,ŀ�b1�Rn:�,�t���Ǐ5D�
Ox���{ �#5�t�%��I�������q�ߍ�}�����S
�B4��|=�(�
}5�Q��ܐC���K��L�R1p"�oF�A�4���R��=���yېQ�e�1�A�H��M���ٳ@_[ �ĵ�u��A�D��3{�X+�=/��v6��0(d3-$�"~q�]06���nnK�������t�,��@��B/8�f@��F (oP�k�
�o�PL}
�����_���ICq���C^ᴸ�N�2lb^3����Z�ԱZ>�Y職�	��4��۷촰��Z�vi|p��Aad����(�
�X�\�ΉxX��#z�G�C��Г-4��IX������H��j$��f5Z\���@�~β�ܾ�X��$,xɊ�Y\jqd�)߮$�ث�hz?�9|��>��g�99|��[w���=�ٺH���rt���Mn����� 쳟	��+�t��i��ߕ���ַ�|��{# "Dh̽_�e3��K)	����=="����:��{���k�NX$k��#Gv�zR���Zb\����Y�6�`#i��^�O�	��[��-�g��gl1z�D��pI���
�"/>��e� �L��ĵ�F��J�s`]�>]�K?,D%�n"pSs�$}�{�^r������+��L|}:�b;\2x�4{оz+N� P���s�|@����{K����������	_��5h%m�/Z��[��;2�m �e�0���k����)��^�]&�nga|�V��"�|���`���y����L�T��z�(�8����o�|��G��V�u�m��z�9�� ��וƜ����{�Z��9�}�)6mz �_7�g:�iN����<�^��Z0��}p��9��P_}���̞��yݻ���+%Q�a8pri���Χ��&�����iư!V�-�-U���M�9��f����e�9ȸ���$�_��~�z$�r_bgJ�K��~M�
&��T���*��7ﾮ��d��7�	5��O�kGJ=�%��1D����jyN#�1MA :�9oZ�}N�OX/��]3�R�ރ�ǡ|�⺐�) f��$ú�_�3��+}����%�z뺅	��R�=ȅ�;V_�@�f�;_v
�s�f�[��@�3�֔�m̙��)
�{�^<�ɹ\�Rz,�t�5�:��c&�����wJZҡ��D)�� �{��I����4�P?��c`3�wG�&�@�t���0�Jw����Z��5K�_� ;,=jG�z��p�7��x��}���]S��KB����r�x��?�Aj�fS1ړ��RK�Tpô�_�AY�B�r-o��ß�	iQ��>�ʕ|����jr�.|I
��H�^��㧯nN��Rh��@ј�:i�8�M��E��]r�<k,}4�1�+h� l;���%kPKh����ϲpg[p�4�b(��q��������x�B���y��f8�����Yo���g��P��w��E�����w�1n.tuT���4~}A��?嶝�����hs�7�S�z�����M�.�T m�Y��N�P��	�hX�S���`�I����C�O5��H����w���z�R^�0�	��i�x4�?�У\��1��m�.*����ច��y��-�:pҏʊ���\���7��cG�/{0����a`�ϓ�3�Y� ���[^��2�dd����?5��;���p�r�k���꘹��o]
���&z�kO&P]��FW��ԻY����N`VvǴ#���b�A�4�]l���L�"��vߍ��Cga��7~�AD���}�.
�����t�p���-�+f��競���v�A��4�~��=t�/P��r��������&H�	�7���%�}��ӻk/��!�*@?t��GI��PT�t�Z���f�$�X�yx���4��A�oX1�~`&�m棦KW=���a��`&pB���W��_1���b�o��V�#�����'f��%�P���?�,/��<�kN����EO����U�?w䤚��q/�f��$�ωe�g��O���^���Cg��8��]��=��/��$�:A/��Ӆ������=��@�1a��Z�ָ��O��1i��fnBb�
�$h�sg �	{1�6�o����z�8�����#�c���F_��s.ޮ!�`�o��-v��g<\��q�s8�Œ�^l'cWvc��y��,x��A��*��P�O�h��(Y[�����Z4��m�)'�b�yu8v^E�!��]z�*�m��=&Ӻ��g�#[J��9Om
{�R7{Xq�����lf^)pe���A,�ⵇ�l���|��<��)��.�y��Q�6n����:�����9$���A>k�ɠɓ%���v�Z��w1o�8�o��/�e���k���˕��'}�VJ��	�b-�����v�+ʾ�P�>��E�%�������>���z��'*���^��`��QMuF���닼�!�aM;�Q"1�dMXO,o�]|O���P���Pb6R��N�sYE�|!�飗γ�`4k��G��{��v�%H��Z?���.�aٟV�&%?�)ҧ8��0�G������3rzi����L{x����Ԋ��L�%��\�w��A{�)[�oW��,��u�`*R>9,1�w�8�*M����ֵ2H~3mZ�tC!�d��8m\�� �:6���՜�p�i\^�c�.���rst��f��Y0���s<d�{���m.vn�8�i�zޒ�DmQ�����q�����U7�2Ǿ�i�u��hM�H�D��C�4M���]�����s�mD�
����w�`~��_���^�xMI'һ�d/�C9�.�J�����H��wV3.F������]�e2��艥< RO ��ܼ�k��N5�4nϳ�7N��ZE:QL�55a��$��ŸG�R�EjJZ��Pa\2JG���d��s#q�)f���+� �9���Ɓ��B�$���߫�b�����
A���>a�v���#�Y�4]�"}T�<-7�{VT�E铁��iu�0��@�!����V4s����3R�I�{��boS%��~�C�����r)��~F/�	At9����j-�f��B@�W��� �j$=$�lTb�Z��(Gq�Ol߈�NU��I�D�wj��g�̀{5�Y�Pc��-̃�bp:�38���ݞ�H�r*����{4�cOos9�*��eI~���ŜG	��C{����/�tv�����ø���M�,�7��󥐳��/Y<i-�p������#�%�S8+��1��i�F:y�(�c�s���F�Y��2��X�T��ߎ��.!8kmJkJ��%����5�]�4�}��u��.�C$�^�q&Z�6b�`�m:O����u���nG���7�"�+�]��Z>���� �tto��8Q�Y��h� @T���A���|v��S-S�YʌU�d�}���3dBv��D��U�*�l���}����J��Νp뎦��7� �  ~	��n(j�R'���+�j[t�0*�*�L��1�$���syYܛ�:5��d�d�#�=�o.�!���O9�����N.��4�i/�k6�L���'D��Z4�;n�xq���_X��&�+3��$Z�)zT�k!�F)Gf��D{f���%�����ʳ/�	��Ũ�����W���Ce�鑱�j���"�Cg���
��i�%�_����@46�+�<#��x-�������o��0�zj<<�Nǰ� DMh�[�"ͅ��|��/x����	A��A���t��}�Q��	�1�>�v���̑�" �$䫐�r==�
._�4�}Z��C�S��]��zi����-�R�6i���)����7Q��e����O�T���qr1���C$�&{�D_RZB��pۄ4�?���d�n�<QR_���4ِ�!݈M��1Z���v�=E&w�^����B�+��kxA�"� ;�֗S�L]�׭�ɭUNŠ�j`bBS@̷?��T�cwi>��<�	Cx�B����4Cm�4g�n5~��(�i}���L@�3f1��B|4�2�^\V$b�'��3���ߌ�pE���.��y��*�C@+�6����Q�&#����޽T�ͻ�Jh�~�a7\ƕm�n$��.&���a+��&c�o�T�	:�a��=��bE,��Tೃ�BɰuOȑ���{��__��������U1|��_�]W'�2��4��!FT1L!��R)|sGQt���;Y?<�	a\"_��C��e�WŌ:~�nU�Y�Dj�`m�B;2h�PjG�@B3�dUK2�|�q�6��du/������K5��YF	���N�-���j�59�Gv�6�zӻVP�݋���3�8l0�E
u�3��u��&X�%:�8�:��)�@�w�@�]�H?��|ߡ���Nva��͌G}�<�u)�c�{t�k���mQ|�[{~I�B�Q���_��^�j/f�곦n�q�X2���.�5{�Չ�l��MK'��g�{�R�Z��<���S-3qM
73�ŭ{b�	U8.~=%-3���9�ĳ���I巯;�$7�����Bk�1�cb��k���Fh	:�%"����킀s�VO΁V��^�������y��ڶ� �YyY�j��쀪2�	"ӟ�j�_}����@��b���}�?���v��V�Ā�W��������^[�B      �   A   x�3�.-H-rL������2��2�K�S�"Ɯ�y�9@�D Ǆ3(59� 93?*���� ��J      �   �  x��Kn�8���)t�������)Za@�̅��f��)�JW���b�u�`>PU���r�Z�1i᤮a��U��a�p,oZ-ji������4KOLU���I���^��	�X���h�76n��`����7���G�,�r "�V��cq��C��Q�1�l�^�	�x�8�|��խ��y˼<��R��f1�Kl� Oyܴ���K8�B8���:ƍ1���q�㨅���1�V�q�.�c���x-��f�;�<Ӊ1�±�8�>Y���}�)�8a�2��ET:2R���'��B8�-���4����.D@D�l��'��hӇ��/�m�_���I�@�ԉ&XY��xB��pL���w����2M,Z�J���ؖ�p��FA@�/Uŕ-��(�}A8��986�F �V/Ɖ�e��?3�0/Jı^~�H����r���r�p� ���K'S^�f#���W(���P�5�љ��X�)7�N\�&�#f��{��)n,�c�5+���:I4� ;�#F?<)�� �p<"A�@;rlV���o��>VUp!:���G)b5♭�)�y|�� p�"��tL�ıY"ڳ�T}�R����R0M�>��)e!�{F��8����dq��VĴb�^����"�;��J����)�>t-ӯ���mi-��uQ�o&'���&�p@[Z�&k�����B8�-�߰�T��TO�����{6����V�R�_Ě��8�Ж
ǃP���7��T
�#+�ç��1���f��}�I�X嫂Ɛ���xQ�〾��BO����S�-��x�<J���ှT�]|�%�Q��x$���=���L�2���.�r�8 �=�ۄ�tpKV���hIoִ��p@[�2텖c�F�b��:c��{��$�c��q�t���ͧ8���p@[�M�w̽ğ�]�9��k�.����%?�x@[:�p~?ံ�cE���hK�~	B8�-������g�8��ob�a��@T��i���@G6�"�/p���:��2±��1��3aM*VB?�NW��iN�!�Г��'8�u8��^a6�#�1\�����|��q1��)��Ŋ���N-�`!��q��Pi������*�q���ǰ~Q��	�Rg�^�x�O����x@czN�N.:R������Suk`��0�\����n!�<�.X��s(�c��aY�%���]�Ѩ7���x���q{ͱ�Ԃp<�q���5F_�>���/�_�p�8���(І�Y�1�R��Xeq�"5>�^�O�Ȼ��hFr��NGޕ� �i��c���$Gޕ�}�&G�Eu�#�J]�E�,��+��?�"�w�ކ�.��w���;x�̽�w�������ҘUY��-�5�p W:��T�nK	O�p�����5���$O��3^�qw0M��A8���a��.��������wÊ�      �   �   x�%�1�0@��9he;��tb`b�],'�h�pQ��K�<����C$-�X�ھ���������$����J�}HwkѹZ4�ʊ]T|�Ǒ[6#�#�W��\��.����F��P�kV��+�s�[ (S     